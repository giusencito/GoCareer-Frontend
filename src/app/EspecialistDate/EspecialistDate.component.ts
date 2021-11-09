import { Message } from './../models/Message';
import { Component, OnInit } from '@angular/core';
import { EspecialistService } from '../services/Especialist/Especialist.service';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Meeting } from '../models/Meeting';
import { Especialist } from '../models/Especialist';
import { MeetingService } from '../services/Meeting/Meeting.service';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { MessageService } from '../services/Message/Message.service';
@Component({
  selector: 'app-EspecialistDate',
  templateUrl: './EspecialistDate.component.html',
  styleUrls: ['./EspecialistDate.component.css']
})
export class EspecialistDateComponent implements OnInit {
  dataSource1 !:MatTableDataSource<any>;
  dataSource2 !:MatTableDataSource<any>;
  public messageform!:FormGroup;
  especialist!:Especialist
  useride!:number
  Meeting!:Meeting
  Message!:Message
  nombre!:string
  apellido!:string
  infor!:string
  date!:Date;
  usermetting!:number
  fechas=[

    "2021-06-17 09:21:20+05:30",
    "2021-06-18 09:21:20+05:30",
    "2021-06-19 09:21:20+05:30",
    "2021-06-20 15:21:20+05:30",
    "2021-06-21 09:21:20+05:30",
    "2021-06-22 14:21:20+05:30",
    "2021-06-23 09:21:20+05:30", "2021-06-28 09:21:20+05:30",
    "2021-06-24 09:21:20+05:30", "2021-06-29 23:21:20+05:30",
    "2021-06-25 18:21:20+05:30", "2021-07-20 09:21:20+05:30",
    "2021-06-26 09:21:20+05:30", "2021-07-20 12:21:20+05:30",
    "2021-06-27 09:21:20+05:30", "2021-06-20 09:21:20+05:30"


  ]
  constructor(private serive:EspecialistService,private router:ActivatedRoute,private service:MeetingService,private route:Router,private formBuilder:FormBuilder,private serivemessage:MessageService) {
    this.dataSource1 = new MatTableDataSource<any>();
    this.dataSource2 = new MatTableDataSource<any>();
    this.especialist={} as Especialist
    this.Meeting={} as Meeting;
    this.Message={}as Message
    this.messageform=this.formBuilder.group({

      message:['',Validators.required]




    })


  }

  ngOnInit() {
    let pod=parseInt(this.router.snapshot.paramMap.get('especid')!);
    let id= pod;
    this.useride=id;
    this.getidEspecialist(this.useride)
    let pad=parseInt(this.router.snapshot.paramMap.get('id')!);
    let pd=pad;
  this.usermetting=pd;
  }


  getidEspecialist(id:number){

    this.serive.getById(id).subscribe((response:any)=>{

      this.especialist=response;
       console.log(this.especialist);
      this.nombre=this.especialist.especialistName;
      this.apellido=this.especialist.especialistLastName;
      this.infor=this.especialist.especialistInformation;
    });


  }


getmeeting(fecha:string){

console.log(fecha)
this.date=new Date(fecha);
console.log(this.date)
this.Meeting.especialistId=this.useride
this.Meeting.date=this.date;
this.Meeting.hour=this.date;
this.Meeting.userId=this.usermetting;
this.NewMeeting();
}

NewMeeting(){

  this.service.create(this.Meeting).subscribe((response: any) => {
    this.dataSource1.data.push( {...response});
    this.dataSource1.data = this.dataSource1.data.map((o: any) => { return o; });
    alert("se programo la cita exitosamente")
    this.route.navigate(['/User',this.usermetting])
  });


}

NewMessage(){

  this.serivemessage.create(this.Message).subscribe((response: any) => {
    this.dataSource2.data.push( {...response});
    this.dataSource2.data = this.dataSource1.data.map((o: any) => { return o; });
    alert("se añadio el mensaje")
    this.messageform.reset();
  });


}


sendMessage(){
this.Message.userId=this.usermetting;
this.Message.especialistId=this.useride;
this.NewMessage();


}


Limpiar(){

this.messageform.reset();


}








}
