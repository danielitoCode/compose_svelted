# compose-svelted

<p align="center">
  <img src="docs/assets/svelted.png" width="960" alt="compose-svelted" />
</p>

<p align="center">
  <b>Compose-inspired UI framework for Svelte</b><br/>
  Declarative layout · Immutable modifiers · Structural motion · Compose-like navigation
</p>

<p align="center">
  <img src="https://img.shields.io/badge/status-alpha-orange" />
  <img src="https://img.shields.io/badge/Svelte-FF3E00?logo=svelte&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white" />
</p>

---

## ✨ What is compose-svelted?

**compose-svelted** is an experimental but ambitious UI framework that brings the
**Jetpack Compose mental model** to the Svelte ecosystem.

It is **not** a Material Design clone, and it is **not** a thin component library.

Instead, it focuses on:
- explicit UI composition
- predictable layout
- declarative motion
- navigation as state

All built on top of **Svelte**, without virtual DOM abstractions or hidden magic.

---

## 🧠 Core Philosophy

> UI is a function of state.  
> Layout, motion, and navigation must be explicit and predictable.

Key ideas:
- No implicit behavior
- No global side effects
- No magic context you cannot reason about
- Everything composes

---

## 🧱 Library Structure (High-Level)

### Core V1 – Layout & Styling
- Column, Row, Box
- Modifier (immutable, chainable)
- Shapes
- Theme system
- Typography

### Core V2 – Motion & Navigation (CLOSED)
- AnimatedVisibility
- AnimatedContent
- Declarative motion
- NavController
- NavHost
- Internal backstack

---

## 💪 Strengths

### Explicit Layout
Layouts are predictable and composable.

### Immutable Modifiers
Describe intent, not CSS.

### Structural Motion
Motion is part of the UI structure.

### Compose-like Navigation
Navigation without external routers.

---

## 🚀 Innovation

- Compose mental model on the web
- Navigation as state
- Motion as structure
- No virtual DOM abstraction

---

## 📦 Status

- Alpha
- Core V2 closed
- Core V3 planned

---

## 🔮 Roadmap

### Core V3
- Nested navigation
- Directional transitions
- Shared elements

---

## 📄 License

MIT
