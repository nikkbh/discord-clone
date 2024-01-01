import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface UserAvatarProps {
  source?: string;
  className?: string;
}

export const UserAvatar = ({ source, className }: UserAvatarProps) => {
  return (
    <Avatar className={cn("h-7 w-7 md:w-10 md:h-10", className)}>
      <AvatarImage src={source} />
    </Avatar>
  );
};
