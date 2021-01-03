import { ComponentFixture, TestBed } from '@angular/core/testing';
import { createUsersFixture } from '@app/common/users/fixture';
import { createUsersRestAdapterMock } from '@app/common/users/mock';
import { usersRestAdapterToken } from '@app/common/users/model';
import { UsersService } from '@app/common/users/service';
import { of } from 'rxjs';
import { UsersTestModule } from '../fixture';
import { UsersWithPresenterComponent } from './component';

describe('UsersWithPresenter', () => {
  let component: UsersWithPresenterComponent;
  let fixture: ComponentFixture<UsersWithPresenterComponent>;

  const users = createUsersFixture();
  const userNames = users.map(user => user.name);
  const usersRestAdapterMock = createUsersRestAdapterMock();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersTestModule],
      declarations: [UsersWithPresenterComponent],
      providers: [
        {
          provide: usersRestAdapterToken,
          useValue: usersRestAdapterMock
        },
        UsersService
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    usersRestAdapterMock.list.mockReturnValue(of(users));
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersWithPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('usernames', () => {
    it('should render user name list', () => {
      const matListItems = fixture.nativeElement.querySelectorAll('.usernames__element');

      expect(matListItems.length).toEqual(userNames.length);
      expect(matListItems[0].textContent).toEqual(userNames[0]);
    });
  });
});
