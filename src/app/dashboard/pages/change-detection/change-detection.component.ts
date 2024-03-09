import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [
    CommonModule, TitleComponent,
  ],
  template: `
  <app-title [title]="currentFramework()"> </app-title>

  <pre>{{frameworksAsSignal() | json}}</pre>

  <pre>{{frameworksAsProperty | json}}</pre>
  

  `,
  
  changeDetection: ChangeDetectionStrategy.Default,
})
export default class ChangeDetectionComponent {

  public currentFramework = computed(
  ()=>`Change detection - ${this.frameworksAsSignal().name} `
  );

  public frameworksAsSignal = signal({
    name:'Angular',
    releaseDate: 2023
  });

  public frameworksAsProperty = ({
    name:'Angular',
    releaseDate: 2022
  });


  constructor(){

     setTimeout(()=>{

      //this.frameworksAsProperty.name= 'React';

    this.frameworksAsSignal.update(value=>({
      ...value,
      name:'React',
    }))

      console.log('se cambio a ', this.frameworksAsSignal().name)
     }, 2000);

  }


}
