import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MattressListComponent } from './mattress-list.component';

describe('MattressListComponent', () => {
  let component: MattressListComponent;
  let fixture: ComponentFixture<MattressListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MattressListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MattressListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
