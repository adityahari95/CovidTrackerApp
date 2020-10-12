import { Component, OnInit } from '@angular/core';
import { CovidService } from '../covid.service';

@Component({
  selector: 'app-globalcovid',
  templateUrl: './globalcovid.component.html',
  styleUrls: ['./globalcovid.component.css'],
})
export class GlobalcovidComponent implements OnInit {
  countries: string[];
  country: any;
  confirmed: Number;
  deaths: Number;
  recovered: Number;
  active: Number;

  constructor(private service: CovidService) {}

  ngOnInit(): void {
    this.service.fetchCountries().subscribe((data) => {
      this.countries = data as string[];
      console.log(data);
    });
  }

  getCoronaData() {
    this.service.getCoronaRealTimeData(this.country).subscribe((data) => {
      console.log(data);
      var index = data.length - 1;
      this.confirmed = data[index].Confirmed;
      this.deaths = data[index].Deaths;
      this.active = data[index].Active;
      this.recovered = data[index].Recovered;
    });
  }

  getCountry(country) {
    this.country = country;
    console.log(country);
  }
}
