import { TitleComponent } from '@shared/title/title.component';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeavyLoadersSlowComponent } from '@shared/heavy-loaders/heavy-loaders-slow.component';

@Component({
  selector: 'app-defer-views',
  standalone: true,
  imports: [
    CommonModule,HeavyLoadersSlowComponent, TitleComponent
  ],
  templateUrl:'defer-views.component.html',
 
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DeferViewsComponent { }
