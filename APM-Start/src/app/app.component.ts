import {Component} from "@angular/core";

// the component is a function, it's name is name of the class
// in this case -> AppComponent
@Component({
  selector: 'pm-root', // custom element, which will be searched by this name from the HTML to display the template
  template: `
    <div><h1>{{pageTitle}}</h1>
        <pm-products></pm-products>
    </div>
  `
  // {{}} is rendering and it points at the template we want to display when needed
  // in this case it is the pageTitle property in the AppComponent class
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';

}
