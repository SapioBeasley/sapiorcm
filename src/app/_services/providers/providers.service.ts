import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  constructor(private httpClient: HttpClient) {
  }

  getByNpi(npi) {
    return this.httpClient.get('https://cors-anywhere.herokuapp.com/https://npiregistry.cms.hhs.gov/api/?number=' + npi);
  }
}
