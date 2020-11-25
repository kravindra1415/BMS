import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FdverifyComponent } from './fdverify.component';

describe('FdverifyComponent', () => {
  let component: FdverifyComponent;
  let fixture: ComponentFixture<FdverifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FdverifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FdverifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
