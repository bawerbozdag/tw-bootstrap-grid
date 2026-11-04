import type { Messages } from "./en";

const fr: Messages = {
    meta: {
        home: {
            title: "tw-bootstrap-grid | Grille Bootstrap pour Tailwind CSS",
            description:
                "Un plugin Tailwind CSS qui ajoute la grille à 12 colonnes de Bootstrap : row, col, gutters, offsets, row-cols et RTL. Compatible avec Tailwind v3.4 et v4.",
            shareTitle: "tw-bootstrap-grid | Grille Bootstrap pour Tailwind CSS",
            shareDescription:
                "La grille à 12 colonnes de Bootstrap en plugin Tailwind CSS : row, col, gutters, offsets, row-cols et RTL. Compatible avec Tailwind v3.4 et v4.",
        },
        migration: {
            title: "Migrer une grille Bootstrap vers Tailwind CSS | tw-bootstrap-grid",
            description:
                "Passez une grille Bootstrap 5 à Tailwind CSS : tableaux de correspondance, changements de gutters, breakpoints de Bootstrap et une commande Perl qui convertit votre code.",
            shareTitle: "Migrer une grille Bootstrap vers Tailwind CSS",
            shareDescription:
                "Tableaux de correspondance, changements de gutters, breakpoints de Bootstrap et une commande Perl qui convertit votre code.",
        },
        imageAlt:
            "tw-bootstrap-grid : la grille Bootstrap, pour Tailwind. Une grille de douze colonnes dont trois sont mises en évidence.",
    },
    nav: {
        label: "Sections",
        introduction: "Introduction",
        installation: "Installation",
        configuration: "Configuration",
        classes: "Classes",
        migration: "Migration",
        examples: "Exemples",
        rtl: "RTL",
        faq: "FAQ",
        more: "Plus",
    },
    common: {
        skipToContent: "Aller au contenu",
        newTab: "(s'ouvre dans un nouvel onglet)",
        copy: "Copier",
        copied: "Copié",
        failed: "Échec",
        backToTop: "tw-bootstrap-grid, retour en haut de la page",
        githubRepo: "Dépôt GitHub",
        npmPackage: "Paquet npm",
        github: "GitHub",
        npm: "npm",
        changelog: "Journal des modifications",
        projectLinks: "Liens du projet",
        switchToLight: "Passer au thème clair",
        switchToDark: "Passer au thème sombre",
        lightTheme: "Thème clair",
        darkTheme: "Thème sombre",
        tailwindVersion: "Version de Tailwind",
        language: "Langue",
        code: "Code",
        codeFile: "Code : {file}",
        installCommand: "Commande d'installation",
        packageManager: "Gestionnaire de paquets",
        license: "MIT © {year}",
    },
    versions: { v3Hint: "tailwind.config.js", v4Hint: "@plugin dans le CSS" },
    intro: {
        chip: "Plugin Tailwind CSS · v{version}",
        titleStart: "La grille Bootstrap,",
        titleEnd: "pour Tailwind.",
        lead: "Si vous pensez déjà en lignes et en colonnes, continuez. tw-bootstrap-grid apporte à Tailwind la grille à 12 colonnes que vous connaissez, avec `.row`, `.col-6`, `.offset-2` et `.g-4`, avec prise en charge du RTL et sans rien imposer sur l'apparence de vos composants.",
        getStarted: "Commencer",
        viewOnGithub: "Voir sur GitHub",
        whatYouGet: "Ce que vous obtenez",
        features: [
            {
                title: "Grille à 12 colonnes",
                body: "`.row`, `.col`, `.col-auto` et de `.col-1` à `.col-12`, exactement comme dans Bootstrap.",
            },
            {
                title: "Gutters issus de votre thème",
                body: "`.g-*`, `.gx-*` et `.gy-*` utilisent l'échelle d'espacement de Tailwind et s'accordent donc avec le reste de votre design.",
            },
            {
                title: "Offsets",
                body: "De `.offset-0` à `.offset-12` pour centrer une colonne ou laisser un vide.",
            },
            {
                title: "Colonnes par ligne",
                body: "De `.row-cols-1` à `.row-cols-6` et `.row-cols-auto` dimensionnent tous les enfants avec une seule classe sur la ligne.",
            },
            {
                title: "Conteneurs",
                body: "`.container` et `.container-fluid` avec un remplissage qui tient compte du gutter. Les largeurs maximales viennent des breakpoints de Tailwind.",
            },
            {
                title: "Responsive et RTL",
                body: 'Chaque classe accepte les préfixes de breakpoint de Tailwind, comme `md:col-6`, et s\'inverse correctement avec `dir="rtl"`.',
            },
        ],
        note: "Il ne s'occupe que de la mise en page : pas de couleurs, pas de composants, pas de resets. Il complète Tailwind sans rien remplacer, vous pouvez donc mélanger `col-4` et `flex` sur la même page sans y réfléchir à deux fois.",
    },
    installation: {
        eyebrow: "Pour commencer",
        title: "Installation",
        description: "Trois étapes : installer le paquet, enregistrer le plugin, utiliser les classes.",
        step1: "Installer le paquet",
        step2: {
            title: "Enregistrer le plugin",
            body: "Choisissez votre version de Tailwind dans l'en-tête et l'extrait ci-dessous s'adapte. Tailwind v4 enregistre les plugins dans le CSS, v3 dans le fichier de configuration.",
            note: 'Dans une configuration v3 en CommonJS, `plugins: [require("tw-bootstrap-grid")]` fonctionne aussi.',
        },
        step3: {
            title: "Utiliser les classes",
            body: "C'est tout. Utilisez-les dans votre balisage comme n'importe quelle autre classe Tailwind. Tout ce que vous faites avec `sm:`, `md:` ou `hover:` fonctionne ici aussi.",
        },
        buildStep: {
            title: "Une étape de compilation est nécessaire",
            body: "Le plugin s'exécute dans le compilateur de Tailwind (PostCSS, Vite, Webpack, la CLI de Tailwind…). Il ne fonctionne pas avec le script Tailwind Play CDN, qui ne peut pas charger de plugins depuis npm.",
        },
    },
    configuration: {
        eyebrow: "Pour commencer",
        title: "Configuration",
        description:
            "Les valeurs par défaut correspondent à Bootstrap, vous pouvez donc passer cette page. Revenez-y quand vous voulez d'autres breakpoints ou d'autres tailles de gutter.",
        breakpoints: {
            title: "Breakpoints",
            body: "Le plugin n'a pas de breakpoints à lui. Les préfixes comme `md:col-6` et la largeur maximale de `.container` viennent tous deux de Tailwind : modifier vos écrans modifie donc aussi la grille.",
        },
        gutters: {
            title: "Tailles de gutter",
            body: "Les gutters sont l'espace entre les colonnes. Par défaut, c'est `1.5rem` à l'horizontale et `0` à la verticale. Vous pouvez le définir une fois pour tout, ou séparément pour les conteneurs et les lignes. En v3, vous passez des options au plugin ; en v4, vous définissez des variables CSS.",
            tableCaption: "Ordre de résolution du gutter",
            priority: "Priorité",
            cssVariable: "Variable CSS",
            option: "Option",
            notes: "Notes",
            orderNotes: [
                "La valeur la plus spécifique l'emporte.",
                "Valeur de repli commune aux deux.",
                "Les mêmes valeurs par défaut que Bootstrap.",
            ],
            defaultVariable: "1.5rem (x) et 0 (y)",
            defaultOption: "valeur par défaut intégrée",
            after: "Les variables CSS sont lues à l'exécution : dans les deux versions, vous pouvez donc aussi les redéfinir sur n'importe quel élément pour modifier les gutters de cette seule section. Pour une seule ligne, utilisez `.g-*`, `.gx-*` et `.gy-*`.",
        },
        containers: {
            title: "Désactiver les conteneurs",
            body: "Vous préférez n'utiliser que le `container` de Tailwind ? Mettez `generateContainers` à `false` et le plugin cesse de générer `.container-fluid` et son remplissage qui tient compte du gutter. Les lignes et les colonnes ne sont pas touchées.",
        },
        variablesNote: {
            title: "Pourquoi des variables en v4 ?",
            body: "Tailwind v4 peut transmettre à un plugin des valeurs simples comme `generateContainers: false;`, mais pas des objets imbriqués comme `gutters`. Les variables CSS couvrent ce cas et peuvent en plus être redéfinies élément par élément.",
        },
    },
    classes: {
        eyebrow: "Référence",
        title: "Classes",
        description: "Tout ce que le plugin ajoute, au même endroit.",
        tableCaption: "Classes de {title}",
        scrollableTable: "{title}, tableau défilant",
        columns: { name: "Classe", what: "Ce qu'elle fait", notes: "Notes" },
        groups: [
            {
                title: "Mise en page",
                rows: [
                    {
                        what: "width: 100% ; centré ; remplissage selon le gutter",
                        note: "La largeur maximale vient des breakpoints de Tailwind.",
                    },
                    { what: "comme .container", note: "Pleine largeur à chaque breakpoint." },
                    {
                        what: "display: flex; flex-wrap: wrap; marges négatives",
                        note: "Annule le gutter extérieur et dispose ses enfants.",
                    },
                ],
            },
            {
                title: "Colonnes",
                rows: [
                    { what: "flex: 1 0 0%", note: "Partage équitablement l'espace restant." },
                    { what: "flex: 0 0 auto; width: auto", note: "Dimensionnée selon son contenu." },
                    { what: "flex: 0 0 auto; width: n / 12", note: "Occupe n parts sur 12." },
                ],
            },
            {
                title: "Offsets et colonnes par ligne",
                rows: [
                    { what: "margin-inline-start: n / 12", note: "S'inverse automatiquement en RTL." },
                    {
                        what: "les enfants reçoivent width: 1 / n",
                        note: "Se définit sur la .row et s'applique à chaque enfant.",
                    },
                    {
                        what: "les enfants reçoivent width: auto",
                        note: "Les enfants sont dimensionnés selon leur contenu.",
                    },
                ],
            },
            {
                title: "Gutters",
                rows: [
                    { what: "--bs-gutter-x et --bs-gutter-y", note: "Les deux directions." },
                    { what: "--bs-gutter-x", note: "Horizontal uniquement." },
                    { what: "--bs-gutter-y", note: "Vertical uniquement." },
                ],
            },
        ],
        responsive: {
            title: "Tout est responsive",
            body: "Ajoutez un préfixe de breakpoint à n'importe quelle classe ci-dessus : `md:col-6`, `lg:offset-3`, `sm:row-cols-2`, `xl:g-8`.",
        },
        gutterSteps: {
            title: "Quelles valeurs de gutter existent ?",
            body: "`.g-*`, `.gx-*` et `.gy-*` sont générées à partir de votre thème d'espacement. En v3, ce sont toutes les clés de `theme.spacing` sans point (donc `g-4` oui, `g-0.5` non). En v4, c'est l'échelle par défaut, de `g-0` à `g-96` et `g-px`.",
        },
        alignment: {
            title: "L'alignement et l'ordre viennent de Tailwind",
            body: "Le plugin ne fournit pas ses propres `justify-*`, `items-*` ni `order-*`. Une `.row` est un conteneur flex ordinaire : les utilitaires de Tailwind fonctionnent donc directement dessus.",
        },
    },
    migrationSummary: {
        eyebrow: "Vous venez de Bootstrap",
        title: "Migrer depuis Bootstrap",
        description:
            "La grille fonctionne comme vous vous en souvenez. Trois choses diffèrent : l'écriture des classes responsive, les nombres d'espacement et les largeurs des breakpoints.",
        cards: [
            {
                title: "Ce qui ne change pas",
                body: "La structure : `.container`, `.row`, `.col-*`, `.offset-*`, `.row-cols-*`. Même les variables CSS gardent leur nom, `--bs-gutter-x` et `--bs-gutter-y`, et le CSS maison qui les lit continue donc de fonctionner.",
            },
            {
                title: "Préfixe, pas infixe",
                body: "Bootstrap écrit `col-md-6`. Tailwind écrit `md:col-6`. C'est le changement que vous toucherez le plus, et un script peut le faire à votre place.",
            },
            {
                title: "Des nombres différents",
                body: "Les nombres de gutter et d'espacement suivent l'échelle de Tailwind : le `g-3` de Bootstrap devient donc `g-4`. Les largeurs de breakpoints diffèrent un peu aussi.",
            },
        ],
        ctaBody:
            "Le guide complet contient les tableaux de correspondance, les changements de taille de gutter, la façon de reprendre les breakpoints de Bootstrap et une commande qui convertit votre code.",
        ctaButton: "Lire le guide de migration",
    },
    examples: {
        eyebrow: "Utilisation",
        title: "Exemples",
        description:
            "Chaque exemple est interactif. Modifiez le HTML à gauche, l'aperçu se met à jour pendant que vous tapez. Si vous connaissez la [grille Bootstrap](https://getbootstrap.com/docs/5.3/layout/grid/), cela vous sera familier.",
        preview: "Aperçu",
        editable: "HTML modifiable",
        reset: "Réinitialiser",
        rtl: "RTL",
        previewWidth: "Largeur de l'aperçu",
        devices: {
            fit: "Ajuster au panneau",
            phone: "Téléphone, 375px",
            tablet: "Tablette, 768px",
            desktop: "Ordinateur, 1280px",
        },
        previewTitle: "Aperçu en direct : {title}",
        editorLabel: "HTML modifiable, {title}",
        editorLoading: "HTML modifiable, {title} (chargement de l'éditeur)",
        items: {
            basic: {
                title: "Une mise en page de base",
                description:
                    "Un `.container` centre votre contenu, une `.row` aligne les colonnes côte à côte et chaque `.col-*` occupe ce nombre de parts sur les 12 disponibles. Deux colonnes `col-6` partagent la ligne en deux.",
                tip: "Les colonnes passent toujours à la ligne. Tout ce qui dépasse 12 parts sur une même ligne descend à la suivante, ce qui est pratique pour des listes de cartes.",
            },
            "equal-and-auto": {
                title: "Colonnes égales et à largeur automatique",
                description:
                    "Un `.col` seul se partage l'espace restant : trois d'entre elles font donc trois colonnes égales. `.col-auto` se dimensionne selon son contenu et le `.col` voisin prend le reste.",
            },
            responsive: {
                title: "Colonnes responsive",
                description:
                    "Chaque classe accepte les préfixes de breakpoint de Tailwind. Commencez en pensant mobile avec `col-12`, puis changez la largeur sur les écrans plus grands avec `sm:`, `md:`, `lg:` et les suivants. Utilisez les boutons de largeur au-dessus de l'aperçu pour voir chaque breakpoint entrer en jeu.",
                tip: "L'aperçu est un vrai viewport. Il affiche la largeur et le breakpoint dans le coin, et les boutons téléphone, tablette et ordinateur le changent : `md:` et `lg:` s'appliquent donc exactement comme sur cet écran.",
            },
            gutters: {
                title: "Gutters",
                description:
                    "Les gutters sont les espaces entre les colonnes. `.g-*` règle les deux directions, `.gx-*` seulement l'horizontale et `.gy-*` seulement la verticale. Les nombres viennent de l'échelle d'espacement de Tailwind : `g-4` correspond au même palier que `p-4`.",
                tip: "Placez les classes de gutter sur la `.row`. Utilisez `g-0` pour supprimer complètement les espaces.",
            },
            offset: {
                title: "Offsets",
                description:
                    "`.offset-*` décale une colonne de ce nombre de parts. C'est le moyen rapide de centrer une colonne ou de laisser un vide. Les offsets acceptent aussi les préfixes de breakpoint, comme `lg:offset-3`.",
                tip: "Les offsets utilisent `margin-inline-start` : ils poussent donc du bon côté quand la page est de droite à gauche. Essayez le bouton RTL au-dessus de l'aperçu.",
            },
            "row-cols": {
                title: "Colonnes par ligne",
                description:
                    "Quand toutes les colonnes ont la même taille, définissez-le une fois sur la ligne plutôt que sur chaque enfant. `.row-cols-1` à `.row-cols-6` donnent à chaque enfant une part égale, et `.row-cols-auto` les dimensionne selon leur contenu.",
                tip: "Combinez-le avec des breakpoints pour changer le nombre de colonnes à mesure que l'écran grandit, par exemple `row-cols-2 lg:row-cols-3`.",
            },
            nesting: {
                title: "Imbrication",
                description:
                    "Une colonne peut contenir sa propre `.row`. La ligne imbriquée démarre une nouvelle grille de 12 parts à l'intérieur de la colonne : vous pouvez donc diviser un espace autant de fois que nécessaire.",
            },
            "alignment-and-order": {
                title: "Alignement et ordre",
                description:
                    "Une `.row` est un conteneur flex normal : les utilitaires flexbox de Tailwind fonctionnent donc dessus : `items-*`, `justify-*`, `self-*` et `order-*`. Le plugin ne les redéfinit pas.",
                tip: "Les permutations du type `order-2 md:order-1` sont un schéma courant : empiler dans un ordre sur téléphone, l'inverser sur les écrans plus grands.",
            },
            rtl: {
                title: "De droite à gauche",
                description:
                    "Mettez `dir=\"rtl\"` sur le conteneur, ou sur `<html>` pour toute la page, et la grille s'écoule depuis la droite. C'est ce qu'il faut pour l'arabe, le persan, l'hébreu et les autres langues RTL.",
                tip: "Rien à configurer. Les gutters de la ligne sont symétriques et les offsets utilisent des propriétés logiques : ils s'inversent donc tout seuls.",
            },
        },
    },
    rtl: {
        eyebrow: "Bon à savoir",
        title: "De droite à gauche",
        description: 'Ajoutez `dir="rtl"` et la grille se reflète. Il n\'y a rien à configurer.',
        wholePage: "Pour toute la page",
        oneSection: "Pour une seule section",
        why: {
            title: "Pourquoi ça marche tout seul",
            body: "Les offsets utilisent `margin-inline-start`, et les marges négatives de la ligne ainsi que le remplissage des colonnes sont symétriques : ils s'inversent donc tout seuls. Utilisez le bouton RTL sur n'importe quel exemple ci-dessus pour le voir.",
        },
    },
    faq: {
        eyebrow: "Bon à savoir",
        title: "Questions fréquentes",
        description: "Les réponses aux questions qui reviennent le plus souvent.",
        items: [
            {
                question: "Remplace-t-il le container de Tailwind ?",
                answer: "Non. Le `container` de Tailwind continue de fournir les largeurs maximales par breakpoint. Le plugin ajoute par-dessus le centrage et un remplissage qui tient compte du gutter. Si vous ne le souhaitez pas, mettez `generateContainers` à `false`.",
            },
            {
                question: "Puis-je le mélanger avec les utilitaires Tailwind habituels ?",
                answer: "Oui, c'est l'idée. Une `.row` est un conteneur flex : `items-center`, `justify-between`, `order-2`, `mt-4` et les autres s'appliquent donc à elle et à ses colonnes comme d'habitude.",
            },
            {
                question: "Pourquoi mon aperçu ignore-t-il une classe ?",
                answer: "Tailwind ne génère du CSS que pour les classes qu'il trouve dans vos fichiers source. Dans votre propre projet, c'est automatique. Sur cette page, les exemples modifiables peuvent contenir n'importe quoi : la démo génère donc à l'avance chaque classe et chaque breakpoint du plugin.",
            },
            {
                question: "Puis-je l'utiliser avec le CDN de Tailwind ?",
                answer: "Non. Le script du CDN ne peut pas charger de plugins depuis npm. Utilisez une chaîne de compilation comme Vite, PostCSS, Webpack ou la CLI de Tailwind.",
            },
            {
                question: "Quelles versions sont prises en charge ?",
                answer: "Tailwind v3.4 et v4, avec Node 18 ou plus récent. Le paquet fournit des builds ESM et CommonJS avec les types TypeScript.",
            },
            {
                question: "Je viens de Bootstrap. Comment migrer ?",
                answer: "Les noms de classes sont proches : `col-md-6` devient `md:col-6`, et les nombres de gutter suivent l'échelle de Tailwind. Le [guide de migration](/migrate-from-bootstrap/) contient la correspondance complète et une commande qui convertit votre code.",
            },
        ],
        feedback: {
            title: "Vous avez trouvé un bug ou vous avez une idée ?",
            body: "[Ouvrez une issue](https://github.com/bawerbozdag/tw-bootstrap-grid/issues/new) ou envoyez une [pull request](https://github.com/bawerbozdag/tw-bootstrap-grid/pulls) sur GitHub. Les petites corrections et les améliorations de la documentation sont les bienvenues.",
        },
    },
    guide: {
        breadcrumb: "Fil d'Ariane",
        breadcrumbCurrent: "Migrer depuis Bootstrap",
        eyebrow: "Guide",
        h1: "Migrer une grille Bootstrap vers Tailwind CSS",
        lead: "Passer une mise en page de la grille Bootstrap à Tailwind demande cinq étapes et, pour l'essentiel, une seule commande. Ce guide explique ce qui change, comment les classes se correspondent et les quelques points qu'un script ne peut pas faire à votre place.",
        stepsTitle: "La migration en cinq étapes",
        steps: [
            {
                name: "Installer le plugin",
                text: "Installez tw-bootstrap-grid et enregistrez-le dans votre configuration Tailwind. Le [guide d'installation](/#installation) contient les extraits pour Tailwind v3 et v4.",
            },
            {
                name: "Reprendre les breakpoints de Bootstrap (facultatif)",
                text: "Si vous voulez que les mises en page changent aux mêmes largeurs qu'avant, réglez les écrans de Tailwind sur 576, 768, 992, 1200 et 1400px. Voir [les breakpoints](#breakpoints) plus bas.",
            },
            {
                name: "Renommer les classes",
                text: "Faites un commit de votre travail, puis lancez la [commande Perl](#bulk-rename) ci-dessous. Elle renumérote les gutters et transforme le `col-md-6` de Bootstrap en `md:col-6`.",
            },
            {
                name: "Corriger ce que la commande ne peut pas faire",
                text: "Changez les utilitaires d'espacement comme `mb-3` en `mb-4`, remplacez les utilitaires display et flex de Bootstrap par ceux de Tailwind et remplacez les classes comme `container-md`.",
            },
            {
                name: "Retirer le CSS de Bootstrap et vérifier le résultat",
                text: "Retirez la feuille de style de Bootstrap, puis parcourez vos pages en largeur téléphone, tablette et ordinateur.",
            },
        ],
        changesTitle: "Ce qui change et ce qui ne change pas",
        beforeAfterTitle: "La même mise en page, avant et après",
        bootstrap5: "Bootstrap 5",
        classMappingTitle: "Correspondance des classes",
        tables: {
            responsive: {
                caption: "Classes responsive",
                notes: [
                    "Tailwind place le breakpoint devant, comme préfixe.",
                    "Idem pour la colonne à largeur égale.",
                    "",
                    "",
                    "",
                    "Le nombre change aussi, voir les tailles de gutter plus bas.",
                    "Le xxl de Bootstrap s'appelle 2xl dans Tailwind.",
                    "order-* vient de Tailwind et va jusqu'à 12.",
                ],
            },
            gutters: { caption: "Tailles de gutter" },
            utilities: {
                caption: "Utilitaires fournis par Tailwind",
                notes: [
                    "",
                    "",
                    "",
                    "",
                    "",
                    "Les utilitaires d'espacement se décalent de la même façon que les gutters.",
                ],
            },
            bootstrap: "Bootstrap",
            here: "Ici",
            notes: "Notes",
            size: "Taille",
        },
        breakpoints: {
            title: "Reprendre les breakpoints de Bootstrap",
            before: "Les breakpoints de Bootstrap sont 576, 768, 992, 1200 et 1400px. Ceux de Tailwind sont 640, 768, 1024, 1280 et 1536px : une mise en page peut donc changer un peu plus tôt ou plus tard après la migration. Si cela compte, réglez les écrans de Tailwind sur les valeurs de Bootstrap.",
            after: "Le `container` de Tailwind a la largeur du breakpoint sur lequel il se trouve : ses largeurs maximales deviennent donc 576, 768, 992, 1200 et 1400px. C'est proche des 540, 720, 960, 1140 et 1320px de Bootstrap, mais pas identique.",
        },
        bulk: {
            title: "Renommer en masse",
            body: "Cette commande Perl renumérote les gutters et transforme `col-md-6` en `md:col-6`, `col-xxl-4` en `2xl:col-4` et l'ancien `no-gutters` en `g-0`. Elle réécrit les fichiers sur place : faites donc un commit d'abord, puis lisez le diff ensuite.",
            warning: {
                title: "Lancez-la une seule fois et vérifiez le résultat",
                body: "La lancer une seconde fois renumérote à nouveau les gutters. Elle ne connaît en outre que les noms de classes ci-dessus : les utilitaires d'espacement comme `mb-3` ou `p-3` demandent donc une passe manuelle, et le motif correspond à tout texte qui ressemble à une classe, y compris dans les commentaires.",
            },
        },
        notIncluded: {
            title: "Ce qui n'est pas repris",
            body: "Le plugin n'ajoute que `.container` et `.container-fluid` : `.container-sm`, `.container-md` et les autres conteneurs responsive de Bootstrap ne sont donc pas inclus. Construisez-les avec les utilitaires `max-w-*` de Tailwind si vous en avez besoin. Les autres utilitaires de Bootstrap (display, flex, espacement, texte) sont remplacés par ceux de Tailwind, comme dans le dernier tableau ci-dessus.",
        },
        nextTitle: "Pour aller plus loin",
        next: [
            { title: "Configuration", body: "Tailles de gutter, breakpoints et désactivation des conteneurs." },
            { title: "Référence des classes", body: "Toutes les classes ajoutées par le plugin, au même endroit." },
            { title: "Exemples", body: "Des mises en page modifiables avec aperçu téléphone, tablette et ordinateur." },
        ],
    },
};

export default fr;
