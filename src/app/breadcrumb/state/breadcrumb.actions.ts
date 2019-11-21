import {BreadCrumb} from './breadcrumb';
export class AddBreadCrumb{
  static readonly type="[BreadCrumb] AddBreadCrumb";
  constructor(public breadCrumb:BreadCrumb){}
}
export class RemoveAllBreadCrumb{
  static readonly type="[BreadCrumb] RemoveAllBreadCrumb";
  constructor(){}
}
