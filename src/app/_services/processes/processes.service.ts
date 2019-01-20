import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProcessesService {
  avail = [
    {
      title: 'billingProcess',
      path: '/resources/billing-process',
      desc: 'no need',
      icon: 'center_focus_weak',
      link: true,
      box: false
    },
    {
      title: 'patient.checkIn()',
      path: '/resources/patient-check-in',
      desc: 'On-boarding or updating of patient demographics when they visit physician.',
      icon: 'assignment_ind',
      link: true,
      box: true
    },
    {
      title: 'patient.eligibility()',
      path: '/resources/check-eligibility',
      desc: 'Sending and receiving clients policy information to verify payment from payer.',
      icon: 'contact_phone',
      link: true,
      box: true
    },
    {
      title: 'patient.checkOut()',
      path: '/resources/patient-check-out',
      desc: 'After physician has completed work, send patient through outpatient process.',
      icon: 'accessible_forward',
      link: true,
      box: true
    },
    {
      title: 'claim.prepare()',
      path: '/resources/prepare-claim-resource',
      desc: 'Process superbill or available coding resource in order to send.',
      icon: 'attachment',
      link: true,
      box: true
    },
    {
      title: 'claim.transmit()',
      path: '/resources/transmit-claim',
      desc: 'Send processed data to payer electronically for verification.',
      icon: 'compare_arrows',
      link: true,
      box: true
    },
    {
      title: 'claim.response()',
      path: '/resources/receive-response',
      desc: 'Await response from payer and prepare for denial management',
      icon: 'import_export',
      link: true,
      box: true
    },
    {
      title: 'collect.fromPayer()',
      path: '/resources/collect-from-payer',
      desc: 'After approval of payment from payer, collect the payment.',
      icon: 'account_balance',
      link: true,
      box: true
    },
    {
      title: 'collect.fromPatient()',
      path: '/resources/collect-from-patient',
      desc: 'After payer has paid their portion, notify and bill balance to patient.',
      icon: 'credit_card',
      link: true,
      box: true
    },
    {
      title: 'reporting',
      path: '/resources/reporting',
      desc: 'Show reporting of revenue managed and collected over time.',
      icon: 'show_chart',
      link: true,
      box: true
    }
  ];

  constructor() {
  }

  getProcesses() {
    return this.avail;
  }

  getProcess(index) {
    return this.avail[index];
  }
}
