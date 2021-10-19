import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-Especialist-navigation',
  templateUrl: './Especialist-navigation.component.html',
  styleUrls: ['./Especialist-navigation.component.css']
})
export class EspecialistNavigationComponent implements OnInit {
   especiaListnumber!:number
  constructor(private cd:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    let sos=parseInt(this.route.snapshot.paramMap.get('id')!)
    this.especiaListnumber=sos
  }
  IRApREFIL(){

    this.cd.navigate(['/Especialist',this.especiaListnumber,'Profile'])

  }
  irahome(){


    this.cd.navigate(['/Especialist',this.especiaListnumber])

  }
}
