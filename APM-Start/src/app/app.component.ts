import {Component} from "@angular/core";

// the component is a function, it's name is name of the class
// in this case -> AppComponent
@Component({
  selector: 'pm-root', // custom element, which will be searched by this name from the HTML to display the template

  // {{}} is rendering and it points at the template we want to display when needed
  // in this case it is the pageTitle property in the AppComponent class
  template: `
    <nav class='navbar navbar-expand navbar-light bg-light'>
      <a class='navbar-brand'>{{pageTitle}}</a>
      <ul class='nav nav-pills'>
        <li><a class='nav-link' routerLinkActive='active' routerLink='/welcome'>Home</a></li>
        <li><a class='nav-link' routerLinkActive='active' routerLink='/products'>Product List</a></li>
      </ul>
    </nav>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
