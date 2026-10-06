import { ChangeDetectionStrategy as CD, Component } from '@angular/core';
import { MODES, PERKS } from '../core/site.data';
import { Reveal } from '../shared/reveal';
import { Tilt } from '../shared/tilt';

@Component({
  selector: 'app-modalities', imports: [Reveal, Tilt], changeDetection: CD.OnPush,
  templateUrl: './modalities.html',
})
export class Modalities { modes = MODES; perks = PERKS; }
