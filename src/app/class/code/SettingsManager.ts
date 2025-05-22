import { Theme } from "./Theme";
import { Language } from "./Language";

class SettingsManager {
  private static instance: SettingsManager | null = null;
  private theme: Theme;
  private language: Language;

  private constructor() {
    this.theme = Theme.LIGHT; 
    this.language = Language.UK; 
  }

  public static getInstance(): SettingsManager {
    if (!SettingsManager.instance) {
      SettingsManager.instance = new SettingsManager();
    }
    return SettingsManager.instance;
  }

  public setTheme(theme: Theme): void {
    this.theme = theme;
  }

  public setLanguage(language: Language): void {
    this.language = language;
  }

  public getTheme(): Theme {
    if (this.theme === Theme.AUTO) {
      const hour = new Date().getHours();
      return hour >= 6 && hour < 18 ? Theme.LIGHT : Theme.DARK;
    }
    return this.theme;
  }

  public getLanguage(): Language {
    return this.language;
  }
}