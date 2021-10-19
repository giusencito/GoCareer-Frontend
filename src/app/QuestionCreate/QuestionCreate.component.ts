import { OptionService } from './../services/Option/Option.service';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from './../services/Question/Question.service';
import { Question } from './../models/Question';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { TestService } from '../services/Test/Test.service';
import { Option } from '../models/Option';
@Component({
  selector: 'app-QuestionCreate',
  templateUrl: './QuestionCreate.component.html',
  styleUrls: ['./QuestionCreate.component.css']
})
export class QuestionCreateComponent implements OnInit {
  public Questionform!:FormGroup;
  public Optionform!:FormGroup;
  dataSource1 !:MatTableDataSource<any>;
  dataSource2 !:MatTableDataSource<any>;
  Question!:Question;
  Option!:Option
  Especialistnumber!:number;
  Testnumber!:number
  type!:string
  questioncreate!:boolean
  isHidden: boolean = true;
  questionid!:number
  purbeanumber!:number
  constructor(private formBuilder:FormBuilder,private service:QuestionService,private route:ActivatedRoute,private cd:Router,private service2:OptionService) {

    this.Question={}as Question;
    this.Option={}as Option
    this.dataSource1 = new MatTableDataSource<any>();
    this.dataSource2 = new MatTableDataSource<any>();
    let pod=parseInt(this.route.snapshot.paramMap.get('id')!);
    let id= pod;
    this.type=this.route.snapshot.paramMap.get('type')!
    this.Especialistnumber=id;
    let part=parseInt(this.route.snapshot.paramMap.get('testid')!);
    this.Testnumber=part
    this.questioncreate=false
   }

  ngOnInit() {
    this.Questionform=this.formBuilder.group({
      questionname:['',Validators.required],

     })
     this.Optionform=this.formBuilder.group({
      optionname:['',Validators.required],
      optinscore: ["", Validators.compose([Validators.required,Validators.pattern("^[0-9]*$")])],
     })
     console.log("empieza")
     console.log(this.questioncreate)

  }


  registerPreguntar(){
   console.log("registro")
    this.service.create(this.Question).subscribe((response: any) => {
      this.dataSource1.data.push( {...response});
      this.dataSource1.data = this.dataSource1.data.map((o: any) => { return o; });

    });


  }
  registeroption(){
    this.service2.create(this.Option).subscribe((response: any) => {
      this.dataSource2.data.push( {...response});
      this.dataSource2.data = this.dataSource2.data.map((o: any) => { return o; });
    });




  }

  getallquestions(){

    this.service.getAll().subscribe((response: any) => {
      this.dataSource1.data = response;
      console.log(response)
      this.questionid=this.dataSource1.data.length
      console.log(this.questionid)
    });



  }

  crearpregunta(){
   this.getallquestions()
   console.log("hola")
   this.isHidden=false
   this.Question.Score=0
   this.Question.TestId=this.Testnumber
   this.questioncreate=true;
   this.registerPreguntar()
   console.log("termino de registro")
   console.log(this.Question)
   this.Questionform.reset()

  }
  crearopcion(){



   this.Option.OptionName;
   console.log(this.questionid)
   this.Option.QuestionId=this.questionid
   this.Option.OptionName=this.Optionform.value.optionname
   this.Option.Optionpoint=parseInt(this.Optionform.value.optinscore)
   if(this.Option.QuestionId==this.questionid)
   {this.registeroption()
   this.Optionform.reset();}
  }


  prueba(){
console.log(this.Optionform.value.optionname)
console.log(this.Optionform.value.optinscore)
this.purbeanumber=this.Optionform.value.optionname
console.log(this.purbeanumber)
  }
  terminar(){
    this.questioncreate=false;
    this.isHidden=true


  }


  regresar(){

    this.cd.navigate(['/Especialist',this.Especialistnumber])

  }







}
