import { ChangeDetectionStrategy, Component, ElementRef, afterNextRender, viewChild } from '@angular/core';

@Component({ selector: 'app-particles', changeDetection: ChangeDetectionStrategy.OnPush, templateUrl: './particles.html' })
export class Particles {
  private c = viewChild.required<ElementRef<HTMLCanvasElement>>('c');
  constructor() {
    afterNextRender(() => {
      if (matchMedia('(prefers-reduced-motion:reduce)').matches) return;
      const cv = this.c().nativeElement, x = cv.getContext('2d')!, host = cv.closest('section')!;
      const D = Math.min(devicePixelRatio || 1, 2), m = { x: -999, y: -999 };
      let W = 0, H = 0, P: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
      const size = () => {
        const r = host.getBoundingClientRect(); W = r.width; H = r.height; cv.width = W * D; cv.height = H * D; x.setTransform(D, 0, 0, D, 0, 0);
        P = Array.from({ length: Math.round(Math.min(110, W * H / 14000)) }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .4, vy: (Math.random() - .5) * .4, r: Math.random() * 1.6 + .8 }));
      };
      size(); addEventListener('resize', size);
      host.addEventListener('pointermove', e => { const r = cv.getBoundingClientRect(); m.x = e.clientX - r.left; m.y = e.clientY - r.top; });
      host.addEventListener('pointerleave', () => m.x = -999);
      const frame = () => {
        x.clearRect(0, 0, W, H);
        for (const p of P) {
          const dx = p.x - m.x, dy = p.y - m.y, d = Math.hypot(dx, dy);
          if (d < 140) { p.x += dx / d * 1.2; p.y += dy / d * 1.2; }
          p.x += p.vx; p.y += p.vy; if (p.x < 0 || p.x > W) p.vx *= -1; if (p.y < 0 || p.y > H) p.vy *= -1;
          x.fillStyle = 'rgba(46,230,214,.85)'; x.beginPath(); x.arc(p.x, p.y, p.r, 0, 7); x.fill();
        }
        for (let i = 0; i < P.length; i++) for (let j = i + 1; j < P.length; j++) {
          const d = Math.hypot(P[i].x - P[j].x, P[i].y - P[j].y);
          if (d < 120) { x.strokeStyle = `rgba(123,97,255,${(1 - d / 120) * .5})`; x.beginPath(); x.moveTo(P[i].x, P[i].y); x.lineTo(P[j].x, P[j].y); x.stroke(); }
        }
        requestAnimationFrame(frame);
      };
      frame();
    });
  }
}
