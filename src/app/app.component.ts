import { Component } from '@angular/core';
import { SugHeaderComponent } from './sug-header/sug-header.component';
import { LayoutComponent } from './layout/layout.component';

@Component({
  selector: 'app-root',
  imports: [SugHeaderComponent, LayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  //title = 'sug-dashboard';
}
