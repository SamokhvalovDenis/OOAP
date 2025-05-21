export interface NoteImage {
  filePath: string;
  recognizedText: string;
  recognizeText(): string;
}