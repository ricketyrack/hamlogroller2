import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkccThumbnailComponent } from './skcc-thumbnail.component';

describe('SkccThumbnailComponent', () => {
  let component: SkccThumbnailComponent;
  let fixture: ComponentFixture<SkccThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkccThumbnailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkccThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
