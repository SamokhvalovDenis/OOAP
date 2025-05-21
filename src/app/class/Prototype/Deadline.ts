import { DeadlineCreator } from "./DeadlineCreator";

export class Deadline implements DeadlineCreator {
  private value: Date;

  constructor(date: Date) {
    this.value = date;
  }

  public isOverdue(): boolean {
    const now = new Date();
    return now > this.value;
  }

  public getDaysLeft(): number {
    const now = new Date();
    const diffMs = this.value.getTime() - now.getTime();
    return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  }

  public clone(): Deadline {
    return new Deadline(new Date(this.value.getTime()));
  }
}