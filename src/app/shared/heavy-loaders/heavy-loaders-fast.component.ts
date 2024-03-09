import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-fast',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: ` 
  <section [ngClass]="['w-full', cssClas ]">

    <ng-content/>

  </section>`,
})
export class HeavyLoadersFastComponent { 

  @Input({ required: true }) cssClas!:string;

}
