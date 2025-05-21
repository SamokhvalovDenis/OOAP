import { HandwrittenImageCreator } from './HandwrittenImageCreator';
import { NoteImage } from './NoteImage';

describe('HandwrittenImageCreator', () => {
  let creator: HandwrittenImageCreator;

  beforeEach(() => {
    creator = new HandwrittenImageCreator();
  });

  test('створює екземпляр NoteImage', () => {
    const image: NoteImage = creator.createImage();
    expect(image).toBeDefined();
    expect(image.filePath).toBe("handwritten_default.png");
  });

  test('recognizeText повертає текст із згадкою "handwritten"', () => {
    const image = creator.createImage();
    const text = image.recognizeText();
    expect(text).toContain("handwritten");
    expect(text).toContain("handwritten_default.png");
  });

  test('можна змінити filePath, і recognizeText враховує це', () => {
    const image = creator.createImage();
    image.filePath = "new_handwritten_image.png";
    const text = image.recognizeText();
    expect(text).toContain("new_handwritten_image.png");
  });

  test('викидає помилку при встановленні порожнього filePath', () => {
    const image = creator.createImage();
    expect(() => {
      image.filePath = "   ";
    }).toThrow("filePath не може бути порожнім рядком");
  });
});
