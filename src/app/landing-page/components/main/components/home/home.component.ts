import { Component, Input } from '@angular/core';
import { BuyYourTicketNowComponent } from '../buy-your-ticket-now/buy-your-ticket-now.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BuyYourTicketNowComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  @Input() activeSection: string = '';
  public imagesList: Array<{
    src: string;
    alt: string;
    class: string;
  }> = [
    {
      // src: '../../assets/RECURSOS_YOCREOMISUERTE/HOME/TituloSuperior.png',
      src: 'TituloSuperior.png',
      alt: 'Tituto principal',
      class: 'title__img img',
    },
    {
      // src: '../../assets/RECURSOS_YOCREOMISUERTE/HOME/GanaUnaPs5.png',
      src: 'GanaUnaPs5.png',
      alt: 'Gana una PlayStation5',
      class: 'text__img img',
    },
    {
      // src: '../../assets/RECURSOS_YOCREOMISUERTE/HOME/ps5.png',
      src: 'ps5.png',
      alt: 'PlayStation5',
      class: 'play__img img',
    },
  ];
}
