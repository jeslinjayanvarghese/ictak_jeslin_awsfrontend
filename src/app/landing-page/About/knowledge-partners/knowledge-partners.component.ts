import { Component, OnInit } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';
import { LandingService } from 'src/app/landing.service';

@Component({
  selector: 'app-knowledge-partners',
  templateUrl: './knowledge-partners.component.html',
  styleUrls: ['./knowledge-partners.component.css']
})
export class KnowledgePartnersComponent implements OnInit {
  image: any ='';
  knowledge =(this.image);
  imageWidth:number =100;
  imageHeight:number =200;
  imageMargin:number = 3;


 
  
  constructor(private landingService: LandingService) { }

  ngOnInit(): void {
    this.landingService.getKnowledge().subscribe((data: any)=>{
    this.knowledge=data;
    }) 
  }

}
