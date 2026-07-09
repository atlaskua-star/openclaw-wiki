import { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import LessonView from './components/LessonView'
import { lessons } from './data/lessons'
import './App.css'

export default function App() {
  const [activeLesson, setActiveLesson] = useState(lessons[0]?.id ?? '')
  const [isMobile, setIsMobile] = useState(false)
  const [showList, setShowList] = useState(true)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)')
    setIsMobile(mq.matches)
    const handler = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches)
      if (!e.matches) setShowList(true) // reset when resizing to desktop
    }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const currentLesson = lessons.find((l) => l.id === activeLesson)

  const handleSelect = (id: string) => {
    setActiveLesson(id)
    if (isMobile) setShowList(false)
  }

  // ── Mobile: separate pages ──

  if (isMobile) {
    if (showList) {
      return (
        <div className="app-mobile">
          <Sidebar
            lessons={lessons}
            activeLesson={activeLesson}
            onSelect={handleSelect}
          />
        </div>
      )
    }

    return (
      <div className="app-mobile">
        <header className="mobile-header">
          <button className="back-btn" onClick={() => setShowList(true)}>
            ← Lessons
          </button>
          <span className="mobile-lesson-label">
            {currentLesson
              ? `Lesson ${currentLesson.number}`
              : ''}
          </span>
        </header>
        <LessonView lesson={currentLesson} />
      </div>
    )
  }

  // ── Desktop: split layout ──

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