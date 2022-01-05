import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-partnershipcontent',
  templateUrl: './partnershipcontent.component.html',
  styleUrls: ['./partnershipcontent.component.css']
})
export class PartnershipcontentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
