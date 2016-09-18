import {Component, OnInit} from "@angular/core";
import {User} from "../../domain/user";
import {Http} from "@angular/http";
import {Auth} from "../auth.service";
import {JwtToken} from "../jwtToken";
import {Observable} from "rxjs";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['../auth.component.css']
})
export class LoginComponent implements OnInit {
    user: User;
    auth: Auth;

    constructor(private http: Http) {
        this.user = new User();
        this.auth = new Auth();
    }

    ngOnInit() {
    }

    login() {
        let loginEndPoint = "http://localhost:4500/darts/api/auth/login";
        let data = JSON.stringify(this.user);

        this.http
            .post(loginEndPoint, data)
            .subscribe(
                response => this.auth.storeToken(response.json().accessToken),
                err => console.log("error")
            );
    }

}
