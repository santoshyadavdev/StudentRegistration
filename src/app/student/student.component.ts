import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { FormData, Student } from '../data/formData.model';
import { FormDataService } from '../data/formData.service';
import { GradeProvider, StateProvider, grade } from '../data/stateDataModel';
@Component({
    selector: 'app-student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
    public maxStudent: boolean = true;
    public myForm: FormGroup;
    studentsData: Student[] = [
        {
            firstName: '',
            lastName: '',
            grade: ''
        }
    ];
    gradeList: grade[];
    constructor(private _fb: FormBuilder, private _formService: FormDataService, private _gradeProvider: GradeProvider) { }

    ngOnInit() {

        this.myForm = this._fb.group({
            students: this._fb.array([])
        });
        this.buildForm();
        this.gradeList = this._gradeProvider.getGradeList();

    }

    buildForm = (): void => {
        const studentControls = <FormArray>this.myForm.controls['students'];

        this.studentsData = this._formService.getStudents();
        if (this.studentsData.length > 0) {
            console.log('1');
            this.studentsData.forEach((stud: Student) => {
                studentControls.push(this.createStudentFormGroup(stud));
                console.log(studentControls);
            });
        }
        else {
            this.addStudent();
        }
    }


    createStudentFormGroup(student: Student) {
        return this._fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            grade: ['', Validators.required]
        });
    }

    initStudent() {
        return this._fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            grade: ['', Validators.required],
        });
    }

    addStudent() {
        const control = <FormArray>this.myForm.controls['students'];
        this.studentsData.push({
            firstName: '',
            lastName: '',
            grade: ''
        });
        control.push(this.initStudent());
        this.setMaxStudent();
    }

    removeStudent(i: number) {
        const control = <FormArray>this.myForm.controls['students'];
        control.removeAt(i);
        this.studentsData.pop();
        this.setMaxStudent();
    }

    setMaxStudent() {
        this.maxStudent = this.studentsData.length >= 5 ? false : true;
    }

    save(model: Student[]) {
        this._formService.setStudents(model);
    }

}
