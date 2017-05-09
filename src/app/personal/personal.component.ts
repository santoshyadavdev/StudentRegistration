import { Component, OnInit } from '@angular/core';
import { Personal } from '../data/formData.model';
import { FormDataService } from '../data/formData.service';
import { CityProvider, city } from '../data/cityDataModel';
@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  cityList: city[];
  title = 'Please tell us about yourself.';
  personal: Personal;
  form: any;
  constructor(private formDataService: FormDataService, private _cityProvider: CityProvider) { }

  ngOnInit() {
    this.personal = this.formDataService.getPersonal();
    console.log('Personal feature loaded!');
    this.cityList  =  this._cityProvider.getCityList();
  }

  save(form: any) {
    if (!form.valid) {
      return;
    }

    this.formDataService.setPersonal(this.personal);
  }

}
