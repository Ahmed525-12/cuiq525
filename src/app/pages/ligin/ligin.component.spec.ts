import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiginComponent } from './ligin.component';

describe('LiginComponent', () => {
  let component: LiginComponent;
  let fixture: ComponentFixture<LiginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
