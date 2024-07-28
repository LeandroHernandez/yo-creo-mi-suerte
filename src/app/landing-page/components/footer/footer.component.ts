import { Component, Input } from '@angular/core';
import { SocialComponent } from '../social/social.component';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [SocialComponent, NavComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  @Input() activeSection: string = '';
}
