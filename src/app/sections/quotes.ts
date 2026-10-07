import { ChangeDetectionStrategy as CD, Component, computed, signal } from '@angular/core';
import { QUOTES } from '../core/site.data';

@Component({
  selector: 'app-quotes', changeDetection: CD.OnPush,
  templateUrl: './quotes.html',
})
export class Quotes {
  quotes = QUOTES;
  idx = signal(0);
  cur = computed(() => this.quotes[this.idx()] ?? this.quotes[0]);
}
