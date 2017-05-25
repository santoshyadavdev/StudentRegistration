import { Component, OnInit } from '@angular/core';
import { PaymentPlans } from '../data/formData.model';
import { FormDataService } from '../data/formData.service';
import { HighlightPaymentDirective } from '../highlight-payment.directive'
@Component({
  selector: 'app-paymentplan',
  templateUrl: './paymentplan.component.html',
  styleUrls: ['./paymentplan.component.css']
})
export class PaymentplanComponent implements OnInit {
  paymentPlans: PaymentPlans[];
  constructor(private _formDataService: FormDataService) { }

  ngOnInit() {
    this.paymentPlans = this._formDataService.getpaymentPlans();
  }

}
