import { Injectable } from '@angular/core';
import { Course } from '../models/course';

const courses: Course[] = [
  {
    id: 1,
    title: "Microservicios con Spring Boot",
    resume: "Curso intensivo de desarrollo de microservicios con Java Spring Boot, Spring Netflix Eureka, Feign Client, Load Balancer y API Gateway de Spring Cloud.",
    description: "En este curso intensivo, aprenderás a crear aplicaciones con microservicios usando Java y Spring Boot. Empezaremos desde los conceptos básicos de los microservicios y avanzaremos hacia temas más avanzados como la comunicación entre microservicios usando Feign Client, el registro y descubrimiento de servicios con Eureka Server, y la gestión de solicitudes con API Gateway. Cada módulo del curso está diseñado para ser práctico y aplicable, con ejemplos claros que te permitirán poner en práctica lo aprendido realizando tu propio código en paralelo. También se podrán descargar scripts sql y el proyecto terminado.",
    goals: [
      "Entender los fundamentos de los microservicios y su arquitectura.",
      "Configurar y utilizar Spring Boot para desarrollar microservicios.",
      "Implementar comunicación entre microservicios usando Feign Client.",
      "Registrar y descubrir servicios con Eureka Server.",
      "Configurar API Gateway para manejar solicitudes y balancear la carga.",
      "Desplegar y administrar microservicios en un entorno de producción."
    ],
    videoUrl: "../../../assets/videos/cursoMicroservicios.mp4",
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
      goals: [""],
      videoUrl: "",}
    courses.forEach((course) => {
      if (course.id == id) c = course;
    });
    return c;
  }
}
