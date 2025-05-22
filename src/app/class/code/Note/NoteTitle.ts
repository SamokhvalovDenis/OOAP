export class NoteTitle {
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