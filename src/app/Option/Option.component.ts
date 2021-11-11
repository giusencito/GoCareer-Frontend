import { FormGroup, FormBuilder } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { OptionService } from './../services/Option/Option.service';
import { Option } from './../models/Option';
import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-Option',
  templateUrl: './Option.component.html',
  styleUrls: ['./Option.component.css']
})
export class OptionComponent implements OnInit {
  dataSource1 !:MatTableDataSource<any>;
  fast:number=1
  @Output()respuesta= new EventEmitter();
  @Input() idquestion!:number
  checkboxes: number[]=[]
  falses!:number;
  reccorido!:boolean;
  conjunto!:FormGroup
  disable:boolean=false
isactive: boolean[]=[]
constructor(private service:OptionService,private formbuilder:FormBuilder ) {
    this.dataSource1 = new MatTableDataSource<any>();
   this.falses=1;

  }

  ngOnInit() {
    this.getidQuestion(this.idquestion)


  }







  getidQuestion(id:number){

    this.service.getallOptionsbyQuestion(id).subscribe((response: any) => {
      this.dataSource1.data = response;
      console.log(response)

      for (var index in this.dataSource1.data){
        this.checkboxes.push(this.falses)
        this.falses=this.falses+1



      }

      //console.log(this.checkboxes)

























  });


  }

































getvalor(id:number){


var en=this.checkboxes[id]
console.log("inicio")
console.log(en)
return en;
}


changevalue(id:number){

  console.log(this.dataSource1.data)




 var k=this.dataSource1.data[id].points
 console.log(k)
this.respuesta.emit(k)

    console.log("termina")

this.disable=true





}












}
