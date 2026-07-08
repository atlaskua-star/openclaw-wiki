import { Lesson } from '../types'

export const lessons: Lesson[] = [
  {
    id: 'lesson-1',
    number: 1,
    title: 'Installation & CLI Commands',
    content: `# Installation & CLI Commands

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
    title: 'Projects & File Management',
    content: `# Projects & File Management

---

## 2.1 The Workspace

Your workspace lives at:

\`\`\`bash
cd ~/.openclaw/workspace
\`\`\`

This is where everything lives — projects, notes, configuration. It's also where I (the AI) create and manage files.

Key files already there:

| File | Purpose |
|---|---|
| \`AGENTS.md\` | My operating manual and your preferences |
| \`SOUL.md\` | My personality and boundaries |
| \`USER.md\` | Info about you |
| \`MEMORY.md\` | My long-term memory |
| \`HEARTBEAT.md\` | Periodic background checks |
| \`TOOLS.md\` | Environment-specific notes |

---

## 2.2 Creating Projects

Projects go inside the \`projects/\` folder:

\`\`\`
workspace/
└── projects/
    └── openclaw-wiki/    ← the wiki we just built
        ├── src/
        ├── package.json
        └── ...
\`\`\`

When you want to start something new, just tell me. I'll scaffold the structure, write the code, install deps, and get it running.

---

## 2.3 How I Work With Files

I can do all of these just by asking:

| Action | How it works |
|---|---|
| Read files | \`read path/to/file\` |
| Create files | \`write path/to/file\` with content |
| Edit files | \`edit\` with exact text replacement |
| Run commands | \`exec command\` (I show output) |
| List directories | \`ls -la\` via exec |
| Search code | grep or memory search |

---

## 2.4 Best Practices

- **One project = one folder** inside \`projects/\`
- Each project should have a \`README.md\` explaining what it does
- Use Git for version control (like we did with the wiki)
- Keep the workspace clean — don't scatter files at root

---

**Tip:** Anything we build, I'll keep inside \`projects/\`. If you ever need to find something, just ask.
`
  },
  {
    id: 'lesson-3',
    number: 3,
    title: 'Skills & Extending Capabilities',
    content: `# Skills & Extending Capabilities

_Coming soon..._
`
  },
  {
    id: 'lesson-4',
    number: 4,
    title: 'Channels & Connecting Apps',
    content: `# Channels & Connecting Apps

_Coming soon..._
`
  },
  {
    id: 'lesson-5',
    number: 5,
    title: 'Automation & Cron Jobs',
    content: `# Automation & Cron Jobs

_Coming soon..._
`
  },
  {
    id: 'lesson-6',
    number: 6,
    title: 'Advanced: Sub-agents & Multi-step Flows',
    content: `# Advanced: Sub-agents & Multi-step Flows

_Coming soon..._
`
  }
]