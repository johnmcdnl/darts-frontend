import {Component, OnInit} from '@angular/core';
import {Target} from "../Target";

@Component({
    selector: 'app-retrieve',
    templateUrl: './retrieve.component.html',
    styleUrls: ['./retrieve.component.css']
})
export class TargetsRetrieveComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    target: Target;


}
