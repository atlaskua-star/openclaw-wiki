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

---

## 3.1 What Are Skills?

Skills are markdown instruction files that teach the AI how and when to use specific tools. Each skill lives in a directory with a \`SKILL.md\` file.

They're like plugins — you can install community skills from **ClawHub**, write your own, or use the built-in ones I already have.

---

## 3.2 Where Skills Live

OpenClaw loads skills from several places, in priority order:

| Priority | Location | Path |
|---|---|---|
| 1 (highest) | Workspace skills | \`<workspace>/skills/\` |
| 2 | Project agent skills | \`<workspace>/.agents/skills/\` |
| 3 | Personal agent skills | \`~/.agents/skills/\` |
| 4 | Managed skills | \`~/.openclaw/skills/\` |
| 5 | Bundled skills | shipped with OpenClaw |

When the same skill name appears in multiple places, the higher priority wins.

---

## 3.3 Searching & Installing Skills

Search ClawHub for community skills:

\`\`\`bash
openclaw skills search "calendar"
openclaw skills search "weather"
openclaw skills search --limit 20
\`\`\`

Install from ClawHub:

\`\`\`bash
openclaw skills install @owner/skill-name
\`\`\`

Install from Git:

\`\`\`bash
openclaw skills install git:owner/repo
openclaw skills install git:owner/repo@main
\`\`\`

Install from a local directory:

\`\`\`bash
openclaw skills install ./path/to/skill --as custom-name
\`\`\`

---

## 3.4 Managing Installed Skills

\`\`\`bash
# List all installed skills
openclaw skills list
openclaw skills list --verbose

# Get info about a skill
openclaw skills info <name>

# Check which skills are ready to run
openclaw skills check

# Update a skill
openclaw skills update @owner/slug
openclaw skills update --all

# Verify a ClawHub skill
openclaw skills verify @owner/slug
\`\`\`

---

## 3.5 Creating Your Own Skill

Every skill is just a folder with a \`SKILL.md\` file:

\`\`\`
~/.openclaw/workspace/skills/my-skill/
└── SKILL.md
\`\`\`

Example \`SKILL.md\`:

\`\`\`markdown
---
name: my-skill
description: What this skill does
---

# Instructions

Tell the agent what to do when this skill is relevant.
\`\`\`

You can even create skills through me — I can use the Skill Workshop to draft and propose them for your review.

---

## 3.6 Built-in Skills I Already Have

Currently loaded skills include:

- **github** — GitHub CLI, issues, PRs, releases
- **weather** — current weather and forecasts
- **notion** — Notion API for pages, databases, search
- **clawhub** — Search and install skills from ClawHub
- **diagram-maker** — Create SVG diagrams and whiteboards
- **meme-maker** — Generate memes from templates
- **browser-automation** — Control web pages
- **tmux** — Terminal multiplexer control
- **taskflow** — Multi-step detached task coordination
- **video-frames** — Extract frames from videos
- **more...** (music, canvas, spike, healthcheck, etc.)

---

**Next up:** Lesson 4 — Channels & Connecting Apps
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