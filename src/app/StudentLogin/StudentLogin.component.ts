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
     this.getallstudents()

  }
  getallstudents(){
    this.service.getAll().subscribe((response: any) => {
      this.dataSource.data = response;
      console.log(response)
    });


  }



  getall(){

    this.service.getAll()
    .subscribe((response: any)=>{
       const ap=response.find((a:any)=>{
          console.log(a.useremail);
         console.log(this.loginform.value.email)
         console.log(a.userPassword)
         console.log(this.loginform.value.password)
         this.iddepaso=a.userId;
          return a.useremail === this.loginform.value.email && a.userPassword===this.loginform.value.password;
       });
        if(ap){
          alert("Login successfully");
          //this.loginform.reset();
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
