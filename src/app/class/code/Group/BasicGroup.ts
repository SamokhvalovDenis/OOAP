import { Group } from "./Group";
import { Groups } from "./Groups";
export class BasicGroup extends Group {
  constructor(name: Groups, public memberCount: number = 40) {
    super(name);
    if (memberCount > 40) throw new Error("Member count cannot exceed 40");
  }
}
