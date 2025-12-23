# Compose-like UI for Svelte

<img src="/./svelted.png" width="210" alt="ios"/>

A Compose-inspired UI toolkit for **Svelte**, focused on explicit composition,
immutable modifiers, and theme-driven design.

Inspired by **Jetpack Compose**, built natively for the web using Svelte and
standard web technologies.

---

## ✨ Goals

- Explicit and predictable UI composition
- Immutable, chainable `Modifier`s
- Strong separation between core, layout and components
- Theme-driven design (tokens, not raw CSS)
- No virtual DOM abstractions
- No hidden magic

> This is **not** a Material clone.  
> It is a Compose-like system that can be styled beyond Material Design.

---

## 🚀 Installation

```bash
npm install compose-svelte
```

---

## 🧭 Minimal Example

```svelte
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
      <Text>Hello Compose</Text>
    </Surface>
  </AppRoot>
</ComposeTheme>
```

---

## 🧱 Layout

### Column

```svelte
<Column modifier={Modifier.padding(16)}>
  <Text textStyle="titleLarge">Title</Text>
  <Text>Body text</Text>
</Column>
```

### Row

```svelte
<Row horizontalArrangement={Arrangement.spacedBy(8)}>
  <Text>Left</Text>
  <Text>Right</Text>
</Row>
```

### Box

```svelte
<Box modifier={Modifier.size(120)}>
  <Text modifier={Modifier.align(Alignment.Center)}>Centered</Text>
</Box>
```

---

## 🎨 Theme

### ComposeTheme

Provides theming for the entire app.

- Light / Dark / System modes
- Tokens exposed as CSS variables
- Inspired by MaterialTheme

```svelte
<ComposeTheme mode="dark">
  <AppRoot>
    <Surface>
      <Text>Dark mode</Text>
    </Surface>
  </AppRoot>
</ComposeTheme>
```

---

## 📝 TextField

### Filled

```svelte
<TextField
  label="Email"
  placeholder="you@email.com"
  value={email}
  onValueChange={(v) => email = v}
/>
```

### Outlined

```svelte
<OutlinedTextField
  label="Email"
  value={email}
  onValueChange={(v) => email = v}
/>
```

---

## 🔘 Buttons

```svelte
<Button onClick={submit}>
  Submit
</Button>

<TextButton onClick={cancel}>
  Cancel
</TextButton>

<OutlinedButton>
  Outlined
</OutlinedButton>
```

---

## 🧩 Modifiers

Modifiers are immutable and chainable.

```ts
Modifier
  .padding(16)
  .fillMaxWidth()
  .background(ColorScheme.Surface)
```

### Available categories

- Layout: `size`, `width`, `height`, `fill`, `weight`
- Spacing: `padding`, `margin`
- Drawing: `background`, `border`, `clip`
- Interaction: `clickable`
- Transform: `offset`
- Scroll: `verticalScroll`, `horizontalScroll`

---

## 🔲 Shapes

```ts
RoundedCornerShape(12)
RoundedCornerShape({ topStart: 16, topEnd: 16 })
```

Shapes are value objects and reusable across components.

---

## 🎨 Theme Tokens

### ColorScheme

```ts
ColorScheme.Primary
ColorScheme.Surface
ColorScheme.OnSurface
```

### TextStyle

```ts
TextStyle.TitleLarge
TextStyle.BodyMedium
TextStyle.LabelSmall
```

---

## 🖼️ Images & Icons

```svelte
<Image
  painter={painterResource(Res.image("logo.png"))}
  contentScale={ContentScale.Fit}
/>

<Icon
  painter="https://api.iconify.design/mdi/home.svg"
  modifier={Modifier.size(24)}
/>
```

---

## 📦 Project Status

- Core v0.0.1: stable
- Layout system: stable
- Theme system: stable
- Modifiers: stable
- Lazy layouts: experimental

---

## 🧠 Philosophy

Clarity over cleverness.

If something is not explicit, it is probably not part of the API.

---

## 📄 License

MIT
