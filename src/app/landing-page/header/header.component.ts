import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LandingService } from 'src/app/landing.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  courses:any=[];
  events:any='';

  constructor(private router:Router,private landingService: LandingService) { }

  //courses
  ngOnInit(): void {
    this.landingService.getCourses().subscribe((data: any)=>{
      this.courses=data;
      console.log(this.courses);
      }) 

  //events
    this.landingService.getEvent().subscribe((data: any)=>{
      this.events=data;
      }) 
  }


}
