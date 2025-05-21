export class ActionLogger {
  private static instance: ActionLogger | null = null;
  private logs: string[] = [];

  private constructor() {}

  public static getInstance(): ActionLogger {
    if (!ActionLogger.instance) {
      ActionLogger.instance = new ActionLogger();
    }
    return ActionLogger.instance;
  }

  public logAction(action: string): void {
    const timestamp = new Date().toLocaleString("uk-UA", {
      timeZone: "Europe/Kyiv",
    });
    const logEntry = `[${timestamp}] ${action}`;
    this.logs.push(logEntry);
  }

  public displayLogs(): void {}
}
