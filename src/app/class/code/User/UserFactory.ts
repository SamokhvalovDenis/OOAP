import { User } from "./User";
import { Group } from "../Group/Group";

export interface UserFactory {
  createUser(
    firstName: string,
    surName: string,
    emailAddres: string,
    password: string,
    group: Group
  ): User;
}