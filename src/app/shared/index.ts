import {Headers} from "@angular/http";
import {Auth} from "../auth/auth.service";
export class Shared {


    static authenticatedHeaders(): Headers {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append("Authorization", Auth.getJWTToken());
        return headers
    }
}