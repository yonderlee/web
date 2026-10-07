import { ChangeDetectionStrategy as CD, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { COMPANY, SERVICES } from '../core/site.data';
import { Reveal } from '../shared/reveal';

@Component({
  selector: 'app-contact', imports: [FormsModule, Reveal], changeDetection: CD.OnPush,
  templateUrl: './contact.html',
})
export class Contact {
  c = COMPANY;
  options = [...SERVICES.map(s => s.title), 'Aún no lo sé'];
  name = ''; contact = ''; msg = ''; service = this.options[0]; ok = signal('');

  send() {
    const t = `Hola IdsNova, soy ${this.name} (${this.contact}). Me interesa: ${this.service}. ${this.msg}`;
    window.open(`https://wa.me/${this.c.wa}?text=${encodeURIComponent(t)}`, '_blank');
    this.ok.set('Abrimos WhatsApp con tu mensaje. ¡Gracias!');
  }
}
