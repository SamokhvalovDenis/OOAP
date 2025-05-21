import { NoteImage } from "./NoteImage";
import { HandwrittenTextImage } from "./HandwrittenTextImage";
import { ImageCreator } from "./ImageCreator";

export class HandwrittenImageCreator extends ImageCreator {
  createImage(): NoteImage {
    return new HandwrittenTextImage();
  }
}