/*export class SessionManager {
  private activeUsers: User[] = [];
  private static instance: SessionManager | null = null;

  private constructor() {}

  public static getInstance(): SessionManager {
    if (SessionManager.instance === null) {
      SessionManager.instance = new SessionManager();
    }
    return SessionManager.instance;
  }

  startSession(user: User) {
    this.activeUsers.push(user);
  }

  endSession(userId: string) {
    //this.activeUsers = this.activeUsers.filter(user => user.id !== userId);
  }

  getActiveUsers(): User[] {
    return this.activeUsers;
  }
}*/