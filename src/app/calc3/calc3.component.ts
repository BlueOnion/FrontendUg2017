import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { Calc1Service } from '../calc1.service';
import { Beads } from '../beads';

@Component({
  selector: 'app-calc3',
  templateUrl: './calc3.component.html',
  styleUrls: ['../calc1/calc1.component.css']
})

export class Calc3Component implements OnInit {

  beads: Beads[];
  bead_type: Beads;
  resultHeight: number;
  resultWidth: number;
  numHeight: number;
  numWidth: number;
  ownHeight: number;
  ownWidth: number;
  ownBead: Beads[];
  
//-------------------konstruktor--------------------------------------
  constructor(private calc3Service : Calc1Service) {

	this.bead_type = { name: 'Toho 11/0', height: 2, width: 2};
	this.resultHeight = 0;
	this.resultWidth = 0;
	this.beads = this.calc3Service.getTypes();
  }
//--------------------------------------------------------------------
  
  ngOnInit() {
	
  }

  addOwnBead(ownHeight, ownWidth){
	
	this.calc3Service.add({ name: "Twój koralik", height: this.ownHeight, width: this.ownWidth});
	this.beads = this.calc3Service.getTypes();
	console.log(this.ownHeight)
  }
  
  countSize(bead) {
	
	if(this.bead_type.name == 'Toho 11/0') {
		this.resultHeight = (7 * this.numWidth)/6;
		this.resultWidth = this.numHeight * this.bead_type.height;
	}
	
	if(this.bead_type.name == 'Toho 15/0') {
		this.resultHeight = (5 * this.numWidth)/6;
		this.resultWidth = this.numHeight * this.bead_type.height;		
	}
	
	if(this.bead_type.name == 'Toho Treasure') {
		this.resultHeight = (4 * this.numWidth)/6;
		this.resultWidth = this.numHeight * this.bead_type.height;		
	}
	
	else if(this.bead_type.name == 'Twój koralik'){
		this.resultHeight = (7 * this.numWidth)/6;
		this.resultWidth = this.numHeight * this.bead_type.height;
	}
  }
  
}
