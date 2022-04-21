import {Component, EventEmitter, Input, OnChanges, Output} from "@angular/core";

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
// OnChanges is an Ang interface for lifecycle event
export class StarComponent implements OnChanges {
    // Input tag means that this property will be bind to some object in the html and will fill the info from there
    @Input() rating: number = 4;
    cropWidth: number = 75;

    // In this case @Output passes an event
    // from the UI child component back to the parent container component
    // -> from a click on the stars in the UI to the onClick() func
    // the EventEmitter offers usage of Generics
    // new EventEmitter<type> is the event itself
    @Output()
    ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
      this.cropWidth = this.rating * 75/5;
    }

    onClick(): void {
      this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
}
