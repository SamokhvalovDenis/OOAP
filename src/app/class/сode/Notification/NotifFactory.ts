export interface NotifFactory {
  createNotification(message: string): Notification;
}