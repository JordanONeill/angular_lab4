import { Component } from '@angular/core';
import { ListcomponentComponent } from './listcomponent/listcomponent.component'; // Import ListcomponentComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListcomponentComponent], // Add the component to imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count: number = 0;
  showMessage: boolean = false;

  incrementCount() {
    this.count++;
  }

  toggleMessage() {
    this.showMessage = !this.showMessage;
  }
}
