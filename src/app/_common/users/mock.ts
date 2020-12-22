import { Mock } from '../test/model';
import { UsersRestAdapter } from './model';

export const createUsersRestAdapterMock = (): Mock<UsersRestAdapter> => ({
  list: jest.fn(),
});
