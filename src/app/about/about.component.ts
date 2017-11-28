import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { HttpService } from '../http.service';
import { TeamMember } from './team-member.model';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
  teamMembers: TeamMember[] = [];

  constructor (private httpService: HttpService) {}

  ngOnInit() {
    console.log('about page!');

    this.httpService.getTeam()
      .subscribe(
        (res: Response) => {
          this.teamMembers = res.json();
          console.log(this.teamMembers);
        },
        (error) => console.log(error)
      );
  }

}
