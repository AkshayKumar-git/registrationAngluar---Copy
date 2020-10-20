import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import validate = WebAssembly.validate;
import {RegistrationService} from "../registration.service";
import {Router} from "@angular/router";
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-registration-main-form',
  templateUrl: './registration-main-form.component.html',
  styleUrls: ['./registration-main-form.component.css']
})
export class RegistrationMainFormComponent implements OnInit {
  registrationForm: FormGroup;
  formValidation: boolean = false;
//  public conformpassword;
  passwordMatch: boolean = false;

  // instance of Form
  constructor(private fb: FormBuilder , private _registrationService: RegistrationService, private router: Router,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    //initiating Form details
    this.registrationFormValidation();
  }
  //creating registration Form
  registrationFormValidation(){
    this.registrationForm = this.fb.group({
      user_fullname:['', Validators.required],
      user_name: ['', [Validators.required,Validators.email]],
      user_password: ['', [Validators.required,Validators.minLength(4)]],
     user_conformpassword:['', Validators.required]
    });
  }
  //onclick function
  submit(){
    if(this.registrationForm.invalid){
      this.formValidation = true;
      console.log('Incorrect Login ');
      // this.toastr.error('sorry', 'incorrect registration details..!');
      return;
    } else if(this.registrationForm.value.user_password!==this.registrationForm.value.user_conformpassword){
     this.passwordMatch= true
      console.log('password dont match');
      // this.toastr.error('sorry', 'Passwords dont match..!');
    }
    else if(this.registrationForm.value.user_name !== '' && this.registrationForm.value.user_password !== ''){ //&& this.registrationForm.value.fullName !=='') {
      this.formValidation = false;
      this.passwordMatch= false;
      console.log('Login successfully');
      console.log(this.registrationForm.value);


      //enter into api//////
      this._registrationService.register(this.registrationForm.value).subscribe(
        response=>console.log('success!',response),
        error => console.log('Error!',error)
      );

      this.toastr.success('do loggin');
      this.router.navigateByUrl('/');
    }
  }

  onsubmit(){
    console.log(this.registrationForm.value);
  }

}
