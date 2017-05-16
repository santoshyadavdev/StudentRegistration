export class FormData {
    firstName: string = '';
    lastName: string = '';
    email: string = '';
    secondPayerFirstName: string = '';
    work: string = '';
    secondPayerLastName: string = '';
    addressLine1: string = '';
    addressLine2: string = '';
    city: string = '';
    state: string = '';
    zip: string = '';
    studentLastName: string = '';
    mobile: string='';
    homePhone: string='';
    language: string='';
    securityQuestion: string='';
    securityAnswer: string='';

    students : Student[] = [];


    clear() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.work = '';
        this.addressLine1 = '';
        this.city = '';
        this.state = '';
        this.zip = '';
    }
}

export class Personal {
    firstName: string = '';
    lastName: string = '';
    email: string = '';
    secondPayerFirstName: string = '';
    secondPayerLastName: string = '';
    addressLine1: string = '';
    addressLine2: string = '';
    city: string = '';
    state: string = '';
    zip: string = '';
    mobile: string='';
    homePhone: string='';
    language: string='';
    securityQuestion: string='';
    securityAnswer: string='';
}

export class Address {
    addressLine1: string = '';
    city: string = '';
    state: string = '';
    zip: string = '';
}


export class Student {
    firstName: string;
    lastName: string;
    grade: string;
}
