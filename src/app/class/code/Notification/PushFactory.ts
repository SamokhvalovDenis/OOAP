import { NotifFactory } from "./NotifFactory";
import { PushNotification } from "./PushNotification";

export class PushFactory implements NotifFactory {
  createNotification(message: string): Notification {
    console.log("Створюю пуш повідомлення");
    return new PushNotification(message);
  }
}