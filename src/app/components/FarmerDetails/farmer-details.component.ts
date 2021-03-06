import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from '@angular/router';
import {farmerService} from "../../services/farmer-service";

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
  emailId: string;
  updateDoner: boolean = false;

  constructor(private farmerService: farmerService, route: ActivatedRoute, private router: Router) {
    this.farmerId = route.snapshot.params['id'];
    if(!JSON.parse(localStorage.getItem("currentUser"))){
      this.router.navigate(['/login']);
    }
    let user = JSON.parse(localStorage.getItem("currentUser"));
    this.emailId = user["emailId"];
    this.getStatus();
  }

  getPhotoUrl(photoName: string){
    return "http://localhost:8081/api/getPhoto?urlName=" + photoName;
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

  update(){
    this.isStatusLoading = false;
    this.updateDoner = true;
  }
  insure(){
    this.isStatusLoading = true;
    this.farmerService.pay({"farmerId": this.farmerId, "emailId": this.emailId})
      .subscribe(response=> this.paymentStatus = response,
        error => {
          this.errorMessage = "Server Error";
          if (error.status == 409) {
            this.errorMessage = "Farmer ID Already Exists";
          }
        },()=> this.update());
  }
}
