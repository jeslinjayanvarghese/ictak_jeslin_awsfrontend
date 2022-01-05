import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { LandingService } from 'src/app/landing.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  testimonials:any=[];

  constructor(private landingService: LandingService,private router: Router) { }
  ngOnInit(): void {
    this.landingService.getTestimonial().subscribe((data: any)=>{
      console.log(data);
      this.testimonials=data;
      }) 
 
  }

 customOptions: OwlOptions = {
   loop: true,
   mouseDrag: true,
   touchDrag: true,
   pullDrag: false,
   
   dots: true,
   navSpeed: 600,
   navText: [ ' <i class="material-icons  me-2 text-md">face</i>', ' <i class="material-icons opacity-6 me-2 text-md">face</i>' ],
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
       items: 3
     },
     1400:{
       items:3
     },
     1600:{
      items:3
    }
   },
   nav: true
 }
}
