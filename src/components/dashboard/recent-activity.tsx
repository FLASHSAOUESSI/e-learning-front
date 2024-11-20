import { ScrollArea } from "@/components/ui/scroll-area";
import { PlayCircle, BookOpen, Trophy } from "lucide-react";

const activities = [
  {
    icon: PlayCircle,
    title: "Watched 'Introduction to Neural Networks'",
    time: "2 hours ago",
    course: "Machine Learning Basics",
  },
  {
    icon: BookOpen,
    title: "Completed Chapter 3: CSS Grid",
    time: "5 hours ago",
    course: "Web Development Bootcamp",
  },
  {
    icon: Trophy,
    title: "Earned 'Python Master' badge",
    time: "1 day ago",
    course: "Python Programming",
  },
  {
    icon: PlayCircle,
    title: "Watched 'Data Visualization with D3'",
    time: "2 days ago",
    course: "Data Science Fundamentals",
  },
];

export function RecentActivity() {
  return (
    <ScrollArea className="h-[300px] pr-4">
      <div className="space-y-4">
        {activities.map((activity, i) => {
          const Icon = activity.icon;
          return (
            <div key={i} className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-2">
                <Icon className="h-4 w-4 text-primary" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {activity.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {activity.course}
                </p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </ScrollArea>
  );
}