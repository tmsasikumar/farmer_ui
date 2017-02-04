export function CropsEnum(constructor: Function) {
  constructor.prototype.CropsEnum = Crops;
}


export enum Crops {
  Rice = 1,
  Wheat = 2,
  Ragi = 3,
  Maize = 4
}
