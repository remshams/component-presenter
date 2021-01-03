import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { createUsersFixture } from '@app/common/users/fixture';
import { createUsersRestAdapterMock } from '@app/common/users/mock';
import { usersRestAdapterToken } from '@app/common/users/model';
import { UsersService } from '@app/common/users/service';
import { of } from 'rxjs';
import { UsersPresenter } from '../presenter';
import { UserCounterComponent } from './component';

describe('UserCounterComponent', () => {
  const users = createUsersFixture();
  const numberOfUsers = users.length;
  const usersRestAdapterMock = createUsersRestAdapterMock();

  let component: UserCounterComponent;
  let fixture: ComponentFixture<UserCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [UserCounterComponent],
      providers: [
        {
          provide: usersRestAdapterToken,
          useValue: usersRestAdapterMock
        },
        UsersService,
        UsersPresenter
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    usersRestAdapterMock.list.mockReturnValue(of(users));
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('User count', () => {
    it('should display user count', () => {
      const count = fixture.nativeElement.querySelector('.user__count');

      expect(count.textContent).toContain(numberOfUsers);
    });
  });
});
