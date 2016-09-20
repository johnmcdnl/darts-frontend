import {Component, OnInit} from "@angular/core";
import {User} from "../../domain/user";
import {Http} from "@angular/http";
import {Auth} from "../auth.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['../auth.component.css']
})
export class LoginComponent implements OnInit {
    user: User;
    auth: Auth;

    constructor(private http: Http, private router: Router) {
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
                response => this.loginSuccessful(response.json().accessToken),
                err => this.loginFailure(err.json())
            )
    }

    loginSuccessful(token: string): void {
        this.auth.storeToken(token);
        this.auth.storeUser(this.user.username);
        this.router.navigate(['dashboard']);
    }

    loginFailure(response: string): void {
        console.log(response)
    }
}
