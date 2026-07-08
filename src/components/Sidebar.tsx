import { SidebarProps } from '../types'
import './Sidebar.css'

export default function Sidebar({ lessons, activeLesson, onSelect }: SidebarProps) {
  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <h1>OpenClaw Wiki</h1>
        <p className="sidebar-subtitle">Mastering the clawbot</p>
      </div>
      <ul className="lesson-list">
        {lessons.map((lesson) => (
          <li
            key={lesson.id}
            className={`lesson-item ${activeLesson === lesson.id ? 'active' : ''}`}
            onClick={() => onSelect(lesson.id)}
          >
            <span className="lesson-number">{String(lesson.number).padStart(2, '0')}</span>
            <span className="lesson-title">{lesson.title}</span>
          </li>
        ))}
      </ul>
      <div className="sidebar-footer">
        <span className="footer-dot" />
        {lessons.length} lessons
      </div>
    </nav>
  )
}