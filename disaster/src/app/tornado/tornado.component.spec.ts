import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TornadoComponent } from './tornado.component';

describe('TornadoComponent', () => {
  let component: TornadoComponent;
  let fixture: ComponentFixture<TornadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TornadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TornadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
