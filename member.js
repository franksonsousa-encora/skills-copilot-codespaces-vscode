function skillsMember() {
  return {
    skills: {
      html: true,
      css: true,
      js: true,
      react: false,
      node: false,
      mongo: false,
    },
    addSkill(skill) {
      this.skills[skill] = true;
    },
  };
}