import { User } from "./User";
import { NoteController } from "../Note/NoteController";
import { Groups } from "../Group/Groups";
import { Role } from "./Role";

export class Teacher extends User {
  constructor(
    firstName: string,
    surName: string,
    emailAddres: string,
    password: string,
    noteController: NoteController = NoteController.getInstance(),
    public groups: Groups[]
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