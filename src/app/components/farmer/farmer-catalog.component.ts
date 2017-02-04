import {Component} from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'farmer-catalog',
  templateUrl: 'farmer-catalog.component.html'
})

export class FarmerCatalogComponent {
  private farmers: Farmer[];

  constructor() {
    this.farmers = [
      {
        farmerId: "asdf",
        name: "Vivek kumar",
        idProof: "sdshadgjhsf",
        photo: "",
        aadharCard: "23912330481",
        landAddress: "Tumkur, Karnataka",
        landPhoto: "",
        landReg: "number",
        landArea: "200",
        cropType: "ravi",
        crop: "wheat",
        FEF: "vivek",
        donor: "vivek",
        cropPremium: 200,
        cropRisk: "medium",
        cultivationDate: "12-feb-2017",
        harvestDate: "15/feb/2017"
      }, {
        farmerId: "asdf",
        name: "Vivek kumar",
        idProof: "sdshadgjhsf",
        photo: "",
        aadharCard: "23912330481",
        landAddress: "Tumkur, Karnataka",
        landPhoto: "",
        landReg: "number",
        landArea: "200",
        cropType: "ravi",
        crop: "wheat",
        FEF: "vivek",
        donor: "vivek",
        cropPremium: 200,
        cropRisk: "high",
        cultivationDate: "12-feb-2017",
        harvestDate: "15/feb/2017"
      }, {
        farmerId: "asdf",
        name: "Vivek kumar",
        idProof: "sdshadgjhsf",
        photo: "",
        aadharCard: "23912330481",
        landAddress: "Tumkur, Karnataka",
        landPhoto: "",
        landReg: "number",
        landArea: "200",
        cropType: "ravi",
        crop: "wheat",
        FEF: "vivek",
        donor: "vivek",
        cropPremium: 4000,
        cropRisk: "low",
        cultivationDate: "12-feb-2017",
        harvestDate: "15/feb/2017"
      }, {
        farmerId: "asdf",
        name: "Vivek kumar",
        idProof: "sdshadgjhsf",
        photo: "",
        aadharCard: "23912330481",
        landAddress: "Tumkur, Karnataka",
        landPhoto: "",
        landReg: "number",
        landArea: "200",
        cropType: "ravi",
        crop: "wheat",
        FEF: "vivek",
        donor: "vivek",
        cropPremium: 2000,
        cropRisk: "medium",
        cultivationDate: "12-feb-2017",
        harvestDate: "15/feb/2017"
      }]
  }
}
