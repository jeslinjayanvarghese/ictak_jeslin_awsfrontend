import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  searchText:any;
  query: any
  
  events=[{
    coursename:"",
    regstatus:"",
    fees :"",
    agenda:"",
    objectives: "",
    startdate: "",
    enddate: '',
    image: '',
    creation_date: ""
  }]

              
  constructor(private adminServ:AdminServiceService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.adminServ.getevents().subscribe((data)=>{
      this.events=JSON.parse(JSON.stringify(data));
    })
  }

  addEvents() {
    
  }

  Viewevent(event: any) {

    localStorage.setItem("EditEventID", event._id.toString());

    this.router.navigate(['../view-event'], { relativeTo: this.route });
  }
  editevent(event: any) {
    localStorage.setItem("EditEvent", event._id.toString());
    this.router.navigate(['../edit-event'], { relativeTo: this.route });
  }
  Deleteevent(event: any) {
     
    Swal.fire({
      title: "Are you sure?",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Yes, Delete it!",
      denyButtonText: "No, cancel please!",
      showDenyButton: true,
      text: "You won't be able to revert this!",
      icon: 'warning',
      cancelButtonColor: '#d33',

    }).then((result) => {
      if (result.isConfirmed) {
        this.adminServ.deleteevent(event)
          .subscribe(
            response => {
              if (response) {
                Swal.fire("Sucessfully Deleted", "success")
                  .then(() => {
                    let currentUrl = this.router.url;
                    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
                    this.router.navigate([currentUrl]);
                    });
                  })
              }
              else {
                Swal.fire("Network Error", "Please do after sometime ", "error")
                  .then(() => {
                    this.router.navigate(['../events']);
                  })


              }
            }

          )

      }
      else {
        Swal.fire("Cancelled", "Your  Staff record is safe ", "error");
      }

    })

  }




  
  editAccess(){
    var retrievedObject:any = localStorage.getItem('user1');
    var user1 = JSON.parse(retrievedObject);
  
    return !user1.edit;
    
  }

  deleteAccess(){
    var retrievedObject:any = localStorage.getItem('user1');
    var user1 = JSON.parse(retrievedObject);
 
    return !user1.delete;
  }

  addAccess(){
    var retrievedObject:any = localStorage.getItem('user1');
    var user1 = JSON.parse(retrievedObject);
 
    return !user1.add;
  }



}
