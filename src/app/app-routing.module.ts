import { NgModule } from "@angular/core";
import { Routes, RouterModule} from "@angular/router";
import { HeroesComponent } from "./heroes/heroes.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { ModuleWithProviders } from '@angular/core'
const routes: Routes = [
  {
    path: "heroes",
    component: HeroesComponent,
    data:{
      "breadcrumb":{"nav-label":"Heroes","root-nav":true}
    } 
  },
  {
    path: "dashboard",
    component: DashboardComponent,
     data:{
      "breadcrumb":{"nav-label":"Dashboard","root-nav":true}
    } 
  },
  {
    path: "detail/:id",
    component: HeroDetailComponent,
     data:{
      "breadcrumb":{"nav-label":"Hero Detail","root-nav":false}
    } 
  },
  {
    path: "contents",
    loadChildren:"./content/content.module#ContentModule",
  }
  //   // children:[
  //   //   {path:"contentProfile",component:ContentProfileComponent,data:{breadcrumb:"Content Profile"}},
  //   //   {path:"contentHome",component:ContentHomeComponent,data:{breadcrumb:"Content Home"}},
  //   // ]
  // },
  // {
  //   path: "contents/contentProfile",
  //   component: ContentProfileComponent,
  //   data: {
  //     breadcrumb: "content detail"
  //   }    
  // }
  
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule {}
