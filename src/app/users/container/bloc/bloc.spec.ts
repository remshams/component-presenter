import { createRxTestScheduler } from '@app/common/test/test-helper';
import { UsersBloc } from '@app/common/users/bloc';
import { createUsersFixture } from '@app/common/users/fixture';
import { createUsersRestAdapterMock } from '@app/common/users/mock';
import { of } from 'rxjs';
import { UsersComponentBloc } from './bloc';

describe('UsersComponentBloc', () => {
  const users = createUsersFixture();
  const userNames = users.map(user => user.name);
  const usersRestAdapterMock = createUsersRestAdapterMock();
  let usersBloc: UsersBloc;
  let bloc: UsersComponentBloc;

  beforeEach(() => {
    usersRestAdapterMock.list.mockReset();
    usersRestAdapterMock.list.mockReturnValue(of(users));
  });

  beforeEach(() => {
    usersBloc = new UsersBloc(usersRestAdapterMock);
    bloc = new UsersComponentBloc(usersBloc);
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
        usersBloc.refreshUsers();

        expectObservable(bloc.usernames$).toBe('a', { a: [] });
      });
    });
  });
  describe('Init', () => {
    it('should trigger refresh of user list in UsersBloc', () => {
      usersBloc = new UsersBloc(usersRestAdapterMock);
      const refreshUsersSpy = spyOn(usersBloc, 'refreshUsers');
      bloc = new UsersComponentBloc(usersBloc);

      expect(refreshUsersSpy).toHaveBeenCalled();
    });
  });
});
