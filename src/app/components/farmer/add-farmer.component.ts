import {Component, OnInit} from '@angular/core';
import {farmerService} from "../../services/farmer-service";
import {Router} from "@angular/router";
import {Crops} from '../../enums/crops.enum';
import {CropsEnum} from '../../enums/crops.enum';
import {KeysPipe} from "../../pipes/keys_pipe";

@Component({
  moduleId: module.id,
  selector: 'add-farmer',
  templateUrl: 'add-farmer.component.html'
})


export class AddFarmerComponent {

  model: any = {};
  errorMessage: string;
  hasError: boolean;
  crops: any;

  constructor(private router: Router,
              private farmerService: farmerService) {
    this.hasError = false;
    this.crops = Crops;
    let user = JSON.parse(localStorage.getItem("currentUser"));
    if (user["role"] == "FEF") {
      this.model.FEF = user["emailId"];
    }
    //this.crops = []
  }


  add() {
    this.farmerService.add(this.model)
      .subscribe(
        data => {
          this.router.navigate(['/farmerDetails', this.model.farmerId]);
        },
        error => {
          this.errorMessage = "Server Error";
          if (error.paymentStatus == 409) {
            this.errorMessage = "Farmer ID Already Exists";
          }
          this.hasError = true;
        });

  }

}
