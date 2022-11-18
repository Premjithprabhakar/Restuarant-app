import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddResturantComponent } from './add-resturant/add-resturant.component';
import { DeleteRestuarantComponent } from './delete-restuarant/delete-restuarant.component';
import { ResturantslistComponent } from './resturantslist/resturantslist.component';
import { UpdateRestuarantComponent } from './update-restuarant/update-restuarant.component';
import { ViewRestuarantComponent } from './view-restuarant/view-restuarant.component';

const routes: Routes = [
  // path for ResturantslistComponent
  {
    path:"",component:ResturantslistComponent
  },
  // path for ViewRestuarantComponent
  {
    path:"view-restuarant/:id",component:ViewRestuarantComponent
},
// path for AddResturantComponent
{
  path:"add-restuarnt",component:AddResturantComponent
},
{
  path:"update-restuarnt/:id",component:UpdateRestuarantComponent
},
{
  path:"delete-restuarnt/:id",component:DeleteRestuarantComponent

}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
