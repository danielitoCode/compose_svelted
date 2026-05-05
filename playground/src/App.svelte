<script lang="ts">
  import { AppRoot, Column, Text, Button } from '@danielito1996/compose-svelted';

  let count = 0;
</script>

<AppRoot>
  <Column gap={12} style="padding: 24px; max-width: 520px; margin: 0 auto;">
    <Text text="Compose Svelted Playground" />
    <Text text={`Clicks: ${count}`} />
    <Button label="Click me" onClick={() => count++} />
  </Column>
</AppRoot>
