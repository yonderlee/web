import { ChangeDetectionStrategy as CD, Component } from '@angular/core';
import { SERVICES } from '../core/site.data';
import { Reveal } from '../shared/reveal';
import { Tilt } from '../shared/tilt';

@Component({
  selector: 'app-services', imports: [Reveal, Tilt], changeDetection: CD.OnPush,
  templateUrl: './services.html',
})
export class Services { services = SERVICES; }
