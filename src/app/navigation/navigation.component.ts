import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  usernumber!:number
  constructor(private cd:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    let sos=parseInt(this.route.snapshot.paramMap.get('id')!)
    this.usernumber=sos
  }


  IRApREFIL(){

    this.cd.navigate(['/User',this.usernumber,'Profile'])

  }
  irahome(){


    this.cd.navigate(['/User',this.usernumber])

  }










}
