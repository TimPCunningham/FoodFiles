export interface IPerson {
  firstName: string,
  lastName: string,
  age: number,
}

export class Person {

  constructor(private data: IPerson){}

  getName(): string {
    const { firstName, lastName } = this.data;
    return `${firstName} ${lastName}`;
  }
}