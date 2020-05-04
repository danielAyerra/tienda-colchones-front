import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BedBaseComponent } from './bed-base.component';

describe('BedBaseComponent', () => {
  let component: BedBaseComponent;
  let fixture: ComponentFixture<BedBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BedBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BedBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
