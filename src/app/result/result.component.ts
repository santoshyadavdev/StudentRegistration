import { Component, OnInit, Input } from '@angular/core';

import { FormData,Student,FeesDue } from '../data/formData.model';
import { FormDataService } from '../data/formData.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  title = 'Thanks for staying tuned!';
  @Input() formData: FormData;
  isFormValid: Boolean = false;
  fullAddress:string="";
  students:Student[];
  feesData: FeesDue;
  constructor(private formDataService: FormDataService) {
  }

  ngOnInit() {
    this.formData = this.formDataService.getFormData();
    this.fullAddress= this.formData.zip=="" ? "" : this.formData.addressLine1+','+this.formData.addressLine2+','+this.formData.city+','+this.formData.state+','+this.formData.zip
    this.students = this.formDataService.getStudents();
    this.feesData = this.formDataService.getRegistrationFee();
    this.isFormValid = this.formDataService.isFormValid();
    console.log('Result feature loaded!');
  }

  submit() {
    alert('Excellent Job!');
    this.formData = this.formDataService.resetFormData();
    this.isFormValid = false;
  }
}
