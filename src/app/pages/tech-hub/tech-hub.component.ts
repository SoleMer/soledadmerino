import { Component } from '@angular/core';
import { Post } from '../../models/post';
import { NgFor } from '@angular/common';
import { LogoEnlaceComponent } from '../../common/logo-enlace/logo-enlace.component';

@Component({
  selector: 'app-tech-corner',
  standalone: true,
  imports: [NgFor,
    LogoEnlaceComponent],
  templateUrl: './tech-hub.component.html',
  styleUrl: './tech-hub.component.scss'
})
export class TechHubComponent {

  posts: Post[] = [
    {
      id: 1,
      title: "Monolito vs Miscroservicios",
      resume: "La arquitectura de software es un aspecto crucial en el desarrollo de aplicaciones modernas, y la elección entre un enfoque monolítico y microservicios es una decisión a tomar. Los sistemas monolíticos, con su estructura única y centralizada, han sido durante mucho tiempo la norma en el desarrollo de software. Sin embargo, en los últimos años, los microservicios han ganado popularidad como una alternativa flexible y escalable. A continuación veremos las diferencias entre sistemas monolíticos y microservicios, analizando sus características y diferencias",
      pdf: "./../../../assets/pdf/MonolitoVsMicroservicios.pdf",
      url: "/tech-hub/post/1"
    },
    {
      id: 2,
      title: "Curso Microservicios con Spring Boot",
      resume: "Curso intensivo de desarrollo de microservicios con Java Spring Boot, Spring Netflix Eureka, Feign Client, Load Balancer y API Gateway de Spring Cloud.",
      pdf: "./../../../assets/pdf/MonolitoVsMicroservicios.pdf",
      url: "/tech-hub/course/1"
    }
  ];

}
