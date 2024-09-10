import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { RightNavComponent } from './right-nav/right-nav.component';
import { MainComponent } from './main/main.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from "./property-binding/property-binding.component";
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent,
    LeftNavComponent, RightNavComponent, MainComponent, InterpolationComponent,
    PropertyBindingComponent,ClassBindingComponent,StyleBindingComponent,EventBindingComponent,TwoWayBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Demo1';
}
