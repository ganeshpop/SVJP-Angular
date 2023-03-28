import {
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    SimpleChanges,
    ViewChild
} from "@angular/core";
import {CustomerService} from "../../../service/customer.service";
import {Table} from "primeng/table";
import {searchFormGroup} from "../../utilities/formFields";
import {FormGroup} from "@angular/forms";
import {SVJPService} from "../../../service/svjp/SVJP.service";
import {Devotee} from "../../../api/devotee";

@Component({
    templateUrl: './devoteeSearch.component.html',
    selector: 'app-devotees-search'
})
export class DevoteeSearchComponent implements OnChanges {

    @ViewChild('filter') filter!: ElementRef;
    @Input() isRedirected: boolean = false;
    @Output() selectedDevoteeEmitter: EventEmitter<Devotee> = new EventEmitter<Devotee>();
    loading: boolean = false;
    selectedDevoteeData: any;
    searchFormGroup: FormGroup = searchFormGroup;

    tableHeaders = [
        "id",
        "name",
        "gothram",
        "email",
        "mobilePhone",
        "homePhone",
        "additionalMobilePhone",
        "aadhar",
        "pan",
        "addressLine1",
        "addressLine2",
        "addressLine3",
        "city",
        "district",
        "state",
        "country",
        "pincode",
        "notes"
    ];
    searchResults: Devotee[] = [];

    constructor(private customerService: CustomerService, private SVJPService: SVJPService) {};


    ngOnChanges(changes: SimpleChanges) {
        this.searchFormGroup.reset();
    }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }

    onSearch() {
        this.SVJPService.getDevotees(this.searchFormGroup.getRawValue()).subscribe((response) => {
            // console.log(response);
            this.searchResults = (Array.isArray(response))? response: [response];
        });
    }

    camelCaseToWords(str: string) {
        return str
            .replace(/^[a-z]/g, char => ` ${char.toUpperCase()}`)
            .replace(/[A-Z]|[0-9]+/g, ' $&')
            .replace(/(\s+)/, () => '');
    };

    onReset() {
        this.searchFormGroup.reset();
        this.searchResults = [];
        // this.selectedDevoteeEmitter.emit(undefined);
    }

    devoteeSelection($event: any) {
        this.selectedDevoteeData = $event.data;
    }

    onNext() {
        this.selectedDevoteeEmitter.emit(this.selectedDevoteeData);
    }


    clear(table: Table) {
        table.clear();
        this.filter.nativeElement.value = '';
    }

}
