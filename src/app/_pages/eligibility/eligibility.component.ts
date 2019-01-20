import {Component, OnInit} from '@angular/core';
import {PokitdokService} from '../../_services/pokitdok/pokitdok.service';
import {FormArray, FormBuilder} from '@angular/forms';
import {MatChipInputEvent, MatSnackBar} from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

import * as eligibility from '../../_misc/mock/eligibility.json';

@Component({
  selector: 'app-eligibility',
  templateUrl: './eligibility.component.html',
  styleUrls: ['./eligibility.component.css']
})
export class EligibilityComponent implements OnInit {
  public coverage;
  public provider;
  public subscriber;
  public serviceTypes;
  public summary;
  public pharmacy;
  public benefitRelatedEntities;
  public payer;
  public validRequest;
  public accessToken;
  public eligibility;
  public eligibilityForm;
  public isLoading = false;
  public seperators = [ENTER, COMMA];

  constructor(
    private pokitdokService: PokitdokService,
    private formBuilder: FormBuilder,
    public snackBar: MatSnackBar
  ) {
    this.eligibilityForm = this.formBuilder.group({
      member: this.formBuilder.group({
        first_name: this.formBuilder.control('Andreas'),
        last_name: this.formBuilder.control('Beasley'),
        birth_date: this.formBuilder.control('1989-06-08'),
        id: this.formBuilder.control('W000000000')
      }),
      provider: this.formBuilder.group({
        first_name: this.formBuilder.control('Andreas'),
        last_name: this.formBuilder.control('Beasley'),
        npi: this.formBuilder.control('1234567893')
      }),
      trading_partner_id: this.formBuilder.control('mockpayer'),
      service_types: this.formBuilder.array([
        this.formBuilder.control('health_benefit_plan_coverage')
      ])
    });
  }

  ngOnInit() {
    this.getAccesstoken();

    this.eligibility = eligibility.default;
    this.coverage = this.eligibility.data.coverage;
    this.payer = this.eligibility.data.payer;
    this.provider = this.eligibility.data.provider;
    this.subscriber = this.eligibility.data.subscriber;
    this.validRequest = this.eligibility.data.valid_request;
    this.serviceTypes = this.eligibility.data.service_types;
    this.summary = this.eligibility.data.summary;
    this.pharmacy = this.eligibility.data.pharmacy;
    this.benefitRelatedEntities = this.eligibility.data.benefit_related_entities;
  }





  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      const requirements = this.eligibilityForm.get('service_types') as FormArray;
      requirements.push(this.formBuilder.control(value.trim()));
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(index: number): void {
    const serviceTypes = this.eligibilityForm.get('service_types') as FormArray;

    if (index >= 0) {
      serviceTypes.removeAt(index);
    }
  }





  getAccesstoken() {
    this.pokitdokService.setAccessToken()
      .subscribe(
        tokenObject => this.accessToken = tokenObject
      );
  }

  getEligibility() {
    this.isLoading = true;

    if (this.accessToken) {
      this.pokitdokService.checkEligibility(this.eligibilityForm.value, this.accessToken.access_token)
        .subscribe(
          eligibility => {
            this.isLoading = false;

            this.eligibility = eligibility;
            this.coverage = this.eligibility.data.coverage;
            this.payer = this.eligibility.data.payer;
            this.provider = this.eligibility.data.provider;
            this.subscriber = this.eligibility.data.subscriber;
            this.validRequest = this.eligibility.data.valid_request;
            this.serviceTypes = this.eligibility.data.service_types;
            this.summary = this.eligibility.data.summary;
            this.pharmacy = this.eligibility.data.pharmacy;
            this.benefitRelatedEntities = this.eligibility.data.benefit_related_entities;
          },
          error => {
            this.isLoading = false;

            this.handleError(error.error.data.errors.query, null, {
              duration: 10000
            });
          }
        );
    } else {
      this.handleError('Access token is not set', 'Set Token', {
        duration: 6000,
      });
    }
  }

  handleError(message, action, config) {
    const error = this.snackBar.open(message, action, config);

    if (action === 'Set Token') {
      error.onAction()
        .subscribe(() => {
          this.isLoading = false;
          this.getAccesstoken();
        });
    }
  }
}
