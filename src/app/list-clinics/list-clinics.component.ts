import { Component, OnInit } from '@angular/core';
import { Clinic } from '../models/clinic';
import { ClinicService } from './list-clinics.service';

@Component({
  selector: 'app-list-clinics',
  templateUrl: './list-clinics.component.html',
  styleUrls: ['./list-clinics.component.css']
})
export class ListClinicsComponent implements OnInit {

  clinics: Clinic[] = [];

  constructor(private clinicService: ClinicService) { }

  ngOnInit() {
    this.clinicService
      .getAll()
      .subscribe(data => {
        console.log(data);
        
        this.clinics = data
      });
      
  }

}
