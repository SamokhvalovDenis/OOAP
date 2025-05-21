import { NotifFactory } from "./NotifFactory";
import { PushNotification } from "./PushNotification";

export class PushFactory implements NotifFactory {
  createNotification(message: string): Notification {
    return new PushNotification(message);
  }
}