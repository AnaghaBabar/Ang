import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appCompFailure]'
})
export class CompFailureDirective {

  constructor(private ele:ElementRef) 
  {
    ele.nativeElement.style.background='red'
   }


   @HostListener('mouseleave') onmouseleave()
   {
     this.setcolor('black');
   }
 
   setcolor(color:string)
   {
     this.ele.nativeElement.style.background=color;
   }
}
