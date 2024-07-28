import { UpperCasePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  @Input() activeSection: string = '';
  @Input() show: string = '';
  @Input() footer: string = '';
  public navList: Array<{ ref: string; label: string }> = [
    {
      ref: '#home',
      label: 'Inicio',
    },
    {
      ref: '#about-us',
      label: 'Sobre nosotros',
    },
    {
      ref: '#how-does-it-work',
      label: '¿Como funciona?',
    },
    {
      ref: '#probabilities',
      label: '¿Probabilidades?',
    },
    {
      ref: '#frequent-questions',
      label: 'Preguntas Frecuentes',
    },
    {
      ref: '#contact-us',
      label: 'Contáctanos',
    },
    {
      ref: '#terms-and-conditions',
      label: 'Términos y Condiciones',
    },
  ];
}
