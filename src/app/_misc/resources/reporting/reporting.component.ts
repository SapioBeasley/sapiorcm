import { Component, OnInit } from '@angular/core';
import {ProcessesService} from '../../../_services/processes/processes.service';

@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.css']
})
export class ReportingComponent implements OnInit {
  step;

  constructor(private processesService: ProcessesService) {
    this.step = processesService.getProcess(9);
  }

  ngOnInit() {
  }

}
