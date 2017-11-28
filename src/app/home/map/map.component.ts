import { Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
// import { MapType } from '@angular/compiler/src/output/output_ast';

import { HttpService } from '../../http.service';
import { Tree } from './tree.model';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})



export class MapComponent implements OnInit {
// map stuff
  title: String = 'there is a solution';
  lat: Number = -3.2782507484372636;
  lng: Number = 36.65347424316405;
  zoom: Number = 12;
  ui: Boolean = true;
  scrollWheel: Boolean = false;
  zoomControl: Boolean = false;
  mapType: String = 'hybrid';
  trees: Tree[] = [];
  markerUrl: String = '../../assets/images/tree-marker-40px.png';

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.getTrees()
      .subscribe(
        (response: Response) => {
          console.log('unparsed response:', response);
          this.trees = response.json();
          console.log('parsed response:', this.trees);
        },
        (error) => console.log(error)
      );
  }



  // methods

  // this method is used to transform trees.json into something google maps api can use
  // and then to upload it to firebase. Put it in the this.httpService.getTrees() inside the response.
  // pushTreeDataToTrees(data) {

  //   for (let i = 0; i < data.length; i++) {
  //     // if ((data[i].lat > -11.5 && data[i].lat < -1) && (data[i].lon < 40 && data[i].lon > 29)) {}
  //       const tree: Tree = {
  //         lat: 0,
  //         lng: 0
  //       };

  //       tree.lat = parseFloat(data[i].lat);
  //       tree.lng = parseFloat(data[i].lon);
  //       this.trees.push(tree);
  //   }
  //   console.log('Trees' + this.trees.length);
  //   console.log('The Trees array: ', this.trees);
  //   this.httpService.putAllTrees(this.trees)
  //     .subscribe(
  //       (res: Response) => console.log(res),
  //       (err) => console.log(err)
  //     );
  // }

  centerChanged(event) {
    console.log(event);
  }
}
