import { ChangeDetectionStrategy as CD, Component, signal } from '@angular/core';
import { COMPANY, PILLS, WORDS } from '../core/site.data';
import { loop } from '../core/loop';
import { Particles } from '../shared/particles';

const SRC = `const idsnova = {
  cliente: "tu negocio",
  sistema: "a medida",
  soporte: true
};

idsnova.lanzar(); // listo`;
const esc = (t: string) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const hl = (t: string) => esc(t).replace(/"[^"]*"?|\bconst\b|\btrue\b/g, m => `<span class="${m[0] === '"' ? 's' : m === 'const' ? 'k' : 'n'}">${m}</span>`);

@Component({
  selector: 'app-hero', imports: [Particles], changeDetection: CD.OnPush,
  templateUrl: './hero.html',
})
export class Hero {
  c = COMPANY; pills = PILLS; bars = [85, 55, 95, 65, 100, 75];
  word = signal(''); code = signal(''); rot = signal('');

  constructor() {
    let wi = 0, ci = 0, del = false, k = 0;
    loop(() => {
      const w = WORDS[wi]; this.word.set(w.slice(0, ci));
      if (!del && ci === w.length) { del = true; return 1600; }
      if (del && ci === 0) { del = false; wi = (wi + 1) % WORDS.length; }
      ci += del ? -1 : 1; return del ? 35 : 70;
    });
    loop(() => { this.code.set(hl(SRC.slice(0, k))); k = k > SRC.length + 30 ? 0 : k + 1; return k > SRC.length ? 100 : 55; });
  }

  tilt(e: PointerEvent) {
    const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    this.rot.set(`rotateY(${x * 18}deg) rotateX(${-y * 18}deg)`);
  }
}
