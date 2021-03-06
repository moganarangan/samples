import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLineComponent } from './list-line.component';

describe('ListLineComponent', () => {
  let component: ListLineComponent;
  let fixture: ComponentFixture<ListLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
