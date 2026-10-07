import { Directive, ElementRef, inject } from '@angular/core';

@Directive({ selector: '[tilt]', host: { '(pointermove)': 'move($event)', '(pointerleave)': 'reset()' } })
export class Tilt {
  private el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  move(e: PointerEvent) {
    const r = this.el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    this.el.style.setProperty('--x', e.clientX - r.left + 'px'); this.el.style.setProperty('--y', e.clientY - r.top + 'px');
    this.el.style.transform = `perspective(700px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-5px)`;
  }
  reset() { this.el.style.transform = ''; }
}
