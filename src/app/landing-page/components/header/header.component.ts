import { Component, Input } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { SocialComponent } from '../social/social.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavComponent, SocialComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() activeSection: string = '';
  public show: boolean = false;
}
