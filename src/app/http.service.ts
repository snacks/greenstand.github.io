import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Tree } from './home/map/tree.model';
// import 'rxjs/Rx';


@Injectable()
export class HttpService {
    constructor(private http: Http) {}

    getTeam() {
        return this.http.get('https://treetracker-24de7.firebaseio.com/team-members.json');
        // .map(
        //     (response: Response) => {
        //         const team = response.json();
        //         console.log(team);
        //         return team;
        // });
    }

    // just used this post to post data to firebase db.
    putAllTrees(trees: Tree[]) {
        return this.http.put('https://treetracker-24de7.firebaseio.com/trees.json', trees);
    }

    getTrees() {
        return this.http.get('https://treetracker-24de7.firebaseio.com/trees.json');
    }

    // for use with trees.json file in /assets
    // getTrees() {
    //     return this.http.get('./assets/trees.json');
    // }
}
