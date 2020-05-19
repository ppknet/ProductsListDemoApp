import { Component } from "@angular/core";

@Component({
  selector:'pm-productlist',
  templateUrl:'./productlist.component.html'
})
export class ProductListComponent{
listFilter:string;
pageTitle:string="Product list";

}