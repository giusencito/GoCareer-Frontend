import { EspecialistService } from './../services/Especialist/Especialist.service';
import { Especialist } from 'src/app/models/Especialist';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Home-Especialist',
  templateUrl: './Home-Especialist.component.html',
  styleUrls: ['./Home-Especialist.component.css']
})
export class HomeEspecialistComponent implements OnInit {
  public Especialistnumber!:number;
  public actualEspecialistname!:string;
  public actualEspecialistlastname!:string;
  actualEspecialist!: Especialist;
  constructor(private route:ActivatedRoute,private service:EspecialistService,private cd:Router) { }

  ngOnInit() {

    let pod=parseInt(this.route.snapshot.paramMap.get('id')!);
    let id= pod;
    this.Especialistnumber=id;
    this.getidEspecialist(this.Especialistnumber);

  }



  getidEspecialist(id:number){


    this.service.getById(id).subscribe((response:any)=>{

      this.actualEspecialist=response;
       console.log(this.actualEspecialist);
   this.actualEspecialistname=this.actualEspecialist.EspecialistName;
   console.log(this.actualEspecialistname)
   this.actualEspecialistlastname=this.actualEspecialist.EspecialistLastName;
   console.log(this.actualEspecialist.EspecialistLastName)

    });



  }


entermensajeria(){


  this.cd.navigate(['/Especialist',this.Especialistnumber,'Messages'])




}

entertestselector(){

  this.cd.navigate(['/Especialist',this.Especialistnumber,'Testselector'])




}












}
