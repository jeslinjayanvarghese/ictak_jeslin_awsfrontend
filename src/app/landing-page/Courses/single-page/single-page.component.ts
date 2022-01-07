import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LandingService } from 'src/app/landing.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.css']
})
export class SinglePageComponent implements OnInit {

  course:any=[];
  submitted: boolean = false;
  testimonials:any=[];

  
  CourseReg:any={
    name: '',
    email:'', 
    phoneno:'',
    courseTitle:'',
    courseAmount:''
  };

  constructor(private router: Router,private landingService: LandingService,private activatedrouter: ActivatedRoute) { }

  ngOnInit(): void {

    //SingleCoure
    this.activatedrouter.paramMap.subscribe((params) =>
    {        
      console.log(params.get("id"));
      this.landingService.getCourseId(params.get("id")).subscribe((data:any)=>{
        this.course=data;
        // console.log(this.course.courseTitle,"26line");
        localStorage.setItem("coursename", this.course.courseTitle);
      })
    })


    //CourseName passed for CourseTestimonials
    let cname = localStorage.getItem("coursename");
    // console.log(cname,"coursecname");
    this.landingService.getCourseTestimonial(cname).subscribe((data)=>{
    this.testimonials=data;
  })


  //Testimonials
  this.landingService.getTestimonial().subscribe((data: any)=>{
    // console.log(data);
    this.testimonials=data;
    }) 

  }


  //Course Registration
  newReg(){ 
    
    this.landingService.regSubmit(this.CourseReg,this.course.courseTitle).subscribe((data: any)=>{
      console.log(data +"ts");
      }) 
      alert("Registration Successfull");
      window.location.reload();
  }


 //owlCarousel

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
function courseTitle(arg0: string, courseTitle: any) {
  throw new Error('Function not implemented.');
}

