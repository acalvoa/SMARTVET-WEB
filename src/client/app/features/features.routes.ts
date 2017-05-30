import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {   
      	path: '', 
        component: HomeComponent,
      	children: []
  		},
      {   
        path: ':ID', 
        component: HomeComponent,
        children: []
      },
    ])
  ],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
