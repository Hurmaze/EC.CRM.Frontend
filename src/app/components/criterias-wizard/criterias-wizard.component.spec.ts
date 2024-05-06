import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriteriasWizardComponent } from './criterias-wizard.component';

describe('CriteriasWizardComponent', () => {
  let component: CriteriasWizardComponent;
  let fixture: ComponentFixture<CriteriasWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriteriasWizardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CriteriasWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
