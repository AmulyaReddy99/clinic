import { Component } from '@angular/core';
import { LocationApiService } from './location-api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clinic';
  which_page = 'details'
  opened = true;

  constructor(private location: LocationApiService, private http: HttpClient){}

  position = this.location.get_location();

  make_api_call(){
    let url = 'https://opentdb.com/api.php?amount=10';
    let obs = this.http.get(url);
    obs.subscribe((response) => console.log(response));
  }

  toggleSidebar(){
    this.opened = !this.opened;
  }
  page(pg){
    this.which_page = pg;
    this.make_api_call();
  }
}
