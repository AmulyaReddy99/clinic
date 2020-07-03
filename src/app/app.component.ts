import { Component } from '@angular/core';
import { LocationApiService } from './location-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clinic';
  which_page = 'details'
  opened = true;

  constructor(private location: LocationApiService){}

  position = this.location.get_location();

  toggleSidebar(){
    this.opened = !this.opened;
  }
  page(pg){
    this.which_page = pg;
  }
}
