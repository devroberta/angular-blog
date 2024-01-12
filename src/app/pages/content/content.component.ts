import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  private id: string | null = '0';

  photoCover: string = 'https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2019/11/O-Que-%C3%A9-Angular-Guia-para-Iniciantes.png';
  contentTitle: string = 'MINHA NOTÍCIA';
  contentDescription: string = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, voluptatibus a. Iusto saepe, inventore sapiente modi voluptatem ducimus vel reprehenderit et itaque obcaecati rem quibusdam mollitia facilis eius? Facere, quia!';

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get('id'));

      this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter(article => article.id == id)[0];

    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.photoCover = result.photo
  }

}
