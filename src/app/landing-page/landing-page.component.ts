import { Component, HostListener } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeaderComponent, MainComponent, FooterComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  public activeSection: string = 'home';
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const sections = document.querySelectorAll('.mainSection');
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const sectionBottom = sectionTop + section.clientHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        this.activeSection = section.id;
      }
    });
  }
}
