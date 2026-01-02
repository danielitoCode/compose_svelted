<p align="center">
  <img src="assets/svelted.png" alt="Svelted" width="480" />
</p>

<h1 align="center">Svelted</h1>

<p align="center">
  Compose-like UI for <strong>Svelte</strong><br/>
  Explicit composition · Immutable modifiers · Theme-driven
</p>

<p align="center">
  <img src="https://img.shields.io/badge/status-alpha-orange" />
  <img src="https://img.shields.io/badge/version-0.0.1-blue" />
  <img src="https://img.shields.io/badge/Svelte-FF3E00?logo=svelte&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white" />
</p>

---

## What is Svelted?

**Svelted** is a UI toolkit for the web inspired by **Jetpack Compose**  
and built natively on top of **Svelte**.

It brings the Compose mental model to the web:

- Explicit UI composition
- Immutable and chainable `Modifier`s
- Theme-first design
- No virtual DOM abstractions
- No hidden styling magic

---

## Core Principles

### 🧩 Composition over configuration
UI is built by composing small, predictable components.

### 🧱 Modifiers
Layout, drawing, interaction and behavior are controlled through immutable modifiers.

```ts
Modifier
  .padding(16)
  .fillMaxWidth()
  .background(ColorScheme.Surface)
```

### 🎨 Theme-driven
Design tokens come from the theme, not from hardcoded styles.

---

## Components (v0.0.1)

<p align="center">
  <img src="assets/icon.svg" width="96" />
</p>

### Layout
- Column, Row, Box, Spacer
- LazyColumn *(experimental)*
- LazyRow *(experimental)*

### Foundation
- Surface, Text, Image, Icon

### Inputs
- TextField
- OutlinedTextField

### Buttons
- Button, TextButton
- OutlinedButton, TonalButton
- IconButton

---

## Quick Example

```svelte
<ComposeTheme mode="system">
  <AppRoot>
    <Surface modifier={Modifier.fillMaxSize().padding(32)}>
      <Column>
        <Text textStyle="titleLarge">Hello Compose</Text>
        <Text>This is Svelted.</Text>
      </Column>
    </Surface>
  </AppRoot>
</ComposeTheme>
```

---

## Get Started

👉 **[Getting Started](./getting_started.html)**

---

## Examples

👉 **[example](./getting_started.html)**

---

<p align="center">
  Built with ❤️ for developers who value clarity and composable UI.
</p>
