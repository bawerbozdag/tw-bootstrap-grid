import type { Messages } from "./en";

const es: Messages = {
    meta: {
        home: {
            title: "tw-bootstrap-grid | Grid de Bootstrap para Tailwind CSS",
            description:
                "Un plugin de Tailwind CSS que añade el grid de 12 columnas de Bootstrap: row, col, gutters, offsets, row-cols y RTL. Funciona con Tailwind v3.4 y v4.",
            shareTitle: "tw-bootstrap-grid | Grid de Bootstrap para Tailwind CSS",
            shareDescription:
                "El grid de 12 columnas de Bootstrap como plugin de Tailwind CSS: row, col, gutters, offsets, row-cols y RTL. Funciona con Tailwind v3.4 y v4.",
        },
        migration: {
            title: "Migra un grid de Bootstrap a Tailwind CSS | tw-bootstrap-grid",
            description:
                "Lleva un grid de Bootstrap 5 a Tailwind CSS: tablas de equivalencias, cambios en los gutters, los breakpoints de Bootstrap y un comando Perl que convierte tu código.",
            shareTitle: "Migra un grid de Bootstrap a Tailwind CSS",
            shareDescription:
                "Tablas de equivalencias, cambios en los gutters, los breakpoints de Bootstrap y un comando Perl que convierte tu código.",
        },
        imageAlt:
            "tw-bootstrap-grid: el grid de Bootstrap, para Tailwind. Un grid de doce columnas con tres columnas resaltadas.",
    },
    nav: {
        label: "Secciones",
        introduction: "Introducción",
        installation: "Instalación",
        configuration: "Configuración",
        classes: "Clases",
        migration: "Migración",
        examples: "Ejemplos",
        rtl: "RTL",
        faq: "FAQ",
        more: "Más",
    },
    common: {
        skipToContent: "Saltar al contenido",
        newTab: "(se abre en una pestaña nueva)",
        copy: "Copiar",
        copied: "Copiado",
        failed: "Error",
        backToTop: "tw-bootstrap-grid, volver al principio",
        githubRepo: "Repositorio de GitHub",
        npmPackage: "Paquete de npm",
        github: "GitHub",
        npm: "npm",
        changelog: "Registro de cambios",
        projectLinks: "Enlaces del proyecto",
        switchToLight: "Cambiar al tema claro",
        switchToDark: "Cambiar al tema oscuro",
        lightTheme: "Tema claro",
        darkTheme: "Tema oscuro",
        tailwindVersion: "Versión de Tailwind",
        language: "Idioma",
        code: "Código",
        codeFile: "Código: {file}",
        installCommand: "Comando de instalación",
        packageManager: "Gestor de paquetes",
        license: "MIT © {year}",
    },
    versions: { v3Hint: "tailwind.config.js", v4Hint: "@plugin en CSS" },
    intro: {
        chip: "Plugin de Tailwind CSS · v{version}",
        titleStart: "El grid de Bootstrap,",
        titleEnd: "para Tailwind.",
        lead: "Si ya piensas en filas y columnas, sigue haciéndolo. tw-bootstrap-grid añade a Tailwind el conocido grid de 12 columnas, con `.row`, `.col-6`, `.offset-2` y `.g-4`, con soporte para RTL y sin imponer cómo deben verse tus componentes.",
        getStarted: "Empezar",
        viewOnGithub: "Ver en GitHub",
        whatYouGet: "Qué obtienes",
        features: [
            {
                title: "Grid de 12 columnas",
                body: "`.row`, `.col`, `.col-auto` y de `.col-1` a `.col-12`, igual que en Bootstrap.",
            },
            {
                title: "Gutters de tu tema",
                body: "`.g-*`, `.gx-*` y `.gy-*` usan la escala de espaciado de Tailwind, así que encajan con el resto de tu diseño.",
            },
            {
                title: "Offsets",
                body: "De `.offset-0` a `.offset-12` para centrar una columna o dejar un hueco.",
            },
            {
                title: "Columnas por fila",
                body: "De `.row-cols-1` a `.row-cols-6` y `.row-cols-auto` dimensionan a todos los hijos con una sola clase en la fila.",
            },
            {
                title: "Contenedores",
                body: "`.container` y `.container-fluid` con un relleno que tiene en cuenta el gutter. Los anchos máximos vienen de los breakpoints de Tailwind.",
            },
            {
                title: "Responsive y RTL",
                body: 'Todas las clases admiten los prefijos de breakpoint de Tailwind, como `md:col-6`, y se invierten correctamente con `dir="rtl"`.',
            },
        ],
        note: "Solo se ocupa del layout: sin colores, sin componentes, sin resets. Añade a Tailwind en lugar de sustituir nada, así que puedes mezclar `col-4` y `flex` en la misma página sin pensarlo dos veces.",
    },
    installation: {
        eyebrow: "Primeros pasos",
        title: "Instalación",
        description: "Tres pasos: instala el paquete, registra el plugin y empieza a usar las clases.",
        step1: "Instala el paquete",
        step2: {
            title: "Registra el plugin",
            body: "Elige tu versión de Tailwind en la cabecera y el fragmento de abajo se adapta. Tailwind v4 registra los plugins en el CSS, v3 en el archivo de configuración.",
            note: 'En una configuración v3 con CommonJS, `plugins: [require("tw-bootstrap-grid")]` también funciona.',
        },
        step3: {
            title: "Usa las clases",
            body: "Eso es todo. Úsalas en tu HTML como cualquier otra clase de Tailwind. Todo lo que puedes hacer con `sm:`, `md:` o `hover:` también funciona aquí.",
        },
        buildStep: {
            title: "Necesitas un paso de compilación",
            body: "El plugin se ejecuta dentro del compilador de Tailwind (PostCSS, Vite, Webpack, la CLI de Tailwind…). No funciona con el script Play CDN de Tailwind, que no puede cargar plugins desde npm.",
        },
    },
    configuration: {
        eyebrow: "Primeros pasos",
        title: "Configuración",
        description:
            "Los valores por defecto coinciden con Bootstrap, así que puedes saltarte esta página. Vuelve cuando quieras otros breakpoints o tamaños de gutter.",
        breakpoints: {
            title: "Breakpoints",
            body: "El plugin no tiene breakpoints propios. Los prefijos como `md:col-6` y el ancho máximo de `.container` vienen de Tailwind, así que al cambiar tus pantallas cambia también el grid.",
        },
        gutters: {
            title: "Tamaños de gutter",
            body: "Los gutters son el espacio entre columnas. Por defecto son `1.5rem` en horizontal y `0` en vertical. Puedes definirlo una vez para todo, o por separado para contenedores y filas. En v3 pasas opciones al plugin, en v4 defines variables CSS.",
            tableCaption: "Orden de resolución del gutter",
            priority: "Prioridad",
            cssVariable: "Variable CSS",
            option: "Opción",
            notes: "Notas",
            orderNotes: [
                "Gana el valor más específico.",
                "Valor de respaldo compartido por ambos.",
                "Los mismos valores por defecto que usa Bootstrap.",
            ],
            defaultVariable: "1.5rem (x) y 0 (y)",
            defaultOption: "valor por defecto integrado",
            after: "Las variables CSS se leen en tiempo de ejecución, así que en cualquiera de las dos versiones también puedes redefinirlas en cualquier elemento para cambiar los gutters solo de esa sección. Para una sola fila, usa `.g-*`, `.gx-*` y `.gy-*`.",
        },
        containers: {
            title: "Desactiva los contenedores",
            body: "¿Prefieres usar solo el `container` de Tailwind? Pon `generateContainers` en `false` y el plugin deja de generar `.container-fluid` y su relleno que tiene en cuenta el gutter. Las filas y las columnas no se ven afectadas.",
        },
        variablesNote: {
            title: "¿Por qué variables en v4?",
            body: "Tailwind v4 puede pasar a un plugin valores simples como `generateContainers: false;`, pero no objetos anidados como `gutters`. Las variables CSS cubren ese caso y además se pueden redefinir por elemento.",
        },
    },
    classes: {
        eyebrow: "Referencia",
        title: "Clases",
        description: "Todo lo que añade el plugin, en un solo lugar.",
        tableCaption: "Clases de {title}",
        scrollableTable: "{title}, tabla con desplazamiento",
        columns: { name: "Clase", what: "Qué hace", notes: "Notas" },
        groups: [
            {
                title: "Layout",
                rows: [
                    {
                        what: "width: 100%; centrado; relleno según el gutter",
                        note: "El ancho máximo viene de los breakpoints de Tailwind.",
                    },
                    { what: "igual que .container", note: "Ancho completo en todos los breakpoints." },
                    {
                        what: "display: flex; flex-wrap: wrap; márgenes negativos",
                        note: "Anula el gutter exterior y coloca a sus hijos.",
                    },
                ],
            },
            {
                title: "Columnas",
                rows: [
                    { what: "flex: 1 0 0%", note: "Reparte el espacio restante a partes iguales." },
                    { what: "flex: 0 0 auto; width: auto", note: "Se dimensiona según su contenido." },
                    { what: "flex: 0 0 auto; width: n / 12", note: "Ocupa n de 12 partes." },
                ],
            },
            {
                title: "Offsets y columnas por fila",
                rows: [
                    { what: "margin-inline-start: n / 12", note: "Se invierte solo en RTL." },
                    {
                        what: "los hijos reciben width: 1 / n",
                        note: "Se define en la .row y se aplica a todos los hijos.",
                    },
                    { what: "los hijos reciben width: auto", note: "Los hijos se dimensionan según su contenido." },
                ],
            },
            {
                title: "Gutters",
                rows: [
                    { what: "--bs-gutter-x y --bs-gutter-y", note: "Ambas direcciones." },
                    { what: "--bs-gutter-x", note: "Solo horizontal." },
                    { what: "--bs-gutter-y", note: "Solo vertical." },
                ],
            },
        ],
        responsive: {
            title: "Todo es responsive",
            body: "Añade un prefijo de breakpoint a cualquiera de las clases anteriores: `md:col-6`, `lg:offset-3`, `sm:row-cols-2`, `xl:g-8`.",
        },
        gutterSteps: {
            title: "¿Qué pasos de gutter existen?",
            body: "`.g-*`, `.gx-*` y `.gy-*` se generan a partir de tu tema de espaciado. En v3 es cada clave de `theme.spacing` sin punto (así que `g-4` sí, `g-0.5` no). En v4 es la escala por defecto, de `g-0` a `g-96` y `g-px`.",
        },
        alignment: {
            title: "La alineación y el orden vienen de Tailwind",
            body: "El plugin no incluye sus propios `justify-*`, `items-*` ni `order-*`. Una `.row` es un contenedor flex normal, así que las utilidades de Tailwind funcionan directamente sobre ella.",
        },
    },
    migrationSummary: {
        eyebrow: "Si vienes de Bootstrap",
        title: "Migrar desde Bootstrap",
        description:
            "El grid funciona como lo recuerdas. Tres cosas se ven distintas: cómo se escriben las clases responsive, los números de espaciado y los anchos de los breakpoints.",
        cards: [
            {
                title: "Lo que no cambia",
                body: "La estructura: `.container`, `.row`, `.col-*`, `.offset-*`, `.row-cols-*`. Incluso las variables CSS mantienen su nombre, `--bs-gutter-x` y `--bs-gutter-y`, así que el CSS propio que las lee sigue funcionando.",
            },
            {
                title: "Prefijo, no infijo",
                body: "Bootstrap escribe `col-md-6`. Tailwind escribe `md:col-6`. Es el cambio que más vas a tocar, y un script puede hacerlo por ti.",
            },
            {
                title: "Números distintos",
                body: "Los números de gutter y de espaciado siguen la escala de Tailwind, así que el `g-3` de Bootstrap es `g-4` aquí. Los anchos de los breakpoints también difieren un poco.",
            },
        ],
        ctaBody:
            "La guía completa incluye las tablas de equivalencias, los cambios de tamaño de gutter, cómo igualar los breakpoints de Bootstrap y un comando que convierte tu código.",
        ctaButton: "Leer la guía de migración",
    },
    examples: {
        eyebrow: "Uso",
        title: "Ejemplos",
        description:
            "Todos los ejemplos son interactivos. Edita el HTML de la izquierda y la vista previa se actualiza mientras escribes. Si conoces el [grid de Bootstrap](https://getbootstrap.com/docs/5.3/layout/grid/), te resultará familiar.",
        preview: "Vista previa",
        editable: "HTML editable",
        reset: "Restablecer",
        rtl: "RTL",
        previewWidth: "Ancho de la vista previa",
        devices: {
            fit: "Ajustar al panel",
            phone: "Móvil, 375px",
            tablet: "Tableta, 768px",
            desktop: "Escritorio, 1280px",
        },
        previewTitle: "Vista previa en vivo: {title}",
        editorLabel: "HTML editable, {title}",
        editorLoading: "HTML editable, {title} (cargando el editor)",
        items: {
            basic: {
                title: "Un layout básico",
                description:
                    "Un `.container` centra tu contenido, una `.row` coloca las columnas una junto a otra y cada `.col-*` ocupa esa cantidad de las 12 partes disponibles. Dos columnas `col-6` dividen la fila por la mitad.",
                tip: "Las columnas siempre saltan de línea. Lo que pase de 12 partes en una fila baja a la línea siguiente, algo muy útil para listas de tarjetas.",
            },
            "equal-and-auto": {
                title: "Columnas iguales y de ancho automático",
                description:
                    "Un `.col` sin más reparte el espacio que quede, así que tres de ellas son tres columnas iguales. `.col-auto` se dimensiona según su contenido y el `.col` vecino ocupa el resto.",
            },
            responsive: {
                title: "Columnas responsive",
                description:
                    "Todas las clases admiten los prefijos de breakpoint de Tailwind. Empieza pensando en móvil con `col-12` y cambia el ancho en pantallas mayores con `sm:`, `md:`, `lg:` y los demás. Usa los botones de ancho sobre la vista previa para ver cada breakpoint en acción.",
                tip: "La vista previa es un viewport real. Muestra el ancho y el breakpoint en la esquina, y los botones de móvil, tableta y escritorio lo cambian, así que `md:` y `lg:` se aplican igual que en esa pantalla.",
            },
            gutters: {
                title: "Gutters",
                description:
                    "Los gutters son los huecos entre columnas. `.g-*` define ambas direcciones, `.gx-*` solo la horizontal y `.gy-*` solo la vertical. Los números vienen de la escala de espaciado de Tailwind, así que `g-4` es el mismo paso que `p-4`.",
                tip: "Pon las clases de gutter en la `.row`. Usa `g-0` para quitar los huecos por completo.",
            },
            offset: {
                title: "Offsets",
                description:
                    "`.offset-*` desplaza una columna esa cantidad de partes. Es la forma rápida de centrar una columna o dejar un hueco. Los offsets también admiten prefijos de breakpoint, como `lg:offset-3`.",
                tip: "Los offsets usan `margin-inline-start`, así que empujan desde el lado correcto cuando la página va de derecha a izquierda. Prueba el botón RTL sobre la vista previa.",
            },
            "row-cols": {
                title: "Columnas por fila",
                description:
                    "Cuando todas las columnas tienen el mismo tamaño, defínelo una vez en la fila en lugar de en cada hijo. `.row-cols-1` a `.row-cols-6` dan a cada hijo una parte igual, y `.row-cols-auto` los dimensiona según su contenido.",
                tip: "Combínalo con breakpoints para cambiar el número de columnas a medida que crece la pantalla, por ejemplo `row-cols-2 lg:row-cols-3`.",
            },
            nesting: {
                title: "Anidamiento",
                description:
                    "Una columna puede contener su propia `.row`. La fila anidada empieza un grid nuevo de 12 partes dentro de la columna, así que puedes dividir un espacio tantas veces como necesites.",
            },
            "alignment-and-order": {
                title: "Alineación y orden",
                description:
                    "Una `.row` es un contenedor flex normal, así que las utilidades de flexbox de Tailwind funcionan sobre ella: `items-*`, `justify-*`, `self-*` y `order-*`. El plugin no las redefine.",
                tip: "Los cambios del estilo `order-2 md:order-1` son un patrón habitual: apila en un orden en móvil y inviértelo en pantallas mayores.",
            },
            rtl: {
                title: "De derecha a izquierda",
                description:
                    'Pon `dir="rtl"` en el contenedor, o en `<html>` para toda la página, y el grid fluye desde la derecha. Es la opción para árabe, persa, hebreo y otros idiomas RTL.',
                tip: "No hay nada que configurar. Los gutters de la fila son simétricos y los offsets usan propiedades lógicas, así que se invierten solos.",
            },
        },
    },
    rtl: {
        eyebrow: "Conviene saber",
        title: "De derecha a izquierda",
        description: 'Añade `dir="rtl"` y el grid se refleja solo. No hay nada que configurar.',
        wholePage: "Para toda la página",
        oneSection: "Para una sola sección",
        why: {
            title: "Por qué funciona sin más",
            body: "Los offsets usan `margin-inline-start`, y los márgenes negativos de la fila y el relleno de las columnas son simétricos, así que se invierten solos. Usa el botón RTL en cualquier ejemplo de arriba para verlo.",
        },
    },
    faq: {
        eyebrow: "Conviene saber",
        title: "Preguntas frecuentes",
        description: "Respuestas a las preguntas que más se repiten.",
        items: [
            {
                question: "¿Sustituye al container de Tailwind?",
                answer: "No. El `container` de Tailwind sigue aportando los anchos máximos por breakpoint. El plugin añade encima el centrado y un relleno que tiene en cuenta el gutter. Si prefieres no tenerlo, pon `generateContainers` en `false`.",
            },
            {
                question: "¿Puedo mezclarlo con las utilidades normales de Tailwind?",
                answer: "Sí, esa es la idea. Una `.row` es un contenedor flex, así que `items-center`, `justify-between`, `order-2`, `mt-4` y el resto se aplican a ella y a sus columnas como siempre.",
            },
            {
                question: "¿Por qué mi vista previa ignora una clase?",
                answer: "Tailwind solo genera CSS para las clases que encuentra en tus archivos fuente. En tu propio proyecto eso es automático. En esta página los ejemplos editables pueden contener cualquier cosa, así que la demo genera de antemano todas las clases y breakpoints del plugin.",
            },
            {
                question: "¿Puedo usarlo con el CDN de Tailwind?",
                answer: "No. El script del CDN no puede cargar plugins desde npm. Usa una configuración de compilación como Vite, PostCSS, Webpack o la CLI de Tailwind.",
            },
            {
                question: "¿Qué versiones son compatibles?",
                answer: "Tailwind v3.4 y v4, con Node 18 o superior. El paquete incluye compilaciones ESM y CommonJS con tipos de TypeScript.",
            },
            {
                question: "Vengo de Bootstrap. ¿Cómo migro?",
                answer: "Los nombres de las clases son parecidos: `col-md-6` pasa a ser `md:col-6` y los números de gutter siguen la escala de Tailwind. La [guía de migración](/migrate-from-bootstrap/) tiene la equivalencia completa y un comando que convierte tu código.",
            },
        ],
        feedback: {
            title: "¿Has encontrado un error o tienes una idea?",
            body: "[Abre un issue](https://github.com/bawerbozdag/tw-bootstrap-grid/issues/new) o envía un [pull request](https://github.com/bawerbozdag/tw-bootstrap-grid/pulls) en GitHub. Las correcciones pequeñas y las mejoras de la documentación son muy bienvenidas.",
        },
    },
    guide: {
        breadcrumb: "Ruta de navegación",
        breadcrumbCurrent: "Migrar desde Bootstrap",
        eyebrow: "Guía",
        h1: "Migrar un grid de Bootstrap a Tailwind CSS",
        lead: "Llevar un layout del grid de Bootstrap a Tailwind lleva cinco pasos y, en su mayor parte, un solo comando. Esta guía cubre qué cambia, cómo se corresponden las clases y las pocas cosas que un script no puede hacer por ti.",
        stepsTitle: "La migración en cinco pasos",
        steps: [
            {
                name: "Instala el plugin",
                text: "Instala tw-bootstrap-grid y regístralo en tu configuración de Tailwind. La [guía de instalación](/#installation) tiene los fragmentos para Tailwind v3 y v4.",
            },
            {
                name: "Iguala los breakpoints de Bootstrap (opcional)",
                text: "Si quieres que los layouts cambien en los mismos anchos de antes, define las pantallas de Tailwind en 576, 768, 992, 1200 y 1400px. Mira [los breakpoints](#breakpoints) más abajo.",
            },
            {
                name: "Renombra las clases",
                text: "Haz commit de tu trabajo y ejecuta el [comando Perl](#bulk-rename) de abajo. Renumera los gutters y convierte el `col-md-6` de Bootstrap en `md:col-6`.",
            },
            {
                name: "Corrige lo que el comando no puede",
                text: "Cambia utilidades de espaciado como `mb-3` por `mb-4`, sustituye las utilidades de display y flex de Bootstrap por las de Tailwind y reemplaza clases como `container-md`.",
            },
            {
                name: "Quita el CSS de Bootstrap y revisa el resultado",
                text: "Elimina la hoja de estilos de Bootstrap y revisa tus páginas en anchos de móvil, tableta y escritorio.",
            },
        ],
        changesTitle: "Qué cambia y qué no",
        beforeAfterTitle: "El mismo layout, antes y después",
        bootstrap5: "Bootstrap 5",
        classMappingTitle: "Equivalencia de clases",
        tables: {
            responsive: {
                caption: "Clases responsive",
                notes: [
                    "Tailwind pone el breakpoint delante, como prefijo.",
                    "Lo mismo para la columna de ancho igual.",
                    "",
                    "",
                    "",
                    "El número también cambia, mira los tamaños de gutter más abajo.",
                    "El xxl de Bootstrap se llama 2xl en Tailwind.",
                    "order-* es de Tailwind y llega hasta 12.",
                ],
            },
            gutters: { caption: "Tamaños de gutter" },
            utilities: {
                caption: "Utilidades que vienen de Tailwind",
                notes: ["", "", "", "", "", "Las utilidades de espaciado se desplazan igual que los gutters."],
            },
            bootstrap: "Bootstrap",
            here: "Aquí",
            notes: "Notas",
            size: "Tamaño",
        },
        breakpoints: {
            title: "Iguala los breakpoints de Bootstrap",
            before: "Los breakpoints de Bootstrap son 576, 768, 992, 1200 y 1400px. Los de Tailwind son 640, 768, 1024, 1280 y 1536px, así que tras migrar un layout puede cambiar un poco antes o después. Si eso importa, define las pantallas de Tailwind con los valores de Bootstrap.",
            after: "El `container` de Tailwind tiene el ancho del breakpoint en el que está, así que sus anchos máximos pasan a ser 576, 768, 992, 1200 y 1400px. Es parecido a los 540, 720, 960, 1140 y 1320px de Bootstrap, pero no idéntico.",
        },
        bulk: {
            title: "Renombrar en bloque",
            body: "Este comando Perl renumera los gutters y convierte `col-md-6` en `md:col-6`, `col-xxl-4` en `2xl:col-4` y el antiguo `no-gutters` en `g-0`. Reescribe los archivos en su sitio, así que haz commit antes y revisa el diff después.",
            warning: {
                title: "Ejecútalo una sola vez y revisa el resultado",
                body: "Ejecutarlo una segunda vez volvería a renumerar los gutters. Además, solo conoce los nombres de clase de arriba, así que las utilidades de espaciado como `mb-3` o `p-3` necesitan una revisión manual, y el patrón coincide con cualquier texto que parezca una clase, incluso dentro de comentarios.",
            },
        },
        notIncluded: {
            title: "Lo que no se traslada",
            body: "El plugin solo añade `.container` y `.container-fluid`, así que `.container-sm`, `.container-md` y los demás contenedores responsive de Bootstrap no están incluidos. Constrúyelos con las utilidades `max-w-*` de Tailwind si los necesitas. Las demás utilidades de Bootstrap (display, flex, espaciado, texto) las sustituyen las de Tailwind, como en la última tabla de arriba.",
        },
        nextTitle: "Sigue adelante",
        next: [
            { title: "Configuración", body: "Tamaños de gutter, breakpoints y cómo desactivar los contenedores." },
            { title: "Referencia de clases", body: "Todas las clases que añade el plugin, en un solo lugar." },
            { title: "Ejemplos", body: "Layouts editables con vista previa de móvil, tableta y escritorio." },
        ],
    },
};

export default es;
