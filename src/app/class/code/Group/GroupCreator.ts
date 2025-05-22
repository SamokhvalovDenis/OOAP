import { Group } from "./Group";

export interface GroupCreator {
  createGroup(): Group;
}
