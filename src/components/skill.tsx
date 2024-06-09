import React from "react";

interface SkillProps {
  name: string;
  icon: string;
}

const Skill: React.FC<SkillProps> = ({name, icon}) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out hover:-translate-y-2 dark:bg-gray-900">
      <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300"/>
      <div className="relative flex flex-col items-center content-center p-6 gap-4">
        <div className="bg-gray-100 flex content-center dark:bg-gray-900 p-3 rounded-lg">
          <img src={icon} alt={name} width={"45px"} height={"45px"} />
        </div>
        <h3 className="text-lg font-bold text-center">{name}</h3>
      </div>
    </div>
  );
}

export default Skill;