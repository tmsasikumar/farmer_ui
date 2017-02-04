import {Component, OnInit} from '@angular/core';
import {farmerService} from "../../services/farmer-service";
import {Router} from "@angular/router";
import { Crops } from '../enums/crops.enum';
import { CropsEnum } from '../enums/crops.enum';

@Component({
  moduleId: module.id,
  selector: 'add-farmer',
  templateUrl: 'add-farmer.component.html'
})

export class AddFarmerComponent {

  model: any = {};
  hasError: boolean;
  constructor(
    private router: Router,
    private farmerService: farmerService){
    this.hasError = false;
    //this.crops = Crops;
    //this.crops = []
  }


  add(){
    this.farmerService.add(this.model)
      .subscribe(
        data => {
          this.router.navigate(['/farmer']);
        },
        error => {
          this.hasError = true;
        });

  }

}
