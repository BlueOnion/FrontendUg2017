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
  
//-------------------konstruktor--------------------------------------
  constructor(private calc3Service : Calc1Service) {

	this.bead_type = { name: 'Toho 11/0', height: 2, width: 2};
	this.resultHeight = 0;
	this.resultWidth = 0;
  }
//--------------------------------------------------------------------
  
  ngOnInit() {
	
	this.beads = this.calc3Service.getTypes();
  }

  countSize(bead) {
	
	this.resultHeight = this.numHeight * this.bead_type.height;
	this.resultWidth = this.numWidth * this.bead_type.width + this.bead_type.width;
  }
  
}
