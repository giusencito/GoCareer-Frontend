import { User } from './../models/Users';
import { Especialist } from 'src/app/models/Especialist';
import { UsersService } from './../services/Users/Users.service';
import { EspecialistService } from './../services/Especialist/Especialist.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-MeetingRoom-Especialist',
  templateUrl: './MeetingRoom-Especialist.component.html',
  styleUrls: ['./MeetingRoom-Especialist.component.css']
})
export class MeetingRoomEspecialistComponent implements OnInit {
  breakpoint!: number;
  public Especialistnumber!:number;
  public Usernumber!:number;
  public Meetingnumber!:number;
  actualEspecialist!: Especialist;
  public actualEspecialistname!:string;
  public actualEspecialistlastname!:string;
  actualUser!:User
  public actualUsername!:string;
  public actualUserlastname!:string;
  constructor(private route:ActivatedRoute,private service:EspecialistService,private service2:UsersService) { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 700) ? 1 : 2;
    let pod=parseInt(this.route.snapshot.paramMap.get('id')!);
    let id= pod;
    this.Especialistnumber=id;
    let park=parseInt(this.route.snapshot.paramMap.get('userid')!);
    this.Usernumber=park
    let pork=parseInt(this.route.snapshot.paramMap.get('metid')!);
    this.Meetingnumber=pork
    this.getidEspecialist(this.Especialistnumber)
    this.getidUser(this.Usernumber)
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

    });



  }

  getidUser(id:number){


    this.service2.getById(id).subscribe((response:any)=>{

      this.actualUser=response;
       console.log(this.actualUser);
   this.actualUsername=this.actualUser.UserName;
   console.log(this.actualUsername)
   this.actualUserlastname=this.actualUser.UserLastName;

    });



  }










}
