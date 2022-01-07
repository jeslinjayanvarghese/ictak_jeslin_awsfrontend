import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

import { LandingService } from 'src/app/landing.service';

@Component({
  selector: 'app-academiccollaborations',
  templateUrl: './academiccollaborations.component.html',
  styleUrls: ['./academiccollaborations.component.css']
})
export class AcademiccollaborationsComponent implements OnInit {
  members:any='';
  constructor(private landingService: LandingService) { }

  ngOnInit(): void {
    AOS.init();
       this.landingService.getMembers().subscribe((data: any)=>{
      this.members=data;
      }) 
  }
  
  regstatus : boolean =false;


 
  
}
