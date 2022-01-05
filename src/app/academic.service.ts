import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AcademicService {

  constructor(private http: HttpClient) { }
  // formSubmit(){
  //   console.log('service');
  //   return this.http.post<any>("http://localhost:3000/");
  // }
    getMembers(){
    console.log('service');
    return this.http.get<any>("http://localhost:3000/academic");
  }
}
