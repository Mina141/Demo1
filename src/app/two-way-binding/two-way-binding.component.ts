import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './two-way-binding.component.html',
  styleUrl: './two-way-binding.component.scss'
})
export class TwoWayBindingComponent {
  fullName: string = ""
}
