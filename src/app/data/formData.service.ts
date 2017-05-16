import { Injectable } from '@angular/core';

import { FormData, Personal, Address, Student } from './formData.model';

@Injectable()
export class FormDataService {

    private formData: FormData = new FormData();
    private isPersonalFormValid: boolean = false;
    private isWorkFormValid: boolean = false;
    private isAddressFormValid: boolean = false;
    private studentDataValid : boolean = false;

    getPersonal(): Personal {
        // Return the Personal data
        let personal: Personal = {
            firstName: this.formData.firstName,
            lastName: this.formData.lastName,
            email: this.formData.email,
            secondPayerFirstName: this.formData.secondPayerFirstName,
            secondPayerLastName: this.formData.secondPayerLastName,
            addressLine1 : this.formData.addressLine1,
            addressLine2 : this.formData.addressLine2,
            city : this.formData.city,
            state : this.formData.state,
            zip : this.formData.zip,
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
        debugger
        this.studentDataValid = true;
        this.formData.students = data;
    }

    getStudents(){
       return this.formData.students;
    }

    getFormData(): FormData {
        // Return the entire Form Data
        return this.formData;
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
}