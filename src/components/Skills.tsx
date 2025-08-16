"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export const Skills = () => {
    const [skills, setSkills] = useState<string[]>([]);

    
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch('/api/skills');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const skillIcons = data.data.map((skill: { fileName: string }) => `/skill-icons/${skill.fileName}`);
        setSkills(skillIcons);
      } catch (error) {
        console.error('Failed to fetch skills:', error);
      }
    };

    fetchSkills();
  }, []);

    return (
        <ul className="flex flex-row gap-2 flex-wrap">
            {skills.map((skill, index) => {
            return (
                <li key={index} className="flex items-center justify-center p-2 w-fit shrink-0">
                    <div>
                        <Image 
                            src={skill}
                            alt="Skill Icon"
                            width={40}
                            height={40}
                        />
                    </div>
                </li>
                )
            })}
        </ul>
    )
}
