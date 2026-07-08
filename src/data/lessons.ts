import { Lesson } from '../types'

export const lessons: Lesson[] = [
  {
    id: 'lesson-1',
    number: 1,
    title: 'Installation & CLI Commands',
    content: `# Lesson 1: Installation & CLI Commands

---

## 1.1 Installation

\`\`\`bash
curl -fsSL https://openclaw.ai/install.sh | bash
\`\`\`

After installing, run onboarding:

\`\`\`bash
openclaw onboard
\`\`\`

---

## 1.2 Essential CLI Commands

| Command | What it does |
|---|---|
| \`openclaw --version\` | Show installed version |
| \`openclaw status\` | System health overview |
| \`openclaw status --all\` | Detailed status |
| \`openclaw doctor\` | Diagnose issues |
| \`openclaw doctor --fix\` | Auto-fix issues |
| \`openclaw config\` | Interactive config |
| \`openclaw config get <path>\` | Read a config value |
| \`openclaw config set <path> <val>\` | Write a config value |
| \`openclaw onboard\` | Guided first-run setup |
| \`openclaw update\` | Update to latest version |
| \`openclaw logs --follow\` | Live log tail |
| \`openclaw sessions\` | List conversations |
| \`openclaw gateway restart\` | Restart daemon |
| \`openclaw help\` | Get help on any command |



---

**Next up:** Lesson 2
`
  },
  {
    id: 'lesson-2',
    number: 2,
    title: 'Talking to Your AI Agent',
    content: `# Lesson 2: Talking to Your AI Agent

_Coming soon..._
`
  },
  {
    id: 'lesson-3',
    number: 3,
    title: 'Memory & Persistence',
    content: `# Lesson 3: Memory & Persistence

_Coming soon..._
`
  },
  {
    id: 'lesson-4',
    number: 4,
    title: 'Projects & File Management',
    content: `# Lesson 4: Projects & File Management

_Coming soon..._
`
  },
  {
    id: 'lesson-5',
    number: 5,
    title: 'Skills & Extending Capabilities',
    content: `# Lesson 5: Skills & Extending Capabilities

_Coming soon..._
`
  },
  {
    id: 'lesson-6',
    number: 6,
    title: 'Channels & Connecting Apps',
    content: `# Lesson 6: Channels & Connecting Apps

_Coming soon..._
`
  },
  {
    id: 'lesson-7',
    number: 7,
    title: 'Automation & Cron Jobs',
    content: `# Lesson 7: Automation & Cron Jobs

_Coming soon..._
`
  },
  {
    id: 'lesson-8',
    number: 8,
    title: 'Advanced: Sub-agents & Multi-step Flows',
    content: `# Lesson 8: Advanced: Sub-agents & Multi-step Flows

_Coming soon..._
`
  }
]