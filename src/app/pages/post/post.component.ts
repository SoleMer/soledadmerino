import { Component } from '@angular/core';
import { Post } from '../../models/post';
import { LogoEnlaceComponent } from '../../common/logo-enlace/logo-enlace.component';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [LogoEnlaceComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {

  post: Post = {
    id: 1,
    title: "Monolito vs Miscroservicios",
    resume: "La arquitectura de software es un aspecto crucial en el desarrollo de aplicaciones modernas, y la elección entre un enfoque monolítico y microservicios es una decisión a tomar. Los sistemas monolíticos, con su estructura única y centralizada, han sido durante mucho tiempo la norma en el desarrollo de software. Sin embargo, en los últimos años, los microservicios han ganado popularidad como una alternativa flexible y escalable. A continuación veremos las diferencias entre sistemas monolíticos y microservicios, analizando sus características y diferencias",
    pdf: "MonolitoVsMicroservicios.pdf",
    url: "/tech-corner/1"
  }

  ngOnInit() {
    console.log(this.post.pdf);
  }

}
