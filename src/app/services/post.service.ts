import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { PostSection } from '../models/post-section';

const posts: Post[] = [
  {
    id: 1,
      title: "Monolito vs Miscroservicios",
      resume: "La arquitectura de software es un aspecto crucial en el desarrollo de aplicaciones modernas, y la elección entre un enfoque monolítico y microservicios es una decisión a tomar. Los sistemas monolíticos, con su estructura única y centralizada, han sido durante mucho tiempo la norma en el desarrollo de software. Sin embargo, en los últimos años, los microservicios han ganado popularidad como una alternativa flexible y escalable. A continuación veremos las diferencias entre sistemas monolíticos y microservicios, analizando sus características y diferencias",
      pdf: "MonolitoVsMicroservicios.pdf",
      url: "/tech-corner/1",
      sections: [
        {
          postId: 1,
          order: 1,
          type: "info",
          title: "",
          content: "Los sistemas monolíticos son aquellos en los que se tiene un único empaquetado que se encarga de realizar todas las operaciones sobre una única base de datos para proveer de esta manera todos los servicios que deben ser accedidos por el cliente.",
          imageUrl: "./../../../assets/post/monolito.png",
          link: "",
          textLink: ""
        },
        {
          postId: 1,
          order: 2,
          type: "info",
          title: "",
          content: "Los microservicios son justamente pequeños servicios que se encargan cada uno de una pequeña parte del sistema, conectados a bases de datos más pequeñas, que contienen sólo las tablas necesarias para el servicio al que están conectadas.",
          imageUrl: "./../../../assets/post/microservicios.png",
          link: "",
          textLink: ""
        },
        {
          postId: 1,
          order: 3,
          type: "info",
          title: "",
          content: "Hasta aquí, definimos la principal diferencia entre microservicios y un sistema monolítico, ahora vamos a ver qué implican estas dos perspectivas de forma comparativa y adentrándonos un poco más en el concepto de microservicios.",
          imageUrl: "",
          link: "",
          textLink: ""
        },
        {
          postId: 1,
          order: 4,
          type: "info",
          title: "Desarrollo y despliegue",
          content: "Cuando desarrollamos un sistema monolítico, todos los miembros del equipo de desarrollo trabajamos sobre distintas partes de un solo sistema. Todo elequipo de back end se encarga de generar todos los endpoints y responder a cada uno de ellos y todo el equipo de frontend se ocupa de comunicar el cliente con los diferentes endpoints. Al finalizar, para generar el archivo de despliegue, debe estar todo listo para ensamblarse en un único archivo ejecutable que se despliega y escala como un todo. \n \n Por otra parte, un microservicio debe ser lo suficientemente pequeño como para ser desarrollado por un único equipo y ser facilmente testeable. Cuando desarrollamos microervicios cada servicio es propiedad de un equipo. La coordinación entre los equipos debe estar limitada a las responsabilidades implementadas por cada servicio. Cada equipo de desarrollo se encarga de una funcionalidad, lo que brinda la posibilidad de que cada equipo trabaje independientemente y cada microservicio pueda desplegarse sin necesidad de esperar a que todos los otros equipos terminen con su parte. El resultado son varios archivos ejecutables que se despliegan y escalan cada uno de forma autónoma, y cada unidad de despliegue contiene sólo un servicio o uno pocos servicios cohesivos. \n \n La forma en que un sistema de software se empaqueta y se despliega afecta directamente ciertos atributos de calidad. Pasemos a ver algunos de estos.",
          imageUrl: "",
          link: "",
          textLink: ""
        },
        {
          postId: 1,
          order: 5,
          type: "info",
          title: "Mantenibilidad y escalabilidad",
          content: "Como vimos antes, un sistema monolítico se despliega como un todo, lo que conduce a que cualquier cambio en la aplicación requiere un re-despliegue de toda la aplicación y que, si se desea escalar, debe escalarse toda la aplicación. \n \n En cambio, utilizando una arquitectura orietada a microservicios, se realizan los cambios necesarios y se re-despliega sólo el o los servicios implicados y, de igual manera puede escalarse cada parte del sistema por separado.",
          imageUrl: "",
          link: "",
          textLink: ""
        },
        {
          postId: 1,
          order: 6,
          type: "info",
          title: "Disponibilidad",
          content: "Cuando hablamos de un monolito, sabemos que si por algún motivo el sistema se cae, todo el sistema completo deja de funcionar. Con microservicios tenemos la ventaja de que si una parte falla, el resto sigue funcionando sin inconvenientes, sólo va a dejar de funcionar todo lo que esté relacionado con las implicancias de ese servicio en particular.",
          imageUrl: "",
          link: "",
          textLink: ""
        },
        {
          postId: 1,
          order: 7,
          type: "info",
          title: "Consistencia",
          content: "Sabemos que la consistencia de datos es un factor que juega un papel importante a la hora de desarrollar y gestionar un sistema. Si bien es cierto que es un aspecto que debemos cuidar siempre, con una perspectiva orientada al desarrollo de microsevicios aparecen nuevos desafios, ya que muchas veces vamos a necesitar acceder a la misma información en dos servicios separados, lo que algunas veces nos puede llevar a duplicar tablas en nuestas bases de datos. Por esto, mantener consistencia fuerte es más complejo en sistemas distribuidos, ya que deben manejarse técnicas de consistencia eventual.",
          imageUrl: "",
          link: "",
          textLink: ""
        },
        {
          postId: 1,
          order: 8,
          type: "info",
          title: "Distribución",
          content: "En sistemas monolíticos, al ser un todo, las diferentes partes del sistema se comunican entre sí mediante mensajes simples. En cambio, la comunicación entre microservicios se realiza mediante llamadas remotas, las cuales son más lentas, más difíciles de programar y tienen más riesgo de fallos.",
          imageUrl: "",
          link: "",
          textLink: ""
        },
        {
          postId: 1,
          order: 9,
          type: "info",
          title: "Diversidad tecnológica",
          content: "Al desarrollar sistemas monolíticos se utiliza un mismo lenguaje para todo el sistema, mismo framework, mismas tecnologías en general. Desarrollar bajo una arquitectura de microservicios nos ofreced la posibilidad de que cada servicio tenga un lenguaje, framework, almacenamiento de datos, etc. diferente, utilizando en cada caso, las tecnologías que mejor se adapten a cada servicio.",
          imageUrl: "",
          link: "",
          textLink: ""
        },
        {
          postId: 1,
          order: 10,
          type: "info",
          title: "En resumen",
          content: "anto los sistemas monolíticos como los microservicios tienen sus propias ventajas y desafíos. Los sistemas monolíticos ofrecen simplicidad en el desarrollo y la implementación inicial, lo que los hace ideales para proyectos pequeños o equipos con recursos limitados. Sin embargo, a medida que la aplicación crece, pueden surgir problemas de escalabilidad y mantenibilidad. \n \n Por otro lado, los microservicios proporcionan una arquitectura modular y flexible que permite escalar y actualizar partes específicas de una aplicación de forma independiente. Esto los hace ideales para proyectos grandes y complejos, especialmente en entornos empresariales donde la escalabilidad y la distribución son críticas. Sin embargo, su implementación puede ser más compleja y requerir una mayor inversión en infraestructura y gestión. \n \n En última instancia, la elección entre un enfoque monolítico y de microservicios dependerá de las necesidades y requisitos específicos de cada proyecto.",
          imageUrl: "",
          link: "",
          textLink: ""
        }
      ]
  },
  {
    id: 2,
    title: "La Importancia del Debugging en el Desarrollo de Software",
    resume: "El debugging es una habilidad esencial para cualquier desarrollador de software. Consiste en identificar, analizar y solucionar errores en el código, lo cual es crucial para asegurar el correcto funcionamiento de cualquier aplicación. Sin embargo, a pesar de su importancia, muchos desarrolladores no le dedican suficiente tiempo y esfuerzo a aprender esta habilidad. Aquí te explico por qué el debugging es fundamental y cómo podés dominar esta técnica para mejorar tu eficiencia y la calidad de tu código.",
    pdf: "laImportanciaDelDebug.pdf",
    url: "/tech-corner/2",
    sections: [
      {
        postId: 2,
        order: 1,
        type: "title",
        title: "La Importancia de Saber Debuggear",
        content: "",
        imageUrl: "",
        link: "",
        textLink: ""
      },
      {
        postId: 2,
        order: 2,
        type: "info",
        title: "Identificación de Errores:",
        content: "El debugging permite localizar y entender los errores en el código de manera precisa. Sin un buen proceso de debugging, los desarrolladores pueden pasar horas buscando errores sin éxito, lo que afecta negativamente la productividad y puede retrasar proyectos importantes.",
        imageUrl: "",
        link: "",
        textLink: ""
      },
      {
        postId: 2,
        order: 3,
        type: "info",
        title: "Ahorro de Tiempo:",
        content: "El debugging eficiente ahorra una cantidad significativa de tiempo al evitar la necesidad de revisar grandes bloques de código manualmente. Con herramientas y técnicas adecuadas, los errores pueden ser identificados y corregidos rápidamente.",
        imageUrl: "",
        link: "",
        textLink: ""
      },
      {
        postId: 2,
        order: 4,
        type: "info",
        title: "Mejora de Habilidades:",
        content: "Desarrollar habilidades de debugging es crucial para cualquier programador. Te enseña a pensar de manera lógica y estructurada, lo que mejora tus habilidades de resolución de problemas y te hace un mejor desarrollador en general.",
        imageUrl: "",
        link: "",
        textLink: ""
      },
      {
        postId: 2,
        order: 5,
        type: "info",
        title: "Calidad del Código:",
        content: "El debugging contribuye a la creación de código más robusto y eficiente. Al identificar y corregir errores temprano en el proceso de desarrollo, se reducen los defectos en el producto final, lo que mejora la calidad y la confiabilidad del software.",
        imageUrl: "",
        link: "",
        textLink: ""
      },
      {
        postId: 2,
        order: 6,
        type: "title",
        title: "Video Tutorial",
        content: "Aquí te dejo un breve video en el que te enseño a realizar debugging paso a paso. En este video, aprenderás a colocar breakpoints, utilizar las funcionalidades de navegación y evaluar expresiones. ¡No te lo pierdas!",
        imageUrl: "",
        link: "https://www.instagram.com/reel/C9NMVIKO6Al/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        textLink: "Ver video"
      },
      {
        postId: 2,
        order: 7,
        type: "title",
        title: "Obtené tu Guía Gratuita",
        content: "Para ayudarte aún más, he creado una guía de debugging detallada que podés tener siempre a mano. Esta guía incluye todos los conceptos y pasos mencionados, además de algunos consejos y trucos adicionales para mejorar tus habilidades de debugging. \n Para obtener esta guía gratuita, comenta 'BUG' en el reel de Instagram y te la enviaré directamente. ¡No te la pierdas!",
        imageUrl: "",
        link: "",
        textLink: ""
      },
      {
        postId: 2,
        order: 8,
        type: "title",
        title: "Conclusión",
        content: "El debugging es una habilidad indispensable para cualquier desarrollador de software. No solo te ayuda a identificar y corregir errores de manera eficiente, sino que también mejora tus habilidades de resolución de problemas y la calidad de tu código. Dedicar tiempo a aprender esta habilidad te convertirá en un mejor desarrollador. \n ¡Empezá a practicar debugging hoy y codificá tu versión 2.0!",
        imageUrl: "",
        link: "",
        textLink: ""
      },
    ]
  },
  {
    id: 3,
    title: "Entendiendo la recursividad",
    resume: "La recursividad es un concepto que puede parecer complejo al principio, pero una vez que lo entendemos, se convierte en una herramienta útil en la programación. En términos simples, la recursividad ocurre cuando una función se llama a sí misma para resolver un problema más grande dividiéndolo en problemas más pequeños y manejables.",
    pdf: "",
    url: "/tech-corner/3",
    sections: [
      {
        postId: 3,
        order: 1,
        type: "info",
        title: "¿Qué es la Recursividad?",
        content: "La recursividad es una técnica utilizada en programación donde una función se llama a sí misma directa o indirectamente. Este enfoque es útil para resolver problemas que pueden ser descompuestos en subproblemas similares, como cálculos factoriales, recorridos en estructuras de datos como árboles o listas enlazadas, y problemas de combinatoria.",
        imageUrl: "",
        link: "",
        textLink: ""
      },
      {
        postId: 3,
        order: 2,
        type: "info",
        title: "Ejemplo de Recursividad: Factorial de un Número",
        content: "Uno de los ejemplos más comunes para entender la recursividad es el cálculo del factorial de un número. El factorial de un número n (denotado como n!) es el producto de todos los números enteros positivos desde 1 hasta n. Aquí hay un ejemplo de cómo se calcula utilizando recursividad:",
        imageUrl: "./../../../assets/post/factorialRecursivo.png",
        link: "",
        textLink: ""
      },
      {
        postId: 3,
        order: 3,
        type: "info",
        title: "",
        content: "En este caso, la función factorial se llama a sí misma con el valor n-1 hasta que alcanza la condición de corte, que es cuando n es igual a 0.",
        imageUrl: "",
        link: "",
        textLink: ""
      },
      {
        postId: 3,
        order: 4,
        type: "info",
        title: "¿Cuándo Usar Recursividad?",
        content: "La recursividad es especialmente útil en problemas que pueden ser descompuestos en subproblemas idénticos o similares, como en la navegación de árboles y gráficos, problemas de ordenamiento o algoritmos específicos.",
        imageUrl: "",
        link: "",
        textLink: ""
      },
      {
        postId: 2,
        order: 5,
        type: "info",
        title: "Conclusión",
        content: "Entender la recursividad es fundamental para cualquier programador, ya que es una técnica que, cuando se utiliza correctamente, puede hacer que la resolución de problemas sea más intuitiva y el código más limpio. Si estás comenzando con la recursividad, practicá con problemas simples y luego avanzá a problemas más complejos.",
        imageUrl: "",
        link: "",
        textLink: ""
      },
    ]
  }
]

const sections: PostSection[] = [
  
]

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getPostById(id: number): Post {
    let p: Post = {
      id: 0,
      title: "",
      resume: "",
      pdf: "",
      url: "",
      sections: [],
    }
    posts.forEach((post) => {
      if (post.id == id) p = post;
    });
    return p;
  }
}
