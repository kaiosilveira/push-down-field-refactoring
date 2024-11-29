import { Employee } from '..';

export class Salesman extends Employee {
  constructor(name) {
    super(name, 1.5);
    this.quota = 1.5;
  }
}
