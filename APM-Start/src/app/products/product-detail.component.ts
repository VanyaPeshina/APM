import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IProduct} from "./product";

@Component({
  //the selector is needed only if the component will be nested
  //selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  // if we don't know when we will assign a value to the property
  // we should describe it like product! OR as undefined
  product: IProduct | undefined;

  constructor(private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    // build the id for the route on init
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${id}`
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
