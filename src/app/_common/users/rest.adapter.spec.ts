import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { createUsersFixture } from './fixture';
import { ProductionUsersRestAdapter, usersPath } from './rest.adapter';
describe('ProductionUsersRestAdapter', () => {
  let httpTestinController: HttpTestingController;
  let adapter: ProductionUsersRestAdapter;

  const users = createUsersFixture();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductionUsersRestAdapter],
    });

    httpTestinController = TestBed.inject(HttpTestingController);
    adapter = TestBed.inject(ProductionUsersRestAdapter);
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
