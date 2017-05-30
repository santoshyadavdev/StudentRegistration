import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormData,PaymentDetails} from '../data/formData.model';
import { FormDataService } from '../data/formData.service'
import 'rxjs'
import { PaymentProvider,CcExpiryMonth,CcExpiryYear,BankAccountType,PaymentMethod} from '../data/paymentData.model'
@Component({
  selector: 'app-paymentdetails',
  templateUrl: './paymentdetails.component.html',
  styleUrls: ['./paymentdetails.component.css']
})
export class PaymentdetailsComponent implements OnInit {
  paymentDetails:PaymentDetails;
  paymentMethods:PaymentMethod[];
  bankAccountTypes:BankAccountType[];
  expiryMonth:CcExpiryMonth[];
  expiryYear:CcExpiryYear[];
  constructor(private _formDataService: FormDataService,private _paymentProvider:PaymentProvider ) { }

  ngOnInit() {
      
        this.paymentDetails  = this._formDataService.getPaymentDetails();//To intialise from controls
        this.paymentMethods  = this._paymentProvider.getpaymentMethodList();
        this.bankAccountTypes = this._paymentProvider.getBankAccountTypeList();
        this.expiryMonth   = this._paymentProvider.getCCExpireMonthList();
        this.expiryYear    = this._paymentProvider.getCCExpireYearList();

        this.paymentDetails.paymentMethod=this.paymentMethods[0].paymentMethodCode;//set drp value 
        this.paymentDetails.ccExpiryMonth= this.expiryMonth[0].month;
        this.paymentDetails.ccExpiryYear= this.expiryYear[0].year;
        this.paymentDetails.bankAccountType=this.bankAccountTypes[0].accountTypeName;
  }
}
