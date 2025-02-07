import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockyardDashboardComponent } from './stockyard-dashboard.component';

describe('StockyardDashboardComponent', () => {
  let component: StockyardDashboardComponent;
  let fixture: ComponentFixture<StockyardDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockyardDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockyardDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
