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

  search(location: string, cropTypeValue: any){
    console.log(Crops[cropTypeValue]);
    let cropType = Crops[cropTypeValue] ? Crops[cropTypeValue] : null;
    this.filteredFarmer = this.farmers;
    if(location){
      this.filteredFarmer = this.filteredFarmer.filter(this.filterByString(location, "landAddress"));
    }
    if(cropType){
      this.filteredFarmer = this.filteredFarmer.filter(this.filterByString(cropType, "crop"));
    }
  }
  private filterByString(location: string, filterKey: string) {
    location = location.toLowerCase();
    return (value: {}) => {
      return !location || value[filterKey].toLowerCase().indexOf(location) !== -1;
    }

  }
}
