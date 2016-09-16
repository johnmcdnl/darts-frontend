import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {


    constructor(private http: Http) {
    }

    ngOnInit() {
    }

    user: User = new User();

    registerUser() {
        let CREATE_USER_ENDPOINT = "http\://localhost:4500/darts/api/auth/register";
        let data = JSON.stringify(this.user);
        console.log(CREATE_USER_ENDPOINT, data);
        this.http.post(CREATE_USER_ENDPOINT, data)
            .subscribe(
                data => alert('Your account has been created!'),
                error => alert(error.json().message)
            );
    }
}

class User {
    username: string;
    password: string;
}