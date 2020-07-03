import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationApiService {

  constructor() { 
    console.log('API CALL');
  }

  get_location(){
    return [10,31];
  }

}
