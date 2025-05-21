import { NoteTitle } from './NoteTitle';
import { DraftCreator } from "./DraftCreator";
import { Tag } from './Tag';
import { User } from '../User/User';
import { Group } from '../Group/Group'; 
import { Deadline } from '../../Prototype/Deadline';
import { NoteImage } from '../../Factory_method/NoteImage';

export class Note implements DraftCreator {
  constructor(
    public id: number,
    public isDraft: boolean = false,
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
