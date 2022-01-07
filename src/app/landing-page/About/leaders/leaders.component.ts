import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';
import { LandingService } from 'src/app/landing.service';

@Component({
  selector: 'app-leaders',
  templateUrl: './leaders.component.html',
  styleUrls: ['./leaders.component.css']
})
export class LeadersComponent implements OnInit {

  name: any='';
  image: any='';
  designation: any='';

  leaders = (this.name,this.designation);
  constructor(private landingService: LandingService) { }

  ngOnInit(): void {
    this.landingService.getLeaders().subscribe((data: any)=>{
      this.leaders=data;
      }) 

    AOS.init();
  }

}
