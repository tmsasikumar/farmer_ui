import {Pipe, PipeTransform} from "@angular/core";


@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
  transform(value: any, args: string[]): any {
    let keys = [];
    for (var enumMember in value) {
      var isValueProperty = parseInt(enumMember, 0) >= 0
      if (isValueProperty) {
        keys.push({key: enumMember, value: value[enumMember]});
      }

    }
    return keys;
  }
}

