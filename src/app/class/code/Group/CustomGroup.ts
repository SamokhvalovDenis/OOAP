import { Group } from "./Group";
import { Groups } from "./Groups";

export class CustomGroup extends Group {
  constructor(
    name: Groups,
    public memberCount: number = 0,
    public description: string = ""
  ) {
    super(name);
  }
}
