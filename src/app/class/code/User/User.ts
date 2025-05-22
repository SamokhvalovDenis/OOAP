import { NoteController } from "../Note/NoteController";


export class User {
  constructor(
    private firstName: string,
    private surName: string,
    private emailAddres: string,
    private password: string,
    private noteController: NoteController = NoteController.getInstance()
  ) {}
}