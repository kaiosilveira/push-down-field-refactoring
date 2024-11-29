export class Employee {
  constructor(name, quota) {
    this._name = name;
    this.quota = quota;
  }

  get name() {
    return this._name;
  }
}
