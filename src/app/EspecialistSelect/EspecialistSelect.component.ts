import { Component, OnInit } from '@angular/core';
import { EspecialistService } from '../services/Especialist/Especialist.service';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-EspecialistSelect',
  templateUrl: './EspecialistSelect.component.html',
  styleUrls: ['./EspecialistSelect.component.css']
})
export class EspecialistSelectComponent implements OnInit {
  dataSource !:MatTableDataSource<any>;
  useride!:number
  constructor(private service:EspecialistService,private cd:Router,private router:ActivatedRoute) {
    this.dataSource = new MatTableDataSource<any>();
   }

  ngOnInit( ) {
    let pod=parseInt(this.router.snapshot.paramMap.get('id')!);
   let id= pod;
   this.useride=id;

    this.getespecialist()
  }


getespecialist(){

  this.service.getAll().subscribe((response:any)=>{
    this.dataSource.data=response;
    console.log("datos");
    console.log(response)
    });


}

especialistSelect(id:number){

  this.cd.navigate(['/User',this.useride,'especialistSelect',id])

}








}
