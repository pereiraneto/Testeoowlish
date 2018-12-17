import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ClinicService } from '../list-clinics/list-clinics.service';
import { Clinic } from '../models/clinic';

@Component({
  selector: 'app-list-item-detail',
  templateUrl: './list-item-detail.component.html',
  styleUrls: ['./list-item-detail.component.css']
})
export class ListItemDetailComponent implements OnInit {

  clinic: Clinic;

  constructor(
    private route: ActivatedRoute, 
    private clinicService: ClinicService) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id: number = +params['id'];
      if(id){
          this.clinicService
            .getById(id)
            .subscribe((clinic: Clinic) => (this.clinic = clinic));
      }
    });
  }

}
