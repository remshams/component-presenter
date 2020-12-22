import { Observable } from 'rxjs';

export type User = {
  name: string;
};

export type UsersRestAdapter = {
  list(): Observable<ReadonlyArray<User>>;
};
