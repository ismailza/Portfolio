import React from 'react';
interface ExperienceProps {
  title: string;
  company: string;
  location: string;
  startedAt: string;
  endedAt: string;
  skills: string[];
  type: string;
  children?: React.ReactNode;
}

const Experience = ({ title, company, location, startedAt, endedAt, skills, type, children }: ExperienceProps) => {
  return (
    <div className="relative pl-6 after:absolute after:inset-y-0 after:w-px after:bg-gray-500/20 dark:after:bg-gray-400/20">
      <div className="grid gap-1 text-sm relative">
        <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50"/>
        <div className="font-medium">{title}</div>
        <div className="text-gray-500 dark:text-gray-300">
          {company} {location ? `, ${location}` : ''} . {type}
        </div>
        <div className="text-gray-500 dark:text-gray-400">
          {startedAt} - {endedAt}
        </div>
        <div className="text-gray-500 dark:text-gray-400">
          {children}
        </div>
        <div className="flex flex-wrap gap-2 justify-end">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-md text-xs">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;