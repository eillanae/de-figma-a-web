# De Figma a web

Ejemplo que uso en clase para ver cómo se pasa un diseño de Figma a una web de verdad.

Es el portfolio de una alumna inventada, Milena Martín, planteado como un cartel tipográfico de estilo suizo: sin fotos ni adornos, todo se resuelve con tipografía, una retícula de 12 columnas y tres colores. Primero lo diseñé en Figma (escritorio y móvil) y luego lo maqueté con HTML, CSS y un poco de JavaScript.

- Diseño en Figma: https://www.figma.com/design/xQrxjg7zMkpofnXxJudkid
- Web publicada: https://eillanae.github.io/de-figma-a-web/

## Archivos

- `index.html`: la portada, con el índice de proyectos, sobre mí y contacto
- `proyecto.html`: la página de un proyecto (Festival Brote). Sirve de plantilla para los demás
- `css/estilos.css`: todo el diseño, incluido el responsive
- `js/script.js`: el filtro de proyectos, la imagen que sigue al ratón, el formulario y el botón de la retícula

## Figma y código, lado a lado

He intentado que las cosas se llamen igual en Figma y en el CSS para que se vea la relación:

- La retícula de 12 columnas de Figma es `grid-template-columns: repeat(12, 1fr)` en el CSS. Cada bloque dice en qué columnas empieza y acaba (`grid-column: 4 / 13`). En el móvil pasa a 4 columnas, igual que en Figma.
- Abajo del todo hay un botón **ver retícula** que enseña las columnas encima de la web, para comprobar que todo cae en su sitio.
- Las variables de color de Figma (colección **Cartel**: `papel`, `tinta`, `rojo`...) son las variables del `:root` en el CSS.
- Los estilos de texto **Cartel/** (Nombre, Titular, Proyecto, Entradilla, Meta...) son las clases del CSS. Solo hay dos tipografías: Archivo para todo y Courier Prime para los datos pequeños.
- El componente **Fila proyecto** tiene dos variantes, Escritorio y Móvil. En la web es la misma fila, `.fila`, con una media query.
- Al pasar el ratón por un proyecto aparece su imagen siguiendo el cursor. En Figma está dibujado el estado; en la web lo hace el JavaScript.

## Para practicar

1. Cambiad los colores del `:root` y comprobad que cambia toda la web. Probad a hacer lo mismo con las variables en Figma.
2. Pulsad **ver retícula** y moved un bloque de columna cambiando su `grid-column`. Haced lo mismo en Figma.
3. Cambiad el rojo por otro color y la tipografía por otra de palo seco. ¿Sigue pareciendo un cartel?
4. Añadid un proyecto nuevo al índice: primero una instancia de **Fila proyecto** en Figma, después un `<li class="fila">` en el HTML.
5. Cambiad los bloques de color de `proyecto.html` por fotos de vuestros trabajos.

Si queréis usarlo como base para vuestro portfolio, pulsad **Use this template** y tendréis vuestra propia copia.

## Verlo publicado

En **Settings → Pages**, elegid la rama `main` y guardad. Tarda un par de minutos en aparecer.

---

Esther Illana · Medios Informáticos · Escuela de Arte de Zaragoza
