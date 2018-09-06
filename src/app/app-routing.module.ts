import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AgencyListComponent } from './components/agency-list/agency-list.component';
import { AgencyDetailsComponent } from './components/agency-details/agency-details.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'list',
    component: AgencyListComponent
  },
  {
    path: 'agency',
    component: AgencyDetailsComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
