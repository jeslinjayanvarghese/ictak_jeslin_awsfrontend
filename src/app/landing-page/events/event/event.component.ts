import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as AOS from 'aos';

import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";
import { LandingService } from 'src/app/landing.service';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  // eventname: any='';
  // eventtype: any='';
  // eventabout: any='';
  // eventagenda: any='';
  // eventoverview: any='';
  // eventobjective: any='';
  // eventtraining: any='';
  // eventfees: any='';
  // startdate: any='';     
  // enddate: any='';
  // image: any ='';
  

  // events=(this.eventname,this.eventtype,this.eventabout,this.eventagenda,this.eventoverview,this.eventobjective,this.eventtraining,this.eventfees,this.startdate,this.enddate,this.image);

  event: any;
  // name: any='';
  // email: any='';
  // number: any='';
  // event: any='';
  // amount: any='';

  // eventreg=(this.name,this.email,this.number,this.event,this.amount);

  constructor(private fb: FormBuilder,private router:Router,private landingService: LandingService,private activatedrouter:ActivatedRoute) { }

  ngOnInit(): void {

//animation effects
    AOS.init();
//singleevents
      this.activatedrouter.paramMap.subscribe((params) =>
      {        
        console.log(params.get("id"));
        this.landingService.getEventId(params.get("id")).subscribe((data:any)=>{
          this.event=data;
          console.log(this.event);
        })
      })


      // let eventId = localStorage.getItem('addEventId');
      // this.eventService.getEventId(eventId)
      // .subscribe(data => {
      //   console.log(data);
      //   this.event = data;
      // })
    }
      
   
//reg from insertion
  // addEventReg()
  // {
  //   this.eventService.newEventReg(this.eventreg);
  //   console.log(this.eventreg);
  //   alert("Success added reg");
  //   this.router.navigate(['']);
  // }


}
