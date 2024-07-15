import { Component } from '@angular/core';
import confetti from 'canvas-confetti';

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
  logo: String = "./../../../assets/marca/Sole2.0;/5.png";
  logostart: String = "";
  logoend: String = "";
  imgLogo: String = "";

  ngOnInit(): void {
    this.write();
    this.launchConfetti();
  }

  write() {
    let cont = -1;
    this.timer = setInterval(() => {
      if (cont >= this.letters.length)
        clearInterval(this.timer);
      else {
        if (cont > 1){ 
          this.logoend = this.logoend + '' + this.letters[cont];
          cont++;
        } else if (cont == 1){
          this.imgLogo = this.logo;
          cont++;
        } else if (cont == 0){ 
          this.logostart = this.logostart + '' + this.letters[cont];
          cont++;
        } else {
          cont++;
        } 
      }
    }, 150);
  }

  launchConfetti(): void {
    const duration = 10 * 300; // Duración de 10 segundos
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 7,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#74acdf', '#fffff']
      });
      confetti({
        particleCount: 7,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#74acdf', '#fffff']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  }

}
