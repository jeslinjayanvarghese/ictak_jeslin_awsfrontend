import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as AOS from 'aos';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { LandingService } from 'src/app/landing.service';



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})


export class CardsComponent implements OnInit {
  courses:any=[];

  

  testimonials:any=[];

  constructor(private landingService: LandingService,private router: Router) { }

  ngOnInit(): void {
    this.landingService.getTestimonial().subscribe((data: any)=>{
      this.testimonials=data;
      }) 

      this.landingService.getCourses().subscribe((data: any)=>{
        this.courses=data;
        }) 
  }

 customOptions: OwlOptions = {
   loop: true,
   mouseDrag: true,
   touchDrag: true,
   pullDrag: false,
   
   dots: true,
   navSpeed: 600,
   navText: [ ' <i class="material-icons  me-2 text-md">arrow_back_ios</i>', ' <i class="material-icons opacity-6 me-2 text-md">arrow_forward_ios</i>' ],
   responsive: {
     0: {
       items: 1 
     },
     400: {
       items: 1
     },
     770: {
       items: 2,
       margin: 20,
        autoHeight : true,
     },
     1000: {
       items: 3,
       margin: 20,
        autoHeight : true,
     },
     1400:{
       items:3,
       margin: 20,
        autoHeight : true,
     },
     1600:{
      items:3,
      margin: 20,
        autoHeight : true,
    }
   },
   nav: true
 }

}