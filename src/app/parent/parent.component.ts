import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <div>
      <p>Parent component</p>
      <button (click)="toggleChild()">Toggle child</button>
      <input type="text" [(ngModel)]="name">
      <app-child *ngIf="showChild" [name]="name"></app-child>
    </div>
  `,
  styles: [
  ]
})
export class ParentComponent implements OnInit, OnChanges, DoCheck {

  name: string = '';
  showChild: boolean = false;

  constructor() {
    console.log('ParentComponent constructor called');
  }

  ngOnInit() {
    console.log('ParentComponent OnInit called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ParentComponent ngOnChanges called');
  }

  ngDoCheck() {
    console.log('ParentComponent DoCheck called');
  }

  toggleChild() {
    this.showChild = !this.showChild;
  }
}
