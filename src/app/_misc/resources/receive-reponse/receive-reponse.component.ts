import { Component, OnInit } from '@angular/core';
import {ProcessesService} from '../../../_services/processes/processes.service';

@Component({
  selector: 'app-receive-reponse',
  templateUrl: './receive-reponse.component.html',
  styleUrls: ['./receive-reponse.component.css']
})
export class ReceiveReponseComponent implements OnInit {
  step;

  constructor(private processesService: ProcessesService) {
    this.step = processesService.getProcess(6);
  }

  ngOnInit() {
  }


}
