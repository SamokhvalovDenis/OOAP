import { UserFactory } from "./UserFactory";
import { Student } from "./Student";
import { NoteController } from "../Note/NoteController";
import { Group } from "../Group/Group";

export class StudentFactory implements UserFactory{
    public createUser(firstName: string, surName: string, emailAddres: string, password: string, group: Group): Student{
        console.log("Створюю студента");
        return new Student(firstName, surName, emailAddres, password, NoteController.getInstance(), group);
    }
}