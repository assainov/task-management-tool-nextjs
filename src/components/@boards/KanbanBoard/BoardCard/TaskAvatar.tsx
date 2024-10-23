import { Avatar, AvatarFallback, AvatarImage } from 'components/@common/Avatar';

const TaskAvatar = () => (
  <Avatar className="h-6 w-6 select-none">
    <AvatarImage src="https://github.com/shadcn.png" />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
);

export default TaskAvatar;
