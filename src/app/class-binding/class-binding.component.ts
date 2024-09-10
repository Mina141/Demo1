import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './class-binding.component.html',
  styleUrl: './class-binding.component.scss'
})
export class ClassBindingComponent {
  textColor: string = "text-success"
  hasError: boolean = false
  hasSpecial: boolean = true

  messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.hasSpecial
  }
}
