import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-safe-pipe',
  standalone: true,
  imports: [],
  templateUrl: './safe-pipe.component.html',
  styleUrl: './safe-pipe.component.scss'
})
@Pipe({
  name: 'safe'
})
export class SafePipeComponent implements PipeTransform {
  
  constructor(private sanitizer: DomSanitizer) { }

  transform(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
