import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  server_address: string ='http://localhost:3000/api';
  // server_address: string ='http://localhost:3000';
  
  constructor(private http: HttpClient) { }

  //Install Better Comments in VScode


  //!About


  //?------------Industrial------------
  getIndustrial(){
    console.log('service');
    return this.http.get<any>(`${this.server_address}/industry`);
  }

  //?-----------Knowledge--------------
  getKnowledge(){
    console.log('service');
    return this.http.get<any>(`${this.server_address}/knowledge`);
  }

  //?----------Leaders-------------------
  getLeaders(){
    console.log('service');
    return this.http.get<any>(`${this.server_address}/staff/leaders`);
  }

  //?-----------Patrons-------------------
  getPatrons(){
    console.log('service');
    return this.http.get<any>(`${this.server_address}/patrons`);
  }

  //?-----------Teams---------------------
  getTeams(){
    console.log('service');
    return this.http.get<any>(`${this.server_address}/staff/team`);
  }

  //!Courses

  //?---------------MainPage-----------------------
  getCourses(){
    console.log('service');
    return this.http.get<any>(`${this.server_address}/course`);
  }
 
  //?-------------SinglePageCourse----------------
    getCourseId(id:any){
      console.log("service id course");
      return this.http.get<any>(`${this.server_address}course/courseSingle/`+id);
    }

    regSubmit(course: any){
      console.log(course);
      return this.http.post(`${this.server_address}/registration/courseRegister`,{"reg":course});
    }

  
  //!Offerings
  //?--Academic
  getMembers(){
    console.log('service');
    return this.http.get<any>(`${this.server_address}/academic`);
  }

  //?Corporate
  formSubmit(corporate: any){
    console.log(corporate);
    return this.http.post(`${this.server_address}/CorporateApplication`,{"members":corporate})
  }

 

  //!Testimonials
  getTestimonial(){
    console.log('service');
    return this.http.get<any>(`${this.server_address}/hometestimonials`);
  }

  //!Testimonials
    // getCourseTestimonial(cname:any){
    //   console.log('service');
    //   return this.http.get<any>("http://localhost:3000/hometestimonials",{"c":cname});
    // }

  //!Events

  //?Header
  getEvent(){
    return this.http.get<any>(`${this.server_address}/events`);
  }
  //?SingleEvent
  getEventId(id:any){
    console.log("service id event");
    return this.http.get<any>(`${this.server_address}/events/`+id);
    
  }

}
