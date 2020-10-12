import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CovidComponent } from './covid/covid.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalcovidComponent } from './globalcovid/globalcovid.component';

const routes: Routes = [
  { path: 'countrywise', component: GlobalcovidComponent },
  { path: 'global', component: CovidComponent },
  { path: '', redirectTo: 'global', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
