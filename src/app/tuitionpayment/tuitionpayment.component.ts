import { Component, OnInit } from '@angular/core';
import { FormData, Student, FeesDue } from '../data/formData.model';
import { FormDataService } from '../data/formData.service';

@Component({
  selector: 'app-tuitionpayment',
  templateUrl: './tuitionpayment.component.html',
  styleUrls: ['./tuitionpayment.component.css']
})
export class TuitionpaymentComponent implements OnInit {
  feesData: FeesDue;
  students: Student[];
  constructor(private _formDataService: FormDataService) { }

  ngOnInit() {
    this.feesData = this._formDataService.getRegistrationFee();
    this.students = this._formDataService.getStudents();
    console.log(this.feesData);
  }

}
