import { Component } from '@angular/core';

export interface Card {
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  toggle = true;

  cards: Card[] = [
    {
      title: 'Card 1',
      text: 'This is the card #1'
    },
    {
      title: 'Card 2',
      text: 'This is the card #2'
    },
    {
      title: 'Last card',
      text: 'This is the last card'
    }
  ];

  toggleCards(): void {
    this.toggle = !this.toggle;
  }
}
