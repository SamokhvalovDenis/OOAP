import { User } from "./User";
import { NoteController } from "../Note/NoteController";
import { Groups } from "../Group/Groups";
export class Student extends User {
  constructor(
    firstName: string,
    surName: string,
    emailAddres: string,
    password: string,
    noteController: NoteController = NoteController.getInstance(),
    public group: Groups
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