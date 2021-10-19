import { ActivatedRoute, Router } from '@angular/router';
import { Especialist } from 'src/app/models/Especialist';
import { EspecialistService } from './../services/Especialist/Especialist.service';
import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-especialist-profile',
  templateUrl: './especialist-profile.component.html',
  styleUrls: ['./especialist-profile.component.css']
})
export class EspecialistProfileComponent implements OnInit {
  breakpoint!: number;
  public Especialistnumber!:number;
  public actualEspecialistname!:string;
  public actualEspecialistlastname!:string;
  public actualEspecialistemail!:string;
  public actualEspecialistinformation!:string;
  actualEspecialist!: Especialist;
  constructor(private service:EspecialistService,private route:ActivatedRoute,private cd:Router) { }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth <= 700) ? 1 : 2;
    let pod=parseInt(this.route.snapshot.paramMap.get('id')!);
    let id= pod;
    this.Especialistnumber=id;
    this.getidEspecialist(this.Especialistnumber);
  }
  onResize(event:any) {
    this.breakpoint = (event.target.innerWidth <= 700) ? 1 : 2;
  }
  getidEspecialist(id:number){


    this.service.getById(id).subscribe((response:any)=>{

      this.actualEspecialist=response;
       console.log(this.actualEspecialist);
   this.actualEspecialistname=this.actualEspecialist.EspecialistName;
   console.log(this.actualEspecialistname)
   this.actualEspecialistlastname=this.actualEspecialist.EspecialistLastName;
   console.log(this.actualEspecialist.EspecialistLastName)
this.actualEspecialistemail=this.actualEspecialist.EspecialistEmail
this.actualEspecialistinformation=this.actualEspecialist.EspecialistInformation
    });



  }

GotoMeetings(){

  this.cd.navigate(['/Especialist',this.Especialistnumber,'Profile','Meetings'])


}











}
