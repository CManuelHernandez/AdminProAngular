import { Component, OnInit } from '@angular/core';
import { HospitalService } from '../../../services/hospital.service';

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styles: [],
})
export class HospitalesComponent implements OnInit {
  constructor(private HospitalService: HospitalService) {}

  ngOnInit(): void {
    this.HospitalService.cargarHospitales().subscribe((hospitales) => {
      console.log(hospitales);
    });
  }
}
