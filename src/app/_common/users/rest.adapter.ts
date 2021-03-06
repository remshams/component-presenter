import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { host } from '../configuration/urls';
import { User, UsersRestAdapter } from './model';

export const usersPath = `${host}/users`;

@Injectable({
  providedIn: 'root',
})
export class ProductionUsersRestAdapter implements UsersRestAdapter {
  constructor(private httpClient: HttpClient) {}

  list(): Observable<ReadonlyArray<User>> {
    return this.httpClient.get<ReadonlyArray<User>>(usersPath);
  }
}
