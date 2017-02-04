export function CropsEnum(constructor: Function) {
  constructor.prototype.CropsEnum = Crops;
}


export enum Crops {
  Rice,
  Wheat,
  Ragi,
  Maize
}
