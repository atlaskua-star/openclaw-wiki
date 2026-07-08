import { useState } from 'react'
import Sidebar from './components/Sidebar'
import LessonView from './components/LessonView'
import { lessons } from './data/lessons'
import './App.css'

export default function App() {
  const [activeLesson, setActiveLesson] = useState(lessons[0]?.id ?? '')

  const currentLesson = lessons.find((l) => l.id === activeLesson)

  return (
    <div className="app">
      <Sidebar
        lessons={lessons}
        activeLesson={activeLesson}
        onSelect={setActiveLesson}
      />
      <LessonView lesson={currentLesson} />
    </div>
  )
}