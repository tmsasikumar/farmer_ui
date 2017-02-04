import {Component, Input} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'farmer-card',
  templateUrl: 'farmer-card.component.html'
})

export class FarmerCardComponent {
  private _farmer: Farmer;

  @Input()
  set farmer(farmer: Farmer) {
    this._farmer = Object.assign(farmer);
  }

  getRiskClass(risk: string) {
    if(risk == "medium") {
      return 'label-warning'
    }
    else if(risk == "high") {
      return 'label-danger'
    }
    else {
      return 'label-success';
    }
  }
}
