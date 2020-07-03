import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarModule } from 'ng-sidebar';
import { DetailsComponent } from './details/details.component';
import { StatsComponent } from './stats/stats.component';
import { MessagesComponent } from './messages/messages.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { LocationApiService } from './location-api.service';

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    StatsComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    SidebarModule.forRoot()
  ],
  providers: [
    LocationApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
