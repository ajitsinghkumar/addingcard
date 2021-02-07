import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchname'
})
export class SearchnamePipe implements PipeTransform {

  transform(value:any,searchvalue:any):any {
   
    if(!searchvalue){
      return value;
    }
    return value.filter(function(search){
      return search.firstname.indexOf(searchvalue.toLowerCase())>-1 || search.lastname.indexOf(searchvalue.toLowerCase())>-1 || search.email.indexOf(searchvalue.toLowerCase())>-1
    });

  }

}
