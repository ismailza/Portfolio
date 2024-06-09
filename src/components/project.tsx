import Link from "next/link";
import {Card, CardContent, CardDescription, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import { Key } from "react";

interface ProjectProps {
  key: Key;
  title: string;
  excerpt: string;
  image: string;
  tags: string[];
}

const Project = ({ key, title, excerpt, image, tags }: ProjectProps) => {

  return (
    <Card
      key={key}
      className="w-full max-w-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
    >
      <Link href="#" prefetch={false}>
        <img
          src={image}
          alt={title}
          width={300}
          height={200}
          className="w-full h-48 object-cover"
        />
        <CardContent className="p-4 space-y-2">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{excerpt}</CardDescription>
          <div className="flex justify-end">
            <Button variant="link" className="text-primary-500 hover:underline">
              View Project
            </Button>
          </div>
          <div className="flex flex-wrap gap-2 justify-end">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-md text-xs"
              >
                {tag}
              </div>
            ))}
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}

export default Project;