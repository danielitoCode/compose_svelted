# Getting Started

This guide helps you go from **installation** to your **first screen**
using Svelted.

---

## Installation

```bash
npm install compose-svelte
```

or

```bash
pnpm add compose-svelte
```

---

## Basic Setup

Wrap your app with `ComposeTheme` and `AppRoot`.

```xml
<script>
  import {
    ComposeTheme,
    AppRoot,
    Surface,
    Text,
    Modifier
  } from "compose-svelte";
</script>

<ComposeTheme mode="system">
  <AppRoot>
    <Surface modifier={Modifier.fillMaxSize()}>
      <Text>Hello Svelted</Text>
    </Surface>
  </AppRoot>
</ComposeTheme>
```

---

## Layout Basics

### Column

```xml
<Column modifier={Modifier.padding(16)}>
  <Text textStyle="titleLarge">Title</Text>
  <Text>Body text</Text>
</Column>
```

### Row

```xml
<Row horizontalArrangement={Arrangement.spacedBy(8)}>
  <Text>Left</Text>
  <Text>Right</Text>
</Row>
```

### Box

```xml
<Box modifier={Modifier.size(120)}>
  <Text modifier={Modifier.align(Alignment.Center)}>
    Centered
  </Text>
</Box>
```

---

## TextField

```xml
<TextField
  label="Email"
  placeholder="you@email.com"
  value={email}
  onValueChange={(v) => email = v}
/>
```

```xml
<OutlinedTextField
  label="Email"
  value={email}
  onValueChange={(v) => email = v}
/>
```

---

## Modifiers

```ts
Modifier
  .padding(16)
  .fillMaxWidth()
  .clip(RoundedCornerShape(12))
```

---

## Next Steps

- Explore LazyColumn and LazyRow
- Customize themes
- Build real screens
