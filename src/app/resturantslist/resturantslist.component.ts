import { Component, OnInit } from '@angular/core';
import { RestuarantApiService } from '../services/restuarant-api.service';

@Component({
  selector: 'app-resturantslist',
  templateUrl: './resturantslist.component.html',
  styleUrls: ['./resturantslist.component.css']
})
export class ResturantslistComponent implements OnInit {
   resturantList:any;
  //  ldate:any;
   filterString:any='';
  constructor(private restApi:RestuarantApiService) { }

  ngOnInit(): void {
    // asynchrounous
    this.restApi.allRestuarantList()
    .subscribe((result)=>{
      console.log(result);
      this.resturantList=result
      
    })
    // this.ldate=new Date()
    // to get search term from servives
    this.restApi.search.subscribe((data)=>{
      this.filterString=data
      console.log(this.filterString);
      
    })
  }

}
