import { Component, OnInit } from '@angular/core';
import {ProcessesService} from '../../../_services/processes/processes.service';

@Component({
  selector: 'app-patient-check-in',
  templateUrl: './patient-check-in.component.html',
  styleUrls: ['./patient-check-in.component.css']
})
export class PatientCheckInComponent implements OnInit {
  step;

  constructor(private processesService: ProcessesService) {
    this.step = processesService.getProcess(1);
  }

  ngOnInit() {
  }

}
