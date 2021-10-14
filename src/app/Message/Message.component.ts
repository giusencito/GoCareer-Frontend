
import { User } from 'src/app/models/Users';
import { MessageService } from './../services/Message/Message.service';
import { Component, OnInit,AfterViewInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../services/Users/Users.service';
@Component({
  selector: 'app-Message',
  templateUrl: './Message.component.html',
  styleUrls: ['./Message.component.css']
})
export class MessageComponent implements OnInit,AfterViewInit {
  dataSource !:MatTableDataSource<any>;
  especialistide!:number
  User!:User
  dataSource2 !:MatTableDataSource<any>;
  esde!:string
  array:string[]=[]

  constructor(private service:MessageService,private cd:Router,private router:ActivatedRoute,private serivce2:UsersService) {

    this.dataSource = new MatTableDataSource<any>();
    this.dataSource2 = new MatTableDataSource<any>();

     this.User={}as User

   }

  ngOnInit() {

   let pod=parseInt(this.router.snapshot.paramMap.get('id')!);
   let id= pod;
   this.especialistide=id;
   this.getMessage(this.especialistide)
   this.getUserse()


  }

  getMessage(id:number){

    this.service.getallMessagesbyEspecialist(id).subscribe((response:any)=>{
      this.dataSource.data=response;
      console.log("datos");
      console.log(response)


      });


  }

  getUserse(){

    this.serivce2.getAll().subscribe((response:any)=>{
      this.dataSource2.data=response;
      console.log("datos");
      console.log(response)
      for(let i of this.dataSource2.data){


        this.array.push(i.UserName)
        console.log(this.array)


     }




      });


  }

geusername(){
console.log("ss")

this.array.push('aaaaaa')


}



ngAfterViewInit() {
  console.log('inicio')

  console.log(this.array)

}

entermessage(id:number){
  this.cd.navigate(['/Especialist',this.especialistide,'Messages',id])
}










}

