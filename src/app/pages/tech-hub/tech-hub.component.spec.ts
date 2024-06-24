import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechHubComponent } from './tech-hub.component';

describe('TechCornerComponent', () => {
  let component: TechHubComponent;
  let fixture: ComponentFixture<TechHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechHubComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
