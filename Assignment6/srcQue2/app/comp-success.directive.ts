import { Directive ,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appCompSuccess]'
})
export class CompSuccessDirective {

  constructor(private ele:ElementRef) 
  {
    ele.nativeElement.style.background='green'
   }


  @HostListener('mouseenter') onmouseenter()
  {
    this.setcolor('black');
  }

  setcolor(color:string)
  {
    this.ele.nativeElement.style.background=color;
  }

}
