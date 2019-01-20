import { Component, OnInit } from '@angular/core';
import {ProcessesService} from '../../../_services/processes/processes.service';

@Component({
  selector: 'app-collect-from-patient',
  templateUrl: './collect-from-patient.component.html',
  styleUrls: ['./collect-from-patient.component.css']
})
export class CollectFromPatientComponent implements OnInit {
  step;

  constructor(private processesService: ProcessesService) {
    this.step = processesService.getProcess(8);
  }

  ngOnInit() {
  }


}
