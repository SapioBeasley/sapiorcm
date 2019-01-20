import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';

import {
  MatGridListModule,
  MatCardModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSidenavModule,
  MatListModule,
  MatChipsModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatSelectModule,
  MatExpansionModule
} from '@angular/material';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BillingProcessComponent} from './_misc/resources/billing-process/billing-process.component';
import {PatientCheckInComponent} from './_misc/resources/patient-check-in/patient-check-in.component';
import {CheckEligibilityComponent} from './_misc/resources/check-eligibility/check-eligibility.component';
import {PatientCheckOutComponent} from './_misc/resources/patient-check-out/patient-check-out.component';
import {PrepareClaimResourceComponent} from './_misc/resources/prepare-claim-resource/prepare-claim-resource.component';
import {TransmitClaimComponent} from './_misc/resources/transmit-claim/transmit-claim.component';
import {ReceiveReponseComponent} from './_misc/resources/receive-reponse/receive-reponse.component';
import {CollectFromPayerComponent} from './_misc/resources/collect-from-payer/collect-from-payer.component';
import {CollectFromPatientComponent} from './_misc/resources/collect-from-patient/collect-from-patient.component';
import {ReportingComponent} from './_misc/resources/reporting/reporting.component';
import {ResourcesLayoutComponent} from './_layouts/resources-layout/resources-layout.component';
import {PrepareClaimComponent} from './_pages/prepare-claim/prepare-claim.component';
import {DefaultLayoutComponent} from './_layouts/default-layout/default-layout.component';
import {CurrencyMaskModule} from 'ng2-currency-mask';
import {SettingsComponent} from './_pages/settings/settings.component';
import {AuthLayoutComponent} from './_layouts/auth-layout/auth-layout.component';
import {LoginComponent} from './_pages/authentication/login/login.component';
import {RegisterComponent} from './_pages/authentication/register/register.component';
import {EligibilityComponent} from './_pages/eligibility/eligibility.component';
import {CheckInComponent} from './_pages/check-in/check-in.component';
import {CheckOutComponent} from './_pages/check-out/check-out.component';
import {AuthService} from './_services/auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    BillingProcessComponent,
    PatientCheckInComponent,
    CheckEligibilityComponent,
    PatientCheckOutComponent,
    PrepareClaimResourceComponent,
    TransmitClaimComponent,
    ReceiveReponseComponent,
    CollectFromPayerComponent,
    CollectFromPatientComponent,
    ReportingComponent,
    ResourcesLayoutComponent,
    PrepareClaimComponent,
    DefaultLayoutComponent,
    SettingsComponent,
    AuthLayoutComponent,
    LoginComponent,
    RegisterComponent,
    EligibilityComponent,
    CheckInComponent,
    CheckOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgSelectModule,
    CurrencyMaskModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatSelectModule,
    MatExpansionModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
