import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];
  constructor() { }

  ngOnInit() {
  }
  countSatellites(type){
    let count=0;
    this.satellites.forEach(s => {
      if(s.type.toLowerCase() === type.toLowerCase()){
        count++;
      }
      
    });
    return count;
  }

}
