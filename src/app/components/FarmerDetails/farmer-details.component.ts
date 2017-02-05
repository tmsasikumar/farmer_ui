import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from '@angular/router';
import {farmerService} from "../../services/farmer-service";
import {_finally} from "rxjs/operator/finally";

@Component({
  moduleId: module.id,
  selector: 'farmer-details',
  templateUrl: 'farmer-details.component.html'
})

export class FarmerDetailsComponent implements OnInit {
  farmerId: any;
  errorMessage: string;
  farmer: Farmer;
  isLoading: boolean;
  isStatusLoading: boolean;
  paymentStatus: any;

  constructor(private farmerService: farmerService, route: ActivatedRoute) {
    this.farmerId = route.snapshot.params['id'];
    this.getStatus();
  }

  ngOnInit() {
    this.isLoading = true;
    this.farmerService.getSpecificFarmer(this.farmerId)
      .subscribe(Farmer => this.farmer = Farmer,
        error => {
          this.errorMessage = "Server Error";
          if (error.status == 409) {
            this.errorMessage = "Farmer ID Already Exists";
          }
        }, () => this.isLoading = false);
  }

  getStatus(){
    this.isStatusLoading = true;
    this.farmerService.getStatus({"farmerId": this.farmerId})
      .subscribe(response=> this.paymentStatus = response,
        error => {
          this.errorMessage = "Server Error";
          if (error.status == 409) {
            this.errorMessage = "Farmer ID Already Exists";
          }
        },
        ()=> this.isStatusLoading = false);
  }

  insure(){
    this.isStatusLoading = true;
    this.farmerService.pay({"farmerId": this.farmerId})
      .subscribe(response=> this.paymentStatus = response,
        error => {
          this.errorMessage = "Server Error";
          if (error.status == 409) {
            this.errorMessage = "Farmer ID Already Exists";
          }
        },()=> this.isStatusLoading = false);
  }
}
