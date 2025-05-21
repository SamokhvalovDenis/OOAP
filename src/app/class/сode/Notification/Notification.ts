export abstract class Notificationn {
  protected message: string;

  constructor(message: string) {
    this.message = message;
  }

  abstract sendNotif(): void;
}