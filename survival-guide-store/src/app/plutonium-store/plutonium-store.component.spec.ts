import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlutoniumStoreComponent } from './plutonium-store.component';

describe('PlutoniumStoreComponent', () => {
  let component: PlutoniumStoreComponent;
  let fixture: ComponentFixture<PlutoniumStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlutoniumStoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlutoniumStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
