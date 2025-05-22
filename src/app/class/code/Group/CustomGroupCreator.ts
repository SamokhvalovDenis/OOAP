import { Group } from "./Group";
import { GroupCreator } from "./GroupCreator";
import { Groups } from "./Groups";
import { CustomGroup } from "./CustomGroup";

export class CustomGroupCreator implements GroupCreator {
  createGroup(): Group {
    return new CustomGroup(Groups.KN12, 0, "Group for AI project"); 
  }
}