# Agent Skills

This directory holds the [Agent Skills](https://skills.sh) published by this
repository. A skill is a `SKILL.md` file (plus optional reference files) that
teaches an AI coding agent how to use `tw-bootstrap-grid` correctly, instead of
letting it guess the class names and configuration from memory.

## Available skills

| Skill                                             | Description                                                                                                                                               |
| :------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`tw-bootstrap-grid`](tw-bootstrap-grid/SKILL.md) | Install, configure and build layouts with the plugin: full class reference, Tailwind v3 vs v4 setup, gutter variables, RTL, and the common failure modes. |

## Install

```bash
npx skills add bawerbozdag/tw-bootstrap-grid
```

The CLI reads the skills from this directory and installs them into whichever
agents you select — Claude Code, Cursor, Codex, OpenCode, Gemini CLI, GitHub
Copilot and others are supported.

Useful variants:

```bash
# list the skills in this repo without installing anything
npx skills add bawerbozdag/tw-bootstrap-grid --list

# install globally (~/) instead of into the current project
npx skills add bawerbozdag/tw-bootstrap-grid -g

# non-interactive, targeting one agent
npx skills add bawerbozdag/tw-bootstrap-grid -a claude-code -y

# pull the latest version later
npx skills update tw-bootstrap-grid
```

Installing project-scoped (the default) puts the skill under your agent's
directory — `.claude/skills/` for Claude Code, `.cursor/skills/` for Cursor and
so on — so it can be committed and shared with the team.

Once installed the agent picks the skill up on its own whenever a task involves
this plugin. No prompt or slash command needed.

## Layout

```
skills/
├── README.md
└── tw-bootstrap-grid/
    ├── SKILL.md                       # entry point: setup, class table, mental model
    └── references/
        ├── setup.md                   # install, plugin options, gutter config, breakpoints
        ├── classes.md                 # exact generated CSS for every class
        ├── patterns.md                # layout recipes
        └── troubleshooting.md         # symptom → cause → fix
```

`SKILL.md` needs YAML frontmatter with a `name` and a `description`; the
description is what an agent matches against when deciding whether a task is
relevant, so it lists the class names and the situations the skill covers.

## Contributing

The skill documents real, verified behaviour of the plugin — the class tables
and CSS snippets are taken from actual compiled output, not from the docs. When
you change the plugin's generated CSS, update `references/classes.md` in the
same PR and re-check the affected claims in `SKILL.md`.
