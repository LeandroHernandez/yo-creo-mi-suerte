import { Component, Input } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HowDoesItWorkComponent } from './components/how-does-it-work/how-does-it-work.component';
import { ProbabilitiesComponent } from './components/probabilities/probabilities.component';
import { FrequentQuestionsComponent } from './components/frequent-questions/frequent-questions.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';
import { BuyYourTicketNowComponent } from './components/buy-your-ticket-now/buy-your-ticket-now.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    HomeComponent,
    AboutUsComponent,
    HowDoesItWorkComponent,
    ProbabilitiesComponent,
    FrequentQuestionsComponent,
    ContactUsComponent,
    TermsAndConditionsComponent,
    BuyYourTicketNowComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {
  @Input() activeSection: string = '';
}
