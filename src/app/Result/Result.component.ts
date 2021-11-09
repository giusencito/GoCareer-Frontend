import { MatTableDataSource } from '@angular/material/table';
import { WorkService } from './../services/work/Work.service';
import { Career } from './../models/Career';
import { CareerService } from './../services/Careers/Career.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Result',
  templateUrl: './Result.component.html',
  styleUrls: ['./Result.component.css']
})
export class ResultComponent implements OnInit {
  resultnumber!:number;
  Career!:Career
  careername1!:string;
  dataSource !:MatTableDataSource<any>;
  breakpoint!: number;
  constructor(private route:ActivatedRoute,private service:CareerService,private service2:WorkService) {

    this.Career={}as Career
    this.dataSource = new MatTableDataSource<any>();
  }

  ngOnInit() {
    let pod=parseInt(this.route.snapshot.paramMap.get('id')!);
    let id= pod;
    this.breakpoint = (window.innerWidth <= 700) ? 1 : 3;
    let park=parseInt(this.route.snapshot.paramMap.get('resultid')!);
    this.resultnumber=park
    console.log(this.resultado(this.resultnumber))
    this.getidCareer(this.resultado(this.resultnumber))
    this.getAllWorks()
  }
  onResize(event:any) {
    this.breakpoint = (event.target.innerWidth <= 700) ? 1 : 3;
  }

resultado(result:number){

if(result<6){
  return 1
}
else if (result<13){
return 2
}
else{
  return 3
}

}
getidCareer(id:number){

  this.service.getById(id).subscribe((response:any)=>{

this.Career =response;
console.log(this.Career);
 this.careername1=this.Career.careerName;

  });


}

getAllWorks(){
  this.service2.getallworksbycarreer(this.resultado(this.resultnumber)).subscribe((response: any) => {
    this.dataSource.data = response;
    console.log(response)
  });


}










}
