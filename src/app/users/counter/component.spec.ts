import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserCounterComponent } from './component';

describe('UserCounterComponent', () => {
  let component: UserCounterComponent;
  let fixture: ComponentFixture<UserCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserCounterComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
