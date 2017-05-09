import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UIRouterModule } from '@uirouter/angular'
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
import { CityProvider } from './data/cityDataModel';
import { FormDataService } from './data/formData.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonalComponent,
    WorkComponent,
    AddressComponent,
    ResultComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UIRouterModule.forRoot({
      states: appStates,
      useHash: true,
      config: UIRouterConfigFn
    })
  ],
  providers: [{ provide: FormDataService, useClass: FormDataService }, CityProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
