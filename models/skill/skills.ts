import { types, getRoot, destroy } from "mobx-state-tree";

const Skill = types
  .model("Skill")
  .props({
    title: types.string,
    hours: types.string,
    id: types.identifierNumber
  })
  .actions(self => ({
    remove() {
      getRoot(self).removeSkill(self);
    },
    edit(title) {
      self.title = title;
      self.hours = hours;
    }
  }));

const SkillStore = types
  .model("SkillStore")
  .props({
    skills: types.array(Skill)
    // filter: types.optional(filterType, SHOW_ALL)
  })
  .views(self => ({
    // get completedCount() {
    //     return self.todos.reduce((count, todo) => (todo.completed ? count + 1 : count), 0)
    // },
    get skillsCount() {
      return self.skills.length;
    }
    // get filteredSkills() {
    //   return self.skills.filter(SKILLS_FILTERS[self.filter]);
    // }
  }))
  .actions(self => ({
    // actions
    addSkill(title, hours) {
      //** */
      const id =
        self.skills.reduce((maxId, skill) => Math.max(skill.id, maxId), -1) + 1;
      self.skills.unshift({
        id,
        title,
        hours
      });
    },
    removeSkill(skill) {
      destroy(skill);
    }
    // completeAll() {
    //   const areAllMarked = self.skills.every(skill => skill.completed);
    //   self.skills.forEach(skill => (skill.completed = !areAllMarked));
    // },
    // clearCompleted() {
    //   self.skills.replace(
    //     self.skills.filter(skill => skill.completed === false)
    //   );
    // },
    // setFilter(filter) {
    //   self.filter = filter;
    // }
  }));

export default SkillStore;
