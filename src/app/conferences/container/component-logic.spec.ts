import { ConferencesComponent } from './component';

describe('ConferencesComponent - Simple', () => {
  let component: ConferencesComponent;

  beforeEach(() => {
    component = new ConferencesComponent();
  });

  describe('isConferences', () => {
    it('should return true', () => {
      expect(component.isConferences()).toEqual(true);
    });
  });
});
