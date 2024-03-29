import { TitleComponent } from '@shared/title/title.component';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeavyLoadersFastComponent } from '@shared/heavy-loaders/heavy-loaders-fast.component';

@Component({
  selector: 'app-defer-options',
  standalone: true,
  imports: [
    CommonModule, TitleComponent, HeavyLoadersFastComponent
  ],
  templateUrl: './defer-options.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DeferOptionsComponent { }
