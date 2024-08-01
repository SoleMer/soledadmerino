import { Injectable } from '@angular/core';
import { Course } from '../models/course';

const courses: Course[] = [
  {
    id: 1,
    title: "Microservicios con Spring Boot",
    resume: "Curso intensivo de desarrollo de microservicios con Java Spring Boot, Spring Netflix Eureka, Feign Client, Load Balancer y API Gateway de Spring Cloud.",
    description: "En este curso intensivo, aprenderás a crear aplicaciones con microservicios usando Java y Spring Boot. Empezaremos desde los conceptos básicos de los microservicios y avanzaremos hacia temas más avanzados como la comunicación entre microservicios usando Feign Client, el registro y descubrimiento de servicios con Eureka Server, y la gestión de solicitudes con API Gateway. Cada módulo del curso está diseñado para ser práctico y aplicable, con ejemplos claros que te permitirán poner en práctica lo aprendido realizando tu propio código en paralelo.",
    aditionals: "Se incluyen archivos descargables como scripts y el proyecto terminado.",
    support: "Una vez finalizado el curso, tendrás la oportunidad de consultarme sobre las inquitudes que te hayan quedado.",
    goals: [
      "Entender los fundamentos de los microservicios y su arquitectura.",
      "Desarrollar back-end con Spring Boot.",
      "Configurar y utilizar Spring Boot para desarrollar microservicios.",
      "Utilizar Swagger para endpoints.",
      "Implementar comunicación entre microservicios usando Feign Client.",
      "Registrar y descubrir servicios con Eureka Server.",
      "Configurar puertos dinámicos.",
      "Balancear la carga de los microservicios.",
      "Configurar API Gateway para manejar solicitudes.",
    ],
    requirements: ["Conocimientos básicos de Java.",
      "Familiaridad con entornos de desarrollo integrados (IDE).",
      "Conocimientos básicos de bases de datos.",
      "Conocimientos básicos de Spring Framework serán útiles, pero no obligatorios."
  ],
    videoUrl: "../../../assets/videos/cursoMicroservicios.mp4",
    price: "40 USD",
    launchPrice: "40 USD",
  }
]

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getCourseById(id: number): Course {
    let c: Course = {id: 0,
      title: "",
      resume: "",
      description: "",
      aditionals: "",
      support: "",
      goals: [""],
      requirements: [""],
      videoUrl: "",
      price: "",
      launchPrice: "",}
    courses.forEach((course) => {
      if (course.id == id) c = course;
    });
    return c;
  }
}
