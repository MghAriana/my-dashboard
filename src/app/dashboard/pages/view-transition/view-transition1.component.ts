import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TitleComponent } from "../../../shared/title/title.component";

@Component({
    selector: 'app-view-transition',
    standalone: true,
    template: `
  <app-title title="view transition 1"></app-title>
  <section class="flex justify-start">
    <img srcset="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTlP17td9g1ixPqR_JVunP42XmDkDPjGY6-w&usqp=CAU"
         alt="picsum"
         width="200"
         height="300"
         style="view-transition-name: hero1"
         />

         <div class="bg-green-200 w-56 h-56 rounded"
         style="view-transition-name: hero2">
          
         </div>
  </section>
`,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        TitleComponent
    ]
})
export default class ViewTransitionComponent { }
