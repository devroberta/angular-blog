import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {

  @Input()
  photoCover: string = 'https://www.zup.com.br/wp-content/uploads/2021/03/5e32dc5538c14b0d4b28f87f_imagens-angular3.png';

  @Input()
  cardTitle: string = 'Saiu a nova versão do Angular';

  @Input()
  cardDescription: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat quo harum quod, inventore voluptate totam molestias quos deserunt deleniti, eius cum aut incidunt eligendi accusantium, cumque quam perferendis amet id?';

  @Input()
  id: string = '0';

}
