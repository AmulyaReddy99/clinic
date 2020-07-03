import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clinic';
  which_page = 'details'
  opened = true;

  toggleSidebar(){
    this.opened = !this.opened;
  }
  page(pg){
    this.which_page = pg;
  }
}
