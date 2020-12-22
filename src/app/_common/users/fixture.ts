import {User} from './model';

export const createUserFixture = (
  { name = 'test' } = { name: 'test' }
): User => ({
  name,
});

export const createUsersFixture = (): ReadonlyArray<User> => [
  createUserFixture(),
  createUserFixture(),
];
