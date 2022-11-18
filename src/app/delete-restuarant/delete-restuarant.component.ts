import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { RestuarantApiService } from '../services/restuarant-api.service';

@Component({
  selector: 'app-delete-restuarant',
  templateUrl: './delete-restuarant.component.html',
  styleUrls: ['./delete-restuarant.component.css']
})
export class DeleteRestuarantComponent implements OnInit {
restId:any
  constructor(private ActivatedRoute:ActivatedRoute,private apiService:RestuarantApiService,private router:Router) { }

  ngOnInit(): void {
    this.ActivatedRoute.params.subscribe((data)=>{
      this.restId=data['id']
      console.log(this.restId);
      })

      // call delete restuarant from service
      this.apiService.deleteRestuarant(this.restId)
      .subscribe(()=>{
        alert("Requested Restuarant detailes are deleted succsefully...")
        this.router.navigateByUrl("")
      })
  }

}
