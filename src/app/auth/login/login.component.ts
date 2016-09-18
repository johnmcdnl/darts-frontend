import {Component, OnInit} from '@angular/core';
import {User} from "../../domain/user";
import {Http} from "@angular/http";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['../auth.component.css']
})
export class LoginComponent implements OnInit {
    user: User;

    constructor(private http: Http) {
        this.user = new User();
    }

    ngOnInit() {
    }

    login() {
        let loginEndPoint = "http://localhost:4500/darts/api/auth/login";
        let data = JSON.stringify(this.user);
        this.http.post(loginEndPoint, data)
            .subscribe(
                data => alert('Successful login'),
                error => alert(error.json().message)
            );
    }

}
