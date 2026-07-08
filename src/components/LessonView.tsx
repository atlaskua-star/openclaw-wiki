import { LessonViewProps } from '../types'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import './LessonView.css'

export default function LessonView({ lesson }: LessonViewProps) {
  if (!lesson) {
    return (
      <div className="lesson-view empty">
        <div className="empty-state">
          <h2>Welcome to OpenClaw Wiki</h2>
          <p>Select a lesson from the sidebar to get started.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="lesson-view">
      <div className="lesson-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {lesson.content}
        </ReactMarkdown>
      </div>
    </div>
  )
}