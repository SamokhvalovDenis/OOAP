import { NotifFactory } from "./NotifFactory";
import { EmailNotification } from "./EmailNotification";

export class EmailFactory implements NotifFactory {
  createNotification(message: string): Notification {
    return new EmailNotification(message);
  }
}