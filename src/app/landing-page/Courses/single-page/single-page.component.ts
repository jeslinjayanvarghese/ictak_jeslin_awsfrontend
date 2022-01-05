import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LandingService } from 'src/app/landing.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.css']
})
export class SinglePageComponent implements OnInit {

  course:any=[];
  submitted: boolean = false;
  testimonial:any=[];
  CourseReg:any=[];

  constructor(private router: Router,private landingService: LandingService,private activatedrouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedrouter.paramMap.subscribe((params) =>
    {        
      console.log(params.get("id"));
      this.landingService.getCourseId(params.get("id")).subscribe((data:any)=>{
        this.course=data;
        console.log(data);
        localStorage.setItem("coursename", this.course.courseTitle);
      })
    })

    


  //   let cname = localStorage.getItem("coursename");
  //   this.landingService.getCourseTestimonial(cname).subscribe((data)=>{
  //   this.testimonial=data;
  // })

  }

  newReg(){
    console.log(this.CourseReg);
    this.landingService.regSubmit(this.CourseReg).subscribe(
      response=>{
        console.log("new reg success");

      },
      err=>{
        console.log("failed");
        alert("Something happened Wrong try again");
      }
    )
      
  }





  dynamicSlides = [
    {
      id: 1,
      src:'https://i.pinimg.com/564x/20/c4/e3/20c4e382faedbb1e917c772dd62c9fd2.jpg',
      alt:'Mean Stack',
      title:'Side 1'
    },
    {
      id: 2,
      src:'',
      alt:'Mern Stack',
      title:'Side 2'
    },
    {
      id: 3,
      src:'https://miro.medium.com/max/1400/1*6l15igU_z2Uj15SzOGx1Iw.png',
      alt:'Data Science',
      title:'Side 3'
    },
    {
      id: 4,
      src:'https://hackr.io/blog/artificial-intelligence-courses/thumbnail/large',
      alt:'AI',
      title:'Side 4'
    },
    {
      id: 5,
      src:'https://5.imimg.com/data5/ME/DN/GLADMIN-56099733/training-on-software-testing-500x500.png',
      alt:'Software Testing',
      title:'Side 5'
    }
  ]



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

