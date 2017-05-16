import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UIRouterModule } from '@uirouter/angular';
import 'jquery/dist/jquery';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PersonalComponent } from './personal/personal.component';
import { WorkComponent } from './work/work.component';
import { AddressComponent } from './address/address.component';
import { ResultComponent } from './result/result.component';
import { UIRouterConfigFn } from './app.router';
import { appStates } from './app.states';
import { NavbarComponent } from './navbar/navbar.component';
<<<<<<< HEAD
import { StateProvider } from './data/stateDataModel';
=======
import { CityProvider, GradeProvider} from './data/cityDataModel';
>>>>>>> c82ed360f97c144b58e00403b5758dbdead287c7
import { FormDataService } from './data/formData.service';
import { StudentComponent } from './student/student.component';
import { TuitionpaymentComponent } from './tuitionpayment/tuitionpayment.component';

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
    TuitionpaymentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    UIRouterModule.forRoot({
      states: appStates,
      useHash: true,
      config: UIRouterConfigFn
    })
  ],
<<<<<<< HEAD
  providers: [{ provide: FormDataService, useClass: FormDataService }, StateProvider],
=======
  providers: [{ provide: FormDataService, useClass: FormDataService }, StateProvider,GradeProvider],
>>>>>>> c82ed360f97c144b58e00403b5758dbdead287c7
  bootstrap: [AppComponent]
})
export class AppModule { }
