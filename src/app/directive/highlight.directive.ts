import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem: ElementRef) { }


  @HostListener("mouseover") onmouseover(){
    this.textDeco("pink 1px solid")
  }

  @HostListener("mouseleave") onmouseleave(){
    this.textDeco("white")
  }
   private textDeco(action:string){
    this.elem.nativeElement.style.border=action;

  }
}
