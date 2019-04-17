import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h3>Hello {{name}}! give a star if you like this example</h3>`,
  styles: [`h3 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
