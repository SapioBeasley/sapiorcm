import { Component, OnInit } from '@angular/core';
import {ProcessesService} from '../../../_services/processes/processes.service';

@Component({
  selector: 'app-patient-check-out',
  templateUrl: './patient-check-out.component.html',
  styleUrls: ['./patient-check-out.component.css']
})
export class PatientCheckOutComponent implements OnInit {
  step;

  constructor(private processesService: ProcessesService) {
    this.step = processesService.getProcess(3);
  }

  ngOnInit() {
  }

}
