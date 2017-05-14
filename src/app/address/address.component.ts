import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { FormData,Student } from '../data/formData.model'
import { FormDataService } from '../data/formData.service'

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'address.component.html',
})
export class AddressComponent implements OnInit {
    public myForm: FormGroup;

    constructor(private _fb: FormBuilder, public _formService : FormDataService) { }

    ngOnInit() {
        this.myForm = this._fb.group({
            students: this._fb.array([
                this.initAddress(),
            ])
        });
    }

    initAddress() {
        return this._fb.group({
            firstName: ['', Validators.required],
            lastName: [''],
            grade: ['']
        });
    }

    addStudent() {
        const control = <FormArray>this.myForm.controls['students'];
        control.push(this.initAddress());
    }

    removeAddress(i: number) {
        const control = <FormArray>this.myForm.controls['students'];
        control.removeAt(i);
    }

    save(model: Student[]) {
        // call API to save
        // ...
        console.log(model);
         this._formService.setStudents(model);
        
        //  model.forEach(function(student){
        //    this._formService.setStudents(student);  
        //  });
        
    }
}