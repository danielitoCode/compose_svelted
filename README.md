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

## ⚠️ CSS Baseline (Required)

Compose Svelted assumes a neutral CSS baseline.

You MUST include the following reset in your app:

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
}
```

## 📄 License

MIT

---

## ⚠️ CSS Baseline Requirement (Important)

Compose Svelted is **layout-deterministic**.

To guarantee consistent and predictable behavior of layout components such as
`Box`, `Column`, `Row`, `Surface`, `Scaffold`, and navigation containers,
a **neutral CSS baseline is required** in the host application.

This is **intentional** and mirrors the contract-based approach of **Jetpack Compose**.

### Required baseline

You must include the following reset in your global styles:

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
}
```

### Why this matters

Compose Svelted does **not**:
- force global CSS
- inject layout styles silently
- assume browser defaults

Instead, it expects a minimal, explicit layout contract.
Without this baseline, layout behavior may vary between browsers or projects.

### Tailwind CSS

Compose Svelted **does not require Tailwind CSS**.

Tailwind is used internally as an implementation detail for predictable styling,
but consumers of the library are **not required** to install or configure Tailwind.

### Future (Core V3)

A reusable `baseline.css` helper will be provided as an **optional import**
to simplify adoption:

```ts
import "@danielito1996/compose-svelted/baseline.css";
```

This will remain optional and opt-in.
