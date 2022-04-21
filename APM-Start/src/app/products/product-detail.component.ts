import { Component, OnInit } from '@angular/core';

@Component({
  //the selector is needed only if the component will be nested
  //selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';

  constructor() { }

  ngOnInit(): void {
  }

}
