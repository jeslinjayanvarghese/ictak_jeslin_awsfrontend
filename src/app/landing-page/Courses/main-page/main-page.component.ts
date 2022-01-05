import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { LandingService } from 'src/app/landing.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  courses:any=[];

  testimonials:any=[];

  constructor(private landingService: LandingService,private router: Router) { }

  ngOnInit(): void {
    this.landingService.getTestimonial().subscribe((data: any)=>{
      console.log(data);
      this.testimonials=data;
      }) 

      this.landingService.getCourses().subscribe((data: any)=>{
        console.log(data);
        this.courses=data;
        }) 
  }
  customOptions: OwlOptions = {
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
        items: 3
      },
      1000: {
        items: 3
      },
      1400:{
        items:3
      },
      1600:{
       items:4
     }
    },
    nav: true
  }
}
