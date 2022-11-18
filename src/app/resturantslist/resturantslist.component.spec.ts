import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantslistComponent } from './resturantslist.component';

describe('ResturantslistComponent', () => {
  let component: ResturantslistComponent;
  let fixture: ComponentFixture<ResturantslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResturantslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResturantslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
