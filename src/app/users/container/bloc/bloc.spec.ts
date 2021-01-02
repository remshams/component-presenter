import { createRxTestScheduler } from '@app/common/test/test-helper';
import { createUsersFixture } from '@app/common/users/fixture';
import { createUsersRestAdapterMock } from '@app/common/users/mock';
import { UsersService } from '@app/common/users/service';
import { of } from 'rxjs';
import { UsersComponentBloc } from './bloc';

describe('UsersComponentBloc', () => {
  const users = createUsersFixture();
  const userNames = users.map(user => user.name);
  const usersRestAdapterMock = createUsersRestAdapterMock();
  let usersService: UsersService;
  let bloc: UsersComponentBloc;

  beforeEach(() => {
    usersRestAdapterMock.list.mockReset();
    usersRestAdapterMock.list.mockReturnValue(of(users));
  });

  beforeEach(() => {
    usersService = new UsersService(usersRestAdapterMock);
    bloc = new UsersComponentBloc(usersService);
  });

  describe('usernames$', () => {
    it('should emit list of user names', () => {
      createRxTestScheduler().run(({ expectObservable }) => {
        expectObservable(bloc.usernames$).toBe('a', { a: userNames });
      });
    });
    it('should emit empty list in case there are no users', () => {
      createRxTestScheduler().run(({ expectObservable }) => {
        usersRestAdapterMock.list.mockReturnValue(of([]));
        usersService.refreshUsers();

        expectObservable(bloc.usernames$).toBe('a', { a: [] });
      });
    });
  });
  describe('Init', () => {
    it('should trigger refresh of user list in UsersService', () => {
      usersService = new UsersService(usersRestAdapterMock);
      const refreshUsersSpy = spyOn(usersService, 'refreshUsers');
      bloc = new UsersComponentBloc(usersService);

      expect(refreshUsersSpy).toHaveBeenCalled();
    });
  });
});
