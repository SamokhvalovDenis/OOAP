import { PushFactory } from '../Notification/PushFactory';
import { ActionLogger } from '../ActionLogger';
import { Note } from './Note';
import { NotifFactory } from '../Notification/NotifFactory';
import { Group } from '../Group/Group';
import { User } from '../User/User';

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
      NoteController.instance = new NoteController([], notifFactory);
    }
    return NoteController.instance;
  }

  public createNote(): void {}

  public editNode(): void {}

  public deleteNode(): void {}

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

  public createDraft(note: Note): Note {
    return note.createDraft();
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
