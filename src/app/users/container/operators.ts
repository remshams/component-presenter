import { OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/_common/users/model';

export const extractUserNames = (): OperatorFunction<ReadonlyArray<User>, ReadonlyArray<string>> =>
  map(users => users.map(user => user.name));
