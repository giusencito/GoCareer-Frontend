import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/Users/Users.service';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../models/Users';
import {NgForm} from "@angular/forms";
@Component({
  selector: 'app-StudentRegister',
  templateUrl: './StudentRegister.component.html',
  styleUrls: ['./StudentRegister.component.css']
})
export class StudentRegisterComponent implements OnInit {
public signupform!:FormGroup;
dataSource !:MatTableDataSource<any>;
User!:User;
  constructor(private formBuilder:FormBuilder,private route:Router,private service:UsersService) {
    this.User={}as User;
    this.dataSource = new MatTableDataSource<any>();


  }

  ngOnInit() {
    this.signupform=this.formBuilder.group({
     name:['',Validators.required],
     lastname:['',Validators.required],
     email:['',Validators.required],
     password:['',Validators.required]



    })


  }
  registerUser(){

    this.service.create(this.User).subscribe((response: any) => {
      this.dataSource.data.push( {...response});
      this.dataSource.data = this.dataSource.data.map((o: any) => { return o; });
    });


  }






onSubmit(){


this.registerUser();
this.signupform.reset();
this.route.navigate(['/loginstudent'])

}



}
