import type { Messages } from "./en";

const de: Messages = {
    meta: {
        home: {
            title: "tw-bootstrap-grid | Bootstrap-Grid für Tailwind CSS",
            description:
                "Ein Tailwind-CSS-Plugin, das das 12-Spalten-Grid von Bootstrap mitbringt: Row, Col, Gutter, Offsets, Row-Cols und RTL. Funktioniert mit Tailwind v3.4 und v4.",
            shareTitle: "tw-bootstrap-grid | Bootstrap-Grid für Tailwind CSS",
            shareDescription:
                "Das 12-Spalten-Grid von Bootstrap als Tailwind-CSS-Plugin: Row, Col, Gutter, Offsets, Row-Cols und RTL. Funktioniert mit Tailwind v3.4 und v4.",
        },
        migration: {
            title: "Bootstrap-Grid zu Tailwind CSS migrieren | tw-bootstrap-grid",
            description:
                "Ein Bootstrap-5-Grid nach Tailwind CSS umziehen: Zuordnungstabellen, Gutter-Änderungen, die Breakpoints von Bootstrap und ein Perl-Befehl für dein Markup.",
            shareTitle: "Bootstrap-Grid zu Tailwind CSS migrieren",
            shareDescription:
                "Zuordnungstabellen, Änderungen bei den Gutter-Größen, die Breakpoints von Bootstrap und ein Perl-Befehl, der dein Markup umwandelt.",
        },
        imageAlt:
            "tw-bootstrap-grid: das Bootstrap-Grid für Tailwind. Ein Grid mit zwölf Spalten, von denen drei hervorgehoben sind.",
    },
    nav: {
        label: "Abschnitte",
        introduction: "Einführung",
        installation: "Installation",
        configuration: "Konfiguration",
        classes: "Klassen",
        migration: "Migration",
        examples: "Beispiele",
        rtl: "RTL",
        faq: "FAQ",
        more: "Mehr",
    },
    common: {
        skipToContent: "Zum Inhalt springen",
        newTab: "(öffnet in einem neuen Tab)",
        copy: "Kopieren",
        copied: "Kopiert",
        failed: "Fehlgeschlagen",
        backToTop: "tw-bootstrap-grid, zurück zum Seitenanfang",
        githubRepo: "GitHub-Repository",
        npmPackage: "npm-Paket",
        github: "GitHub",
        npm: "npm",
        changelog: "Changelog",
        projectLinks: "Projektlinks",
        switchToLight: "Zum hellen Design wechseln",
        switchToDark: "Zum dunklen Design wechseln",
        lightTheme: "Helles Design",
        darkTheme: "Dunkles Design",
        tailwindVersion: "Tailwind-Version",
        language: "Sprache",
        code: "Code",
        codeFile: "Code: {file}",
        installCommand: "Installationsbefehl",
        packageManager: "Paketmanager",
        license: "MIT © {year}",
    },
    versions: { v3Hint: "tailwind.config.js", v4Hint: "@plugin im CSS" },
    intro: {
        chip: "Tailwind-CSS-Plugin · v{version}",
        titleStart: "Das Bootstrap-Grid,",
        titleEnd: "für Tailwind.",
        lead: "Wenn du schon in Zeilen und Spalten denkst, mach einfach weiter so. tw-bootstrap-grid bringt das vertraute 12-Spalten-Grid mit `.row`, `.col-6`, `.offset-2` und `.g-4` zu Tailwind, mit RTL-Unterstützung und ohne Vorgaben, wie deine Komponenten aussehen sollen.",
        getStarted: "Loslegen",
        viewOnGithub: "Auf GitHub ansehen",
        whatYouGet: "Was du bekommst",
        features: [
            {
                title: "12-Spalten-Grid",
                body: "`.row`, `.col`, `.col-auto` und `.col-1` bis `.col-12`, genau wie bei Bootstrap.",
            },
            {
                title: "Gutter aus deinem Theme",
                body: "`.g-*`, `.gx-*` und `.gy-*` nutzen deine Tailwind-Abstandsskala und passen so zum Rest deines Designs.",
            },
            {
                title: "Offsets",
                body: "`.offset-0` bis `.offset-12`, um eine Spalte zu zentrieren oder eine Lücke zu lassen.",
            },
            {
                title: "Spalten pro Zeile",
                body: "`.row-cols-1` bis `.row-cols-6` und `.row-cols-auto` bestimmen die Breite aller Kinder mit einer einzigen Klasse an der Zeile.",
            },
            {
                title: "Container",
                body: "`.container` und `.container-fluid` mit Innenabstand, der den Gutter berücksichtigt. Die maximalen Breiten kommen von den Breakpoints von Tailwind.",
            },
            {
                title: "Responsive und RTL",
                body: 'Jede Klasse akzeptiert die Breakpoint-Präfixe von Tailwind, etwa `md:col-6`, und dreht sich mit `dir="rtl"` korrekt um.',
            },
        ],
        note: "Es kümmert sich nur um das Layout: keine Farben, keine Komponenten, keine Resets. Es ergänzt Tailwind, statt etwas zu ersetzen, du kannst also `col-4` und `flex` ohne Bedenken auf derselben Seite mischen.",
    },
    installation: {
        eyebrow: "Erste Schritte",
        title: "Installation",
        description: "Drei Schritte: Paket installieren, Plugin registrieren, die Klassen benutzen.",
        step1: "Paket installieren",
        step2: {
            title: "Plugin registrieren",
            body: "Wähle oben deine Tailwind-Version, dann passt sich das Snippet darunter an. Tailwind v4 registriert Plugins im CSS, v3 in der Konfigurationsdatei.",
            note: 'In einer v3-Konfiguration mit CommonJS funktioniert auch `plugins: [require("tw-bootstrap-grid")]`.',
        },
        step3: {
            title: "Klassen verwenden",
            body: "Das war's schon. Nutze sie in deinem Markup wie jede andere Tailwind-Klasse. Alles, was mit `sm:`, `md:` oder `hover:` geht, funktioniert auch hier.",
        },
        buildStep: {
            title: "Du brauchst einen Build-Schritt",
            body: "Das Plugin läuft im Compiler von Tailwind (PostCSS, Vite, Webpack, die Tailwind-CLI …). Mit dem Tailwind-Play-CDN-Skript funktioniert es nicht, denn das kann keine Plugins aus npm laden.",
        },
    },
    configuration: {
        eyebrow: "Erste Schritte",
        title: "Konfiguration",
        description:
            "Die Standardwerte entsprechen Bootstrap, du kannst diese Seite also überspringen. Komm zurück, wenn du andere Breakpoints oder Gutter-Größen willst.",
        breakpoints: {
            title: "Breakpoints",
            body: "Das Plugin hat keine eigenen Breakpoints. Präfixe wie `md:col-6` und die Maximalbreite von `.container` kommen beide von Tailwind. Ändern sich deine Screens, ändert sich also auch das Grid.",
        },
        gutters: {
            title: "Gutter-Größen",
            body: "Gutter sind der Abstand zwischen den Spalten. Standardmäßig sind es `1.5rem` horizontal und `0` vertikal. Du kannst ihn einmal für alles festlegen oder getrennt für Container und Zeilen. In v3 übergibst du dem Plugin Optionen, in v4 setzt du CSS-Variablen.",
            tableCaption: "Reihenfolge der Gutter-Auflösung",
            priority: "Priorität",
            cssVariable: "CSS-Variable",
            option: "Option",
            notes: "Hinweise",
            orderNotes: [
                "Der spezifischste Wert gewinnt.",
                "Gemeinsamer Fallback für beide.",
                "Dieselben Standardwerte wie bei Bootstrap.",
            ],
            defaultVariable: "1.5rem (x) und 0 (y)",
            defaultOption: "eingebauter Standard",
            after: "Die CSS-Variablen werden zur Laufzeit gelesen. In beiden Versionen kannst du sie deshalb auch an jedem Element überschreiben, um die Gutter nur für diesen Abschnitt zu ändern. Für eine einzelne Zeile nimmst du `.g-*`, `.gx-*` und `.gy-*`.",
        },
        containers: {
            title: "Container ausschalten",
            body: "Du möchtest nur den `container` von Tailwind verwenden? Setze `generateContainers` auf `false`, dann erzeugt das Plugin `.container-fluid` und den Innenabstand mit Gutter-Bezug nicht mehr. Zeilen und Spalten bleiben unberührt.",
        },
        variablesNote: {
            title: "Warum Variablen in v4?",
            body: "Tailwind v4 kann einem Plugin einfache Werte wie `generateContainers: false;` übergeben, aber keine verschachtelten Objekte wie `gutters`. CSS-Variablen decken diesen Fall ab und lassen sich obendrein pro Element überschreiben.",
        },
    },
    classes: {
        eyebrow: "Referenz",
        title: "Klassen",
        description: "Alles, was das Plugin hinzufügt, an einem Ort.",
        tableCaption: "{title}-Klassen",
        scrollableTable: "{title}, scrollbare Tabelle",
        columns: { name: "Klasse", what: "Was sie tut", notes: "Hinweise" },
        groups: [
            {
                title: "Layout",
                rows: [
                    {
                        what: "width: 100%; zentriert; Innenabstand aus dem Gutter",
                        note: "Die Maximalbreite kommt von den Breakpoints von Tailwind.",
                    },
                    { what: "wie .container", note: "Volle Breite bei jedem Breakpoint." },
                    {
                        what: "display: flex; flex-wrap: wrap; negative Außenabstände",
                        note: "Hebt den äußeren Gutter auf und ordnet die Kinder an.",
                    },
                ],
            },
            {
                title: "Spalten",
                rows: [
                    { what: "flex: 1 0 0%", note: "Teilt den restlichen Platz gleichmäßig auf." },
                    { what: "flex: 0 0 auto; width: auto", note: "Richtet sich nach ihrem Inhalt." },
                    { what: "flex: 0 0 auto; width: n / 12", note: "Belegt n von 12 Teilen." },
                ],
            },
            {
                title: "Offsets und Spalten pro Zeile",
                rows: [
                    { what: "margin-inline-start: n / 12", note: "Dreht sich in RTL automatisch um." },
                    {
                        what: "Kinder erhalten width: 1 / n",
                        note: "Wird an der .row gesetzt und gilt für jedes Kind.",
                    },
                    { what: "Kinder erhalten width: auto", note: "Die Kinder richten sich nach ihrem Inhalt." },
                ],
            },
            {
                title: "Gutter",
                rows: [
                    { what: "--bs-gutter-x und --bs-gutter-y", note: "Beide Richtungen." },
                    { what: "--bs-gutter-x", note: "Nur horizontal." },
                    { what: "--bs-gutter-y", note: "Nur vertikal." },
                ],
            },
        ],
        responsive: {
            title: "Alles ist responsive",
            body: "Setze ein Breakpoint-Präfix vor jede der Klassen oben: `md:col-6`, `lg:offset-3`, `sm:row-cols-2`, `xl:g-8`.",
        },
        gutterSteps: {
            title: "Welche Gutter-Stufen gibt es?",
            body: "`.g-*`, `.gx-*` und `.gy-*` werden aus deinem Abstands-Theme erzeugt. In v3 ist das jeder Schlüssel von `theme.spacing` ohne Punkt (also `g-4` ja, `g-0.5` nein). In v4 ist es die Standardskala, `g-0` bis `g-96` und `g-px`.",
        },
        alignment: {
            title: "Ausrichtung und Reihenfolge kommen von Tailwind",
            body: "Das Plugin bringt keine eigenen `justify-*`, `items-*` oder `order-*` mit. Eine `.row` ist ein gewöhnlicher Flex-Container, die Utilities von Tailwind funktionieren also direkt darauf.",
        },
    },
    migrationSummary: {
        eyebrow: "Du kommst von Bootstrap?",
        title: "Migration von Bootstrap",
        description:
            "Das Grid funktioniert so, wie du es kennst. Drei Dinge sehen anders aus: wie responsive Klassen geschrieben werden, die Abstandszahlen und die Breakpoint-Breiten.",
        cards: [
            {
                title: "Was gleich bleibt",
                body: "Die Struktur: `.container`, `.row`, `.col-*`, `.offset-*`, `.row-cols-*`. Sogar die CSS-Variablen behalten ihre Namen, `--bs-gutter-x` und `--bs-gutter-y`, eigenes CSS, das sie liest, funktioniert also weiter.",
            },
            {
                title: "Präfix statt Infix",
                body: "Bootstrap schreibt `col-md-6`. Tailwind schreibt `md:col-6`. Das ist die Änderung, die du am häufigsten anfassen wirst, und ein Skript kann sie für dich erledigen.",
            },
            {
                title: "Andere Zahlen",
                body: "Gutter- und Abstandszahlen folgen der Skala von Tailwind, das `g-3` von Bootstrap ist hier also `g-4`. Auch die Breakpoint-Breiten weichen etwas ab.",
            },
        ],
        ctaBody:
            "Die ganze Anleitung enthält die Zuordnungstabellen, die Änderungen bei den Gutter-Größen, wie du die Breakpoints von Bootstrap nachbildest und einen Befehl, der dein Markup umwandelt.",
        ctaButton: "Zur Migrationsanleitung",
    },
    examples: {
        eyebrow: "Anwendung",
        title: "Beispiele",
        description:
            "Jedes Beispiel ist live. Bearbeite links das HTML, die Vorschau aktualisiert sich beim Tippen. Wenn du das [Bootstrap-Grid](https://getbootstrap.com/docs/5.3/layout/grid/) kennst, wird dir das vertraut vorkommen.",
        preview: "Vorschau",
        editable: "Bearbeitbares HTML",
        reset: "Zurücksetzen",
        rtl: "RTL",
        previewWidth: "Breite der Vorschau",
        devices: {
            fit: "An Bereich anpassen",
            phone: "Smartphone, 375px",
            tablet: "Tablet, 768px",
            desktop: "Desktop, 1280px",
        },
        previewTitle: "Live-Vorschau: {title}",
        editorLabel: "Bearbeitbares HTML, {title}",
        editorLoading: "Bearbeitbares HTML, {title} (Editor wird geladen)",
        items: {
            basic: {
                title: "Ein einfaches Layout",
                description:
                    "Ein `.container` zentriert deinen Inhalt, eine `.row` ordnet Spalten nebeneinander an und jede `.col-*` belegt so viele der 12 verfügbaren Teile. Zwei `col-6`-Spalten teilen die Zeile in zwei Hälften.",
                tip: "Spalten brechen immer um. Alles, was in einer Zeile über 12 Teile hinausgeht, rutscht in die nächste Zeile, das ist praktisch für Kartenlisten.",
            },
            "equal-and-auto": {
                title: "Gleich breite und automatisch breite Spalten",
                description:
                    "Ein einfaches `.col` teilt sich den verbleibenden Platz, drei davon sind also drei gleich breite Spalten. `.col-auto` richtet sich nach seinem Inhalt, das benachbarte `.col` nimmt den Rest.",
            },
            responsive: {
                title: "Responsive Spalten",
                description:
                    "Jede Klasse akzeptiert die Breakpoint-Präfixe von Tailwind. Beginne mobil mit `col-12` und ändere die Breite auf größeren Bildschirmen mit `sm:`, `md:`, `lg:` und so weiter. Mit den Breitenbuttons über der Vorschau siehst du, wie jeder Breakpoint greift.",
                tip: "Die Vorschau ist ein echter Viewport. Sie zeigt Breite und Breakpoint in der Ecke an, und die Buttons für Smartphone, Tablet und Desktop schalten sie um, `md:` und `lg:` greifen also genau wie auf diesem Bildschirm.",
            },
            gutters: {
                title: "Gutter",
                description:
                    "Gutter sind die Lücken zwischen den Spalten. `.g-*` setzt beide Richtungen, `.gx-*` nur die horizontale und `.gy-*` nur die vertikale. Die Zahlen stammen aus der Abstandsskala von Tailwind, `g-4` ist also dieselbe Stufe wie `p-4`.",
                tip: "Setze Gutter-Klassen an die `.row`. Mit `g-0` entfernst du die Lücken ganz.",
            },
            offset: {
                title: "Offsets",
                description:
                    "`.offset-*` schiebt eine Spalte um so viele Teile zur Seite. So zentrierst du schnell eine Spalte oder lässt eine Lücke. Offsets funktionieren auch mit Breakpoint-Präfixen, etwa `lg:offset-3`.",
                tip: "Offsets verwenden `margin-inline-start`, sie schieben also von der richtigen Seite, wenn die Seite von rechts nach links läuft. Probiere den RTL-Button über der Vorschau aus.",
            },
            "row-cols": {
                title: "Spalten pro Zeile",
                description:
                    "Wenn alle Spalten gleich groß sind, lege das einmal an der Zeile fest statt an jedem Kind. `.row-cols-1` bis `.row-cols-6` geben jedem Kind einen gleichen Anteil, `.row-cols-auto` richtet sie nach dem Inhalt.",
                tip: "Kombiniere es mit Breakpoints, um die Spaltenzahl mit wachsendem Bildschirm zu ändern, zum Beispiel `row-cols-2 lg:row-cols-3`.",
            },
            nesting: {
                title: "Verschachtelung",
                description:
                    "Eine Spalte kann ihre eigene `.row` enthalten. Die verschachtelte Zeile beginnt ein neues 12-teiliges Grid innerhalb der Spalte, du kannst einen Bereich also beliebig oft teilen.",
            },
            "alignment-and-order": {
                title: "Ausrichtung und Reihenfolge",
                description:
                    "Eine `.row` ist ein normaler Flex-Container, die Flexbox-Utilities von Tailwind funktionieren also darauf: `items-*`, `justify-*`, `self-*` und `order-*`. Das Plugin definiert sie nicht neu.",
                tip: "Tausch im Stil von `order-2 md:order-1` ist ein verbreitetes Muster: auf dem Smartphone in einer Reihenfolge stapeln, auf größeren Bildschirmen umkehren.",
            },
            rtl: {
                title: "Von rechts nach links",
                description:
                    'Setze `dir="rtl"` am Container oder für die ganze Seite an `<html>`, dann fließt das Grid von rechts. Das ist die Wahl für Arabisch, Persisch, Hebräisch und andere RTL-Sprachen.',
                tip: "Es gibt nichts zu konfigurieren. Die Gutter der Zeile sind symmetrisch und Offsets verwenden logische Eigenschaften, sie drehen sich also von selbst um.",
            },
        },
    },
    rtl: {
        eyebrow: "Gut zu wissen",
        title: "Von rechts nach links",
        description: 'Füge `dir="rtl"` hinzu, und das Grid spiegelt sich. Es gibt nichts zu konfigurieren.',
        wholePage: "Für die ganze Seite",
        oneSection: "Für einen Abschnitt",
        why: {
            title: "Warum es einfach funktioniert",
            body: "Offsets verwenden `margin-inline-start`, und die negativen Außenabstände der Zeile sowie der Innenabstand der Spalten sind symmetrisch, sie drehen sich also von selbst um. Mit dem RTL-Button an jedem Beispiel oben siehst du es.",
        },
    },
    faq: {
        eyebrow: "Gut zu wissen",
        title: "Häufig gestellte Fragen",
        description: "Antworten auf die Fragen, die am häufigsten auftauchen.",
        items: [
            {
                question: "Ersetzt es den Container von Tailwind?",
                answer: "Nein. Der `container` von Tailwind liefert weiterhin die Maximalbreiten pro Breakpoint. Das Plugin ergänzt darüber Zentrierung und einen Innenabstand mit Gutter-Bezug. Wenn du das nicht möchtest, setze `generateContainers` auf `false`.",
            },
            {
                question: "Kann ich es mit normalen Tailwind-Utilities mischen?",
                answer: "Ja, genau das ist die Idee. Eine `.row` ist ein Flex-Container, `items-center`, `justify-between`, `order-2`, `mt-4` und der Rest gelten also wie gewohnt für sie und ihre Spalten.",
            },
            {
                question: "Warum ignoriert meine Live-Vorschau eine Klasse?",
                answer: "Tailwind erzeugt nur CSS für Klassen, die es in deinen Quelldateien findet. In deinem eigenen Projekt geschieht das automatisch. Auf dieser Seite können die bearbeitbaren Beispiele alles enthalten, deshalb erzeugt die Demo vorab jede Klasse und jeden Breakpoint des Plugins.",
            },
            {
                question: "Kann ich es mit dem Tailwind-CDN verwenden?",
                answer: "Nein. Das CDN-Skript kann keine Plugins aus npm laden. Nutze ein Build-Setup wie Vite, PostCSS, Webpack oder die Tailwind-CLI.",
            },
            {
                question: "Welche Versionen werden unterstützt?",
                answer: "Tailwind v3.4 und v4, mit Node 18 oder neuer. Das Paket enthält ESM- und CommonJS-Builds mit TypeScript-Typen.",
            },
            {
                question: "Ich wechsle von Bootstrap. Wie migriere ich?",
                answer: "Die Klassennamen sind sich ähnlich: `col-md-6` wird zu `md:col-6`, und die Gutter-Zahlen folgen der Skala von Tailwind. Die [Migrationsanleitung](/migrate-from-bootstrap/) enthält die vollständige Zuordnung und einen Befehl, der dein Markup umwandelt.",
            },
        ],
        feedback: {
            title: "Einen Fehler gefunden oder eine Idee?",
            body: "[Eröffne ein Issue](https://github.com/bawerbozdag/tw-bootstrap-grid/issues/new) oder schicke einen [Pull Request](https://github.com/bawerbozdag/tw-bootstrap-grid/pulls) auf GitHub. Kleine Korrekturen und Verbesserungen an der Dokumentation sind sehr willkommen.",
        },
    },
    guide: {
        breadcrumb: "Brotkrumennavigation",
        breadcrumbCurrent: "Migration von Bootstrap",
        eyebrow: "Anleitung",
        h1: "Ein Bootstrap-Grid zu Tailwind CSS migrieren",
        lead: "Ein Layout vom Grid von Bootstrap zu Tailwind umzuziehen dauert fünf Schritte und größtenteils nur einen Befehl. Diese Anleitung zeigt, was sich ändert, wie die Klassen zugeordnet werden und die wenigen Dinge, die ein Skript nicht für dich erledigen kann.",
        stepsTitle: "Migration in fünf Schritten",
        steps: [
            {
                name: "Plugin installieren",
                text: "Installiere tw-bootstrap-grid und registriere es in deinem Tailwind-Setup. Die [Installationsanleitung](/#installation) enthält die Snippets für Tailwind v3 und v4.",
            },
            {
                name: "Breakpoints von Bootstrap nachbilden (optional)",
                text: "Wenn Layouts bei denselben Breiten wie zuvor umschalten sollen, setze die Screens von Tailwind auf 576, 768, 992, 1200 und 1400px. Siehe [die Breakpoints](#breakpoints) weiter unten.",
            },
            {
                name: "Klassen umbenennen",
                text: "Committe deine Arbeit und führe dann den [Perl-Befehl](#bulk-rename) unten aus. Er nummeriert die Gutter neu und macht aus `col-md-6` von Bootstrap `md:col-6`.",
            },
            {
                name: "Beheben, was der Befehl nicht kann",
                text: "Ändere Abstands-Utilities wie `mb-3` in `mb-4`, tausche die Display- und Flex-Utilities von Bootstrap gegen die von Tailwind und ersetze Klassen wie `container-md`.",
            },
            {
                name: "Bootstrap-CSS entfernen und Ergebnis prüfen",
                text: "Nimm das Bootstrap-Stylesheet heraus und sieh dir deine Seiten dann bei Smartphone-, Tablet- und Desktop-Breite an.",
            },
        ],
        changesTitle: "Was sich ändert und was nicht",
        beforeAfterTitle: "Dasselbe Layout, vorher und nachher",
        bootstrap5: "Bootstrap 5",
        classMappingTitle: "Klassenzuordnung",
        tables: {
            responsive: {
                caption: "Responsive Klassen",
                notes: [
                    "Tailwind setzt den Breakpoint voran, als Präfix.",
                    "Dasselbe gilt für die gleich breite Spalte.",
                    "",
                    "",
                    "",
                    "Auch die Zahl ändert sich, siehe die Gutter-Größen weiter unten.",
                    "Das xxl von Bootstrap heißt in Tailwind 2xl.",
                    "order-* kommt von Tailwind und geht bis 12.",
                ],
            },
            gutters: { caption: "Gutter-Größen" },
            utilities: {
                caption: "Utilities, die von Tailwind kommen",
                notes: ["", "", "", "", "", "Abstands-Utilities verschieben sich genauso wie die Gutter."],
            },
            bootstrap: "Bootstrap",
            here: "Hier",
            notes: "Hinweise",
            size: "Größe",
        },
        breakpoints: {
            title: "Breakpoints von Bootstrap nachbilden",
            before: "Die Breakpoints von Bootstrap sind 576, 768, 992, 1200 und 1400px. Die von Tailwind sind 640, 768, 1024, 1280 und 1536px, ein Layout kann nach der Migration also etwas früher oder später umschalten. Wenn das wichtig ist, setze die Screens von Tailwind auf die Werte von Bootstrap.",
            after: "Der `container` von Tailwind ist so breit wie der Breakpoint, auf dem er sitzt, seine Maximalbreiten werden also 576, 768, 992, 1200 und 1400px. Das ist nah an den 540, 720, 960, 1140 und 1320px von Bootstrap, aber nicht identisch.",
        },
        bulk: {
            title: "Massenweise umbenennen",
            body: "Dieser Perl-Befehl nummeriert die Gutter neu und macht aus `col-md-6` `md:col-6`, aus `col-xxl-4` `2xl:col-4` und aus dem alten `no-gutters` `g-0`. Er schreibt die Dateien direkt um, committe also zuerst und lies danach den Diff.",
            warning: {
                title: "Einmal ausführen und das Ergebnis prüfen",
                body: "Ein zweiter Durchlauf würde die Gutter erneut neu nummerieren. Außerdem kennt er nur die Klassennamen oben, Abstands-Utilities wie `mb-3` oder `p-3` brauchen also eine manuelle Runde, und das Muster trifft jeden Text, der wie eine Klasse aussieht, auch in Kommentaren.",
            },
        },
        notIncluded: {
            title: "Was nicht übernommen wird",
            body: "Das Plugin fügt nur `.container` und `.container-fluid` hinzu, `.container-sm`, `.container-md` und die anderen responsiven Container von Bootstrap sind also nicht enthalten. Baue sie bei Bedarf mit den `max-w-*`-Utilities von Tailwind. Die übrigen Utilities von Bootstrap (Display, Flex, Abstand, Text) werden durch die von Tailwind ersetzt, wie in der letzten Tabelle oben.",
        },
        nextTitle: "Weiter geht's",
        next: [
            { title: "Konfiguration", body: "Gutter-Größen, Breakpoints und das Abschalten der Container." },
            { title: "Klassenreferenz", body: "Jede Klasse, die das Plugin hinzufügt, an einem Ort." },
            { title: "Beispiele", body: "Bearbeitbare Layouts mit Vorschau für Smartphone, Tablet und Desktop." },
        ],
    },
};

export default de;
