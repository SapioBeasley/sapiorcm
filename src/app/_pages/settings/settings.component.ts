import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {ProvidersService} from '../../_services/providers/providers.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  providerData: object;

  settingsForm = this.formBuilder.group({
    npi: ['']
  });

  constructor(
    private formBuilder: FormBuilder, private providersService: ProvidersService
  ) {
  }

  ngOnInit() {
  }

  setNpi() {
    this.providersService.getByNpi(this.settingsForm.value.npi)
      .subscribe((providerData) => this.providerData = providerData);
  }

}
