import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'oep';
about: string|any[]|null|undefined;
products: string|any[]|null|undefined;
contacts: string|any[]|null|undefined;
}
