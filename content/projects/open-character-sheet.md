+++
title = "open-character-sheet"
date = 2024-10-20
description = "A universal, system-agnostic character sheet application for TTRPGs. Built with React, TypeScript, and local-first architecture — works offline, syncs via CRDTs, and supports custom game systems through a plugin schema."

[taxonomies]
tags = ["TypeScript", "React", "CRDT", "Local-First", "TTRPG", "Yjs", "IndexedDB", "Open Source"]

[extra]
github = "https://github.com/kyle-hughes21/open-character-sheet"
demo = "https://charsheet.kylehughes.dev"
icon = "book-open"
+++

open-character-sheet (OCS) is a **local-first, system-agnostic** character sheet application for tabletop RPGs. It treats character data as structured documents that work offline, sync peer-to-peer or via a central server, and adapt to any game system through a declarative schema.

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      open-character-sheet                    │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                    React + TypeScript                │   │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────────────┐  │   │
│  │  │  Schema  │  │  Editor  │  │   Renderer       │  │   │
│  │  │  Engine  │  │  (Prose- │  │   (React,        │  │   │
│  │  │  (JSON   │  │  Mirror) │  │   Tailwind)      │  │   │
│  │  │  Schema) │  │          │  │                  │  │   │
│  │  └──────────┘  └──────────┘  └──────────────────┘  │   │
│  └─────────────────────────────────────────────────────┘   │
│                           │                                  │
│         ┌─────────────────┼─────────────────┐               │
│         ▼                 ▼                 ▼               │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│  │  Yjs +      │  │  IndexedDB  │  │  WebRTC /   │        │
│  │  CRDT Sync  │  │  (Offline)  │  │  WebSocket  │        │
│  └─────────────┘  └─────────────┘  └─────────────┘        │
└─────────────────────────────────────────────────────────────┘
```

## Core Concepts

### 1. System Schema (JSON Schema + UI Hints)
Every game system defines a schema that describes:
- **Fields** — Attributes, skills, inventory, spells, features
- **Types** — String, number, boolean, dice notation (`2d6+3`), references
- **Validation** — Min/max, required, custom rules (e.g., "proficiency bonus = ceil(level/4)")
- **UI Hints** — Layout (tabs, sections, grids), widgets (dice roller, autocomplete, counters)

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "D&D 5e Character",
  "type": "object",
  "properties": {
    "abilities": {
      "type": "object",
      "properties": {
        "str": { "type": "integer", "minimum": 1, "maximum": 30, "ui:widget": "ability-score" },
        "dex": { "type": "integer", "minimum": 1, "maximum": 30, "ui:widget": "ability-score" }
      }
    },
    "hp": { "type": "object", "properties": { "current": {"type": "integer"}, "max": {"type": "integer"} }, "ui:widget": "hp-tracker" }
  }
}
```

### 2. CRDT-Powered Sync (Yjs)
- **Offline-first** — Full edit capability in IndexedDB, no server required
- **Peer-to-peer** — WebRTC mesh for LAN/VPN (Tailscale) sync without central server
- **Centralized option** — `y-websocket` server for persistent rooms (self-hosted)
- **Conflict-free** — Concurrent edits merge automatically (last-writer-wins per field, array moves preserved)

### 3. Plugin System
Game systems are **loadable plugins** — no core changes needed:
- Drop a `system.json` + `templates/` folder into `~/.ocs/systems/`
- Hot-reload in dev, signed verification in production
- Community systems: D&D 5e, Pathfinder 2e, Call of Cthulhu, Mothership, Cy_Borg, custom homebrew

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Framework** | React 18 + TypeScript (strict) |
| **State/CRDT** | Yjs + `y-indexeddb` + `y-webrtc` / `y-websocket` |
| **Editor** | ProseMirror (rich text) + custom field components |
| **Styling** | Tailwind CSS + Radix UI primitives |
| **Build** | Vite + `vite-plugin-pwa` (Workbox) |
| **Testing** | Vitest + Playwright (E2E sync scenarios) |
| **CI** | GitHub Actions → Cloudflare Pages / Docker |

## Features

| Feature | Status |
|---------|--------|
| **Offline editing** | ✅ Full CRUD in IndexedDB |
| **Multi-device sync** | ✅ WebRTC (LAN) + WebSocket (remote) |
| **System plugins** | ✅ D&D 5e, PF2e, CoC, Mothership built-in |
| **Custom systems** | ✅ JSON Schema + UI hints |
| **Dice notation** | ✅ `2d6+3`, `1d20kh1`, exploding, pool |
| **Character import** | ✅ D&D Beyond JSON, PDF (experimental) |
| **Print/PDF export** | ✅ `@react-pdf/renderer` templates |
| **Mobile PWA** | ✅ Installable, responsive, touch-optimized |
| **Accessibility** | ✅ ARIA, keyboard nav, screen reader tested |

## Privacy & Data Ownership

- **No accounts required** — Anonymous by default
- **Data lives on your device** — IndexedDB, encrypted at rest (optional Web Crypto)
- **Sync is opt-in** — You choose peers or server
- **Export anytime** — JSON, PDF, Markdown, Foundry VTT format

## Status

**Beta** — Core sync works, 4 built-in systems, PWA installable. Active development on mobile UX and advanced layout engine.

## Links

- **Source**: [github.com/kyle-hughes21/open-character-sheet](https://github.com/kyle-hughes21/open-character-sheet)
- **Live Demo**: *coming soon*
- **Plugin Dev Guide**: *coming soon*
- **Architecture**: *coming soon*