import { ActivatedRoute, Router } from '@angular/router';
import { MeetingService } from './../services/Meeting/Meeting.service';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-Reserved',
  templateUrl: './Reserved.component.html',
  styleUrls: ['./Reserved.component.css'],
  providers: [DatePipe]
})
export class ReservedComponent implements OnInit {
  breakpoint!: number;
  dataSource !:MatTableDataSource<any>;
  escialistid!:number
  proDate = new Date();
  proDatevalue!:string;
  constructor(private service:MeetingService,private route:ActivatedRoute,private datePipe: DatePipe,private cd:Router) {
    this.dataSource = new MatTableDataSource<any>();
  }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 700) ? 1 : 1;
    let pod=parseInt(this.route.snapshot.paramMap.get('id')!);
    let id= pod;
    this.escialistid=id;
    this.getAllMeetings()
  }
  onResize(event:any) {
    this.breakpoint = (event.target.innerWidth <= 700) ? 1 : 1;
  }

  getAllMeetings(){
    this.service.getallMeetingsbyespecialist(this.escialistid).subscribe((response: any) => {
      this.dataSource.data = response;
      console.log(response)
    });


  }

getfecha(fecha:Date){
  this.proDate=fecha
  console.log(this.proDate)
  this.proDatevalue = this.datePipe.transform(fecha, 'yyyy-MM-dd')!;


  return this.proDatevalue




}
gethour(fecha:Date){

  this.proDate=fecha
  console.log(this.proDate)
  this.proDatevalue = this.datePipe.transform(fecha, 'hh:mm')!;


  return this.proDatevalue





}
iraconsulta(meetingid:number,iduser:number){


  this.cd.navigate(['/Especialist',this.escialistid,'Profile','Meetings',meetingid,iduser])


}

}
