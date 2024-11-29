import { Engineer } from '.';

describe('Engineer', () => {
  it('should have a name', () => {
    const engineer = new Engineer('Kaio');
    expect(engineer.name).toBe('Kaio');
  });
});
