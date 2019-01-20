import { Component, OnInit } from '@angular/core';
import {ProcessesService} from '../../../_services/processes/processes.service';

@Component({
  selector: 'app-collect-from-payer',
  templateUrl: './collect-from-payer.component.html',
  styleUrls: ['./collect-from-payer.component.css']
})
export class CollectFromPayerComponent implements OnInit {
  step;

  constructor(private processesService: ProcessesService) {
    this.step = processesService.getProcess(7);
  }

  ngOnInit() {
  }


}
