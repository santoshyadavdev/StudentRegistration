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
    mobile: string = '';
    homePhone: string = '';
    language: string = '';
    securityQuestion: string = '';
    securityAnswer: string = '';
    students: Student[] = [];
    feesDue: FeesDue = new FeesDue();
    paymentDetails:PaymentDetails = new PaymentDetails();
    paymentPlans: PaymentPlans[] = [];

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
    mobile: string = '';
    homePhone: string = '';
    language: string = '';
    securityQuestion: string = '';
    securityAnswer: string = '';
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

export class FeesDue {
    ccFeeAmount: number = 0;
    feeRows: Fees[] = [];
    feeSubTotalRows: Fees = new Fees();
    feeTotalRow: Fees = new Fees();
}

export class Fees {
    name: string;
    feeTypeId: number;
    amounts: number[];
    total: number;
    feeDueImmediately: boolean;
}


export class PaymentDetails{
    paymentMethod:string;
    firstName:string;
    lastName:string;
    ccNumber:number;
    ccExpiryMonth:string;
    ccExpiryYear:string;
    bankAccountNumber:number;
    bankRouting:number;
    bankAccountType:string;
}

export class PaymentPlans {
    paymentPlanId: number;
    formCode: string;
    planType: string;
    planName: string;
    months: string;
    paymentSpanString: string;
    internalPaymentCount: number;
    paymentCount: number;
    allowAutoPayments: boolean;
    allowMailInPayments: boolean;
    allowACH: boolean;
    allowCCs: boolean;
    autoPaymentDays: AutoPaymentDays[] = [];
    mailInPaymentDays: AutoPaymentDays[] = [];
}

class AutoPaymentDays {
    day: number;
    dayString: string;
    paymentDayType: number;
}

