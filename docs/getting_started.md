Getting Started
===============

This guide will help you go from **zero** to a **running screen**
using Compose-like UI for Svelte.

------------------------------------------------------------
Prerequisites
------------------------------------------------------------

- Node.js 18+
- npm / pnpm
- A Svelte or SvelteKit project

------------------------------------------------------------
Installation
------------------------------------------------------------

Install the package:

npm install compose-svelte

or

pnpm add compose-svelte

------------------------------------------------------------
Basic Setup
------------------------------------------------------------

Wrap your application with `ComposeTheme` and `AppRoot`.

Example (App.svelte):

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

------------------------------------------------------------
Layouts
------------------------------------------------------------

Column, Row and Box are the foundation layouts.

Column example:

<Column modifier={Modifier.padding(16)}>
  <Text textStyle="titleLarge">Title</Text>
  <Text>Body text</Text>
</Column>

Row example:

<Row horizontalArrangement={Arrangement.spacedBy(8)}>
  <Text>Left</Text>
  <Text>Right</Text>
</Row>

Box example:

<Box modifier={Modifier.size(120)}>
  <Text modifier={Modifier.align(Alignment.Center)}>
    Centered
  </Text>
</Box>

------------------------------------------------------------
TextField
------------------------------------------------------------

Filled TextField:

<TextField
  label="Email"
  placeholder="you@email.com"
  value={email}
  onValueChange={(v) => email = v}
/>

Outlined TextField:

<OutlinedTextField
  label="Email"
  value={email}
  onValueChange={(v) => email = v}
/>

------------------------------------------------------------
Buttons
------------------------------------------------------------

<Button onClick={submit}>
  Submit
</Button>

<TextButton onClick={cancel}>
  Cancel
</TextButton>

------------------------------------------------------------
Modifiers
------------------------------------------------------------

Modifiers are immutable and chainable.

Modifier
  .padding(16)
  .fillMaxWidth()
  .background(ColorScheme.Surface)

------------------------------------------------------------
Next Steps
------------------------------------------------------------

- Explore LazyColumn and LazyRow
- Customize themes
- Combine layouts and modifiers
- Build real screens

------------------------------------------------------------
Project Status
------------------------------------------------------------

This guide targets version 0.0.1 of the library.
