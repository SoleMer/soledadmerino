import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechCornerComponent } from './tech-corner.component';

describe('TechCornerComponent', () => {
  let component: TechCornerComponent;
  let fixture: ComponentFixture<TechCornerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechCornerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechCornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
