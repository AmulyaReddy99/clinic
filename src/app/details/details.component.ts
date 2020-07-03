import { Component, OnInit } from '@angular/core';
import * as info from './info.json';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  status = ['open','closed'];
  clinic_types = [];
  distances = ["1 km","2 km","5 km"];
  clinic_info = [];
  total_pages = 0;
  p = 1;
  
  constructor() { 
    
  }

  ngOnInit(): void {
    // clinic types and segregate data to rows
    let c = 0;
    for(let i=0; i<this.distances.length; i++){
      let clinic = info["default"][this.distances[i]];
      for(let j=0; j<clinic.length; j++){
        let type = clinic[j]['type'];
        this.clinic_info.push([]);
        this.clinic_info[c].push(clinic[j]['clinic name']);
        this.clinic_info[c].push(clinic[j]['type']);
        this.clinic_info[c].push(clinic[j]['status']);
        this.clinic_info[c].push(clinic[j]['ph no']);
        this.clinic_info[c].push(clinic[j]['address']);
        this.clinic_info[c].push(this.distances[i]);
        c++;
        if(!this.clinic_types.includes(type))
          this.clinic_types.push(type);
      }
    }
    this.total_pages = c;
    console.log(this.clinic_info);
  }

  get_clinic_info(){
    return this.clinic_info;
  }

  get_distances(){
    return this.distances;
  }

  get_status(){
    return this.status;
  }

  get_clinic_types(){
    return this.clinic_types;
  }

}
