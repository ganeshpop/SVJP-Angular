import {FormControl, FormGroup} from "@angular/forms";

const loginFields = [
    {
        labelText: 'Email address',
        labelFor: 'email-address',
        id: 'email-address',
        name: 'email',
        type: 'email',
        autoComplete: 'email',
        isRequired: true,
        placeholder: 'Email address'
    },
    {
        labelText: 'Password',
        labelFor: 'password',
        id: 'password',
        name: 'password',
        type: 'password',
        autoComplete: 'current-password',
        isRequired: true,
        placeholder: 'Password'
    }
];

export type basicDevoteeDetails1 = {
    title: FormControl
    firstName: FormControl
    lastName: FormControl
    gothram: FormControl
    mobileNumber: FormControl
    alternativeMobileNumber: FormControl
    homePhone: FormControl
    emailAddress: FormControl
    aadharNumber: FormControl
    panNumber: FormControl
};

export type devoteeAddressDetails1 = {
    zipCode: FormControl
    addressLine1: FormControl
    addressLine2: FormControl
    addressLine3: FormControl
    city: FormControl
    district: FormControl
    state: FormControl
    country: FormControl
};

export type otherDevoteeDetails1 = {
    subscriptionNo: FormControl
    subscriptionDue: FormControl
    viswajanani: FormControl
    SVJPLifeMember: FormControl
    elite: FormControl
    permanentDhanyabhishekam: FormControl
    ecMember: FormControl
    specialInvitee: FormControl
    notes: FormControl
};

export const searchFormGroup: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    mobileNumber: new FormControl(''),
    aadharNumber: new FormControl(''),
    panNumber: new FormControl('')
});

export const receiptCreationFormGroup: FormGroup = new FormGroup({

    receiptCode: new FormControl(''),
    organisation: new FormControl(''),
    devoteeId: new FormControl(''),
    amount: new FormControl(''),
    modeOfPayment: new FormControl(''),
    specialInstructions: new FormControl(''),
    documentId: new FormControl(''),
    bank: new FormControl(''),
    branch: new FormControl(''),
    date: new FormControl(''),
});

export type searchParameters = {
    firstName: string
    lastName: string
    mobileNumber: string
    aadharNumber: string
    panNumber: string
};

export const apiSearchParametersMap: { [x: string]: string; } = {
    firstName: 'firstname',
    lastName: 'lastname',
    mobileNumber: 'phone',
    aadharNumber: 'aadhar',
    panNumber: 'pan'
};


const basicDetailsFormGroup: FormGroup = new FormGroup({
    title: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    gothram: new FormControl(''),
    mobileNumber: new FormControl(''),
    alternativeMobileNumber: new FormControl(''),
    homePhone: new FormControl(''),
    emailAddress: new FormControl(''),
    aadharNumber: new FormControl(''),
    panNumber: new FormControl('')
});

const addressDetailsFormGroup: FormGroup = new FormGroup({
    zipCode: new FormControl(''),
    addressLine1: new FormControl(''),
    addressLine2: new FormControl(''),
    addressLine3: new FormControl(''),
    city: new FormControl(''),
    district: new FormControl(''),
    state: new FormControl(''),
    country: new FormControl(''),
});

const otherDetailsFormGroup: FormGroup = new FormGroup({
    viswajanani: new FormControl(''),
    SVJPLifeMember: new FormControl(''),
    permanentDhanyabhishekam: new FormControl(''),
    ecMember: new FormControl(''),
    specialInvitee: new FormControl(''),
    notes: new FormControl('')
});

export var devoteeFormCollection = {
    basicDetailsFormGroup: basicDetailsFormGroup,
    addressDetailsFormGroup: addressDetailsFormGroup,
    otherDetailsFormGroup: otherDetailsFormGroup
}


const devoteeCreationFieldDeclarations = {
    'basicDevoteeDetails': [
        {
            labelText: 'Title',
            labelFor: 'title',
            id: 'title',
            name: 'title',
            type: 'text',
            isRequired: true,
            placeholder: 'Title'
        },
        {
            labelText: 'First Name',
            labelFor: 'firstName',
            id: 'firstName',
            name: 'firstName',
            type: 'text',
            isRequired: true,
            placeholder: 'First Name'
        },
        {
            labelText: 'Last Name',
            labelFor: 'lastName',
            id: 'lastName',
            name: 'lastName',
            type: 'text',
            isRequired: true,
            placeholder: 'Last Name'
        },
        {
            labelText: 'Gothram',
            labelFor: 'gothram',
            id: 'gothram',
            name: 'gothram',
            type: 'text',
            isRequired: true,
            placeholder: 'Gothram'
        },
        {
            labelText: 'Mobile Number',
            labelFor: 'mobileNumber',
            id: 'mobileNumber',
            name: 'mobileNumber',
            type: 'text',
            isRequired: true,
            placeholder: 'Mobile Number'
        },
        {
            labelText: 'Alternative Mobile Number',
            labelFor: 'alternativeMobileNumber',
            id: 'alternativeMobileNumber',
            name: 'alternativeMobileNumber',
            type: 'text',
            isRequired: true,
            placeholder: 'Alternative Mobile Number'
        },
        {
            labelText: 'Home Phone',
            labelFor: 'homePhone',
            id: 'homePhone',
            name: 'homePhone',
            type: 'text',
            isRequired: true,
            placeholder: 'Home Phone'
        },
        {
            labelText: 'Email address',
            labelFor: 'emailAddress',
            id: 'emailAddress',
            name: 'email',
            type: 'email',
            autoComplete: 'email',
            isRequired: true,
            placeholder: 'Email address'
        },
        {
            labelText: 'Aadhar Number',
            labelFor: 'aadharNumber',
            id: 'aadharNumber',
            name: 'aadharNumber',
            type: 'text',
            isRequired: true,
            placeholder: 'Aadhar Number'
        },
        {
            labelText: 'Pan Number',
            labelFor: 'panNumber',
            id: 'panNumber',
            name: 'panNumber',
            type: 'text',
            isRequired: true,
            placeholder: 'panNumber'
        }

    ],
    'devoteeAddressDetails': [
        {
            labelText: 'Zip Code',
            labelFor: 'zip-code',
            id: 'zip-code',
            name: 'zip-code',
            type: 'text',
            isRequired: true,
            placeholder: 'Zip Code'
        },
        {
            labelText: 'Address Line 1',
            labelFor: 'address-line-1',
            id: 'address-line-1',
            name: 'address-line-1',
            type: 'text',
            isRequired: true,
            placeholder: 'Address Line 1'
        },
        {
            labelText: 'Address Line 2',
            labelFor: 'address-line-2',
            id: 'address-line-2',
            name: 'address-line-2',
            type: 'text',
            isRequired: true,
            placeholder: 'Address Line 2'
        },
        {
            labelText: 'Address Line 3',
            labelFor: 'address-line-3',
            id: 'address-line-3',
            name: 'address-line-3',
            type: 'text',
            isRequired: false,
            placeholder: 'Address Line 3'
        },
        {
            labelText: 'City',
            labelFor: 'city',
            id: 'city',
            name: 'city',
            type: 'text',
            isRequired: true,
            placeholder: 'City'
        },
        {
            labelText: 'District',
            labelFor: 'district',
            id: 'district',
            name: 'district',
            type: 'text',
            isRequired: true,
            placeholder: 'District'
        },
        {
            labelText: 'State',
            labelFor: 'state',
            id: 'state',
            name: 'state',
            type: 'text',
            isRequired: true,
            placeholder: 'State'
        },
        {
            labelText: 'Country',
            labelFor: 'country',
            id: 'country',
            name: 'country',
            type: 'country',
            isRequired: true,
            placeholder: 'Country'
        }
    ],
    'otherDevoteeDetails': [
        {
            labelText: 'Subscription Due',
            labelFor: 'subscription-due',
            id: 'subscription-due',
            name: 'subscription-due',
            type: 'text',
            isRequired: true,
            placeholder: 'Subscription Due'
        },
        {
            labelText: 'Subscription No',
            labelFor: 'subscription-no',
            id: 'subscription-no',
            name: 'subscription-no',
            type: 'text',
            isRequired: true,
            placeholder: 'Subscription No'
        },
        {
            labelText: 'Viswajanani',
            labelFor: 'viswajanani',
            id: 'viswajanani',
            name: 'viswajanani',
            type: 'radio',
            isRequired: true,
            placeholder: 'Viswajanani'
        },
        {
            labelText: 'SVJP Life Member',
            labelFor: 'svjp-life-member',
            id: 'svjp-life-member',
            name: 'svjp-life-member',
            type: 'radio',
            isRequired: true,
            placeholder: 'SVJP Life Member'
        },
        {
            labelText: 'Elite',
            labelFor: 'elite',
            id: 'elite',
            name: 'elite',
            type: 'checkbox',
            isRequired: true,
            placeholder: 'Elite'
        },
        {
            labelText: 'Permanent Dhanyabhishekam',
            labelFor: 'permanent-dhanyabhishekam',
            id: 'permanent-dhanyabhishekam',
            name: 'permanent-dhanyabhishekam',
            type: 'checkbox',
            isRequired: true,
            placeholder: 'Permanent Dhanyabhishekam'
        },
        {
            labelText: 'EC Member',
            labelFor: 'ec-member',
            id: 'ec-member',
            name: 'ec-member',
            type: 'checkbox',
            isRequired: true,
            placeholder: 'EC Member'
        },
        {
            labelText: 'Special Invitee',
            labelFor: 'special-invitee',
            id: 'special-invitee',
            name: 'special-invitee',
            type: 'checkbox',
            isRequired: true,
            placeholder: 'Special Invitee'
        },
        {
            labelText: 'Notes',
            labelFor: 'notes',
            id: 'notes',
            name: 'notes',
            type: 'text',
            isRequired: true,
            placeholder: 'Notes'
        }
    ]
};

export {loginFields, devoteeCreationFieldDeclarations};
