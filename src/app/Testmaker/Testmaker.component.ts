import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Test } from '../models/Test';
import { MatTableDataSource } from '@angular/material/table';
import { TestService } from '../services/Test/Test.service';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-Testmaker',
  templateUrl: './Testmaker.component.html',
  styleUrls: ['./Testmaker.component.css']
})
export class TestmakerComponent implements OnInit {
  public testform!:FormGroup;
  dataSource !:MatTableDataSource<any>;
  dataSource2 !:MatTableDataSource<any>;
  Test!:Test;
  Especialistnumber!:number;
  type!:string
  newtest!:number
  constructor(private formBuilder:FormBuilder,private service:TestService,private route:ActivatedRoute,private cd:Router) {

    this.Test={}as Test;
    this.dataSource = new MatTableDataSource<any>();
    this.dataSource2 = new MatTableDataSource<any>();
    let pod=parseInt(this.route.snapshot.paramMap.get('id')!);
    let id= pod;
    this.type=this.route.snapshot.paramMap.get('type')!

    this.Especialistnumber=id;
   }

  ngOnInit() {
    this.testform=this.formBuilder.group({
      testname:['',Validators.required],

     })
     this.getAllTests()
  }

  registerTest(){

    this.service.create(this.Test).subscribe((response: any) => {
      this.dataSource.data.push( {...response});
      this.dataSource.data = this.dataSource.data.map((o: any) => { return o; });
      console.log(this.Test)

    });


  }

creartest(){
this.Test.especialistId=this.Especialistnumber
if(this.type=='perzo'){
  this.Test.personalized=true
}
else{
  this.Test.personalized=false
}
this.registerTest()
alert("Test iniciado")

this.cd.navigate(['/Especialist',this.Especialistnumber,'Testselector',this.type,'Test', this.dataSource2.data.length+1])

}
regresar(){

  this.cd.navigate(['/Especialist',this.Especialistnumber])




}





getAllTests(){
  this.service.getAll().subscribe((response: any) => {
    this.dataSource2.data = response;
    console.log(response)
  });


}






}
