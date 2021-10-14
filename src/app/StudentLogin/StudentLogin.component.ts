import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/Users/Users.service';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../models/Users';
@Component({
  selector: 'app-StudentLogin',
  templateUrl: './StudentLogin.component.html',
  styleUrls: ['./StudentLogin.component.css']
})
export class StudentLoginComponent implements OnInit {
  public loginform!:FormGroup;
  iddepaso!:Number;
  dataSource !:MatTableDataSource<any>;
  Log!:boolean
  constructor(private formBuilder:FormBuilder,private route:Router,private service:UsersService) {

    this.dataSource = new MatTableDataSource<any>();
    this.Log=false;

   }

  ngOnInit() {
    this.loginform=this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]



     })
  }

  getall(){

    this.service.getAll()
    .subscribe((response: any)=>{
       const ap=response.find((a:any)=>{
          console.log(a.UserEmail);
         console.log(this.loginform.value.email)
         console.log(a.UserPassword)
         console.log(this.loginform.value.password)
         this.iddepaso=a.id;
          return a.UserEmail === this.loginform.value.email && a.UserPassword===this.loginform.value.password;
       });
        if(ap){
          alert("Login successfully");
          this.loginform.reset();
          this.route.navigate(['/User',this.iddepaso])
          this.Log=true;
        }else{
          alert("user not found");
        }

      },err=>{

        alert("something go wrong")
      });


  }



  onSubmit(){


this.getall();

console.log(this.loginform.controls['password'].dirty)
console.log(this.loginform.hasError('required', 'password'))




  }








}
