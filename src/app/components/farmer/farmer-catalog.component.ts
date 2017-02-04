import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {farmerService} from "../../services/farmer-service";
import {Crops} from "../../enums/crops.enum";


@Component({
  moduleId: module.id,
  selector: 'farmer-catalog',
  templateUrl: 'farmer-catalog.component.html'
})


export class FarmerCatalogComponent implements OnInit {
  private farmers: Farmer[];
  private filteredFarmer: Farmer[];
  crops: any;

  constructor(private farmerService: farmerService) {
    this.crops = Crops;
  }

  ngOnInit() {
    this.farmerService.getAllFarmers()
      .subscribe(AllFarmers => {
        this.farmers = AllFarmers;
        this.filteredFarmer = this.farmers;
      });

  }
  
  search(location: string){
    this.filteredFarmer = this.farmers.filter(this.filterByString(location));
  }
  private filterByString(filter: string) {
    filter = filter.toLowerCase();
    return (value: {}) => {
      return !filter || value["landAddress"].toLowerCase().indexOf(filter) !== -1;
    }

  }
}
