import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LogoEnlaceComponent } from '../../common/logo-enlace/logo-enlace.component';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule,
    LogoEnlaceComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss'
})
export class ContactoComponent {

  @ViewChild('mailToLink', { static: false }) mailToLink!: ElementRef;

  generateMailToLink(form: NgForm) {
    if (form.valid) {
      const name = form.value.name;
      const email = form.value.email;
      const message = form.value.message;
      const subject = form.value.subject;
      const body = message;

      const mailToLink = `mailto:soledadmerino.1994@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      this.mailToLink.nativeElement.href = mailToLink;
      this.mailToLink.nativeElement.click();
    }
  }


}
