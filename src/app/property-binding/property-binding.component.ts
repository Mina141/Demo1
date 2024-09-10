import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  standalone: true,
  imports: [],
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.scss'
})
export class PropertyBindingComponent {
  textId: string = "Id23"
  isDisabled: boolean = false
}
