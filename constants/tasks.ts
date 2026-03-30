export type TaskStatus = 'todo' | 'in-progress' | 'done';

export type Task = {
  id: string;
  category: string;
  title: string;
  time: string;
  status: TaskStatus;
  icon: string;
};

const tasks: Task[] = [
  {
    id: '1',
    category: 'Work',
    title: 'Finish sprint planning notes',
    time: '09:00 AM',
    status: 'in-progress',
    icon: 'briefcase-outline',
  },
  {
    id: '2',
    category: 'Personal',
    title: 'Morning run (5 km)',
    time: '06:30 AM',
    status: 'done',
    icon: 'walk-outline',
  },
  {
    id: '3',
    category: 'Study',
    title: 'Read TypeScript utility types',
    time: '08:30 PM',
    status: 'todo',
    icon: 'book-outline',
  },
  {
    id: '4',
    category: 'Health',
    title: 'Prepare healthy lunch',
    time: '12:30 PM',
    status: 'todo',
    icon: 'nutrition-outline',
  },
  {
    id: '5',
    category: 'Home',
    title: 'Tidy up workspace',
    time: '07:15 PM',
    status: 'in-progress',
    icon: 'home-outline',
  },
  {
    id: '6',
    category: 'Finance',
    title: 'Pay electricity bill',
    time: '05:00 PM',
    status: 'todo',
    icon: 'card-outline',
  },
];
export const FILTER_OPTIONS: TaskStatus[] = ['todo', 'in-progress', 'done'];
export type FilterOption = typeof FILTER_OPTIONS[number];
export default tasks;
