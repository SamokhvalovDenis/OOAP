import { UserFactory } from "./UserFactory";
import { Teacher } from "./Teacher";
import { NoteController } from "../Note/NoteController";
import { Group } from "../Group/Group";

export class TeacherFactory implements UserFactory{
    public createUser(firstName: string, surName: string, emailAddres: string, password: string, group: Group): Teacher{
        console.log("Створюю викладача");
        return new Teacher(firstName, surName, emailAddres, password, NoteController.getInstance(), [group]);
    }
}