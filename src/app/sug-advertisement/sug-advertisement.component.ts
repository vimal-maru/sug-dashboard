import { Component, signal } from '@angular/core';

@Component({
  selector: 'sug-advertisement',
  imports: [],
  templateUrl: './sug-advertisement.component.html',
  styleUrl: './sug-advertisement.component.css',
})
export class SugAdvertisementComponent {
  
  //default behaviour of ads
  showAd = signal(true);

  //on button click hide the ads
  hideAd(): void {
    this.showAd.set(false);
  }
}
