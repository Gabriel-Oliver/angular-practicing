import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FristComponent } from './frist-component.component';

describe('FristComponent', () => {
  let component: FristComponent;
  let fixture: ComponentFixture<FristComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FristComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FristComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
