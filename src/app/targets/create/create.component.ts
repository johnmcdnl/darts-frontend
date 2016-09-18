import {Component, OnInit} from "@angular/core";
import {Http} from "@angular/http";
import {Target} from "../Target";
import {Shared} from "../../shared/index";

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class TargetCreateComponent implements OnInit {

    target: Target;

    constructor(private http: Http) {
        this.target = new Target();
    }

    ngOnInit() {
    }

    create() {
        let targetCreateEndPoint = "http://localhost:4500/darts/api/targets";
        let data = JSON.stringify(this.target);
        this.http.post(targetCreateEndPoint, data, {headers: Shared.authenticatedHeaders()})
            .subscribe(
                data => alert('Created Target'),
                error => alert(error.json().message)
            );
    }

}