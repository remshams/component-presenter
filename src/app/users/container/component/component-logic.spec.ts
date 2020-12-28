import { createRxTestScheduler } from '@app/common/test/test-helper';
import { UsersBloc } from '@app/common/users/bloc';
import { createUsersFixture } from '@app/common/users/fixture';
import { createUsersRestAdapterMock } from '@app/common/users/mock';
import { of } from 'rxjs';
import { UsersComponent } from './component';

describe('UsersComponent - Logic', () => {
  let component: UsersComponent;
  const users = createUsersFixture();
  const userNames = users.map(user => user.name);
  const usersRestAdapterMock = createUsersRestAdapterMock();
  const usersBlock = new UsersBloc(usersRestAdapterMock);

  beforeEach(() => {
    usersRestAdapterMock.list.mockReset();
    usersRestAdapterMock.list.mockReturnValue(of(users));
  });

  beforeEach(() => {
    component = new UsersComponent(usersBlock);
    component.ngOnInit();
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
  });

  describe('Init', () => {
    it('should trigger refresh of user list in UsersBloc', () => {
      expect(usersRestAdapterMock.list).toHaveBeenCalled();
    });
  });
});
