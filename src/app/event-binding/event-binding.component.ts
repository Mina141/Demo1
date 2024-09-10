import { Component } from '@angular/core';
import { Console } from 'console';

@Component({
  selector: 'app-event-binding',
  standalone: true,
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.scss'
})
export class EventBindingComponent {
  PrintMessage(value: any) {
    console.log("Click me !");
    console.log(value)
  }
}
