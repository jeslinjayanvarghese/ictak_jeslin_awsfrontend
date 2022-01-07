import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { LandingService } from 'src/app/landing.service';

@Component({
  selector: 'app-event-testimonials',
  templateUrl: './event-testimonials.component.html',
  styleUrls: ['./event-testimonials.component.css']
})
export class EventTestimonialsComponent implements OnInit {

  image: any ='';
  testimony: any ='';
  name:any='';
  designation:any='';
  eventtestimonial =(this.image,this.name,this.designation);

  constructor(private landingService: LandingService) { }

  ngOnInit(): void {
     this.landingService.getTestimonial().subscribe((data: any)=>{
      this.eventtestimonial=data;
      }) 
  }
  testimonial: OwlOptions = {
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
        items: 3, margin: 20
      },
      1000: {
        items: 3, margin: 20
      },
      1400:{
        items:3, margin: 20
      },
      1600:{
       items:4, margin: 20
     }
    },
    nav: true
  }
}
