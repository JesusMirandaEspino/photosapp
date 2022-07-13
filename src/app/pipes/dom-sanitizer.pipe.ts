import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domSanitizer'
})
export class DomSanitizerPipe implements PipeTransform {


  constructor( private domSanitizer: DomSanitizer ){}

  transform(img: string): unknown {

    const imgDom = `background-image: url('${ img}')`;

    return this.domSanitizer.bypassSecurityTrustStyle( imgDom );
  }

}
