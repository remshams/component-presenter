import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterTestingModule } from '@angular/router/testing';
import { UsersMenuComponent } from './component';

describe('UsersMenuComponent', () => {
  let component: UsersMenuComponent;
  let fixture: ComponentFixture<UsersMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatTabsModule, RouterTestingModule],
      declarations: [UsersMenuComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Menu', () => {
    it('should render menu', () => {
      const matMenuItems = fixture.nativeElement.querySelectorAll('.menu__item');

      expect(matMenuItems.length).toEqual(2);
      expect(matMenuItems[0].textContent).toEqual('Component');
      expect(matMenuItems[1].textContent).toEqual('Bloc');
    });
  });
});
