import { Component, Input } from '@angular/core';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { BuyYourTicketNowComponent } from '../buy-your-ticket-now/buy-your-ticket-now.component';

@Component({
  selector: 'app-how-does-it-work',
  standalone: true,
  imports: [SectionTitleComponent, BuyYourTicketNowComponent],
  templateUrl: './how-does-it-work.component.html',
  styleUrl: './how-does-it-work.component.css',
})
export class HowDoesItWorkComponent {
  @Input() activeSection: string = '';
  public iconsList: Array<{
    src: string;
    alt: string;
    class: string;
    text: string;
  }> = [
    {
      src: 'IconoEligeTuSorteo.svg',
      alt: 'IconoEligeTuSorteo',
      class: 'choose__img img',
      text: 'Elige tu sorteo',
    },
    {
      src: 'IconoAdquieretuboleto.svg',
      alt: 'IconoAdquieretuboleto',
      class: 'add__img img',
      text: 'Adquiere tu boleto mediante tarjeta de crédito o transferencia bancaria',
    },
    {
      src: 'IconoAnotaLaFecha.svg',
      alt: 'IconoAnotaLaFecha',
      class: 'date__img img',
      text: 'Anota la fecha del sorteo',
    },
  ];
}
