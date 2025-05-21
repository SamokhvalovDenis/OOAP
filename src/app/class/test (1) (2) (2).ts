














enum Groups {
  NoGroup,
  KN11 = "KN11",
  KN12 = "KN12",
  KN13 = "KN13",
}

abstract class Group {
  constructor(public name: Groups) {}
}

class BasicGroup extends Group {
  constructor(public name: Groups, public memberCount: number = 40) {
    super(name);
    if (memberCount > 40) throw new Error("Member count cannot exceed 40");
  }
}

class CustomGroup extends Group {
  constructor(
    public name: Groups,
    public memberCount: number = 0,
    public description: string = ""
  ) {
    super(name);
  }
}

interface GroupCreator {
  createGroup(): Group;
}

class BasicGroupCreator implements GroupCreator {
  createGroup(): Group {
    return new BasicGroup(Groups.KN11); 
  }
}

class CustomGroupCreator implements GroupCreator {
  createGroup(): Group {
    return new CustomGroup(Groups.KN12, 0, "Group for AI project"); 
  }
}

class NoteTitle {
  constructor(
    protected text: string,
    protected fontFamily: string,
    protected fontSize: number
  ) {}

  clone(): NoteTitle {
    return new NoteTitle(this.text, this.fontFamily, this.fontSize);
  }

  getText(): string {
    return this.text;
  }

  setText(text: string): void {
    this.text = text;
  }

  getFontFamily(): string {
    return this.fontFamily;
  }

  setFontFamily(fontFamily: string): void {
    this.fontFamily = fontFamily;
  }

  getFontSize(): number {
    return this.fontSize;
  }

  setFontSize(fontSize: number): void {
    this.fontSize = fontSize;
  }
}

class NoteTitleCreator extends NoteTitle {
  constructor(text: string, fontFamily: string, fontSize: number) {
    super(text, fontFamily, fontSize);
  }

  clone(): NoteTitleCreator {
    return new NoteTitleCreator(this.text, this.fontFamily, this.fontSize);
  }
}

enum Theme {
  LIGHT = "LIGHT",
  DARK = "DARK",
  AUTO = "AUTO",
}

enum Language {
  EN = "EN",
  UK = "UK",
}

class SettingsManager {
  private static instance: SettingsManager | null = null;
  private theme: Theme;
  private language: Language;

  private constructor() {
    this.theme = Theme.LIGHT; 
    this.language = Language.UK; 
  }

  public static getInstance(): SettingsManager {
    if (!SettingsManager.instance) {
      SettingsManager.instance = new SettingsManager();
    }
    return SettingsManager.instance;
  }

  public setTheme(theme: Theme): void {
    this.theme = theme;
  }

  public setLanguage(language: Language): void {
    this.language = language;
  }

  public getTheme(): Theme {
    if (this.theme === Theme.AUTO) {
      const hour = new Date().getHours();
      return hour >= 6 && hour < 18 ? Theme.LIGHT : Theme.DARK;
    }
    return this.theme;
  }

  public getLanguage(): Language {
    return this.language;
  }
}

interface DraftCreator {
  createDraft(): Note;
}

interface NotifSender {
  sendNotif(message: string): void;
}

class EmailNotifSend implements NotifSender {
  sendNotif(message: string): void {}
}

class PushNotifSend implements NotifSender {
  sendNotif(message: string): void {}
}

abstract class NotifFactory {
  abstract createNotif(): NotifSender;
}

class EmailNotifFactory extends NotifFactory {
  createNotif(): NotifSender {
    return new EmailNotifSend();
  }
}

class PushNotifFactory extends NotifFactory {
  createNotif(): NotifSender {
    return new PushNotifSend();
  }
}

class ActionLogger {
  private static instance: ActionLogger | null = null;
  private logs: string[] = [];

  private constructor() {}

  public static getInstance(): ActionLogger {
    if (!ActionLogger.instance) {
      ActionLogger.instance = new ActionLogger();
    }
    return ActionLogger.instance;
  }

  public logAction(action: string): void {
    const timestamp = new Date().toLocaleString("uk-UA", {
      timeZone: "Europe/Kyiv",
    });
    const logEntry = `[${timestamp}] ${action}`;
    this.logs.push(logEntry);
  }

  public displayLogs(): void {}
}

class Note implements DraftCreator {
  constructor(
    private id: number,
    private isDraft: boolean = false,
    private text: string,
    private date: Date,
    private title: NoteTitle,
    private isImportant: boolean,
    private deadline: Deadline | null,
    public author: number,
    private images: NoteImage[] = [],
    private tags: Tag[] = [],
    public sharedToGroups: Group[] = [],
    public sharedToTechears: User[] = []
  ) {}

  public addImage(image: NoteImage) {
    this.images.push(image);
  }

  public addTag(tag: Tag) {
    this.tags.push(tag);
  }

  public createDraft(): Note {
    const clonedTags = this.tags.map((tag) => tag.clone());

    return new Note(
      this.id,
      true,
      this.text,
      this.date,
      this.title,
      this.isImportant,
      this.deadline,
      this.author,
      this.images,
      clonedTags,
      this.sharedToGroups,
      this.sharedToTechears
    );
  }
}




class Tag {
  constructor(
    public name: string,
    public color: string,
    public font: string,
    public iconPath: string
  ) {}

  public clone(): Tag {
    return new Tag(this.name, this.color, this.font, this.iconPath);
  }
}

enum Role {
  Student,
  Teacher,
}

class NoteController {
  private static instance: NoteController;
  private notifFactory: NotifFactory;
  private logger: ActionLogger;
  private constructor(
    private notes: Note[] = [],
    notifFactory: NotifFactory = new PushNotifFactory()
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

  public findById(id: number): Note {
    return note;
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
    return note;
  }

  public saveDraft(draft: Note): void {}

  public cancelDraft(draft: Note): void {}

  public displayError(error: string): void {}
}

class User {
  constructor(
    private firstName: string,
    private surName: string,
    private emailAddres: string,
    private password: string,
    private role: Role,
    private noteController: NoteController = NoteController.getInstance()
  ) {}
}

class Student extends User {
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
      Role.Student,
      noteController
    );
  }
}

class Teacher extends User {
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
      Role.Teacher,
      noteController
    );
  }
}

interface UserFactory {
  createUser(
    firstName: string,
    surName: string,
    emailAddres: string,
    password: string
  ): User;
}

class StudentFactory implements UserFactory {
  public createUser(
    firstName: string,
    surName: string,
    emailAddres: string,
    password: string
  ) {
    return new Student(
      firstName,
      surName,
      emailAddres,
      password,
      NoteController.getInstance(),
      Groups.NoGroup
    );
  }
}

class TeacherFactory implements UserFactory {
  public createUser(
    firstName: string,
    surName: string,
    emailAddres: string,
    password: string
  ) {
    return new Teacher(
      firstName,
      surName,
      emailAddres,
      password,
      NoteController.getInstance(),
      []
    );
  }
}

const handwrittenImage = new HandwrittenTextImage();
handwrittenImage.filePath = 'notes/printed1.png';

const printedImage = new PrintedTextImage();
printedImage.filePath = "notes/printed2.png";



//const image = new NoteImage("./photo.png", "some text");
const tag = new Tag("Summer 2023", "Blue", "arial", "./photo.png");
const noteTitle = new NoteTitle("My Best Summer", "Arial", 12);
const creator = new NoteTitleCreator("Test2", "Times", 14);
const note = new Note(
  0,
  false,
  "It was the best summer in my life",
  new Date(),
  noteTitle,
  false,
  null,
  0
);
note.addTag(tag);
note.addImage(handwrittenImage);
const draft = note.createDraft();
console.log(handwrittenImage);
console.log(tag);
console.log(note);
console.log(draft);
console.log(noteTitle.clone());
console.log(creator.clone());
