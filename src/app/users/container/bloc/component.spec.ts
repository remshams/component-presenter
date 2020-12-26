import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersBlocComponent } from './component';

describe('UsersBlocComponent', () => {
  let component: UsersBlocComponent;
  let fixture: ComponentFixture<UsersBlocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersBlocComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersBlocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
