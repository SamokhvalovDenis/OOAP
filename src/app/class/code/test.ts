interface DraftCreator {
    createDraft(): Note;
}

class Note implements DraftCreator{                     //Прототип
  constructor(
    private id: number,
    private isDraft: boolean = false,
    private text: string,
    private date: Date,
    private title: string,
    private isImportant: boolean,
    private deadline: Date | null,
    public author: number,
    private images: NoteImage[] = [],
    private tags: Tag[] = [],
    public sharedToGroups: Group[] = [],
    public sharedToTechears: User[] = []
  ){}
  
  public addImage(image: NoteImage){
    this.images.push(image);
  }
  
  public addTag(tag: Tag){
    this.tags.push(tag);
  }
  
  public createDraft(): Note{
    return new Note(this.id, true, this.text, this.date, this.title, this.isImportant, this.deadline, this.author, this.images, this.tags, this.sharedToGroups, this.sharedToTechears);
  }
  
  public getId(): number{
    return this.id;
  }

  public isThisDraft(): boolean{
    return this.isDraft;
  }
}

class NoteImage{
  constructor(
    private filePath: string,
    private recognizedText: string
  ){}
}

class Tag{
  constructor(
    private name: string,
    private color: string
  ){}
}

enum Group{
    NoGroup, KN11, KN12, KN13
}

enum Role{
    Student, Teacher
}

class NoteController{                                         //Одинак
    private static instance: NoteController;


    constructor(private notes: Note[] = []){}

    public static getInstance() {
        if (!this.instance){
            this.instance = new NoteController();
        }
        return this.instance;
    }

    public createNote(): void{}

    public editNode(): void{}

    public deleteNode(): void{}

    public viewNotes(): void{}

    public findById(id: number): Note{
        let searchedNote = this.notes.find((note => note.getId() === id && !note.isThisDraft()));
        if (searchedNote){
            return searchedNote;
        }else throw new Error("Note not found");
    }

    public shareNote(user: User): void{}

    public shareNoteToGroup(group: Group): void{}

    public checkRights(user: User, note: Note): boolean{
        return true;
    }

    public createDraft(note: Note): Note{
        return note.createDraft();
    }

    public showEditable(): void{}

    public findDraft(note_id: number): Note{
        return note;
    }

    public saveDraft(draft: Note): void{}

    public cancelDraft(draft: Note): void{}

    public displayError(error: string): void{}
}

class User{
    constructor(
        private firstName: string,
        private surName: string,
        private emailAddres: string,
        private password: string,
        private role: Role,
        private noteController: NoteController = NoteController.getInstance(),
    ){}
}

class Student extends User{
    constructor(
        firstName: string,
        surName: string,
        emailAddres: string,
        password: string,
        noteController: NoteController = NoteController.getInstance(),
        public group: Group
    ){
        super(firstName, surName, emailAddres, password, Role.Student, noteController)
    }
}

class Teacher extends User{
    constructor(
        firstName: string,
        surName: string,
        emailAddres: string,
        password: string,
        noteController: NoteController = NoteController.getInstance(),
        public groups: Group[]
    ){
        super(firstName, surName, emailAddres, password, Role.Teacher, noteController);
    }
}

interface UserFactory{
    createUser(firstName: string, surName: string, emailAddres: string, password: string): User;
}

class StudentFactory implements UserFactory{
    public createUser(firstName: string, surName: string, emailAddres: string, password: string){
        return new Student(firstName, surName, emailAddres, password, NoteController.getInstance(), Group.NoGroup);
    }
}

class TeacherFactory implements UserFactory{
    public createUser(firstName: string, surName: string, emailAddres: string, password: string){
        return new Teacher(firstName, surName, emailAddres, password, NoteController.getInstance(), []);
    }
}









const image = new NoteImage('./photo.png', 'some text');
const tag = new Tag('Summer 2023', 'Blue');
const note = new Note(0, false, 'It was the best summer in my life', new Date(), 'My Best Summer', false, null, 0);
note.addTag(tag);
note.addImage(image);
const draft= note.createDraft();
console.log(image);
console.log(tag);
console.log(note);
console.log(draft);