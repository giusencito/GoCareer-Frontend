import { User } from 'src/app/models/Users';
import { Component, OnInit,ViewChild,AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/Users/Users.service';
import { StudentLoginComponent } from '../StudentLogin/StudentLogin.component';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  @ViewChild(StudentLoginComponent) studentlogin1!:StudentLoginComponent
  public Usernumber!:number;
  public actualusername!:string;
  public actualuserlastname!:string;
  actualuser!: User;

  constructor(private route:ActivatedRoute,private service:UsersService,private cd:Router) {

         this.actualuser={}as User;


  }

  ngOnInit(): void {
   let pod=parseInt(this.route.snapshot.paramMap.get('id')!);
   let id= pod;
   this.Usernumber=id;
   this.getidFarmer(this.Usernumber);



  }
ngAfterViewInit(): void {


}


  getidFarmer(id:number){

    this.service.getById(id).subscribe((response:any)=>{

      this.actualuser=response;
       console.log(this.actualuser);
   this.actualusername=this.actualuser.UserName;
   console.log(this.actualusername)
   this.actualuserlastname=this.actualuser.UserLastName;
   console.log(this.actualuserlastname)

    });


  }

enterespecialist(){



  this.cd.navigate(['/User',this.Usernumber,'especialistSelect'])


}
entercareer(){
  this.cd.navigate(['/User',this.Usernumber,'Careers'])
}
entertest(){


  this.cd.navigate(['/User',this.Usernumber,'Test_Vocacional'])

}



}
