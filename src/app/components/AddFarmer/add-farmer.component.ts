import {Component, OnInit} from '@angular/core';
import {farmerService} from "../../services/farmer-service";
import {Router} from "@angular/router";

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
  }


  login(){
    this.farmerService.add(this.model)
      .subscribe(
        data => {
          this.router.navigate(['/dashboard']);
        },
        error => {
          this.hasError = true;
        });

  }

}
