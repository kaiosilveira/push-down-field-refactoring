import { Salesman } from '.';

describe('Salesman', () => {
  it('should have a name', () => {
    const salesman = new Salesman('Kaio');
    expect(salesman.name).toBe('Kaio');
  });

  it('should have a quota', () => {
    const salesman = new Salesman('Kaio');
    expect(salesman.quota).toBe(1.5);
  });
});
