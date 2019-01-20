import { Component, OnInit } from '@angular/core';
import {ProcessesService} from '../../../_services/processes/processes.service';

@Component({
  selector: 'app-prepare-claim',
  templateUrl: './prepare-claim-resource.component.html',
  styleUrls: ['./prepare-claim-resource.component.css']
})
export class PrepareClaimResourceComponent implements OnInit {
  step;

  constructor(private processesService: ProcessesService) {
    this.step = processesService.getProcess(4);
  }

  ngOnInit() {
  }


}
