import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OPTComponent } from './opt.component';

describe('OPTComponent', () => {
  let component: OPTComponent;
  let fixture: ComponentFixture<OPTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OPTComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OPTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
