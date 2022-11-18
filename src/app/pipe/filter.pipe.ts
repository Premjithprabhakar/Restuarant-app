import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(restaurants:any[],filterString:string,popName:string){
    const result:any=[];
    if (!restaurants || filterString=="" || popName=="") {
      return restaurants
  }
  restaurants.forEach((restaurant:any)=>{
    if (restaurant[popName].trim().toLowerCase().includes(filterString)) {
      result.push(restaurant)
    }
  })
    return result;
  }

}
