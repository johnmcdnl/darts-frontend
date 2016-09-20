import {tokenNotExpired} from "angular2-jwt";

export class Auth {



    loggedIn(): boolean {
        return tokenNotExpired();
    }

    static getJWTToken(): string {
        return "Bearer " + localStorage.getItem("id_token")
    }

    storeToken(token: string): void {
        localStorage.setItem("id_token", token);
    }

    static getUsername(): string {
        return localStorage.getItem("id_username")
    }

    storeUser(username: string): void {
        localStorage.setItem("id_username", username);
    }

    logout(): void {
        localStorage.removeItem('id_token');
    }
}
