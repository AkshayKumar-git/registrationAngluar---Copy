import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DashboardService} from "../dashboard.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
   userDetails: any = {};
  showForm: boolean = false;
  userForm: FormGroup;
  flag:boolean=false;
  constructor(private router: Router,private fb: FormBuilder,private _dashboardService:DashboardService,private toastr: ToastrService ) { }

  ngOnInit(): void {
    this.userFormValidation();
    this._dashboardService.getUserDetails(Number(localStorage.getItem('userId'))).subscribe(res=>{
      console.log(res)
      this.userDetails= Object.assign(this.userDetails,res[0]);
    })

  }
logout(){
  this.router.navigateByUrl('/');
}

  editUser(){
   this.showForm = true;
   this.flag = true ;
   this.userForm.patchValue({
     name: this.userDetails.user_fullname,
     email: this.userDetails.user_name
   });
  }

  updateUserDetails(){
    let data = {
      user_fullname: this.userForm.value.name,
      user_name: this.userForm.value.email
    }
    console.log(data)
    this._dashboardService.updateUserDetails(Number(localStorage.getItem('userId')), data).subscribe(res=>{
   //   console.log(res)
    });
    this.flag = false ;
    this.toastr.success('update succesfully');
  }

  userFormValidation(){
    this.userForm = this.fb.group({
      name: [''],
      email: ['']
    });
  }

 deleteUser(){
   this._dashboardService.deleteUser(Number(localStorage.getItem('userId'))).subscribe(res=>{
     console.log(res)
     if(res.status==='success'){
       this.toastr.success('Account deleted succesfully');
       this.router.navigateByUrl('/',);
     }
   })
 }

}
