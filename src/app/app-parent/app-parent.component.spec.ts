import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppParentComponent } from './app-parent.component';

describe('AppParentComponent', () => {
  let component: AppParentComponent;
  let fixture: ComponentFixture<AppParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
