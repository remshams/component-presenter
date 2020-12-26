import { HttpClient } from '@angular/common/http';
import { inject, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductionUsersRestAdapter } from './rest.adapter';

export type User = {
  name: string;
};

export type UsersRestAdapter = {
  list(): Observable<ReadonlyArray<User>>;
};

export const usersRestAdapterToken = new InjectionToken('usersRestAdapter', {
  factory: () => new ProductionUsersRestAdapter(inject(HttpClient))
});
