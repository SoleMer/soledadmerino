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
  logo: String = "./../../../assets/marca/Sole2.0;/5.png";
  logostart: String = "";
  logoend: String = "";
  imgLogo: String = "";

  ngOnInit(): void {
    this.write();
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


}
