import {Component, OnInit} from '@angular/core';
import {ProcessesService} from '../../_services/processes/processes.service';

@Component({
  selector: 'app-resources-layout',
  templateUrl: './resources-layout.component.html',
  styleUrls: ['./resources-layout.component.css']
})
export class ResourcesLayoutComponent implements OnInit {
  steps;

  constructor(private processesService: ProcessesService) {
    this.steps = processesService.getProcesses();
  }

  ngOnInit() {
  }

}
