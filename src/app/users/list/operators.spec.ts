import { createRxTestScheduler } from '@app/common/test/test-helper';
import { createUsersFixture } from '@app/common/users/fixture';
import { of } from 'rxjs';
import { extractNumberOfUsers, extractUserNames } from './operators';

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

  describe('extractNumberOfUsers', () => {
    const numberOfUsers = users.length;

    it('should emit number of users', () => {
      createRxTestScheduler().run(({ expectObservable }) => {
        expectObservable(of(users).pipe(extractNumberOfUsers())).toBe('(a|)', { a: users.length });
      });
    });
    it('should emit 0 in case there are no users', () => {
      createRxTestScheduler().run(({ expectObservable }) => {
        expectObservable(of([]).pipe(extractNumberOfUsers())).toBe('(a|)', { a: 0 });
      });
    });
  });
});
