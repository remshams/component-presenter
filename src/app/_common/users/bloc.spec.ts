import { of } from 'rxjs';
import { createRxTestScheduler } from '../test/test-helper';
import { UsersBloc } from './bloc';
import { createUsersFixture } from './fixture';
import { createUsersRestAdapterMock } from './mock';

describe('UsersBloc', () => {
  const users = createUsersFixture();
  const userRestAdapter = createUsersRestAdapterMock();
  const bloc = new UsersBloc(userRestAdapter);

  beforeEach(() => {
    userRestAdapter.list.mockReset();
    userRestAdapter.list.mockReturnValue(of(users));
  });

  describe('users', () => {
    it('should emit empty list when not initialized', () => {
      createRxTestScheduler().run(({ expectObservable }) => {
        expectObservable(bloc.users$).toBe('a', { a: [] });
        expect(userRestAdapter.list).not.toHaveBeenCalled();
      });
    });
    it('should emit list of users', () => {
      createRxTestScheduler().run(({ expectObservable }) => {
        bloc.refreshUsers();

        expectObservable(bloc.users$).toBe('a', { a: users });
        expect(userRestAdapter.list).toHaveBeenCalled();
      });
    });
  });
});
