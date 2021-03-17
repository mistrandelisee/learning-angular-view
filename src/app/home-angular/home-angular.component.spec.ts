import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAngularComponent } from './home-angular.component';

describe('HomeAngularComponent', () => {
  let component: HomeAngularComponent;
  let fixture: ComponentFixture<HomeAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAngularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
