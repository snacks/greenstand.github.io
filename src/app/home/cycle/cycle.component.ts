import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cycle',
  templateUrl: './cycle.component.html',
  styleUrls: ['./cycle.component.css']
})
export class CycleComponent implements OnInit {
  donorInteractionCoords: Number[] = [];
  constructor() { }

  ngOnInit() {
  }

// this is pretty accurate responsive % of img clicked coordinates
// use these to somehow show text box with relevant data/text upon click
// on a circle in picture and hide previously opened text box
    getCoords(event: any) {
      let width = event.path[0].clientWidth;
      let height = event.path[0].clientHeight;
      let coordX = event.offsetX;
      let coordY = event.offsetY;
      let percX = coordX / width;
      let percY = coordY / height;


      console.log(event);
      console.log(coordX + '\n', coordY);
      console.log(`pic-width: ${width}\n`, `pic-height: ${height}`);
      console.log(percX + '\n',  percY);
    }
}
