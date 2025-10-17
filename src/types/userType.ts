export interface IUser {
  _id?: String;
  firstName: String;
  lastName: String;
  userName: String;
  age: Number;
  role: String;
  phone: String;
  email: String;
  password: String;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface RegisterInput {
  firstName: String;
  lastName: String;
  userName: String;
  age: Number;
  role?: String;
  phone: String;
  email: String;
  password: String;
}
