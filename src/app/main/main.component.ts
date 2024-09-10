import { Component } from '@angular/core';
import { RightNavComponent } from "../right-nav/right-nav.component";
import { LeftNavComponent } from "../left-nav/left-nav.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RightNavComponent, LeftNavComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
