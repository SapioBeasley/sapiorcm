import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CodesService {
  private codes;

  constructor() {
    this.codes = [
      {
        id: 1,
        code: 'D0120',
        desc: 'Periodic oral evaluation - established patient',
        type: 'Clinical Oral Evaluations'
      },
      {
        id: 2,
        code: 'D0140',
        desc: 'Limited oral evaluation - problem focused',
        type: 'Clinical Oral Evaluations'
      },
      {
        id: 3,
        code: 'D0145',
        desc: 'Oral evaluation for a patient under three years of age and counseling with primary caregiver',
        type: 'Clinical Oral Evaluations'
      },
      {
        id: 4,
        code: 'D0150',
        desc: 'Comprehensive oral evaluation - new or established patient',
        type: 'Clinical Oral Evaluations'
      },
      {
        id: 5,
        code: 'D0160',
        desc: 'Detailed and extensive oral evaluation - problem focused, by report',
        type: 'Clinical Oral Evaluations'
      },
      {
        id: 6,
        code: 'D0170',
        desc: 'Re-evaluation - limited, problem focused (established patient; not post-operative visit)',
        type: 'Clinical Oral Evaluations'
      },
      {
        id: 7,
        code: 'D0171',
        desc: 'Re-evaluation - post-operative office visit',
        type: 'Clinical Oral Evaluations'
      },
      {
        id: 8,
        code: 'D0180',
        desc: 'Comprehensive periodontal evaluation - new or established patient',
        type: 'Clinical Oral Evaluations'
      }
    ];
  }

  allCodes() {
    return this.codes;
  }
}
