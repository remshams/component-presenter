import { User } from '@app/common/users/model';
import { OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';

export const extractUserNames = (): OperatorFunction<ReadonlyArray<User>, ReadonlyArray<string>> =>
  map(users => users.map(user => user.name));

export const extractNumberOfUsers = (): OperatorFunction<ReadonlyArray<User>, number> => map(users => users.length);
