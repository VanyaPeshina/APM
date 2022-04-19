import {Component} from "@angular/core";

// the component is a function, it's name is name of the class
// in this case -> AppComponent
@Component({
  selector: 'pm-root', // custom element, which will be searched by this name from the HTML to display the template
  template: `
    <div><h1>{{pageTitle}}</h1>
        <div>My First Component</div>
    </div>
  `
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
