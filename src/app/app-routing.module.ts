import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BillingProcessComponent} from './_misc/resources/billing-process/billing-process.component';
import {PatientCheckInComponent} from './_misc/resources/patient-check-in/patient-check-in.component';
import {CheckEligibilityComponent} from './_misc/resources/check-eligibility/check-eligibility.component';
import {CollectFromPayerComponent} from './_misc/resources/collect-from-payer/collect-from-payer.component';
import {CollectFromPatientComponent} from './_misc/resources/collect-from-patient/collect-from-patient.component';
import {PatientCheckOutComponent} from './_misc/resources/patient-check-out/patient-check-out.component';
import {PrepareClaimResourceComponent} from './_misc/resources/prepare-claim-resource/prepare-claim-resource.component';
import {ReceiveReponseComponent} from './_misc/resources/receive-reponse/receive-reponse.component';
import {ReportingComponent} from './_misc/resources/reporting/reporting.component';
import {TransmitClaimComponent} from './_misc/resources/transmit-claim/transmit-claim.component';
import {ResourcesLayoutComponent} from './_layouts/resources-layout/resources-layout.component';
import {PrepareClaimComponent} from './_pages/prepare-claim/prepare-claim.component';
import {DefaultLayoutComponent} from './_layouts/default-layout/default-layout.component';
import {SettingsComponent} from './_pages/settings/settings.component';
import {AuthLayoutComponent} from './_layouts/auth-layout/auth-layout.component';
import {LoginComponent} from './_pages/authentication/login/login.component';
import {RegisterComponent} from './_pages/authentication/register/register.component';
import {EligibilityComponent} from './_pages/eligibility/eligibility.component';
import {AuthService} from './_services/auth/auth.service';

const routes: Routes = [
  {
    path: 'resources',
    component: ResourcesLayoutComponent,
    children: [
      {path: 'billing-process', component: BillingProcessComponent},
      {path: 'check-eligibility', component: CheckEligibilityComponent},
      {path: 'collect-from-payer', component: CollectFromPayerComponent},
      {path: 'collect-from-patient', component: CollectFromPatientComponent},
      {path: 'patient-check-in', component: PatientCheckInComponent},
      {path: 'patient-check-out', component: PatientCheckOutComponent},
      {path: 'prepare-claim-resource', component: PrepareClaimResourceComponent},
      {path: 'receive-response', component: ReceiveReponseComponent},
      {path: 'reporting', component: ReportingComponent},
      {path: 'transmit-claim', component: TransmitClaimComponent},
    ]
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      // {path: 'billing-process', component: BillingProcessComponent},
      {path: 'eligibility', component: EligibilityComponent},
      // {path: 'collect-from-payer', component: CollectFromPayerComponent},
      // {path: 'collect-from-patient', component: CollectFromPatientComponent},
      // {path: 'patient-check-in', component: PatientCheckInComponent},
      // {path: 'patient-check-out', component: PatientCheckOutComponent},
      {path: 'prepare-claim', component: PrepareClaimComponent},
      // {path: 'receive-response', component: ReceiveReponseComponent},
      // {path: 'reporting', component: ReportingComponent},
      // {path: 'transmit-claim', component: TransmitClaimComponent},
      {path: 'settings', component: SettingsComponent},
    ],
    canActivate: [AuthService]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
