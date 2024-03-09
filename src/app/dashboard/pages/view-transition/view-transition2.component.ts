import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TitleComponent } from "../../../shared/title/title.component";

@Component({
    selector: 'app-view-transition',
    standalone: true,
    template: `
  <app-title title="view transition 2"></app-title>
  <section class="flex justify-end">
    <img srcset="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTlP17td9g1ixPqR_JVunP42XmDkDPjGY6-w&usqp=CAU"
         alt="picsum"
         width="200"
         height="300"
         style="view-transition-name: hero1"
         />

         <div class="fixed bottom-16 right-9 bg-pink-300 w-40 h-40 rounded"
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
