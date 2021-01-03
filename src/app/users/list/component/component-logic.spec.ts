import { createRxTestScheduler } from '@app/common/test/test-helper';
import { createUsersFixture } from '@app/common/users/fixture';
import { createUsersRestAdapterMock } from '@app/common/users/mock';
import { UsersService } from '@app/common/users/service';
import { of } from 'rxjs';
import { UsersComponent } from './component';

describe('UsersComponent - Logic', () => {
  let component: UsersComponent;
  const users = createUsersFixture();
  const userNames = users.map(user => user.name);
  const usersRestAdapterMock = createUsersRestAdapterMock();
  const usersService = new UsersService(usersRestAdapterMock);

  beforeEach(() => {
    usersRestAdapterMock.list.mockReset();
    usersRestAdapterMock.list.mockReturnValue(of(users));
  });

  beforeEach(() => {
    component = new UsersComponent(usersService);
    component.ngOnInit();
  });

  describe('userNames$', () => {
    it('should emit list of user names', () => {
      createRxTestScheduler().run(({ expectObservable }) => {
        expectObservable(component.userNames$).toBe('a', { a: userNames });
      });
    });
    it('should emit empty list in case there are no users', () => {
      createRxTestScheduler().run(({ expectObservable }) => {
        usersRestAdapterMock.list.mockReturnValue(of([]));
        component.ngOnInit();

        expectObservable(component.userNames$).toBe('a', { a: [] });
      });
    });
  });

  describe('userCount$', () => {
    it('should emit user count', () => {
      createRxTestScheduler().run(({ expectObservable }) => {
        expectObservable(component.userCount$).toBe('a', { a: users.length });
      });
    });
    it('should emit 0 in case there are no users', () => {
      createRxTestScheduler().run(({ expectObservable }) => {
        usersRestAdapterMock.list.mockReturnValue(of([]));
        component.ngOnInit();

        expectObservable(component.userCount$).toBe('a', { a: 0 });
      });
    });
  });

  describe('Init', () => {
    it('should trigger refresh of user list in UsersPresenter', () => {
      expect(usersRestAdapterMock.list).toHaveBeenCalled();
    });
  });
});
