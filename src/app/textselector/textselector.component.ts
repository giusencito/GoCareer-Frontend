import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-textselector',
  templateUrl: './textselector.component.html',
  styleUrls: ['./textselector.component.css']
})
export class TextselectorComponent implements OnInit {

  constructor(private cd:Router,private route:ActivatedRoute) { }
  Especialistnumber!:number;
  type!:string
  ngOnInit(): void {

    let pod=parseInt(this.route.snapshot.paramMap.get('id')!);
    let id= pod;
    this.Especialistnumber=id;

  }


enterPerzotest(){
this.type='perzo'
  this.cd.navigate(['/Especialist',this.Especialistnumber,'Testselector',this.type])

}
entercommontest(){
  this.type='comm'
  this.cd.navigate(['/Especialist',this.Especialistnumber,'Testselector',this.type])



}


}
