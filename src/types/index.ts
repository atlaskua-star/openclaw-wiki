export interface Lesson {
  id: string
  number: number
  title: string
  content: string  // markdown
}

export interface SidebarProps {
  lessons: Lesson[]
  activeLesson: string
  onSelect: (id: string) => void
}

export interface LessonViewProps {
  lesson: Lesson | undefined
}