import { EspecialistService } from './../services/Especialist/Especialist.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-EspecialistLogin',
  templateUrl: './EspecialistLogin.component.html',
  styleUrls: ['./EspecialistLogin.component.css']
})
export class EspecialistLoginComponent implements OnInit {
  public loginform!:FormGroup;
  iddepaso!:Number;
  dataSource !:MatTableDataSource<any>;
  constructor(private formBuilder:FormBuilder,private route:Router,private service:EspecialistService) {
    this.dataSource = new MatTableDataSource<any>();

   }

  ngOnInit() {

    this.loginform=this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]



     })
  }


  getEspecialist(){

    this.service.getAll()
    .subscribe((response: any)=>{
       const ap=response.find((a:any)=>{
          console.log(a.EspecialistEmail);
         console.log(this.loginform.value.email)
         console.log(a.EspecialistPassword)
         console.log(this.loginform.value.password)
         this.iddepaso=a.id;
          return a.EspecialistEmail === this.loginform.value.email && a.EspecialistPassword===this.loginform.value.password;
       });
        if(ap){
          alert("Login successfully");
          this.loginform.reset();
          this.route.navigate(['/Especialist',this.iddepaso])

        }else{
          alert("Especialist not found");
        }

      },err=>{

        alert("something go wrong")
      });


  }



  onSubmit(){


this.getEspecialist()




  }


















}
