# De Figma a web

Ejemplo que uso en clase para ver cómo se pasa un diseño de Figma a una web de verdad.

Es el portfolio de una alumna inventada, Milena Martín. La idea es que la web sea su mesa de trabajo vista desde arriba: una alfombrilla de corte, polaroids con los proyectos, notas adhesivas, una hoja de cuaderno y una postal para escribirle. Primero lo diseñé en Figma (escritorio y móvil) y luego lo maqueté con HTML, CSS y un poco de JavaScript.

- Diseño en Figma: https://www.figma.com/design/xQrxjg7zMkpofnXxJudkid
- Web publicada: https://eillanae.github.io/de-figma-a-web/

## Archivos

- `index.html`: la portada (la mesa), con los proyectos, sobre mí y contacto
- `proyecto.html`: la página de un proyecto (Festival Brote). Sirve de plantilla para los demás
- `css/estilos.css`: todo el diseño, incluido el responsive
- `js/script.js`: arrastrar las polaroids, el filtro de proyectos y el formulario

## Figma y código, lado a lado

He intentado que las cosas se llamen igual en Figma y en el CSS para que se vea la relación:

- Las variables de color de Figma (colección **Mesa**: `mesa`, `papel`, `nota-amarilla`, `cinta-azul`...) son las variables del `:root` en el CSS.
- Los componentes de Figma (Polaroid, Nota adhesiva, Cinta, Pestaña filtro, Etiqueta Dymo, Sello...) son clases en el CSS (`.polaroid`, `.nota`, `.cinta`, `.pestana`, `.dymo`, `.sello`...).
- Cada tipografía hace de un material distinto: títulos en una serif editorial (Instrument Serif), letra a mano para notas y pies de foto (Reenie Beanie), máquina de escribir para etiquetas y fechas (Courier Prime) y texto normal (Instrument Sans).
- La cuadrícula de la alfombrilla, los renglones del cuaderno o las marcas de la regla no son imágenes: están hechas con degradados de CSS (`linear-gradient`, `repeating-linear-gradient`, `radial-gradient`).
- En Figma cada pieza está girada unos grados; en el CSS es `transform: rotate()`.
- Los filtros funcionan en los dos: en Figma con variables, en la web con JavaScript.

## Para practicar

1. Cambiad los colores del `:root` y comprobad que cambia toda la web. Probad a hacer lo mismo con las variables en Figma.
2. Cambiad los huecos de color (`.hueco`) por fotos de vuestros trabajos.
3. Cambiad la mesa: en vez de alfombrilla de corte, madera, corcho o papel kraft. Solo hay que tocar el fondo del `body`.
4. Añadid un objeto nuevo a la mesa (un lápiz, un clip, una entrada de cine...), primero en Figma y después en CSS.
5. Cambiad la tipografía. Elegid en Google Fonts las vuestras, cambiad el enlace del `<head>` en las dos páginas y las variables `--fuente-...` del `:root`. Haced lo mismo en los estilos de texto de Figma.

Si queréis usarlo como base para vuestro portfolio, pulsad **Use this template** y tendréis vuestra propia copia.

## Otra versión: el cartel

En la carpeta `cartel/` está el mismo portfolio con otro planteamiento: un cartel tipográfico de estilo suizo. No hay fotos ni adornos; todo se resuelve con tipografía, una retícula de 12 columnas y tres colores.

- Diseño en Figma: página **Cartel** del mismo archivo
- Web publicada: https://eillanae.github.io/de-figma-a-web/cartel/

Lo que se trabaja aquí:

- La retícula de 12 columnas de Figma es `grid-template-columns: repeat(12, 1fr)` en el CSS. Cada bloque dice en qué columnas empieza y acaba (`grid-column: 4 / 13`). En el móvil pasa a 4 columnas, igual que en Figma.
- Abajo del todo hay un botón **ver retícula** que enseña las columnas encima de la web, para comprobar que todo cae en su sitio.
- La colección de variables **Cartel** (`papel`, `tinta`, `rojo`...) y los estilos de texto **Cartel/** son las variables y clases del CSS.
- El componente **Fila proyecto** tiene dos variantes, Escritorio y Móvil. En la web es la misma fila, `.fila`, con una media query.
- Al pasar el ratón por un proyecto aparece su imagen siguiendo el cursor. En Figma está dibujado el estado; en la web lo hace el JavaScript.

Ejercicio: comparad las dos versiones. El contenido es el mismo; ¿qué cambia en el HTML y qué cambia solo en el CSS?

## Verlo publicado

En **Settings → Pages**, elegid la rama `main` y guardad. Tarda un par de minutos en aparecer.

---

Esther Illana · Medios Informáticos · Escuela de Arte de Zaragoza
