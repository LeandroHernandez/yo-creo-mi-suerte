import { Component, Input } from '@angular/core';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { BuyYourTicketNowComponent } from '../buy-your-ticket-now/buy-your-ticket-now.component';

@Component({
  selector: 'app-probabilities',
  standalone: true,
  imports: [SectionTitleComponent, BuyYourTicketNowComponent],
  templateUrl: './probabilities.component.html',
  styleUrl: './probabilities.component.css',
})
export class ProbabilitiesComponent {
  @Input() activeSection: string = '';
  public entityList: Array<{
    list: Array<{
      img: {
        src: string;
        alt: string;
        class: string;
      };
      title: string;
      probability: string;
      percentage: string;
      class?: string;
    }>;
  }> = [
    // {
    //   list: [
    //     {
    //       img: {
    //         src: 'TrebolYoCreoMiSuerte.svg',
    //         alt: 'TrebolYoCreoMiSuerte',
    //         class: 'LogoTrebol',
    //       },
    //       title: 'Yo Creo Mi Suerte',
    //       probability: '2000',
    //       percentage: '0.05',
    //     },
    //     {
    //       img: {
    //         src: 'LogoPoweer.png',
    //         alt: 'LogoPower',
    //         class: 'LogoPower',
    //       },
    //       title: 'Powerball (EE.UU.)',
    //       probability: '292,201,338',
    //       percentage: '0.00000034',
    //     },
    //     {
    //       img: {
    //         src: 'LogoMegamillion.png',
    //         alt: 'LogoMegamillion',
    //         class: 'LogoMegamillion',
    //       },
    //       title: 'Mega Millions (EE.UU.)',
    //       probability: '302,575,350',
    //       percentage: '0.00000034',
    //       class: 'Megamillion',
    //     },
    //     {
    //       img: {
    //         src: 'LogoEuroMillion.png',
    //         alt: 'LogoEuroMillion',
    //         class: 'LogoEuroMillion',
    //       },
    //       title: 'EuroMillions (Europa)',
    //       probability: '139,838,160',
    //       percentage: '0.00000071',
    //     },
    //   ],
    // },
    {
      list: [
        {
          img: {
            src: 'TrebolYoCreoMiSuerte.svg',
            alt: 'TrebolYoCreoMiSuerte',
            class: 'LogoTrebol',
          },
          title: 'Yo Creo Mi Suerte',
          probability: '2000',
          percentage: '0.05',
          class: 'YoCreoMiSuerte',
        },
        {
          img: {
            src: 'LogoPoweer.png',
            alt: 'LogoPower',
            class: 'LogoPower',
          },
          title: 'Powerball (EE.UU.)',
          probability: '292,201,338',
          percentage: '0.00000034',
        },
        {
          img: {
            src: 'LogoMegamillion.png',
            alt: 'LogoMegamillion',
            class: 'LogoMegamillion',
          },
          title: 'Mega Millions (EE.UU.)',
          probability: '302,575,350',
          percentage: '0.00000034',
          class: 'Megamillion',
        },
        {
          img: {
            src: 'LogoEuroMillion.png',
            alt: 'LogoEuroMillion',
            class: 'LogoEuroMillion',
          },
          title: 'EuroMillions (Europa)',
          probability: '139,838,160',
          percentage: '0.00000071',
        },
        {
          img: {
            src: 'LogoElGordo.png',
            alt: 'LogoElGordo',
            class: 'LogoElGordo',
          },
          title: 'El Gordo (España)',
          probability: '100,000',
          percentage: '0.001',
        },
        {
          img: {
            src: 'LogoTheNationalLoteri.png',
            alt: 'LogoTheNationalLoteri',
            class: 'LogoTheNationalLoteri',
          },
          title: 'Lotería Nacional del Reino Unido (UK)',
          probability: '45,057,474',
          percentage: '0.00000222',
          class: 'TheNationalLoteri',
        },
        {
          img: {
            src: 'LogoOzLotto.png',
            alt: 'LogoOzLotto',
            class: 'LogoOzLotto',
          },
          title: 'Oz Lotto (Australia)',
          probability: '2000',
          percentage: '0.05',
        },
        {
          img: {
            src: 'LogoSuperenalotto.png',
            alt: 'LogoSuperenalotto',
            class: 'LogoSuperenalotto',
          },
          title: 'SuperEnalotto (Italia)',
          probability: '622,614,630',
          percentage: '0.00000016',
          class: 'Superenalotto',
        },
        {
          img: {
            src: 'LogoEurojackpot.png',
            alt: 'LogoEurojackpot',
            class: 'LogoEurojackpot',
          },
          title: 'EuroJackpot (Europa)',
          probability: '95,344,200',
          percentage: '0.00000105',
        },
      ],
    },
  ];
}
