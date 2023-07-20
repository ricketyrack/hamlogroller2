import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkccListComponent } from './skcc-list.component';

describe('SkccListComponent', () => {
  let component: SkccListComponent;
  let fixture: ComponentFixture<SkccListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkccListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkccListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
