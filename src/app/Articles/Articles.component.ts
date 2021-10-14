import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ArticlesService } from '../services/Articles/Articles.service';
@Component({
  selector: 'app-Articles',
  templateUrl: './Articles.component.html',
  styleUrls: ['./Articles.component.css']
})
export class ArticlesComponent implements OnInit {
  dataSource !:MatTableDataSource<any>;
  carerrid!:number
  constructor(private service:ArticlesService,private router:ActivatedRoute) {

    this.dataSource = new MatTableDataSource<any>();

   }

  ngOnInit (): void {
    let pod=parseInt(this.router.snapshot.paramMap.get('careerid')!);
   let id= pod;
   this.carerrid=id;
   console.log(this.carerrid)
   this.getAllArticles();

  }


  getAllArticles(){
    this.service.getallarticlesbycarreer(this.carerrid).subscribe((response: any) => {
      this.dataSource.data = response;
      console.log(response)
    });


  }


















































































}
