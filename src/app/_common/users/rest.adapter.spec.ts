import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { createUsersFixture } from './fixture';
import { usersPath, UsersRestAdapter } from './rest.adapter';
describe('UsersRestAdapter', () => {
  let httpTestinController: HttpTestingController;
  let adapter: UsersRestAdapter;

  const users = createUsersFixture();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsersRestAdapter],
    });

    httpTestinController = TestBed.inject(HttpTestingController);
    adapter = TestBed.inject(UsersRestAdapter);
  });

  describe('list', () => {
    it('should emit users list', () => {
      const subscription = adapter.list().subscribe((usersReturned) => {
        expect(usersReturned).toEqual(users);
      });

      const req = httpTestinController.expectOne(usersPath);

      req.flush(users);
      httpTestinController.verify();

      subscription.unsubscribe();
    });
  });
});
