import { NotifFactory } from "./NotifFactory";
import { EmailNotification } from "./EmailNotification";

export class EmailFactory implements NotifFactory {
  createNotification(message: string): Notification {
    console.log("Створюю поштове повідомлення");
    return new EmailNotification(message);
  }
}