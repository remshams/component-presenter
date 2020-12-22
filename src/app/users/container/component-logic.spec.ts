import { UsersComponent } from './component';

describe('UsersComponent - Logic', () => {
  let component: UsersComponent;

  beforeEach(() => {
    component = new UsersComponent();
  });

  describe('isUsers', () => {
    it('should return true', () => {
      expect(component.isUsers()).toEqual(true);
    });
  });
});
