import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AddBreadCrumb,RemoveAllBreadCrumb } from './breadcrumb.actions';
import {BreadCrumb} from './breadcrumb';

export interface BreadCrumbStateModel {
  breadcrumbs:BreadCrumb[];
}

@State<BreadCrumbStateModel>({
  name: 'BreadCrumb',
  defaults: {
    breadcrumbs:[]
  }
})

export class BreadCrumbState {
  @Selector()
  static breadcrumbs(state: BreadCrumbStateModel):BreadCrumb[] {
    return state.breadcrumbs;
  }
  @Action(AddBreadCrumb)
  addBreadCrumb(ctx: StateContext<BreadCrumbStateModel>, action: AddBreadCrumb) {
    const { breadcrumbs } = ctx.getState();  
    let breadArr=[];
    for(let i=0;i<breadcrumbs.length;i++){
       if(breadcrumbs[i].url===action.breadCrumb.url){
          break;
        }
        breadArr.push(breadcrumbs[i]);       
    }
    breadArr.push(action.breadCrumb);   
    ctx.patchState({  
      breadcrumbs:breadArr
    });
  }
 
  @Action(RemoveAllBreadCrumb)
  removeAllBreadCrumb(ctx: StateContext<BreadCrumbStateModel>, action: RemoveAllBreadCrumb) {
    const { breadcrumbs } = ctx.getState();
    ctx.patchState({
      breadcrumbs: []
    });
  }
}
