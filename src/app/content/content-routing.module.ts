import { NgModule } from "@angular/core";
import { Routes, RouterModule} from "@angular/router";
import { ContentComponent } from "./content.component";
import { ContentProfileComponent } from './content-profile/content-profile.component';
import { ContentHomeComponent } from './content-home/content-home.component';
import { ModuleWithProviders } from '@angular/core'

const routes: Routes = [
  {
    path: "",
    component: ContentComponent,
    data:{
      "breadcrumb":{"nav-label":"Contents","root-nav":true}
    } 
  },
  {
    path: "contentProfile",
    component: ContentProfileComponent,
    data:{
      "breadcrumb":{"nav-label":"Content Profile","root-nav":false}
    }   
  },
  {
    path: "contentHome",
    component: ContentHomeComponent,
     data:{
      "breadcrumb":{"nav-label":"Content Home","root-nav":false}
    }  
  }
  
];
export const routing: ModuleWithProviders = RouterModule.forChild(routes)
