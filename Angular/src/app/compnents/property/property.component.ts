import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {map} from "rxjs/operators";
import { PropertiesService } from '../services/properties.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {
  property;

  constructor(private route: ActivatedRoute, private propertiesService: PropertiesService) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map((param: ParamMap) => {
        // @ts-ignore
        return param.params.id;
      })
    ).subscribe(proId => {
      this.propertiesService.getProperty(proId).subscribe(prop => {
        this.property = prop.data;
      });
    });
  }

}
