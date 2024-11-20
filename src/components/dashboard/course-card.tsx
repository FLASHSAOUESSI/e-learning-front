import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Clock, User } from "lucide-react";

interface CourseCardProps {
  title: string;
  progress: number;
  image: string;
  instructor: string;
  duration: string;
}

export function CourseCard({
  title,
  progress,
  image,
  instructor,
  duration,
}: CourseCardProps) {
  return (
    <Card className="w-[300px]">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="aspect-video w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0" />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold leading-none tracking-tight">{title}</h3>
        <div className="mt-2 flex items-center text-sm text-muted-foreground">
          <User className="mr-1 h-4 w-4" />
          {instructor}
        </div>
        <div className="mt-1 flex items-center text-sm text-muted-foreground">
          <Clock className="mr-1 h-4 w-4" />
          {duration}
        </div>
        <div className="mt-4">
          <div className="flex justify-between text-sm font-medium">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="mt-2" />
        </div>
      </CardContent>
    </Card>
  );
}