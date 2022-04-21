import {Component, OnDestroy, OnInit} from "@angular/core";
import {IProduct} from "./product";
import {ProductService} from "./product.service";
import {Subscription} from "rxjs";

// The Component can be bound to an exact component with 'providers: [ProductService]' for example,
// which is a Component Injector
// -> this way the service will be available ONLY to that component and its child or nested components
// and it will provide multiple instances of the service
@Component({
  //selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

// OnInit is a lifecycle hook (which is an Angular Interface)
export class ProductListComponent implements OnInit, OnDestroy {
  //properties
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  products: IProduct[] = [];
  errorMessage: string = '';
  sub!: Subscription;

  // OnInit is a Lifecycle hook
  // it will be the first thing to be executed when the Component is initialized
  ngOnInit(): void {
    // this is the httpGet (the products from the server) request, but not and the actual response
    //because it is an asynchronous operation
    //so we add a {} after the next: products => and make a multiline func
    //and nest this.filteredProducts in this func to get the response
    this.sub = this.productService.getProducts().subscribe({
      //next is associated to the result we want after the subscribe()
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      //error is about what error to return if an error occurs
      error: err => this.errorMessage = err
    });
  }

  // constructor -> with the private (protected or public are also available)
  // we inject the ProductService directly
  constructor(private productService: ProductService) {}

  // FILTERING
  private _listFilter: string = '';
  filteredProducts: IProduct[] | undefined;
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    console.log('In setter:', value);
    this.filteredProducts = this.performFilter(value);
  }

  performFilter(filterBy: string): IProduct[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
    product.productName.toLocaleLowerCase().includes(filterBy));
  }

  //Show/Hide Image
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  // this func is bound to the onClick() func in the star.component.ts
  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}


