import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Clinic } from '../models/clinic';

@Injectable()
export class ClinicService{

    private baseUrl: string = 'http://localhost:3000/clinics';
    // private headers: Headers = new Headers({'Content-Type': 'application/json'});


    constructor(
        private http: HttpClient
    ){}

    getAll() {
        return this.http.get<Clinic[]>(this.baseUrl);
    }

    getById(id: number) {
        return this.http.get<Clinic>(this.baseUrl + '/' + id);
    }
}