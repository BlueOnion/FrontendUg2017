import { Injectable } from '@angular/core';
import { Beads } from './beads';

@Injectable()
export class Calc1Service {

  table: Beads[];
  
  constructor() { 
	this.table = [
	  { name: 'Toho 11/0', height: 2, width: 2},
	  { name: 'Toho 15/0', height: 1.5, width: 1.5},
	  { name: 'Toho Treasure', height: 1.3, width: 1.8}
	  ];
	}

  getTypes(): Beads[] {
	
	return this.table;
  }
  
  add(data){
	this.table.push(data);
  }
}