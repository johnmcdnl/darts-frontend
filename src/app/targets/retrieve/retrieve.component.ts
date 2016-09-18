import {Component, OnInit} from "@angular/core";
import {Http} from "@angular/http";

@Component({
    selector: 'app-retrieve',
    templateUrl: './retrieve.component.html',
    styleUrls: ['./retrieve.component.css']
})
export class TargetsRetrieveComponent implements OnInit {

    constructor(private http: Http) {
    }

    ngOnInit() {
        this.retrieveUser("johnmcdnl")
    }


    retrieveUser(user: string) {
        let targetCreateEndPoint = "http://localhost:4500/darts/api/targets/users/" + user;
        this.http.get(targetCreateEndPoint,)
            .subscribe(
                data => alert('Retrieved some data'),
                error => alert(error.json().message)
            );
    }
}
