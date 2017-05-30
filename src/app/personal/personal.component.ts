import { Component, OnInit } from '@angular/core';
import 'rxjs'
import { Personal } from '../data/formData.model';
import { FormDataService } from '../data/formData.service';
import { StateProvider, states } from '../data/stateDataModel';
@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  statesList: states[];
  title = 'Please tell us about yourself.';
  languages: string[];
  personal: Personal;
  securityQuestions: string[];
  form: any;
  constructor(private formDataService: FormDataService, private _stateProvider: StateProvider) { }

  ngOnInit() {
    this.personal = this.formDataService.getPersonal();
    console.log('Personal feature loaded!');
    this.statesList = this._stateProvider.getStatesList();
    this.languages = this._stateProvider.getLangauge();
    this.securityQuestions = this._stateProvider.getSecurityQuestion();
  }

  save(form: any) {
    if (!form.valid) {
      return;
    }

    this.formDataService.setPersonal(this.personal);
  }

}
