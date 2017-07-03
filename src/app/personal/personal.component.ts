import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';
import { Personal } from '../data/formData.model';
import { FormDataService } from '../data/formData.service';
import { StateProvider, states } from '../data/stateDataModel';
import { Post } from '../data/post';
@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  statesList: states[];
  title = 'Please tell us about yourself.';
  languages: string[];
  personalData: Observable<any>;
  personal: Personal;
  personalDemo: Personal[];
  securityQuestions: string[];
  form: any;
  post: Post[];
  errorMessage: string;
  constructor(private formDataService: FormDataService, private _stateProvider: StateProvider) { }

  ngOnInit() {

    this.personal = this.formDataService.getPersonal();
    this.statesList = this._stateProvider.getStatesList();
    this.languages = this._stateProvider.getLangauge();
    this.securityQuestions = this._stateProvider.getSecurityQuestion();
    this.readData();
    //this.formDataService.getPostData().subscribe(data => this.post = data);
  }

  readData() {
    this.formDataService.getPersonalData().subscribe(data => this.personalData = data,
      error => this.errorMessage = <any>error);
    console.log(this.personalData);
  }
  save(form: any) {
    if (!form.valid) {
      return;
    }
    this.formDataService.setPersonal(this.personal);
  }

}
