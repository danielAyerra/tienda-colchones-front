import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BedBaseListComponent } from './bed-base-list.component';

describe('BedBaseListComponent', () => {
  let component: BedBaseListComponent;
  let fixture: ComponentFixture<BedBaseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BedBaseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BedBaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
