import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from './../services/Users/Users.service';
import { User } from 'src/app/models/Users';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-User-Profile',
  templateUrl: './User-Profile.component.html',
  styleUrls: ['./User-Profile.component.css']
})
export class UserProfileComponent implements OnInit {
  breakpoint!: number;
  public Usernumber!:number;
  public actualusertname!:string;
  public actualuserlastname!:string;
  public actualuseremail!:string;
  actualUser!: User;
  constructor(private service:UsersService,private route:ActivatedRoute,private cd:Router) {



   }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 700) ? 1 : 2;
    let pod=parseInt(this.route.snapshot.paramMap.get('id')!);
    let id= pod;
    this.Usernumber=id;
    this.getidUser(this.Usernumber)

  }

  onResize(event:any) {
    this.breakpoint = (event.target.innerWidth <= 700) ? 1 : 2;
  }
  getidUser(id:number){


    this.service.getById(id).subscribe((response:any)=>{

      this.actualUser=response;
       console.log(this.actualUser);
   this.actualusertname=response[0].userName;
   console.log(this.actualusertname)
   this.actualuserlastname=response[0].userLastname;
this.actualuseremail=response[0].useremail

    });



  }



  GotoMeetings(){}






}
