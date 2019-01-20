import { Component, OnInit } from '@angular/core';
import {ProcessesService} from '../../../_services/processes/processes.service';

@Component({
  selector: 'app-transmit-claim',
  templateUrl: './transmit-claim.component.html',
  styleUrls: ['./transmit-claim.component.css']
})
export class TransmitClaimComponent implements OnInit {
  step;

  constructor(private processesService: ProcessesService) {
    this.step = processesService.getProcess(5);
  }

  ngOnInit() {
  }


}
