import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestuarantApiService } from '../services/restuarant-api.service';

@Component({
  selector: 'app-add-resturant',
  templateUrl: './add-resturant.component.html',
  styleUrls: ['./add-resturant.component.css']
})
export class AddResturantComponent implements OnInit {
 id:any
 name:any
 neighborhood:any
 photograph:any
 address:any
 cuisine_type:any
 Monday:any
 Tuesday:any
 Wednesday:any
 Thursday:any
 Friday:any
 Saturday:any
 Sunday:any
 lat:any
 lng:any
 rvname:any
 date:any
 rating:any
 comments:any
//  reviewArray:any=[]
  constructor(private restApi:RestuarantApiService,private router:Router) { }

  ngOnInit(): void {
  }
  // user definesd function
  addRestuarant(){
    let addProduct={
      id:parseInt(this.id),
      name:this.name,
      neighborhood:this.neighborhood,
      photograph:this.photograph,
      address:this.address,
      latlng:{
        lat:parseInt(this.lat),
        lng:parseInt(this.lng)
      },
      cuisine_type:this.cuisine_type,
      operating_hours:{
        Monday:this.Monday,
        Tuesday:this.Tuesday,
        Wednesday:this.Wednesday,
        Thursday:this.Thursday,
        Friday:this.Friday,
        Saturday:this.Saturday,
        Sunday:this.Sunday
      },
      reviews:[
        {
          
            name:this.rvname,
            date:this.date,
            rating:parseInt(this.rating),
            comments:this.comments
          
  
        }
    
    ]
    }
    
    console.log(addProduct);
    this.restApi.addRestuarant(addProduct)
    .subscribe((data)=>{
      alert("New resturanat added succsesfully")//router class-use naigateByUrl()-navigate one page to another
      this.router.navigateByUrl("")
    })
  }

}
