import { createRxTestScheduler } from '@app/common/test/test-helper';
import { createUsersFixture } from '@app/common/users/fixture';
import { createUsersRestAdapterMock } from '@app/common/users/mock';
import { UsersService } from '@app/common/users/service';
import { of } from 'rxjs';
import { UsersComponentPresenter } from './presenter';

describe('UsersComponentPresenter', () => {
  const users = createUsersFixture();
  const userNames = users.map(user => user.name);
  const usersRestAdapterMock = createUsersRestAdapterMock();
  let usersService: UsersService;
  let presenter: UsersComponentPresenter;

  beforeEach(() => {
    usersRestAdapterMock.list.mockReset();
    usersRestAdapterMock.list.mockReturnValue(of(users));
  });

  beforeEach(() => {
    usersService = new UsersService(usersRestAdapterMock);
    presenter = new UsersComponentPresenter(usersService);
  });

  describe('usernames$', () => {
    it('should emit list of user names', () => {
      createRxTestScheduler().run(({ expectObservable }) => {
        expectObservable(presenter.usernames$).toBe('a', { a: userNames });
      });
    });
    it('should emit empty list in case there are no users', () => {
      createRxTestScheduler().run(({ expectObservable }) => {
        usersRestAdapterMock.list.mockReturnValue(of([]));
        usersService.refreshUsers();

        expectObservable(presenter.usernames$).toBe('a', { a: [] });
      });
    });
  });

  describe('numberOfUsers$', () => {
    it('should emit number of users', () => {
      createRxTestScheduler().run(({ expectObservable }) => {
        expectObservable(presenter.numberofUsers$).toBe('a', { a: users.length });
      });
    });
    it('should emit 0 in case there no users', () => {
      createRxTestScheduler().run(({ expectObservable }) => {
        usersRestAdapterMock.list.mockReturnValue(of([]));
        usersService.refreshUsers();

        expectObservable(presenter.numberofUsers$).toBe('a', { a: 0 });
      });
    });
  });

  describe('Init', () => {
    it('should trigger refresh of user list in UsersService', () => {
      usersService = new UsersService(usersRestAdapterMock);
      const refreshUsersSpy = spyOn(usersService, 'refreshUsers');
      presenter = new UsersComponentPresenter(usersService);

      expect(refreshUsersSpy).toHaveBeenCalled();
    });
  });
});
