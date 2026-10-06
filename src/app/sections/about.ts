import { ChangeDetectionStrategy as CD, Component } from '@angular/core';
import { ABOUT, STEPS } from '../core/site.data';
import { Reveal } from '../shared/reveal';

@Component({
  selector: 'app-about', imports: [Reveal], changeDetection: CD.OnPush,
  templateUrl: './about.html',
})
export class About { a = ABOUT; steps = STEPS; }
