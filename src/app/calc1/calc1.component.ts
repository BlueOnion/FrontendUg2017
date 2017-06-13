import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { Calc1Service } from '../calc1.service';
import { Beads } from '../beads';

@Component({
  selector: 'app-calc1',
  templateUrl: './calc1.component.html',
  styleUrls: ['./calc1.component.css'],
})

export class Calc1Component implements OnInit {

  beads: Beads[];
  bead_type: Beads;
  resultHeight: number;
  resultWidth: number;
  numHeight: number;
  numWidth: number;
  ownHeight: number;
  ownWidth: number;
  ownBead: Beads;
  
//-------------------konstruktor--------------------------------------
  constructor(private calc1Service : Calc1Service) {

	this.bead_type = { name: 'Toho 11/0', height: 2, width: 2};
	this.resultHeight = 0;
	this.resultWidth = 0;
	this.beads = this.calc1Service.getTypes();
  }
//--------------------------------------------------------------------
  
  ngOnInit() {
	
	//this.beads = this.calc1Service.getTypes();
  }

  addOwnBead(ownHeight, ownWidth){
	
	this.calc1Service.add({ name: "Twój koralik", height: this.ownHeight, width: this.ownWidth});
	this.beads = this.calc1Service.getTypes();
	console.log(this.ownHeight)
  }
  
  countSize(bead) {
	
	this.resultHeight = this.numHeight * this.bead_type.height;
	this.resultWidth = this.numWidth * this.bead_type.width;
  }
  
}