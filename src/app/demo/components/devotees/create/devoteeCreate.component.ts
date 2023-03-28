import {Component} from "@angular/core";
import {devoteeFormCollection} from "../../utilities/formFields";
import {FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {SVJPService} from '../../../service/svjp/SVJP.service';


@Component({
    templateUrl: './devoteeCreate.component.html',
})
export class DevoteeCreateComponent {

    devoteeFormCollection = devoteeFormCollection;

    display: boolean = false;
    basicDetailsFormGroup: FormGroup = devoteeFormCollection.basicDetailsFormGroup;
    addressDetailsFormGroup: FormGroup = devoteeFormCollection.addressDetailsFormGroup;
    otherDetailsFormGroup: FormGroup = devoteeFormCollection.otherDetailsFormGroup;

    titleDropdownItems = [
        {value: 'Mr'},
        {value: 'Mrs'},
        {value: 'Smt'}
    ];

    constructor(private SVJPService: SVJPService, public router: Router) {
    }

    onReset() {
        this.basicDetailsFormGroup.reset();
        this.addressDetailsFormGroup.reset();
    }

    onSubmit() {
        console.log('Submit')
        console.log(this.basicDetailsFormGroup.getRawValue());
        console.log(this.addressDetailsFormGroup.getRawValue());
        let rawBasicDetailsFormGroup = this.basicDetailsFormGroup.getRawValue();
        let rawAddressDetailsFormGroup = this.addressDetailsFormGroup.getRawValue();
        let rawOtherDetailsFormGroup = this.otherDetailsFormGroup.getRawValue();
        let devoteePayload = {
            "title": rawBasicDetailsFormGroup.title,
            "firstname": rawBasicDetailsFormGroup.firstName,
            "lastname": rawBasicDetailsFormGroup.lastName,
            "gothram": rawBasicDetailsFormGroup.gothram,
            "addressLine1": rawAddressDetailsFormGroup.addressLine1,
            "addressLine2": rawAddressDetailsFormGroup.addressLine2,
            "addressLine3": rawAddressDetailsFormGroup.addressLine3,
            "city": rawAddressDetailsFormGroup.city,
            "state": rawAddressDetailsFormGroup.state,
            "pinCode": rawAddressDetailsFormGroup.zipCode,
            "country": rawAddressDetailsFormGroup.country,
            "email": rawBasicDetailsFormGroup.emailAddress,
            "district": rawAddressDetailsFormGroup.district,
            "homePhone": rawBasicDetailsFormGroup.homePhone,
            "mobilePhone": rawBasicDetailsFormGroup.mobileNumber,
            "additionalMobilePhone": rawBasicDetailsFormGroup.alternativeMobileNumber,
            "aadhar": rawBasicDetailsFormGroup.aadharNumber,
            "pan": rawBasicDetailsFormGroup.panNumber,
            "notes": rawOtherDetailsFormGroup.notes
        };
        this.SVJPService.createDevotee(devoteePayload).subscribe((response) => {
            console.log(response);
            if (response) {
                this.display = true;
                this.basicDetailsFormGroup.reset();
                this.addressDetailsFormGroup.reset();
                this.otherDetailsFormGroup.reset();
            }
        })
    }
}
