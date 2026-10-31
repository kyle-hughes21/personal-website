+++
title = "Waylate"
date = 2024-11-15
description = "Immersive language learning for Linux and Wayland. Watch films, play games, and consume media in your target language with real-time translation overlays. Learn vocabulary, grammar, and context naturally through content you enjoy."

[taxonomies]
tags = ["Rust", "Wayland", "Smithay", "OCR", "Translation", "AI", "Language Learning", "Local-First", "Open Source"]

[extra]
github = "https://github.com/kyle-hughes21/waylate"
image = "images/projects/waylate.png"
+++

Waylate is an **immersive language learning tool** for Linux desktops running Wayland. It lets you watch films, play video games, and consume any media in your target language while providing real-time, context-aware translations — turning entertainment into effective language acquisition.

## The Core Idea

Traditional language apps teach isolated words and artificial sentences. Waylate takes a different approach: **learn through content you already enjoy**. Whether it's a Japanese RPG, a Korean drama, a French YouTube tutorial, or a German news broadcast, Waylate overlays translations directly on the media you're consuming, letting you acquire language naturally through comprehensible input.

## How It Works

```
┌─────────────────────────────────────────────────────────────┐
│                    Waylate Overlay                           │
│  ┌─────────────────────────────────────────────────────┐   │
│  │  Your Media (Game, Video, Browser, App)             │   │
│  │  ┌─────────────────────────────────────────────┐    │   │
│  │  │  これは面白いゲームです！                    │    │   │
│  │  │  [This is an interesting game!]  ← Inline   │    │   │
│  │  └─────────────────────────────────────────────┘    │   │
│  └─────────────────────────────────────────────────────┘   │
│                           │                                  │
│         ┌─────────────────┼─────────────────┐               │
│         ▼                 ▼                 ▼               │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│  │  Capture    │  │  OCR +      │  │  Learning   │        │
│  │  (Screencopy│  │  Translate  │  │  Features   │        │
│  │  Protocol)  │  │  (Local AI) │  │             │        │
│  └─────────────┘  └─────────────┘  └─────────────┘        │
└─────────────────────────────────────────────────────────────┘
```

## Learning Features

| Feature | Description |
|---------|-------------|
| **Sentence Translation** | Full-sentence translation with context, not word-for-word |
| **Vocabulary Mining** | Click any word to see definition, pronunciation, examples, add to review |
| **Grammar Notes** | Inline explanations of particles, verb forms, sentence structures |
| **Spaced Repetition** | Built-in SRS review for mined words (Anki-compatible export) |
| **Context Memory** | Remembers translations per show/game/channel for consistency |
| **Difficulty Adaptation** | Adjust translation density based on your level (beginner → advanced) |

## Supported Media

- **Video Games** — RPGs, visual novels, strategy games, indie titles (fullscreen/windowed)
- **Streaming Video** — YouTube, Netflix, Crunchyroll, local files (MP4, MKV via MPV)
- **Live TV / Broadcasts** — News, sports, variety shows via browser or TV tuner
- **Browser Content** — Web novels, manga readers, news sites, social media
- **Any Wayland Surface** — If it renders on Wayland, Waylate can capture it

## Technical Approach

| Layer | Technology | Why |
|-------|------------|-----|
| **Capture** | `wlr-screencopy-unstable-v1` | Secure, compositor-agnostic, works on Sway/Hyprland/KWin/Cosmic/GNOME |
| **OCR** | RapidOCR (ONNX Runtime) | Sub-50ms, CPU/GPU, supports CJK, runs fully offline |
| **Translation** | Argos Translate / LibreTranslate | 100+ languages, context-aware, no cloud dependency |
| **Overlay** | Vulkan (`ash` + `wgpu`) | Transparent, click-through, low-latency, HDR-aware |
| **Config** | TOML + hot-reload | Per-media profiles, language pairs, learning preferences |

## Language Learning Workflow

1. **Start Content** — Launch your game, open your video, start your stream
2. **Select Region** — Hotkey to capture full screen, window, or custom region
3. **Choose Languages** — Set source (media) and target (your language)
4. **Engage** — Watch/play naturally; translations appear inline or in sidebar
5. **Mine Vocabulary** — Click unknown words → see definition, hear pronunciation, add to review
6. **Review** — Built-in SRS or export to Anki/Obsidian for later study

## Privacy & Philosophy

- **100% Local** — No telemetry, no cloud APIs, no account required. Your media, your data.
- **Offline-First** — Download language packs once; translate anywhere (plane, train, cabin).
- **You Own Your Progress** — Vocabulary exports are plain JSON/CSV/Anki format.
- **Compositor Agnostic** — Works on any Wayland compositor implementing standard protocols.

## Configuration Example

```toml
# ~/.config/waylate/config.toml
[learning]
target_language = "ja"
native_language = "en"
difficulty = "intermediate"  # beginner | intermediate | advanced
translation_density = "adaptive"  # minimal | adaptive | full

[vocabulary]
auto_mine = true
srs_enabled = true
export_format = "anki"  # anki | obsidian | csv

[capture]
default_mode = "window"  # screen | window | region
fps = 5  # lower for video, higher for games

[overlay]
mode = "inline"  # inline | sidebar | toast
show_grammar_notes = true
show_furigana = true  # for Japanese
```

## Status

**Early Alpha** — Core pipeline (capture → OCR → translate → overlay) functional on Sway/Hyprland. Learning features (vocabulary mining, SRS, grammar notes) in active development.

## Roadmap

- [ ] Vocabulary mining with one-click definitions
- [ ] Spaced repetition review built-in
- [ ] Grammar pattern detection (particles, conjugations)
- [ ] Per-show/game translation memory
- [ ] Anki/Obsidian/Notion export
- [ ] Mobile companion app for review
- [ ] Community-shared translation memories

## Links

- **Source**: [github.com/kyle-hughes21/waylate](https://github.com/kyle-hughes21/waylate)
- **Design Doc**: [docs/DESIGN.md](https://github.com/kyle-hughes21/waylate/blob/main/docs/DESIGN.md)
- **Learning Methodology**: [docs/METHODOLOGY.md](https://github.com/kyle-hughes21/waylate/blob/main/docs/METHODOLOGY.md)
- **Protocol Usage**: [docs/WAYLAND_PROTOCOLS.md](https://github.com/kyle-hughes21/waylate/blob/main/docs/WAYLAND_PROTOCOLS.md)