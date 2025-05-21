import { NoteImage } from "./NoteImage";

export class PrintedTextImage implements NoteImage {
  private _filePath: string;
  private _recognizedText: string;

  constructor() {
    this._filePath = "printed_default.png";
    this._recognizedText = "";
  }

  get filePath(): string {
    return this._filePath;
  }

  set filePath(value: string) {
    if (value.trim().length === 0) {
      throw new Error("filePath не може бути порожнім рядком");
    }
    this._filePath = value;
  }

  get recognizedText(): string {
    return this._recognizedText;
  }

  recognizeText(): string {
    this._recognizedText = `Extracted text from ${this._filePath} at ${new Date().toISOString()} (printed)`;
    return this._recognizedText;
  }
}