import {Component, EventEmitter, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../login.service";
import {Router} from "@angular/router";
import validate = WebAssembly.validate;
import {HttpClient} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";






@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  user : any ={};
  loginForm: FormGroup;
  formValidation: boolean = false;


  constructor(private fb: FormBuilder, private _loginService: LoginService, private router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loginFormValidation();
  //  this._loginService.getUser().subscribe(data => this.user = data)
  }
  loginFormValidation(){
    this.loginForm = this.fb.group({
      user_name: ['', Validators.required],
      user_password: ['', Validators.required]
    });
  }
  submit() {
    if (this.loginForm.invalid) {
      this.formValidation = true;
      return;
    } else {
      this.formValidation = false;
      this._loginService.login(this.loginForm.value).subscribe(res =>{
        if(res && res.data!==0){


         this._loginService.loginid(this.loginForm.value).subscribe(res=>{
           console.log(res);
           this.user = Object.assign(this.user,res)
           localStorage.setItem('userId',JSON.stringify(this.user[0].user_id))
           this.toastr.success('Login succesfully');
           this.router.navigateByUrl('/dashboard',);
         })
        //  console.log(this.loginForm.value);

        } else {
          this.toastr.error(res.message);
        }
      },error => {
        this.toastr.error('sorry', 'Invalid user input..!');
      });
      // this._loginService.register(this.loginForm.value).subscribe(
      //   response=>console.log('success!',response),
      //   error => console.log('Error!',error)
      //
      //
      //
      // );
    }
  }



}
