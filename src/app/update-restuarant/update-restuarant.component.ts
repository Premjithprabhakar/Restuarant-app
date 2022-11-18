import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { RestuarantApiService } from '../services/restuarant-api.service';

@Component({
  selector: 'app-update-restuarant',
  templateUrl: './update-restuarant.component.html',
  styleUrls: ['./update-restuarant.component.css']
})
export class UpdateRestuarantComponent implements OnInit {

  // id:any
  // name:any
  // neighborhood:any
  // photograph:any
  // address:any
  // cuisine_type:any
  // Monday:any
  // Tuesday:any
  // Wednesday:any
  // Thursday:any
  // Friday:any
  // Saturday:any
  // Sunday:any
  // lat:any
  // lng:any
  // rvname:any
  // date:any
  // rating:any
  // comments:any
   restId:any
  restBody:any
  constructor(private ActivatedRoute:ActivatedRoute,private restService:RestuarantApiService,private router:Router) { }

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe((data)=>{
     //  console.log(data);
    //  get restuarant id
    this.restId=data['id']
    })
    // get api
    this.restService.viewRestuarant(this.restId)
    .subscribe((result)=>{
      this.restBody=result
      console.log(result);
      
    })

  }
  updateRestuarant(form:any){
    
    let updateProduct={
      id:parseInt(form.value.id),
      name:form.value.name,
      neighborhood:form.value.neighborhood,
      photograph:form.value.photograph,
      address:form.value.address,
      latlng:{
        lat:form.value.lat,
        lng:form.value.lng
      },
      cuisine_type:form.value.cuisine_type,
      operating_hours:{
        Monday:form.value.Monday,
        Tuesday:form.value.Tuesday,
        Wednesday:form.value.Wednesday,
        Thursday:form.value.Thursday,
        Friday:form.value.Friday,
        Saturday:form.value.Saturday,
        Sunday:form.value.Sunday
      },
      reviews:[
        {
          
            name:form.value.rvname,
            date:form.value.date,
            rating:parseInt(form.value.rating),
            comments:form.value.comments
          
  
        }
    
    ]
    }
    console.log(updateProduct);
    this.restService.updateRestuarant(this.restId,updateProduct)
    .subscribe(()=>{
      alert("Restuarant detailes updated succsesfully")
      this.router.navigateByUrl("")
    })

  }

}
