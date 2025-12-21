# ComposeSvelted (EN DESARROLLO)

<div align="center">
<img src="/./svelted.png" align="center" width="32%"/>
</div>

¡Bienvenido a **ComposeSvelted**! Una librería de UI declarativa para Svelte inspirada directamente en **Jetpack Compose** de Android.

### ¿Cuál es la intención de esta librería?

ComposeSvelted nace con un objetivo claro: **ofrecer una transición suave y natural para desarrolladores Android que quieran adentrarse en el desarrollo web nativo**.

Si vienes de Jetpack Compose, sabes lo increíble que es su ergonomía:

- Layouts declarativos y predecibles
- Modifiers encadenables
- Alineaciones y arreglos intuitivos
- Tema completo con Material Design 3
- Composición fluida sin sorpresas

¡Ahora puedes tener **exactamente esa misma experiencia** en la web, pero con **Svelte**!

Svelte es el framework perfecto para esto porque:

- Compila a JavaScript vainilla ultra eficiente
- **No usa Virtual DOM** → reactividad real y rendimiento superior
- Bundle mínimo y carga rápida
- Sintaxis limpia y potente

Con ComposeSvelted, un Android dev puede escribir UI web sintiéndose como en casa, sin tener que pelear con CSS crudo ni aprender paradigmas completamente nuevos.

#### Uso basico:

```xml
<ComposeTheme mode="light">
    <AppRoot>
        <Surface color = "primary" modifier={Modifier.fillMaxSize()}>
             <Row modifier={Modifier.fillMaxHeight()}>
                  <Column
                      modifier={Modifier.fillMaxHeight()}
                      horizontalAlignment={Alignment.CenterHorizontally}
                      verticalArrangement={Arrangement.SpaceBetween}
                  >
                      <Text modifier={Modifier.padding(8)}>Hola Compose</Text>
                      <Row modifier={Modifier.padding(4)}>
                           <Text>A</Text>
                           <Text>B</Text>
                      </Row>
                 </Column>
                 <Column
                      modifier={Modifier.fillMaxHeight()}
                      horizontalAlignment={Alignment.Start}
                      verticalArrangement={Arrangement.SpaceAround}
                 >
                      <Text modifier={Modifier.padding(8)}>Hola Compose</Text>
                      <Row modifier={Modifier.padding(4)}>
                           <Text>A</Text>
                           <Text>B</Text>
                      </Row>
                 </Column>
             </Row>
        </Surface>
    </AppRoot>
</ComposeTheme>
```

**Primero que nada**: no pretendo sustituir a nadie, ni hacerme el grande. Solo quiero ayudar, compartir algo útil y, ojalá, recibir un poco de apoyo de la comunidad. 😊


¡Y... ahí está! ComposeSvelted ya es una realidad.
Si vienes de Android, amigo, lo vas a entender perfectamente a la primera. Y si no vienes de Android... ¡pues también lo vas a entender perfectamente! Porque esta librería está inspirada exactamente en la ergonomía y el léxico natural de Jetpack Compose.

Por debajo, usa Svelte con TypeScript y un toque de Tailwind CSS, todo pensado para ofrecer componentes estables, predecibles y potentes sin que tengas que tocar ni una sola clase o estilo CSS directamente.
Pero... ¿es esto una capa adicional innecesaria? Pues no, es necesaria, claro que lo es... ¡con un propósito! Está diseñada especialmente para:

- Los desarrolladores Android que quieren aventurarse en el mundo web y buscan una transición suave, productiva y eficiente.
- Los principiantes (y no tan principiantes) a los que les agobia estar peleando con CSS, memorizando clases y estilos todo el día.

**Un punto importante:** *ComposeSvelted no bloquea ni niega el uso de CSS. Al contrario, te da lo mejor de ambos mundos. Organiza la vista de forma limpia y predecible, evitando que te pierdas entre miles de clases y estilos en cada etiqueta... pero si necesitas ajustar algo más fino, ¡puedes hacerlo sin problema!*


¿Qué crees tú? ¿Es buena idea? 🚀

### ¿Por qué elegir ComposeSvelted?

- Curva de aprendizaje mínima para devs Android/Kotlin
- Rendimiento superior gracias a Svelte (sin Virtual DOM)
- Layouts consistentes y predecibles
- Tema Material 3 listo para producción
- Perfecto para PWAs, dashboards, admin panels o cualquier app web moderna

#### ¡Empieza a construir interfaces web con la misma comodidad que en Android!

¡Bienvenidas! Si eres Android dev y quieres ayudar a hacer la transición al web aún más suave, abre issues o pull requests.

Licencia
MIT

**ComposeSvelted** – Jetpack Compose se encuentra con Svelte.

*Desarrollo web nativo, sin fricciones.*
