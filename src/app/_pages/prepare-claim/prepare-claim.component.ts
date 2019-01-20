import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder} from '@angular/forms';
import {CodesService} from '../../_services/codes/codes.service';

@Component({
  selector: 'app-prepare-claim',
  templateUrl: './prepare-claim.component.html',
  styleUrls: ['./prepare-claim.component.css']
})
export class PrepareClaimComponent implements OnInit {
  public claimsForm;
  public isLoading = false;

  superbillTotal = 0;
  diagCodes= [];
  selectedCodes = [];

  constructor(
    private formbuilder: FormBuilder,
    private codesService: CodesService
  ) {
    this.diagCodes = this.codesService.allCodes();
    this.claimsForm = this.generateClaimForm();
  }

  ngOnInit() {
  }

  addCode() {
    this.calcSuperbillTotal();

    return this.codes.push(this.formbuilder.group({
      code: this.formbuilder.control(''),
      price: this.formbuilder.control('')
    }));
  }

  get codes() {
    return this.claimsForm.get('codes') as FormArray;
  }

  calcSuperbillTotal() {
    let total = 0;

    for (let i = 0; i < this.claimsForm.value.codes.length; i++) {
      total += parseFloat(this.claimsForm.value.codes[i].price);
    }

    this.superbillTotal = total;
  }

  submitClaim() {
    this.isLoading = true;

    setTimeout(() => {
      console.log(this.claimsForm.value)
      this.isLoading = false;
    }, 2000);
  }

  generateClaimForm() {
    return this.formbuilder.group({
      patient: this.formbuilder.group({
        firstName: this.formbuilder.control(''),
        lastName: this.formbuilder.control(''),
      }),
      codes: this.formbuilder.array([
        this.formbuilder.group({
          code: this.formbuilder.control(''),
          price: this.formbuilder.control('')
        })
      ])
    });
  }
}
