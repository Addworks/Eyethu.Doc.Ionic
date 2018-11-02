import 'rxjs/Rx';
import {Injectable} from '@angular/core';
import {SERVER_URL} from './config';
import {Http} from '@angular/http';

let brokersURL = SERVER_URL + 'GetPatients?doctorId=1';
let patientDetailURL = SERVER_URL + 'GetPatient?patientId=';

@Injectable()
export class BrokerService {

    constructor(public http: Http) {

    }

    findAll() {
        //alert("findall");
        return this.http.get(brokersURL)
            .map(res => res.json())
            .toPromise();
    }

    findById(id) {
        return this.http.get(patientDetailURL + id)
            .map(res => res.json())
            .toPromise();
    }

}
