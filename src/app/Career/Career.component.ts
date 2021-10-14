import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { CareerService } from '../services/Careers/Career.service';
@Component({
  selector: 'app-Career',
  templateUrl: './Career.component.html',
  styleUrls: ['./Career.component.css']
})
export class CareerComponent implements OnInit {
  dataSource !:MatTableDataSource<any>;
  idnumber!:number
  constructor(private service:CareerService,private cd:Router,private routes:ActivatedRoute) {
    this.dataSource = new MatTableDataSource<any>();


  }

  ngOnInit():void {
  let pod=parseInt(this.routes.snapshot.paramMap.get('id')!);
   let id= pod;
   this.idnumber=id;
    this.getAllCareers()

console.log(this.dataSource.data)
  }

  getAllCareers(){
    this.service.getAll().subscribe((response: any) => {
      this.dataSource.data = response;
      console.log(response)
    });


  }


seearticles(carrer:number){


  this.cd.navigate(['/User',this.idnumber,'Careers',carrer])






}
























}
