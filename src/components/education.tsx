interface EducationProps {
  title: string;
  type: string;
  university: string;
  city: string;
  startedAt: string;
  endedAt?: string;
}

const Education = ({ title, type, university, city, startedAt, endedAt = 'Present' }: EducationProps) => {
  return (
    <div className="relative pl-6 after:absolute after:inset-y-0 after:w-px after:bg-gray-500/20 dark:after:bg-gray-400/20">
      <div className="grid gap-1 text-sm relative">
        <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1 dark:bg-gray-50"/>
        <div className="font-medium">{title}.</div>
        <div className="text-gray-500 dark:text-gray-300">{startedAt} - {endedAt} . {type}</div>
        <div className="text-gray-500 dark:text-gray-400">{university}, {city}</div>
      </div>
    </div>
  )
}

export default Education;