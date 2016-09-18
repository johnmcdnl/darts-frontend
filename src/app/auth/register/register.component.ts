import {Component, OnInit} from "@angular/core";
import {Http} from "@angular/http";
import {User} from "../../domain/user";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['../auth.component.css'],
})
export class RegisterComponent implements OnInit {


    constructor(private http: Http) {
    }

    ngOnInit() {
    }

    user: User = new User();

    register() {
        let registerEndpoint = "http://localhost:4500/darts/api/auth/register";
        let data = JSON.stringify(this.user);
        this.http.post(registerEndpoint, data)
            .subscribe(
                data => alert('Successful Register!'),
                error => alert(error.json().message)
            );
    }
}