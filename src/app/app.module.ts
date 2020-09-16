import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import 'jquery/dist/jquery';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PersonalComponent } from './personal/personal.component';
import { WorkComponent } from './work/work.component';
import { AddressComponent } from './address/address.component';
import { ResultComponent } from './result/result.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StateProvider, GradeProvider } from './data/stateDataModel';
import { FormDataService } from './data/formData.service';
import { StudentComponent } from './student/student.component';
import { TuitionpaymentComponent } from './tuitionpayment/tuitionpayment.component';
import { LogincomponentComponent } from './logincomponent/logincomponent.component';
import { PaymentmodesComponent } from './paymentmodes/paymentmodes.component';

import { PaymentdetailsComponent } from './paymentdetails/paymentdetails.component';
import { PaymentProvider } from './data/paymentData.model'

import { PaymentplanComponent } from './paymentplan/paymentplan.component';
import { HighlightPaymentDirective } from './highlight-payment.directive';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // 1st State
  { path: 'personal', component: PersonalComponent },
  { path: 'student', component: StudentComponent },
  // 3rd State
  { path: 'payment', component: TuitionpaymentComponent },
  { path: 'paymentplan', component: PaymentplanComponent },
  // 4th State
  { path: 'result', component: ResultComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonalComponent,
    WorkComponent,
    AddressComponent,
    ResultComponent,
    NavbarComponent,
    StudentComponent,
    TuitionpaymentComponent,
    LogincomponentComponent,
    PaymentmodesComponent,
    PaymentdetailsComponent,
    HighlightPaymentDirective,
    PaymentplanComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{ provide: FormDataService, useClass: FormDataService }, StateProvider, GradeProvider, PaymentProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
