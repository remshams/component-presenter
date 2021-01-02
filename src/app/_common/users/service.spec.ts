import { of } from 'rxjs';
import { createRxTestScheduler } from '../test/test-helper';
import { createUsersFixture } from './fixture';
import { createUsersRestAdapterMock } from './mock';
import { UsersService } from './service';

describe('UsersService', () => {
  const users = createUsersFixture();
  const userRestAdapter = createUsersRestAdapterMock();
  const service = new UsersService(userRestAdapter);

  beforeEach(() => {
    userRestAdapter.list.mockReset();
    userRestAdapter.list.mockReturnValue(of(users));
  });

  describe('users', () => {
    it('should emit empty list when not initialized', () => {
      createRxTestScheduler().run(({ expectObservable }) => {
        expectObservable(service.users$).toBe('a', { a: [] });
        expect(userRestAdapter.list).not.toHaveBeenCalled();
      });
    });
    it('should emit list of users', () => {
      createRxTestScheduler().run(({ expectObservable }) => {
        service.refreshUsers();

        expectObservable(service.users$).toBe('a', { a: users });
        expect(userRestAdapter.list).toHaveBeenCalled();
      });
    });
  });
});
