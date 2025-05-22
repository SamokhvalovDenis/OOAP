import { Group } from "./Group";
import { GroupCreator } from "./GroupCreator";
import { BasicGroup } from "./BasicGroup";
import { Groups } from "./Groups";

export class BasicGroupCreator implements GroupCreator {
  createGroup(): Group {
    return new BasicGroup(Groups.KN11); 
  }
}