import { SkillStore } from "../skill/skills";
import { Instance, SnapshotOut, types } from "mobx-state-tree";

export const RootStore = types.model("RootStore").props({
  skillStore: types.optional(SkillStore, {})
});
