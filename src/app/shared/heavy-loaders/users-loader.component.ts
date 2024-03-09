import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-user-loader',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: ' <h1>hola mundo</h1> '
})
export class UserLoaderComponent { }
