import { createRxTestScheduler } from '@app/common/test/test-helper';
import { createUsersFixture } from '@app/common/users/fixture';
import { of } from 'rxjs';
import { extractUserNames } from './operators';

describe('UsersOperators', () => {
  const users = createUsersFixture();
  describe('extractUserNames', () => {
    const usernames = users.map(user => user.name);

    it('should emit usernames', () => {
      createRxTestScheduler().run(({ expectObservable }) => {
        expectObservable(of(users).pipe(extractUserNames())).toBe('(a|)', { a: usernames });
      });
    });
    it('should emit empty list in case user list is empty', () => {
      createRxTestScheduler().run(({ expectObservable }) => {
        expectObservable(of([]).pipe(extractUserNames())).toBe('(a|)', { a: [] });
      });
    });
  });
});
