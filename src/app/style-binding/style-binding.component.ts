import { style } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './style-binding.component.html',
  styleUrl: './style-binding.component.scss'
})
export class StyleBindingComponent {
  hasError: boolean = false
  myStyle = {
    color:this.hasError ? "grey":"blue",
    fontStyle: "italic"
  }
}
