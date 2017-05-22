import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from "rxjs";

import { FormData, Personal, Address, Student, FeesDue, Fees, PaymentPlans } from './formData.model';

@Injectable()
export class FormDataService {

    private formData: FormData = new FormData();
    private isPersonalFormValid: boolean = false;
    private isWorkFormValid: boolean = false;
    private isAddressFormValid: boolean = false;
    private studentDataValid: boolean = false;

    getPersonal(): Personal {
        // Return the Personal data
        let personal: Personal = {
            firstName: this.formData.firstName,
            lastName: this.formData.lastName,
            email: this.formData.email,
            secondPayerFirstName: this.formData.secondPayerFirstName,
            secondPayerLastName: this.formData.secondPayerLastName,
            addressLine1: this.formData.addressLine1,
            addressLine2: this.formData.addressLine2,
            city: this.formData.city,
            state: this.formData.state,
            zip: this.formData.zip,
            mobile: this.formData.mobile,
            homePhone: this.formData.homePhone,
            language: this.formData.language,
            securityQuestion: this.formData.securityQuestion,
            securityAnswer: this.formData.securityAnswer
        };
        return personal;
    }

    setPersonal(data: Personal) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isPersonalFormValid = true;
        this.formData.firstName = data.firstName;
        this.formData.lastName = data.lastName;
        this.formData.email = data.email;
        this.formData.addressLine1 = data.addressLine1;
        this.formData.addressLine2 = data.addressLine2;
        this.formData.secondPayerFirstName = data.secondPayerFirstName;
        this.formData.secondPayerLastName = data.secondPayerLastName;
        this.formData.city = data.city;
        this.formData.studentLastName = data.lastName;
        this.formData.state = data.state;
        this.formData.zip = data.zip;
        this.formData.mobile = data.mobile;
        this.formData.homePhone = data.homePhone;
        this.formData.language = data.language;
        this.formData.securityQuestion = data.securityQuestion;
        this.formData.securityAnswer = data.securityAnswer;
    }

    getWork(): string {
        // Return the work type
        return this.formData.work;
    }

    setWork(data: string) {
        // Update the work type only when the Work Form had been validated successfully
        this.isWorkFormValid = true;
        this.formData.work = data;
    }

    getAddress(): Address {
        // Return the Address data
        let address: Address = {
            addressLine1: this.formData.addressLine1,
            city: this.formData.city,
            state: this.formData.state,
            zip: this.formData.zip
        };
        return address;
    }

    setAddress(data: Address) {
        // Update the Address data only when the Address Form had been validated successfully
        this.isAddressFormValid = true;
        this.formData.addressLine1 = data.addressLine1;
        this.formData.city = data.city;
        this.formData.state = data.state;
        this.formData.zip = data.zip;
    }

    setStudents(data: Student[]) {
        // Update the Address data only when the Address Form had been validated successfully
        this.studentDataValid = true;
        this.formData.students = data;
    }

    getStudents() {
        return this.formData.students;
    }

    getFormData(): FormData {
        // Return the entire Form Data
        return this.formData;
    }

    getRegistrationFee() {
        let feesData: FeesDue = {
            ccFeeAmount: 0,
            feeRows: [{
                name: 'Registration Fee',
                feeDueImmediately: true,
                feeTypeId: 1251,
                amounts: [50.00, 50.00, 0],
                total: 100.00
            },
            {
                name: 'Smart Administrative Fee',
                feeTypeId: 1262,
                amounts: [0.0, 0.0, 100.00],
                total: 100.00,
                feeDueImmediately: true
            }],
            feeSubTotalRows: {
                name: 'Fees Due Immediately',
                feeTypeId: 0,
                amounts: [50.00, 50.00, 100.00],
                total: 200.00,
                feeDueImmediately: true
            },
            feeTotalRow: {
                name: 'Total Fees',
                feeTypeId: 0,
                amounts: [50.00, 50.00, 100.00],
                total: 200.00,
                feeDueImmediately: true
            }
        };
        return this.formData.feesDue = feesData;
    }

    resetFormData(): FormData {
        // Return the form data after all this.* members had been reset
        this.formData.clear();
        this.isPersonalFormValid = this.isWorkFormValid = this.isAddressFormValid = false;
        return this.formData;
    }

    isFormValid() {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isPersonalFormValid &&
            this.isWorkFormValid &&
            this.isAddressFormValid;
    }

    getpaymentPlans() {
        let paymentPlans: PaymentPlans[] = [
            {
                paymentPlanId: 176891,
                formCode: 'B',
                planType: 'Regular',
                planName: '12 Month',
                months: '',
                paymentSpanString: 'Jun-May',
                internalPaymentCount: 12,
                paymentCount: 12,
                allowAutoPayments: true,
                allowMailInPayments: true,
                allowACH: true,
                allowCCs: true,
                autoPaymentDays: [
                    {
                        day: 5,
                        dayString: '5th',
                        paymentDayType: 850
                    },
                    {
                        day: 20,
                        dayString: '20th',
                        paymentDayType: 850
                    }
                ],
                mailInPaymentDays: [
                    {
                        day: 5,
                        dayString: '5th',
                        paymentDayType: 851
                    },
                    {
                        day: 20,
                        dayString: '20th',
                        paymentDayType: 851
                    }
                ]
            },
            {
                paymentPlanId: 176892,
                formCode: 'D',
                planType: 'Regular',
                planName: '10 Month',
                months: '',
                paymentSpanString: 'Aug-May',
                internalPaymentCount: 10,
                paymentCount: 10,
                allowAutoPayments: true,
                allowMailInPayments: true,
                allowACH: true,
                allowCCs: true,
                autoPaymentDays: [
                    {
                        day: 5,
                        dayString: '5th',
                        paymentDayType: 850
                    },
                    {
                        day: 20,
                        dayString: '20th',
                        paymentDayType: 850
                    }
                ],
                mailInPaymentDays: [
                    {
                        day: 5,
                        dayString: '5th',
                        paymentDayType: 851
                    },
                    {
                        day: 20,
                        dayString: '20th',
                        paymentDayType: 851
                    }
                ]

            }
        ];

        return paymentPlans;
    }
}
