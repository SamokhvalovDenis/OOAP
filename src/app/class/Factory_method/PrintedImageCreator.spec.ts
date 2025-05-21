import { PrintedImageCreator } from './PrintedImageCreator';
import { NoteImage } from './NoteImage';

describe('PrintedImageCreator', () => {
  let creator: PrintedImageCreator;

  beforeEach(() => {
    creator = new PrintedImageCreator();
  });

  test('створює екземпляр NoteImage', () => {
    const image: NoteImage = creator.createImage();
    expect(image).toBeDefined();
    expect(image.filePath).toBe("printed_default.png");
  });

  test('recognizeText повертає текст із згадкою "printed"', () => {
    const image = creator.createImage();
    const text = image.recognizeText();
    expect(text).toContain("printed");
    expect(text).toContain("printed_default.png");
  });

  test('можна змінити filePath, і recognizeText враховує це', () => {
    const image = creator.createImage();
    image.filePath = "scanned_book.png";
    const text = image.recognizeText();
    expect(text).toContain("scanned_book.png");
  });

  test('викидає помилку при встановленні порожнього filePath', () => {
    const image = creator.createImage();
    expect(() => {
      image.filePath = "";
    }).toThrow("filePath не може бути порожнім рядком");
  });
});
