import { Test } from './../models/Test';
import { MatTableDataSource } from '@angular/material/table';
import { QuestionService } from './../services/Question/Question.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TestService } from './../services/Test/Test.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Test',
  templateUrl: './Test.component.html',
  styleUrls: ['./Test.component.css']
})
export class TestComponent implements OnInit {
public Usernumber!:number;
public testnumber!:number
public testtitle!:string
breakpoint!: number;
Test!:Test
datohijo:number=0
dataSource1 !:MatTableDataSource<any>;
  constructor(private service:TestService,private cd:Router,private route:ActivatedRoute,private service2:QuestionService)
  {
    this.dataSource1 = new MatTableDataSource<any>();
  }

  ngOnInit() {
    let pod=parseInt(this.route.snapshot.paramMap.get('id')!);
    let id= pod;
    this.breakpoint = (window.innerWidth <= 700) ? 1 : 1;
    this.Usernumber=id;
    let park=parseInt(this.route.snapshot.paramMap.get('testid')!);
    this.testnumber=park
    this.getAllQuestionbytest(this.testnumber)
    this.getidtEST(this.testnumber)
  }
  onResize(event:any) {
    this.breakpoint = (event.target.innerWidth <= 700) ? 1 : 1;
  }
  getAllQuestionbytest(id:number){
    this.service2.getallQuestionsbyctest(id).subscribe((response: any) => {
      this.dataSource1.data = response;
      console.log(response)
    });


  }

  getidtEST(id:number){

    this.service.getById(id).subscribe((response:any)=>{

  this.Test =response;
  console.log(this.Test);
   this.testtitle=this.Test.Testname;

    });


  }

  Respuestarecibida(e:any){

      console.log(e)
      this.datohijo=e+this.datohijo;

  }


terminartest(){



  this.cd.navigate(['/User',this.Usernumber,'Test_Vocacional',this.testnumber,'Result', this.datohijo])


}





}
