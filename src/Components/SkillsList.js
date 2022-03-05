import React from "react";
import Skill from "./Skill";

function SkillsList({ skills, setSkills }) {
  return skills.map((item) => (
    <Skill skills={skills} setSkills={setSkills} key={item.id} skill={item} />
  ));
}

export default SkillsList;
