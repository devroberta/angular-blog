import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  photoCover: string = 'https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2019/11/O-Que-%C3%A9-Angular-Guia-para-Iniciantes.png';
  contentTitle: string = 'MINHA NOTÍCIA';
  contentDescription: string = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, voluptatibus a. Iusto saepe, inventore sapiente modi voluptatem ducimus vel reprehenderit et itaque obcaecati rem quibusdam mollitia facilis eius? Facere, quia!';

}
