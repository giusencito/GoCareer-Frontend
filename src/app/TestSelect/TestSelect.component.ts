import { MatTableDataSource } from '@angular/material/table';
import { TestService } from './../services/Test/Test.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-TestSelect',
  templateUrl: './TestSelect.component.html',
  styleUrls: ['./TestSelect.component.css']
})
export class TestSelectComponent implements OnInit {
  dataSource1 !:MatTableDataSource<any>;
  dataSource2 !:MatTableDataSource<any>;
  breakpoint!: number;
  public Usernumber!:number;
  constructor(private service:TestService,private cd:Router,private route:ActivatedRoute) {
    this.dataSource1 = new MatTableDataSource<any>();
    this.dataSource2 = new MatTableDataSource<any>();

  }

  ngOnInit() {
    let pod=parseInt(this.route.snapshot.paramMap.get('id')!);
   let id= pod;
   this.Usernumber=id;
    this.breakpoint = (window.innerWidth <= 700) ? 1 : 2;
    this.getAllcommons()
    this.getAllperzo()
  }
  onResize(event:any) {
    this.breakpoint = (event.target.innerWidth <= 700) ? 1 : 2;
  }
  getAllcommons(){
    this.service.getallcommos().subscribe((response: any) => {
      this.dataSource1.data = response;
      console.log(response)
    });


  }
  getAllperzo(){
    this.service.getallperzo().subscribe((response: any) => {
      this.dataSource2.data = response;
      console.log(response)
    });


  }

entaraltest(testid:number){


  this.cd.navigate(['/User',this.Usernumber,'Test_Vocacional',testid])

}











}
