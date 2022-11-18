import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestuarantApiService {

  search=new BehaviorSubject("")

  constructor(private api:HttpClient) { }
  // to get all restaurant detailes
  allRestuarantList(){
    // api call
    return this.api.get('http://localhost:3000/restaurants')
  }

  // get only user requeste restuarant
  viewRestuarant(restId:any){
   return this.api.get('http://localhost:3000/restaurants/'+restId)
  }
  // add a new restuarant post
  addRestuarant(restBody:any){
    return this.api.post('http://localhost:3000/restaurants',restBody)
  }

  // update a particular restuarant api-put
  updateRestuarant(restId:any,restBody:any){
    return this.api.put('http://localhost:3000/restaurants/'+restId,restBody)
 }

//  delete a perticular restuarant-delete method
   deleteRestuarant(restId:any){
    return this.api.delete('http://localhost:3000/restaurants/'+restId)
   }
}
