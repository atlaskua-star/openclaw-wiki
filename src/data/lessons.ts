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

---

## 3.7 Real Example: Installing From ClawHub

We installed **skill-vetter** — a security scanner that checks other skills for red flags before installation:

\`\`\`bash
openclaw skills install skill-vetter
\`\`\`

Now I can vet any skill before installing:

\`\`\`
"Vet this skill before I install it"
\`\`\`

---

**Next up:** Lesson 4 — Channels & Connecting Apps
`
  },
  {
    id: 'lesson-4',
    number: 4,
    title: 'Channels & Connecting Apps',
    content: [
      '# Channels & Connecting Apps',
      '',
      '---',
      '',
      '## 4.1 What Are Channels?',
      '',
      'Channels are how the outside world talks to OpenClaw — and vice versa. A "channel" connects your AI agent to a messaging platform so you can interact with it from apps you already use.',
      '',
      'Instead of always chatting through the terminal, you can:',
      '',
      '- Send a message on **Telegram** and get an answer',
      '- Get a **Discord** ping when a cron job finishes',
      '- Ask questions via **WhatsApp** on the go',
      '- Use the **WebChat** UI in a browser',
      '',
      'Think of your agent as living inside OpenClaw, and channels as the bridges that let it reach you wherever you are.',
      '',
      '---',
      '',
      '## 4.2 Available Channels',
      '',
      'OpenClaw supports these channel types out of the box:',
      '',
      '| Channel | Type | Best for',
      '|---|---|---|',
      '| **terminal** | Built-in | Local CLI interaction |',
      '| **webchat** | Built-in | Browser-based UI |',
      '| **telegram** | Provider | Quick messages on mobile |',
      '| **discord** | Provider | Community / group chats |',
      '| **signal** | Provider | Private messaging |',
      '| **whatsapp** | Provider | Everyday phone use |',
      '| **slack** | Provider | Workplace communication |',
      '| **twitter/x** | Provider | Social media mentions |',
      '| **email** | Provider | Long-form / async |',
      '| **mattermost** | Provider | Self-hosted teams |',
      '| **matrix** | Provider | Decentralized chat |',
      '',
      '---',
      '',
      '## 4.3 How Channels Work',
      '',
      'Every channel follows the same flow:',
      '',
      '1. **Configure** — Provide credentials (bot token, API key, etc.)',
      '2. **Connect** — OpenClaw registers itself as a client on that platform',
      '3. **Route** — Messages come in, get routed to your agent, replies go back through the same channel',
      '4. **Monitor** — Check status with `openclaw status`',
      '',
      '```',
      '# See all configured channels and their status',
      'openclaw status',
      '',
      '# Check a specific channel',
      'openclaw status --channel telegram',
      '```',
      '',
      '---',
      '',
      '## 4.4 Setting Up a Channel',
      '',
      'Channels are configured in your OpenClaw config file, typically at:',
      '',
      '```',
      '~/.config/openclaw/config.yaml',
      '```',
      '',
      "Here's what adding a Telegram channel looks like:",
      '',
      '```yaml',
      'channels:',
      '  telegram:',
      '    botToken: "YOUR_BOT_TOKEN_HERE"',
      '    enabled: true',
      '```',
      '',
      'And Discord:',
      '',
      '```yaml',
      'channels:',
      '  discord:',
      '    token: "YOUR_DISCORD_BOT_TOKEN"',
      '    enabled: true',
      '```',
      '',
      'You can also configure channels through the CLI:',
      '',
      '```bash',
      'openclaw config set channels.telegram.botToken "YOUR_TOKEN"',
      'openclaw config set channels.telegram.enabled true',
      'openclaw gateway restart',
      '```',
      '',
      '---',
      '',
      '## 4.5 Where to Get Credentials',
      '',
      'Each platform has its own setup process:',
      '',
      '| Platform | What you need | How to get it |',
      '|---|---|---|',
      '| **Telegram** | Bot token | Talk to @BotFather on Telegram |',
      '| **Discord** | Bot token | Create app at discord.com/developers |',
      '| **Signal** | Phone number | Signal CLI registration |',
      '| **Slack** | App token | Create Slack app with Bot scope |',
      '| **WhatsApp** | API key | Meta Business Platform |',
      '',
      '> **Tip:** Store tokens securely — anyone with your bot token can control your bot.',
      '',
      '---',
      '',
      '## 4.6 Multiple Channels, One Agent',
      '',
      'You can connect **multiple channels at the same time**. The agent sees all messages coming through a unified inbox, regardless of which platform sent them:',
      '',
      '```',
      '        ┌──────────┐',
      'Telegram ─┤          │',
      'Discord  ─┤  OpenClaw ├─ Agent',
      'WhatsApp ─┤  Gateway  │',
      'WebChat  ─┤          │',
      '        └──────────┘',
      '```',
      '',
      'Each channel works independently — message someone on Telegram, reply on Discord next time. The agent keeps the conversation context regardless of which door you walk through.',
      '',
      '---',
      '',
      '## 4.7 Channel-Specific Behavior',
      '',
      'Some things work differently depending on the channel:',
      '',
      '| Feature | Telegram | Discord | WebChat |',
      '|---|---|---|---|',
      '| Markdown formatting | ✅ | ✅ | ✅ |',
      '| Image attachments | ✅ | ✅ | ✅ |',
      '| Code blocks | ✅ | ✅ | ✅ |',
      '| Group chats | ✅ | ✅ | ❌ |',
      '| Voice messages | ❌ | ❌ | ❌ |',
      '| Reactions / emoji | ✅ | ✅ | ✅ |',
      '',
      'Your agent is aware of which channel it is talking through and adjusts formatting accordingly — for example, it will not send markdown tables to WhatsApp, and it will suppress link embeds on Discord where appropriate.',
      '',
      '---',
      '',
      '## 4.8 Disabling a Channel',
      '',
      'Need to take a channel offline without removing the config?',
      '',
      '```bash',
      'openclaw config set channels.discord.enabled false',
      'openclaw gateway restart',
      '```',
      '',
      'Or remove it entirely:',
      '',
      '```bash',
      'openclaw config del channels.discord',
      'openclaw gateway restart',
      '```',
      '',
      '---',
      '',
      '## 4.9 WebChat: The Built-in Browser UI',
      '',
      'WebChat comes pre-configured — no credentials needed. It is a browser-based chat interface that runs alongside your Gateway:',
      '',
      '```bash',
      '# Access WebChat',
      'openclaw gateway start',
      '# Then open http://localhost:PORT in your browser',
      '```',
      '',
      'The exact port is shown when the Gateway starts. This is the easiest way to test new features without setting up a third-party platform.',
      '',
      '---',
      '',
      '## 4.10 Hands On: Connecting Telegram',
      '',
      "Here's the exact walkthrough we followed to connect Telegram from scratch:",
      '',
      '### Step 1 — Create a Telegram Bot',
      '',
      '1. Open Telegram and search for **@BotFather** (official, blue checkmark)',
      '2. Start a chat and send `/newbot`',
      '3. Pick a display name (e.g. `Atlas Bot`) and a username (e.g. `atlas_openclaw_bot`)',
      '4. @BotFather replies with a **bot token** \u2014 a string like `1234567890:ABCdefGHIjklMNOpqrsTUVwxyz`',
      '',
      '### Step 2 — Configure in OpenClaw',
      '',
      '```bash',
      'openclaw config set channels.telegram.botToken "YOUR_BOT_TOKEN"',
      'openclaw config set channels.telegram.enabled true',
      'openclaw gateway restart',
      '```',
      '',
      '### Step 3 — Verify Connection',
      '',
      '```bash',
      'openclaw status --deep',
      '```',
      '',
      'Look for:',
      '',
      '```',
      'Telegram \u2502 ON \u2502 OK \u2502 token config (\u2026len 46) \u00b7 accounts 1/1',
      '```',
      '',
      '### Step 4 \u2014 Pairing (Access Control)',
      '',
      'By default, dmPolicy is `pairing` \u2014 meaning new users must be paired before they can chat with the bot:',
      '',
      '1. Open Telegram and message your bot (just say "hi")',
      '2. The bot responds with a **pairing code** \u2014 send that code back',
      '3. Once paired, your Telegram user ID is allowlisted and you can chat freely',
      '',
      "To check who's paired:",
      '',
      '```bash',
      'openclaw status --deep | grep -A 5 "Telegram"',
      '```',
      '',
      '### Step 5 \u2014 Try It',
      '',
      'Send a message to your bot on Telegram \u2014 it replies via the same gateway that is running this WebChat, so it shares the same agent and memory.',
      '',
      '---',
      '',
      '**Pro tip:** Start with Telegram or WebChat \u2014 they are the simplest to configure. Add Discord if you want group chat capabilities. Spread out channels as your usage grows.',
      '',
      '---',
      '',
      '**Next up:** Lesson 5 \u2014 Automation & Cron Jobs',
    ].join('\n')
  },
  {
    id: 'lesson-5',
    number: 5,
    title: 'Automation & Cron Jobs',
    content: [
      '# Automation & Cron Jobs',
      '',
      '---',
      '',
      '## 5.1 Why Automate?',
      '',
      'Cron jobs let your agent do work on a schedule — without you having to ask. Think of them as proactive tasks you set once and forget:',
      '',
      '- Get a daily morning briefing at 8 AM',
      '- Check the weather before you head out',
      '- Scrape a website every hour',
      '- Remind yourself of a meeting in 30 minutes',
      '- Clean up old files at midnight',
      '',
      'Once scheduled, the agent runs the task even if you are not actively chatting.',
      '',
      '---',
      '',
      '## 5.2 Cron vs Heartbeat',
      '',
      'OpenClaw has two scheduling mechanisms. They serve different purposes:',
      '',
      '| | Cron | Heartbeat |',
      '|---|---|---|',
      '| **Purpose** | One-shot or recurring tasks at exact times | Periodic "check in" for proactive work |',
      '| **Precision** | Exact schedule (9:00 AM sharp) | ~30 min intervals, can drift |',
      '| **Session** | Runs in isolated or main session | Runs in main session heartbeat |',
      '| **Use case** | Reminders, data collection, cleanup | Inbox checks, calendar lookups, idle maintenance |',
      '| **Output** | Can announce to a channel | Silent unless important |',
      '',
      '**Rule of thumb:** Use cron for precise/deliverable tasks, heartbeat for periodic ambient awareness.',
      '',
      '---',
      '',
      '## 5.3 Schedule Types',
      '',
      'Cron supports three schedule kinds:',
      '',
      '### At (one-shot)',
      '',
      'Run once at an exact time:',
      '',
      '```json',
      '{"kind": "at", "at": "2026-07-09T09:00:00+08:00"}',
      '```',
      '',
      '### Every (recurring interval)',
      '',
      'Run every N milliseconds:',
      '',
      '```json',
      '{"kind": "every", "everyMs": 3600000}',
      '```',
      '',
      '### Cron (traditional cron expression)',
      '',
      'Run on a cron schedule in a specific timezone:',
      '',
      '```json',
      '{"kind": "cron", "expr": "0 8 * * *", "tz": "Asia/Kuala_Lumpur"}',
      '```',
      '',
      'The expression uses wall-clock time in the given timezone — no need to convert to UTC.',
      '',
      '---',
      '',
      '## 5.4 Session Targets',
      '',
      'A cron job can run in different session contexts:',
      '',
      '| Target | When to use |',
      '|---|---|',
      '| **main** | System events like reminders |',
      '| **isolated** | Background tasks (data collection, cleanup) |',
      '| **current** | Bind to the current conversation (one-off) |',
      '| **session:<id>** | A specific named session |',
      '',
      '- **main** requires payload.kind = `systemEvent`',
      '- **isolated / current / session:<id>** require payload.kind = `agentTurn`',
      '',
      '---',
      '',
      '## 5.5 Payload Types',
      '',
      'What the cron job actually does depends on its payload:',
      '',
      '### systemEvent',
      '',
      'Injects a text message into the main session as a system notice:',
      '',
      '```json',
      '{"kind": "systemEvent", "text": "Time for your morning standup!"}',
      '```',
      '',
      '### agentTurn',
      '',
      'Runs the agent with a prompt in an isolated session:',
      '',
      '```json',
      '{',
      '  "kind": "agentTurn",',
      '  "message": "Check the weather in KL and tell me if I need an umbrella."',
      '}',
      '```',
      '',
      '---',
      '',
      '## 5.6 Delivery Options',
      '',
      'You can have cron results delivered to a chat channel:',
      '',
      '| Mode | Behavior |',
      '|---|---|',
      '| **none** | Silent — no delivery |',
      '| **announce** | Send result to a chat channel (Telegram, Discord, etc.) |',
      '| **webhook** | POST the finished-run event to a URL |',
      '',
      '---',
      '',
      '## 5.7 Practical Examples',
      '',
      '### Daily morning briefing at 8 AM MYT',
      '',
      '```bash',
      'openclaw cron add --name "morning-briefing" --schedule "{\"kind\":\"cron\",\"expr\":\"0 8 * * *\",\"tz\":\"Asia/Kuala_Lumpur\"}" --payload "{\"kind\":\"systemEvent\",\"text\":\"Good morning! Time for your daily briefing.\"}"',
      '```',
      '',
      'The agent receives this as a system event at 8 AM daily.',
      '',
      '### Remind me in 30 minutes (one-shot)',
      '',
      '```bash',
      'openclaw cron add --name "check-laundry" --schedule "{\"kind\":\"at\",\"at\":\"2026-07-08T23:52:00+08:00\"}" --payload "{\"kind\":\"systemEvent\",\"text\":\"Check the laundry!\"}"',
      '```',
      '',
      '### Automated weather check (isolated agentTurn)',
      '',
      '```bash',
      'openclaw cron add --name "weather-check" --schedule "{\"kind\":\"cron\",\"expr\":\"0 7 * * *\",\"tz\":\"Asia/Kuala_Lumpur\"}" --payload "{\"kind\":\"agentTurn\",\"message\":\"Check today\\\'s weather in Kuala Lumpur.\"}" --deliver --channel telegram',
      '```',
      '',
      '---',
      '',
      '## 5.8 Managing Cron Jobs',
      '',
      '```bash',
      '# List all scheduled jobs',
      'openclaw cron list',
      '',
      '# See details of a specific job',
      'openclaw cron get <job-id>',
      '',
      '# See run history',
      'openclaw cron runs <job-id>',
      '',
      '# Remove a job',
      'openclaw cron remove <job-id>',
      '',
      '# Disable without deleting',
      'openclaw cron update <job-id> .enabled false',
      '```',
      '',
      '---',
      '',
      '## 5.9 Best Practices',
      '',
      '- **Start simple:** Use one-shot reminders (kind=at) first to get comfortable',
      '- **Timezone matters:** Always set tz for cron expressions',
      '- **Isolated for data tasks:** Use agentTurn in isolated sessions for headless work',
      '- **Don\'t over-schedule:** Too many cron jobs = noise. Schedule what matters.',
      '- **Monitor:** Check cron list and run history periodically',
      '',
      '---',
      '',
      '**Pro tip:** Start with one-shot reminders (kind=at) to get comfortable. Move to cron expressions for daily/weekly patterns once you have the hang of it. Pair cron with Telegram announcements to get proactive alerts on your phone.',
      '',
      '---',
      '',
      '**Next up:** Lesson 6 \u2014 Advanced: Sub-agents & Multi-step Flows',
    ].join('\n')
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
