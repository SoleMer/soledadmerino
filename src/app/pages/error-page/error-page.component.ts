import { Component } from '@angular/core';

@Component({
  selector: 'app-error-page',
  standalone: true,
  imports: [],
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.scss'
})
export class ErrorPageComponent {

  errors: String[] = [
    "'Mmm, por acá no hay nada ¡Volvamos a programar!';",
    "'Ooops! se ve que no tengo nada para este path. ¿Seguimos programando?';",
    "'¿A dónde vas? No hay nada acá. ¡Programemos!';",
    "'Yo creo que acá no era, pero como no soy usuario no opino.';",
    "'La curiosidad mato al dev, caíste en una página inexistente.';",
    "'Página no encontrada. ¡Vuelve a compilar y prueba de nuevo!';",
    "'Alguien dejó un return sin ruta válida.';",
    "'Ruta perdida. ¡Revisa tu código y vuelve a intentarlo!';",
    "'Parece que este commit no tiene cambios.';",
    "'No se encontró la página, pero seguro que encontramos un bug.';",
    "'¡Esta página se fue de vacaciones!';",
    "'Parece que el navegador no entendió el código. ¡Inténtalo de nuevo!';",
    "'La página: - Estoy cansado, jefe ';",
  ];

  timer: any;
  error: String = this.errors[Math.floor(Math.random() * this.errors.length)];
  message: String = "";

  ngOnInit(): void {
    this.write();
  }

  write() {
    let letters: String[] = this.error.split('');
    let cont = 0;
    this.timer = setInterval(() => {
      if (cont >= letters.length)
        clearInterval(this.timer);
      else {
        this.message = this.message + '' + letters[cont];
        cont++;
      }
    }, 70);
  }

}

/*
if (esError404()) {
    tePerdiste = true;
    mensajeError = "Mmm, por acá no hay nada ¡Volvamos a programar!";
    mostrarMensaje(mensajeError);
    invitarASeguirProgramando();
} else {
    cargarPagina();
    codificarVersion2.0();
}

.
-
-
} catch(TePerdisteException e) {
  return new ThrowsException(404, "Mmm, por acá no hay nada, volvamos a programar");
}

Exception in thread "main" sole.lang.TePerdisteException: 
    at Sole2.0.website.handleRequest(Website.sole:42)
    at Sole2.0.website.findPage(Website.sole:32)
    at Sole2.0.website.loadPage(Website.sole:20)
Caused by: sole.2.0.TePerdisteException: Mmm, por acá no hay nada, volvamos a programar
    at Sole2.0.website.getPage(Website.java:15)
    ... 3 more

*/