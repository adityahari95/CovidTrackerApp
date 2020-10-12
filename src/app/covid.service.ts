import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CovidService {
  URL1 = 'https://api.covid19api.com/countries';

  constructor(private httpclient: HttpClient) {}

  fetchCountries(): Observable<any> {
    return this.httpclient.get(this.URL1);
  }

  getCoronaRealTimeData(country): Observable<any> {
    const url = ' https://api.covid19api.com/total/dayone/country/' + country;

    return this.httpclient.get<any>(url);
  }
  totalCoronaCases(): Observable<any> {
    return this.httpclient.get('https://api.covid19api.com/world/total');
  }
}
