import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterPostulationComponent } from './consulter-postulation.component';

describe('ConsulterPostulationComponent', () => {
  let component: ConsulterPostulationComponent;
  let fixture: ComponentFixture<ConsulterPostulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulterPostulationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsulterPostulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
