import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {

  @Input()
  photoCover: string = 'https://sujeitoprogramador.com/wp-content/uploads/2019/04/react.png';

  @Input()
  cardTitle: string = 'Texto do Small Card';

}
