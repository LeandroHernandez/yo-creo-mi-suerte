import { Component, Input } from '@angular/core';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { BuyYourTicketNowComponent } from '../buy-your-ticket-now/buy-your-ticket-now.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [SectionTitleComponent, BuyYourTicketNowComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent {
  @Input() activeSection: string = '';
}
