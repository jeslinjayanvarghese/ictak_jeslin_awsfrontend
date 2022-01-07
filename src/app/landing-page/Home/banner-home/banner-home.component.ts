import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-banner-home',
  templateUrl: './banner-home.component.html',
  styleUrls: ['./banner-home.component.css']
})
export class BannerHomeComponent implements OnInit {

  constructor() { AOS.init(); }

  ngOnInit(): void {
    
  }
  student: number = 0;
  companies: number = 0;
  sf: number = 0; 
  ms:number = 0;
  vi:number = 0;
  op:number = 0;

  evalc(){
    this.student=0;
    this.companies=0;
    this.sf=0;
    this.ms=0;
    this.vi=0;
    this.op=0;
  let studentstop = setInterval(() => {
    this.student++;    
    if (this.student >= 2444) {     
      clearInterval(studentstop);
    }
  }, 1)
  let fsdstop = setInterval(() => {
    this.companies++;    
    if (this.companies >= 50) {
      clearInterval(fsdstop);
    }
  }, 100)
  let sfstop = setInterval(() => {
    this.sf++;
     if (this.sf >= 100) {
       clearInterval(sfstop);
    }
  }, 100)

  let msstop: any = setInterval(() => {
    this.ms++;
    if (this.ms >= 346) {
      clearInterval(msstop);
    }
  }, 10)

  let vistop: any = setInterval(() => {
    this.vi++;
    if (this.vi >= 143) {
      clearInterval(vistop);
    }
  }, 10)

  let opstop: any = setInterval(() => {
    this.op++;
    if (this.op >= 431) {
      clearInterval(opstop);
    }
  }, 10)
  }
  
  
}