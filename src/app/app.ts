import { ChangeDetectionStrategy as CD, Component, signal } from '@angular/core';
import { Header } from './layout/header';
import { Footer } from './layout/footer';
import { Hero } from './sections/hero';
import { Services } from './sections/services';
import { Modalities } from './sections/modalities';
import { Contact } from './sections/contact';

@Component({
  selector: 'app-root', changeDetection: CD.OnPush,
  imports: [Header, Hero, Services, Modalities, Contact, Footer],
  host: { '(window:scroll)': 'onScroll()', '(window:pointermove)': 'glow.set($event)' },
  templateUrl: './app.html',
})
export class App {
  progress = signal(0);
  glow = signal<PointerEvent | null>(null);
  onScroll() { this.progress.set(scrollY / (document.documentElement.scrollHeight - innerHeight) * 100); }
}
