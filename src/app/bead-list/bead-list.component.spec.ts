import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeadListComponent } from './bead-list.component';

describe('BeadListComponent', () => {
  let component: BeadListComponent;
  let fixture: ComponentFixture<BeadListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeadListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
