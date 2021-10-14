import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/Message/Message.service';
import { Message } from '../models/Message';
import { User } from '../models/Users';
import { UsersService } from '../services/Users/Users.service';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-AnswerMessage',
  templateUrl: './AnswerMessage.component.html',
  styleUrls: ['./AnswerMessage.component.css']
})
export class AnswerMessageComponent implements OnInit {
  especialistid!:number
  messageid!:number;
  message!:Message
  user!:User
  messagdes!:string
  usernmae!:string
  userlast!:string
  public answerform!:FormGroup;
  dataSource !:MatTableDataSource<any>;
  constructor(private service:MessageService,private service2:UsersService,private router:ActivatedRoute,private formBuilder:FormBuilder,private route:Router) {

    this.message={} as Message
    this.user={} as User
    this.dataSource = new MatTableDataSource<any>();
    this.answerform=this.formBuilder.group({

      answer:['',Validators.required]




    })
  }

  ngOnInit() {

    let pod=parseInt(this.router.snapshot.paramMap.get('mesid')!);
    let id= pod;
    this.messageid=id;
    this.getMessage()
    this.getidMessage(id)


  }

  getidMessage(id:number){

    this.service.getById(id).subscribe((response:any)=>{

      this.message=response;
       console.log(this.message);
      this.messagdes=this.message.MessageDescription;
      this.getidUser(this.message.UserId)
    });


  }

  getidUser(id:number){

    this.service2.getById(id).subscribe((response:any)=>{

      this.user=response;
       console.log(this.user);
      this.usernmae=this.user.UserName;
      this.userlast=this.user.UserName

    });


  }


Envio(){
this.newAnswer()
let sos=parseInt(this.router.snapshot.paramMap.get('id')!)
this.Limpiar()
this.route.navigate(['/Especialist',sos])
}


  newAnswer() {
    this.service.update(this.message.id, this.message).subscribe((response: any) => {
      this.dataSource.data = this.dataSource.data.map((o: Message) => {
        if (o.id === response.id) {
          o = response;
        }
        return o;
      });

    });
  }


  Limpiar(){

    this.answerform.reset();


  }

  getMessage(){

    this.service.getAll().subscribe((response:any)=>{
      this.dataSource.data=response;
      console.log("datos");
      console.log(response)


      });


  }





}
