import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  <div>
    <p>Childcomponent</p>
    <h3>Hello {{ name }}</h3>
  </div>
  `
})
export class ChildComponent implements OnInit, OnDestroy, OnChanges, DoCheck {

  @Input() name: string = "";

  constructor() {
    console.log('ChildComponent constructor called');
  }

  ngOnInit() {
    console.log('ChildComponent OnInit called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ChildComponent ngOnChanges called');
  }

  ngDoCheck() {
    console.log('ChildComponent DoCheck called');
  }

  ngOnDestroy() {
    console.log('ChildComponent OnDestroy called');
  }
}
