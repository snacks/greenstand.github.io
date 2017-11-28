import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-involved-form',
  templateUrl: './get-involved-form.component.html',
  styleUrls: ['./get-involved-form.component.css']
})
export class GetInvolvedFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  volunteerSubmit() {
    console.log('Volunteering is great and honorable!')
  }

}
