import {tokenNotExpired} from "angular2-jwt";

export class Auth {
    loggedIn(): boolean {
        return tokenNotExpired();
    }

    storeToken(token: string) {
        localStorage.setItem("id_token", token);
        return true
    }

    logout(): void {
        localStorage.removeItem('id_token');
    }
}
