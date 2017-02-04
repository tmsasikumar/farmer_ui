import {Component, OnInit} from '@angular/core';
import {farmerService} from "../../services/farmer-service";

@Component({
  moduleId: module.id,
  selector: 'farmer-catalog',
  templateUrl: 'farmer-catalog.component.html'
})

export class FarmerCatalogComponent implements OnInit{
  private farmers: Farmer[];

  constructor(private farmerService: farmerService){
  }

  ngOnInit() {
    this.farmerService.getAllFarmers()
      .subscribe(AllFarmers => this.farmers = AllFarmers);
  }
}
