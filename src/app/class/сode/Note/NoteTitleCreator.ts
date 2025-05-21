import { NoteTitle } from "./NoteTitle";

class NoteTitleCreator extends NoteTitle {
  constructor(text: string, fontFamily: string, fontSize: number) {
    super(text, fontFamily, fontSize);
  }

  clone(): NoteTitleCreator {
    return new NoteTitleCreator(this.text, this.fontFamily, this.fontSize);
  }
}