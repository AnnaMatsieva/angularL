export interface IUsers {
  id: string | number
  firstName: string
  lastName: string
}

export class Users implements IUsers {
  constructor(public id: string | number, public firstName: string, public lastName: string) {}
}
