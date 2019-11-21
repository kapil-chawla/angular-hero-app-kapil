import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import {
  ActivatedRoute,
  NavigationEnd,
  Router,Event
} from "@angular/router";
import { BreadCrumb } from "./state/breadcrumb";
import { distinctUntilChanged, filter, map } from "rxjs/operators";

import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { AddBreadCrumb,RemoveAllBreadCrumb } from './state/breadcrumb.actions';
import { BreadCrumbState } from './state/breadcrumb.state';

@Component({
  selector: "app-breadcrumb",
  templateUrl: "./breadcrumb.component.html",
  styleUrls: ["./breadcrumb.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class BreadcrumbComponent implements OnInit {
  @Select(BreadCrumbState.breadcrumbs)  breadcrumbs$: Observable<BreadCrumb[]>;  
  constructor(private activatedRoute: ActivatedRoute, private router: Router,private store:Store) {}
  ngOnInit(): void {
    this.router.events.subscribe((event: Event) =>{
      console.log(event);
        if (event instanceof NavigationEnd) {
            distinctUntilChanged();
            this.createBraedCrumb(this.activatedRoute);
        }
    });
  }

  createBraedCrumb(route: ActivatedRoute):void {
    if(route.snapshot.firstChild){
        let childRoute = route.snapshot.firstChild;
        while(childRoute.firstChild){
          childRoute=childRoute.firstChild;
        }
        if(childRoute.routeConfig.data && childRoute.routeConfig.data.breadcrumb){
            const fetchurl = route.snapshot["_routerState"].url.replace("/", "");
            if(childRoute.routeConfig.data.breadcrumb["root-nav"]){
              this.store.dispatch(new RemoveAllBreadCrumb());
            }
            const label = childRoute.routeConfig.data.breadcrumb["nav-label"];     
            const breadcrumb = {
                  label: label,
                  url: fetchurl
            };
            this.store.dispatch(new AddBreadCrumb(breadcrumb)); 
        }else{
            this.store.dispatch(new RemoveAllBreadCrumb());
        }
      }
  }
}
