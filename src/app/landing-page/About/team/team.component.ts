import { Component, OnInit } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o';
import { LandingService } from 'src/app/landing.service';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  name: any='';
  designation: any='';
  image: any ='';
  about: any ='';

  teams=(this.name,this.designation,this.image,this.about);

  constructor(private landingService: LandingService) { }

  ngOnInit(): void {

    this.landingService.getTeams().subscribe((data: any)=>{
      this.teams=JSON.parse(JSON.stringify(data));
      }) 
  }





  teamSlider: OwlOptions = {
    autoplay:true,
    autoplayTimeout:5000 ,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,

    navText: ['<i class="fas fa-chevron-circle-left text-white"></i>', '<i class="fas fa-chevron-circle-right text-white"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      770: {
        items: 2
      },
      1000: {
        items: 3,
        margin: 20,
        autoHeight : true,

      },
      1400:{
        items:2,
        margin: 20,
        autoHeight : true,
      },
      1600:{
       items:2,
       margin: 20,
       autoHeight : true,
     }
    },
    nav: true
  }


}