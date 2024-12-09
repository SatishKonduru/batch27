import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentage',
  standalone: true

})
export class PercentagePipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }  -> Default Code

  transform(score: any, total: any, decimal = 2) {
    console.log("Percentage Pipe called....")
    return ((score/total) * 100).toFixed(decimal)+ '%'
  }

}
