import { ChangeDetectionStrategy as CD, Component } from '@angular/core';
import { COMPANY } from '../core/site.data';

@Component({
  selector: 'app-footer', changeDetection: CD.OnPush,
  templateUrl: './footer.html',
})
export class Footer { c = COMPANY; year = new Date().getFullYear(); }
