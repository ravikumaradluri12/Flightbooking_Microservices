import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallbookinghistoryComponent } from './viewallbookinghistory.component';

describe('ViewallbookinghistoryComponent', () => {
  let component: ViewallbookinghistoryComponent;
  let fixture: ComponentFixture<ViewallbookinghistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallbookinghistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallbookinghistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
