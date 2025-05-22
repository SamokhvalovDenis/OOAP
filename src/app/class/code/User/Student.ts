import { User } from "./User";
import { NoteController } from "../Note/NoteController";
import { Group } from "../Group/Group";
export class Student extends User {
  constructor(
    firstName: string,
    surName: string,
    emailAddres: string,
    password: string,
    noteController: NoteController = NoteController.getInstance(),
    public group: Group
  ) {
    super(
      firstName,
      surName,
      emailAddres,
      password,
      noteController
    );
  }
}