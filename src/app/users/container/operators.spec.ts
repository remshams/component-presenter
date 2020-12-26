import { of } from 'rxjs';
import { createRxTestScheduler } from 'src/app/_common/test/test-helper';
import { createUsersFixture } from 'src/app/_common/users/fixture';
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
