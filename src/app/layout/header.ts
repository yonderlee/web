import { ChangeDetectionStrategy as CD, Component, signal } from '@angular/core';
import { NAV } from '../core/site.data';

@Component({
  selector: 'app-header', changeDetection: CD.OnPush,
  host: { '(window:scroll)': 'onScroll()' },
  templateUrl: './header.html',
})
export class Header {
  nav = NAV;
  open = signal(false);
  solid = signal(false);

  onScroll() { this.solid.set(scrollY > 30); }
}
