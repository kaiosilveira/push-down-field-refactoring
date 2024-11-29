import { Employee } from '..';

export class Salesman extends Employee {
  constructor(name) {
    super(name);
    this.quota = 1.5;
  }
}
