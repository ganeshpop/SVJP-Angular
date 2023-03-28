import {Component, OnInit} from '@angular/core';
import {Devotee} from '../../../api/devotee';
import {FormGroup} from '@angular/forms';
import {receiptCreationFormGroup} from '../../utilities/formFields';
import {SVJPService} from '../../../service/svjp/SVJP.service';
import {Router} from "@angular/router";


@Component({
    templateUrl: 'receiptCreation.component.html'
})
export class ReceiptCreationComponent implements OnInit {

    selectedDevoteeData: Devotee | undefined = undefined;
    isSearchActive: boolean = true;

    receiptCreationFormGroup: FormGroup = receiptCreationFormGroup;

    paymentModeOptions = [
        {key: 'C', label: 'Cash', payloadLabel: 'Cash'},
        {key: 'D', label: 'Draft', payloadLabel: 'Draft'},
        {key: 'K', label: 'Cheque Subject to Realisation', payloadLabel: 'Cheque'},
        {key: 'O', label: 'Online Money Transfer', payloadLabel: 'OnlineMoneyTransfer'},
        {key: 'U', label: 'UPI', payloadLabel: 'UPI'}
    ];

    organisations: any = [];
    accountHeads: any = [];
    display: boolean = false;

    constructor(private SVJPService: SVJPService, public router: Router) {
    }

    ngOnInit() {
        this.SVJPService.getOrganisations().subscribe((response) => this.organisations = response);
    }

    onDevoteeSelection(selectedData: any) {
        // console.log(this.organisations);
        this.selectedDevoteeData = selectedData;
        this.receiptCreationFormGroup.controls['devoteeId'].setValue(selectedData.id);
        this.isSearchActive = false;
    }

    onOrganisationChange(selectedOrganisation: any) {
        if (selectedOrganisation.value) {
            this.SVJPService.getAccountHeads(selectedOrganisation.value).subscribe((response) => {
                this.accountHeads = response
                // console.log(this.accountHeads);
            });
        } else {
            this.accountHeads = [];
        }

    }

    isAdditionalInformationRequired(modeOfPayment: any) {
        return (modeOfPayment)?'DKO'.includes(modeOfPayment.key):false;
    }


    onBack() {
        this.isSearchActive = true;
        this.selectedDevoteeData = undefined;
    }

    getBranchPlaceholder() {
        return this.receiptCreationFormGroup.controls['modeOfPayment'].value.key === 'O' ? 'Other Info' : 'Branch';
    }


    onReset() {
        console.log('reset')
    }

    onSubmit() {
        // console.log('Submit')
        // console.log(this.receiptCreationFormGroup.getRawValue());
        let receiptPayload = {
            'receiptCode': this.receiptCreationFormGroup.controls['receiptCode'].value,
            'organisation': this.receiptCreationFormGroup.controls['organisation'].value,
            'devoteeId': this.receiptCreationFormGroup.controls['devoteeId'].value,
            'amount': this.receiptCreationFormGroup.controls['amount'].value,
            'modeOfPayment': this.receiptCreationFormGroup.controls['modeOfPayment'].value.payloadLabel,
            'specialInstructions': this.receiptCreationFormGroup.controls['specialInstructions'].value,
            'additionalPaymentDetails': {
                'documentId': this.receiptCreationFormGroup.controls['documentId'].value,
                'bank': this.receiptCreationFormGroup.controls['bank'].value,
                'branch': this.receiptCreationFormGroup.controls['branch'].value,
                'date': this.receiptCreationFormGroup.controls['date'].value
            }
        };
        this.SVJPService.createReceipt(receiptPayload).subscribe((response) => {
            console.log(response);
            if (response) {
                this.display = true;
                this.receiptCreationFormGroup.reset();
                this.isSearchActive = true;
                this.selectedDevoteeData = undefined;


            }
        })
    }


    onNext() {
        console.log('Next')
    }

}
