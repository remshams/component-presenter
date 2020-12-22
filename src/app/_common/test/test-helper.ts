import { TestScheduler } from 'rxjs/testing';

const jestExpect = (actual: unknown, expected: unknown) => {
  expect(actual).toEqual(expected);
};

export const createRxTestScheduler = (
  { expect = jestExpect } = { expect: jestExpect }
): TestScheduler => new TestScheduler(expect);
