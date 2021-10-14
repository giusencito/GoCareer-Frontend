import { Especialist } from 'src/app/models/Especialist';
import { EspecialistService } from './../services/Especialist/Especialist.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-EspecialistRegister',
  templateUrl: './EspecialistRegister.component.html',
  styleUrls: ['./EspecialistRegister.component.css']
})
export class EspecialistRegisterComponent implements OnInit {
  public signupform!:FormGroup;
  dataSource !:MatTableDataSource<any>;
  Especialist!:Especialist;
  constructor(private formBuilder:FormBuilder,private route:Router,private service:EspecialistService) {
    this.Especialist={}as Especialist;
    this.dataSource = new MatTableDataSource<any>();


   }

  ngOnInit() {

    this.signupform=this.formBuilder.group({
      name:['',Validators.required],
      lastname:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      Information:['',Validators.required]



     })

  }


  registerUser(){

    this.service.create(this.Especialist).subscribe((response: any) => {
      this.dataSource.data.push( {...response});
      this.dataSource.data = this.dataSource.data.map((o: any) => { return o; });
    });


  }



  onSubmit(){

    this.registerUser();
    this.signupform.reset();
    this.route.navigate(['/loginEspecialist'])




  }






















}
