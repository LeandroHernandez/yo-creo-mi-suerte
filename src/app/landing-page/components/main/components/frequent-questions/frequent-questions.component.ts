import { Component, Input } from '@angular/core';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { BuyYourTicketNowComponent } from '../buy-your-ticket-now/buy-your-ticket-now.component';

@Component({
  selector: 'app-frequent-questions',
  standalone: true,
  imports: [SectionTitleComponent, BuyYourTicketNowComponent],
  templateUrl: './frequent-questions.component.html',
  styleUrl: './frequent-questions.component.css',
})
export class FrequentQuestionsComponent {
  @Input() activeSection: string = '';
  public questionsList: Array<{ label: string; title: string; text: string }> =
    [
      {
        label: 'Garantía de un Ganador',
        title: '¿Cómo aseguramos un ganador en cada sorteo?',
        text: '¿Nuestros sorteos están perfectamente planeados para garantizar un ganador cada vez. No es necesario vender todos los boletos, y no hay que esperar más de la cuenta. Fijamos una fecha de sorteo y el resultado se basa en los últimos números de una lotería internacional conocida, garantizando transparencia total.',
      },
      {
        label: '¿Cómo Participar?',
        title: '¿Cómo puedo participar en los sorteos?',
        text: 'Participar es fácil. Elige el sorteo en el que deseas participar, compra tu boleto a través de nuestra plataforma segura y espera la fecha del sorteo para conocer si eres el ganador.',
      },
      {
        label: 'Métodos de Pago',
        title: '¿Qué métodos de pago aceptan?',
        text: 'Aceptamos pagos mediante tarjeta de crédito y transferencia bancaria para tu comodidad y seguridad.',
      },
      {
        label: 'Confirmación de Boleto',
        title: '¿Cómo sé que mi boleto ha sido registrado?',
        text: 'Una vez que completes tu compra, recibirás un correo electrónico de confirmación con los detalles de tu boleto. También puedes verificar el estado de tu boleto en tu cuenta en nuestro sitio web.',
      },
      {
        label: 'Fecha del Sorteo',
        title: '¿Cuándo se realiza el sorteo?',
        text: 'Cada sorteo tiene una fecha de realización específica. Puedes encontrar esta información en la página del sorteo correspondiente y en tu correo de confirmación.',
      },
      {
        label: 'Privacidad y Seguridad',
        title: '¿Cómo protegen mi información personal?',
        text: 'Nos tomamos muy en serio tu privacidad y seguridad. Utilizamos tecnologías de cifrado avanzadas para proteger tu información personal y financiera. Consulta nuestra política de privacidad para más detalles.',
      },
      {
        label: 'Reclamar Premios',
        title: '¿Cómo reclamo mi premio si gano?',
        text: 'Si resultas ganador, te contactaremos a través del correo electrónico que proporcionaste al comprar tu boleto. Te daremos todas las instrucciones necesarias para reclamar tu premio de manera segura y conveniente.',
      },
      {
        label: 'Soporte al Cliente',
        title: '¿Cómo puedo contactar al soporte al cliente?',
        text: 'Si tienes alguna pregunta o necesitas asistencia, puedes contactarnos a través del formulario de contacto en nuestro sitio web. Estamos aquí para ayudarte en todo lo que necesites.',
      },
    ];
  public answer: { title: string; text: string; position: string } = {
    ...this.questionsList[0],
    position: 'list__0',
  };

  public stringify(num: number): string {
    return 'list__' + JSON.stringify(num);
  }
}
