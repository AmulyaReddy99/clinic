import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { StatsComponent } from './stats/stats.component';
import { MessagesComponent } from './messages/messages.component';

const routes: Routes = [
  {path: 'home', component: DetailsComponent},
  {path: 'stats', component: StatsComponent},
  {path: 'msg', component: MessagesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
