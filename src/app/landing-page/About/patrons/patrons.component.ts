import { Component, OnInit } from '@angular/core';
import { LandingService } from 'src/app/landing.service';


@Component({
  selector: 'app-patrons',
  templateUrl: './patrons.component.html',
  styleUrls: ['./patrons.component.css']
})
export class PatronsComponent implements OnInit {
  image: any ='';
  patrons =(this.image);
  imageWidth:number =100;
  imageHeight:number =100;
  imageMargin:number = 3;

 

  constructor(private landingService: LandingService) { }

  ngOnInit(): void {
    this.landingService.getPatrons().subscribe((data: any)=>{
      this.patrons=data;
      }) 
  }

}
