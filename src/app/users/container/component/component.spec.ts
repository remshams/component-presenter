import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatListModule } from '@angular/material/list';
import { of } from 'rxjs';
import { createRxTestScheduler } from 'src/app/_common/test/test-helper';
import { UsersBloc } from 'src/app/_common/users/bloc';
import { createUsersFixture } from 'src/app/_common/users/fixture';
import { createUsersRestAdapterMock } from 'src/app/_common/users/mock';
import { usersRestAdapterToken } from 'src/app/_common/users/model';
import { UsersComponent } from './component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  const users = createUsersFixture();
  const userNames = users.map(user => user.name);
  const usersRestAdapterMock = createUsersRestAdapterMock();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatListModule],
      declarations: [UsersComponent],
      providers: [
        {
          provide: usersRestAdapterToken,
          useValue: usersRestAdapterMock
        },
        UsersBloc
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    usersRestAdapterMock.list.mockReturnValue(of(users));
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('usernames$', () => {
    it('should emit list of user names', () => {
      createRxTestScheduler().run(({ expectObservable }) => {
        expectObservable(component.usernames$).toBe('a', { a: userNames });
      });
    });
    it('should emit empty list in case there are no users', () => {
      createRxTestScheduler().run(({ expectObservable }) => {
        usersRestAdapterMock.list.mockReturnValue(of([]));
        component.ngOnInit();

        expectObservable(component.usernames$).toBe('a', { a: [] });
      });
    });
    it('should render user name list', () => {
      const matListItems = fixture.nativeElement.querySelectorAll('.usernames__element');

      expect(matListItems.length).toEqual(userNames.length);
      expect(matListItems[0].textContent).toEqual(userNames[0]);
    });
  });

  describe('Init', () => {
    it('should trigger refresh of user list in UsersBloc', () => {
      expect(usersRestAdapterMock.list).toHaveBeenCalled();
    });
  });
});
