import Image from "next/image";
import skillsJSONData from "@/store/skills.json";

const Skills = () => {
  const skills = skillsJSONData.map((skill) => {
    return skill.iconUrl;
  });

  return (
    <ul className="flex flex-row gap-2 flex-wrap">
      {skills.map((skill, index) => {
        return (
          <li
            key={index}
            className="flex items-center justify-center p-2 w-fit shrink-0"
          >
            <div>
              <Image src={skill} alt="Skill Icon" width={40} height={40} />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Skills;
