import { NoteImage } from "./NoteImage";
import { PrintedTextImage } from "./PrintedTextImage";
import { ImageCreator } from "./ImageCreator";

export class PrintedImageCreator extends ImageCreator {
  createImage(): NoteImage {
    return new PrintedTextImage();
  }
}