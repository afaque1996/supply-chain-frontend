import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockyardComponent } from './stockyard.component';

describe('StockyardComponent', () => {
  let component: StockyardComponent;
  let fixture: ComponentFixture<StockyardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockyardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockyardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
