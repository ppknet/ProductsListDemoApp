import { Component } from "@angular/core";

@Component({
  selector:'pm-productlist',
  templateUrl:'./product-list.component.html'
})
export class ProductListComponent{
listFiler:string;
pageTitle:string="Product list";

}