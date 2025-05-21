import { User } from "./User";
export interface UserFactory {
  createUser(
    firstName: string,
    surName: string,
    emailAddres: string,
    password: string
  ): User;
}