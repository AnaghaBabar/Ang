import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  // From parent to child
  @Input() public parent;
  
  // From child to parent
  @Output() public obj = new EventEmitter();

  public sendEvent()
  {
    this.obj.emit("hello parent");
  }

  constructor() { }

  ngOnInit() {
  }

}
