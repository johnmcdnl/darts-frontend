import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {


    target: Target;

    constructor(private http: Http) {
        this.target = new Target();
    }

    ngOnInit() {
    }

    create() {
        let targetCreateEndPoint = "http://localhost:4500/darts/api/targets";
        let data = JSON.stringify(this.target);
        this.http.post(targetCreateEndPoint, data)
            .subscribe(
                data => alert('Successful login'),
                error => alert(error.json().message)
            );
    }

}

class Target {
    username: string;
    targetName: string;
    attempts: number;
    success: number
}