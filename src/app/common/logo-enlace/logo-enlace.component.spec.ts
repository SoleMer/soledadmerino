import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoEnlaceComponent } from './logo-enlace.component';

describe('LogoEnlaceComponent', () => {
  let component: LogoEnlaceComponent;
  let fixture: ComponentFixture<LogoEnlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoEnlaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogoEnlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
