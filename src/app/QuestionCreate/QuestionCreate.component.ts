import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from './../services/Question/Question.service';
import { Question } from './../models/Question';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-QuestionCreate',
  templateUrl: './QuestionCreate.component.html',
  styleUrls: ['./QuestionCreate.component.css']
})
export class QuestionCreateComponent implements OnInit {
  public Questionform!:FormGroup;
  dataSource !:MatTableDataSource<any>;
  Question!:Question;
  Especialistnumber!:number;
  type!:string
  constructor(private formBuilder:FormBuilder,private service:QuestionService,private route:ActivatedRoute,private cd:Router) {

    this.Question={}as Question;
    this.dataSource = new MatTableDataSource<any>();
    let pod=parseInt(this.route.snapshot.paramMap.get('id')!);
    let id= pod;
    this.type=this.route.snapshot.paramMap.get('type')!
    this.Especialistnumber=id;
   }

  ngOnInit() {
    this.Questionform=this.formBuilder.group({
      questionname:['',Validators.required],

     })



  }


  registerPreguntar(){

    this.service.create(this.Question).subscribe((response: any) => {
      this.dataSource.data.push( {...response});
      this.dataSource.data = this.dataSource.data.map((o: any) => { return o; });
    });


  }

  crearpregunta(){
   this.Question.Score=0
   this.Question.TestId=1



  }












}
