import { Component, OnInit } from '@angular/core';
import { Beads } from '../beads';

@Component({
  selector: 'app-beads-list',
  template: `
  <!-- this is the new syntax for ng-repeat -->
  <ul>
    <li *ngFor="let person of people">
     {{beads.name}} 
    </li>
     <div>
  	<h2>Peyote parzysty</h2>
  	<p>Aby obliczyć wielkość swojej pracy należy podać poniższe ilości:</p>
	<input type="text" [(ngModel)]="myValue1" required />
	<input type="text" [(ngModel)]="myValue2" required />
     </div> 
  </ul>
  `,
  styleUrls: ['./bead-list.component.scss']
})

export class BeadListComponent implements OnInit {
    beads: Beads[] = [
    {name: 'Toho Round 11/0', height: 1, length: 2},
    {name: 'Toho Treasure', height: 1.3, weight: 1.8},
  ];
  
  constructor() { }

  ngOnInit() {
  }
}