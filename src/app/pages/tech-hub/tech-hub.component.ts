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
      url: "/tech-hub/post/1",
      sections: []
    },
    {
      id: 2,
      title: "Curso Microservicios con Spring Boot",
      resume: "Curso intensivo de desarrollo de microservicios con Java Spring Boot, Spring Netflix Eureka, Feign Client, Load Balancer y API Gateway de Spring Cloud.",
      pdf: "./../../../assets/pdf/MonolitoVsMicroservicios.pdf",
      url: "/tech-hub/course/1",
      sections: []
    },
    {
      id: 3,
      title: "La Importancia del Debugging en el Desarrollo de Software",
      resume: "El debugging es una habilidad esencial para cualquier desarrollador de software. Consiste en identificar, analizar y solucionar errores en el código, lo cual es crucial para asegurar el correcto funcionamiento de cualquier aplicación. Sin embargo, a pesar de su importancia, muchos desarrolladores no le dedican suficiente tiempo y esfuerzo a aprender esta habilidad. Aquí te explico por qué el debugging es fundamental y cómo podés dominar esta técnica para mejorar tu eficiencia y la calidad de tu código.",
      pdf: "",
      url: "/tech-hub/post/2",
      sections: []
    },
    {
      id: 4,
      title: "Entendiendo la recursividad",
      resume: "La recursividad es un concepto que puede parecer complejo al principio, pero una vez que lo entendemos, se convierte en una herramienta útil en la programación. En términos simples, la recursividad ocurre cuando una función se llama a sí misma para resolver un problema más grande dividiéndolo en problemas más pequeños y manejables.",
      pdf: "",
      url: "/tech-hub/post/3",
      sections: []
    }
  ];

}
