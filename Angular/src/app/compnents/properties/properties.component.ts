import { Component, OnInit } from '@angular/core';
import { properties, PropertiesService } from '../services/properties.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {
  properties: Array<any>;
  constructor(private propertiesService: PropertiesService) {
  }

  ngOnInit(): void {
    this.propertiesService.getAllProperties().subscribe((properties: properties ) => {
      this.properties = properties.data;
    });
  }

}
