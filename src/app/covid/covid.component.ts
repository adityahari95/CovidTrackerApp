import { CovidService } from './../covid.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css'],
})
export class CovidComponent implements OnInit {
  totaldeaths = 0;
  totalconfirmed = 0;
  totalrecovered = 0;

  constructor(private service: CovidService) {}

  curday = function (sp) {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //As January is 0.
    let yyyy = today.getFullYear();

    return dd + sp + mm + sp + yyyy;
  };

  ngOnInit(): void {
    this.service.totalCoronaCases().subscribe((result) => {
      console.log(result);
      this.totalconfirmed = result.TotalConfirmed;
      this.totaldeaths = result.TotalDeaths;
      this.totalrecovered = result.TotalRecovered;
    });
  }
}
