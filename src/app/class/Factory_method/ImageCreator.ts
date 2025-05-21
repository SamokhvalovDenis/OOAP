import { NoteImage } from "./NoteImage";

export abstract class ImageCreator {
  abstract createImage(): NoteImage;
}