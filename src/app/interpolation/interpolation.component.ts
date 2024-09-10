import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  standalone: true,
  imports: [],
  templateUrl: './interpolation.component.html',
  styleUrl: './interpolation.component.scss'
})

export class InterpolationComponent implements OnInit {
  constructor() { }
  fullname: string = "Mina Samir";
  URL: string = ''
  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.URL = window.location.href
    }
  }
}
