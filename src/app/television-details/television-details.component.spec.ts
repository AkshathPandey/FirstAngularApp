import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelevisionDetailsComponent } from './television-details.component';

describe('TelevisionDetailsComponent', () => {
  let component: TelevisionDetailsComponent;
  let fixture: ComponentFixture<TelevisionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelevisionDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelevisionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
