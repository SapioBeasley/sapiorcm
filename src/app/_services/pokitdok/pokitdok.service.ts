import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokitdokService {
  private apiUrl = 'https://cors-anywhere.herokuapp.com/https://platform.pokitdok.com';
  private CLIENT_ID = 'e3kWBAS1WhY12Gg6CAd7';
  private CLIENT_SECRET = 'sh7ZdA2mlsBC8UhSVcmQYsz7Xgwua7WqB1g0oa8K';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  setAccessToken(): Observable<object> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(this.CLIENT_ID + ':' + this.CLIENT_SECRET)
      })
    };

    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');

    return this.httpClient.post(this.apiUrl + '/oauth2/token', params.toString(), httpOptions);
  }

  checkEligibility(payload, accessToken): Observable<object> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      })
    };

    return this.httpClient.post(this.apiUrl + '/api/v4/eligibility/', payload, httpOptions);
  }

  submitClaim(payload, accessToken): Observable<object> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      })
    };

    return this.httpClient.post(this.apiUrl + '/api/v4/claims/', payload, httpOptions);
  }
}
