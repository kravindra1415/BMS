import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccformverifyComponent } from './accformverify.component';

describe('AccformverifyComponent', () => {
  let component: AccformverifyComponent;
  let fixture: ComponentFixture<AccformverifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccformverifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccformverifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
