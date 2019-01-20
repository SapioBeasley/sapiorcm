import {Component, OnInit} from '@angular/core';
import {ProcessesService} from '../../../_services/processes/processes.service';

@Component({
  selector: 'app-billing-process',
  templateUrl: './billing-process.component.html',
  styleUrls: ['./billing-process.component.css']
})
export class BillingProcessComponent implements OnInit {
  steps;

  constructor(private processesService: ProcessesService) {
    this.steps = processesService.getProcesses();
  }

  ngOnInit() {
  }

}
