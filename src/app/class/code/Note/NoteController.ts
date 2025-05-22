import { PushFactory } from '../Notification/PushFactory';
import { ActionLogger } from '../ActionLogger';
import { Note } from './Note';
import { NotifFactory } from '../Notification/NotifFactory';
import { Group } from '../Group/Group';
import { User } from '../User/User';
import { Deadline } from '../../Prototype/Deadline';
import { NoteTitle } from './NoteTitle';
import { NoteImage } from '../../Factory_method/NoteImage';
import { Tag } from './Tag';

export class NoteController {
  private static instance: NoteController;
  private notifFactory: NotifFactory;
  private logger: ActionLogger;
  private constructor(
    private notes: Note[] = [],
    notifFactory: NotifFactory = new PushFactory()
  ) {
    this.notifFactory = notifFactory;
    this.logger = ActionLogger.getInstance();
  }

  public static getInstance(notifFactory?: NotifFactory): NoteController {
    if (!NoteController.instance) {
      console.log("Створюю NoteController");
      NoteController.instance = new NoteController([], notifFactory);
    }
    else console.log("NoteController вже створений");
    return NoteController.instance;
  }

  public createNote(id: number, text: string, title: NoteTitle, isImportant: boolean, deadline: Deadline | null, author: User, images: NoteImage[], tags: Tag[],): void {
    const note = new Note(id, false, text, new Date(), title, isImportant, deadline, author, images, tags, [], []);
    this.notes.push(note);
  }

  public editNote(note: Note): Note {
    const draft = note.createDraft()
    this.notes.push(draft);
    return draft;
  }

  public deleteNote(): void {}

  public viewNotes(): void {}

  public findById(note_id: number): Note {
    let note = this.notes.find(note => note.id == note_id && !note.isDraft);
    if (note) return note;
    else throw new Error("Can`t find note");
  }

  public shareNote(user: User): void {}

  public shareNoteToGroup(group: Group): void {}

  public checkRights(user: User, note: Note): boolean {
    return true;
  }

  public showEditable(): void {}

  public findDraft(note_id: number): Note {
    let draft = this.notes.find(note => note.id == note_id && !note.isDraft);
    if (draft) return draft;
    else throw new Error("Can`t find draft");
  }

  public saveDraft(draft: Note): void {}

  public cancelDraft(draft: Note): void {}

  public displayError(error: string): void {}
}
