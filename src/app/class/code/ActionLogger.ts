export class ActionLogger {
  private static instance: ActionLogger | null = null;
  private logs: string[] = [];

  private constructor() {}

  public static getInstance(): ActionLogger {
    if (!ActionLogger.instance) {
      console.log("Створюю ActionLogger");
      ActionLogger.instance = new ActionLogger();
    }
    else console.log("ActionLogger вже створений");
    return ActionLogger.instance;
  }

  public logAction(action: string): void {
    const timestamp = new Date().toLocaleString("uk-UA", {
      timeZone: "Europe/Kyiv",
    });
    const logEntry = `[${timestamp}] ${action}`;
    console.log("Новий лог: ", logEntry);
    this.logs.push(logEntry);
  }

  public displayLogs(): void {}
}
