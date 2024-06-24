import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  timer: any;
  letters: String[] = ["S", "o", "l", "e", "2", ".", "0", ";"];
  logos: String[] = ["./../../../assets/marca/Sole2.0;/s.png",
  "./../../../assets/marca/Sole2.0;/o.png",
  "./../../../assets/marca/Sole2.0;/l.png",
  "./../../../assets/marca/Sole2.0;/e.png",
  "./../../../assets/marca/Sole2.0;/dos.png",
  "./../../../assets/marca/Sole2.0;/punto.png",
  "./../../../assets/marca/Sole2.0;/cero.png",
  "./../../../assets/marca/Sole2.0;/puntoycoma.png",
]
  logo: String = "./../../../assets/marca/Sole2.0;/5.png";
  logostart: String = "";
  logoend: String = "";
  imgLogo: String = "";

  ngOnInit(): void {
    this.write();
  }

  write() {
    let cont = 0;
    this.timer = setInterval(() => {
      if (cont >= this.logos.length)
        clearInterval(this.timer);
      /*else {
        this.imgLogo = this.logos[cont];
        cont++;
      }*/
      else {
        if (cont > 1){ 
          this.logoend = this.logoend + '' + this.letters[cont];
          cont++;
        } else if (cont == 0){ 
          this.logostart = this.logostart + '' + this.letters[cont];
          cont++;
        } else {
          this.imgLogo = this.logo;
          cont++;
        }
      }
    }, 150);
  }


}
