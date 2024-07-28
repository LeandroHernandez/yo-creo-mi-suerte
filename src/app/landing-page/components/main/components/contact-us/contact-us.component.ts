import { Component, Input } from '@angular/core';
import { SectionTitleComponent } from '../section-title/section-title.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [SectionTitleComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css',
})
export class ContactUsComponent {
  @Input() activeSection: string = '';
}
