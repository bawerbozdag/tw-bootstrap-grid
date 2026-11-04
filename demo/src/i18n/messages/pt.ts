import type { Messages } from "./en";

const pt: Messages = {
    meta: {
        home: {
            title: "tw-bootstrap-grid | Grid do Bootstrap para Tailwind CSS",
            description:
                "Um plugin do Tailwind CSS que adiciona o grid de 12 colunas do Bootstrap: row, col, gutters, offsets, row-cols e RTL. Funciona com Tailwind v3.4 e v4.",
            shareTitle: "tw-bootstrap-grid | Grid do Bootstrap para Tailwind CSS",
            shareDescription:
                "O grid de 12 colunas do Bootstrap como plugin do Tailwind CSS: row, col, gutters, offsets, row-cols e RTL. Funciona com Tailwind v3.4 e v4.",
        },
        migration: {
            title: "Migre o grid do Bootstrap para o Tailwind CSS | tw-bootstrap-grid",
            description:
                "Leve um grid do Bootstrap 5 para o Tailwind CSS: tabelas de equivalência, mudanças nos gutters, os breakpoints do Bootstrap e um comando Perl que converte seu código.",
            shareTitle: "Migre um grid do Bootstrap para o Tailwind CSS",
            shareDescription:
                "Tabelas de equivalência, mudanças nos gutters, os breakpoints do Bootstrap e um comando Perl que converte seu código.",
        },
        imageAlt:
            "tw-bootstrap-grid: o grid do Bootstrap, para o Tailwind. Um grid de doze colunas com três colunas destacadas.",
    },
    nav: {
        label: "Seções",
        introduction: "Introdução",
        installation: "Instalação",
        configuration: "Configuração",
        classes: "Classes",
        migration: "Migração",
        examples: "Exemplos",
        rtl: "RTL",
        faq: "FAQ",
        more: "Mais",
    },
    common: {
        skipToContent: "Pular para o conteúdo",
        newTab: "(abre em uma nova aba)",
        copy: "Copiar",
        copied: "Copiado",
        failed: "Falhou",
        backToTop: "tw-bootstrap-grid, voltar ao topo",
        githubRepo: "Repositório no GitHub",
        npmPackage: "Pacote no npm",
        github: "GitHub",
        npm: "npm",
        changelog: "Changelog",
        projectLinks: "Links do projeto",
        switchToLight: "Mudar para o tema claro",
        switchToDark: "Mudar para o tema escuro",
        lightTheme: "Tema claro",
        darkTheme: "Tema escuro",
        tailwindVersion: "Versão do Tailwind",
        language: "Idioma",
        code: "Código",
        codeFile: "Código: {file}",
        installCommand: "Comando de instalação",
        packageManager: "Gerenciador de pacotes",
        license: "MIT © {year}",
    },
    versions: { v3Hint: "tailwind.config.js", v4Hint: "@plugin no CSS" },
    intro: {
        chip: "Plugin do Tailwind CSS · v{version}",
        titleStart: "O grid do Bootstrap,",
        titleEnd: "para o Tailwind.",
        lead: "Se você já pensa em linhas e colunas, continue assim. O tw-bootstrap-grid traz para o Tailwind o conhecido grid de 12 colunas, com `.row`, `.col-6`, `.offset-2` e `.g-4`, com suporte a RTL e sem opinar sobre como seus componentes devem ser.",
        getStarted: "Começar",
        viewOnGithub: "Ver no GitHub",
        whatYouGet: "O que você recebe",
        features: [
            {
                title: "Grid de 12 colunas",
                body: "`.row`, `.col`, `.col-auto` e de `.col-1` a `.col-12`, exatamente como no Bootstrap.",
            },
            {
                title: "Gutters do seu tema",
                body: "`.g-*`, `.gx-*` e `.gy-*` usam a escala de espaçamento do Tailwind, então combinam com o resto do seu design.",
            },
            {
                title: "Offsets",
                body: "De `.offset-0` a `.offset-12` para centralizar uma coluna ou deixar um espaço.",
            },
            {
                title: "Colunas por linha",
                body: "De `.row-cols-1` a `.row-cols-6` e `.row-cols-auto` dimensionam todos os filhos com uma única classe na linha.",
            },
            {
                title: "Contêineres",
                body: "`.container` e `.container-fluid` com preenchimento que considera o gutter. As larguras máximas vêm dos breakpoints do próprio Tailwind.",
            },
            {
                title: "Responsivo e RTL",
                body: 'Toda classe aceita os prefixos de breakpoint do Tailwind, como `md:col-6`, e se inverte corretamente com `dir="rtl"`.',
            },
        ],
        note: "Ele cuida apenas do layout: sem cores, sem componentes, sem resets. Ele acrescenta ao Tailwind em vez de substituir qualquer coisa, então você pode misturar `col-4` e `flex` na mesma página sem pensar duas vezes.",
    },
    installation: {
        eyebrow: "Primeiros passos",
        title: "Instalação",
        description: "Três passos: instale o pacote, registre o plugin e comece a usar as classes.",
        step1: "Instale o pacote",
        step2: {
            title: "Registre o plugin",
            body: "Escolha sua versão do Tailwind no cabeçalho e o trecho abaixo acompanha. O Tailwind v4 registra plugins no CSS, o v3 no arquivo de configuração.",
            note: 'Em uma configuração v3 com CommonJS, `plugins: [require("tw-bootstrap-grid")]` também funciona.',
        },
        step3: {
            title: "Use as classes",
            body: "Pronto. Use-as no seu HTML como qualquer outra classe do Tailwind. Tudo o que você faz com `sm:`, `md:` ou `hover:` funciona aqui também.",
        },
        buildStep: {
            title: "Você precisa de uma etapa de build",
            body: "O plugin roda dentro do compilador do Tailwind (PostCSS, Vite, Webpack, a CLI do Tailwind…). Ele não funciona com o script Tailwind Play CDN, que não consegue carregar plugins do npm.",
        },
    },
    configuration: {
        eyebrow: "Primeiros passos",
        title: "Configuração",
        description:
            "Os valores padrão são os mesmos do Bootstrap, então você pode pular esta página. Volte quando quiser outros breakpoints ou tamanhos de gutter.",
        breakpoints: {
            title: "Breakpoints",
            body: "O plugin não tem breakpoints próprios. Prefixos como `md:col-6` e a largura máxima de `.container` vêm do Tailwind, então mudar suas telas muda o grid junto.",
        },
        gutters: {
            title: "Tamanhos de gutter",
            body: "Gutters são o espaço entre as colunas. Por padrão são `1.5rem` na horizontal e `0` na vertical. Defina uma vez para tudo, ou separadamente para contêineres e linhas. No v3 você passa opções ao plugin, no v4 você define variáveis CSS.",
            tableCaption: "Ordem de resolução do gutter",
            priority: "Prioridade",
            cssVariable: "Variável CSS",
            option: "Opção",
            notes: "Observações",
            orderNotes: [
                "O valor mais específico vence.",
                "Valor de reserva compartilhado pelos dois.",
                "Os mesmos padrões que o Bootstrap usa.",
            ],
            defaultVariable: "1.5rem (x) e 0 (y)",
            defaultOption: "padrão embutido",
            after: "As variáveis CSS são lidas em tempo de execução, então em qualquer uma das versões você também pode sobrescrevê-las em qualquer elemento para mudar os gutters só daquela seção. Para uma única linha, use `.g-*`, `.gx-*` e `.gy-*`.",
        },
        containers: {
            title: "Desative os contêineres",
            body: "Prefere usar só o `container` do Tailwind? Defina `generateContainers` como `false` e o plugin para de gerar `.container-fluid` e o preenchimento que considera o gutter. Linhas e colunas não são afetadas.",
        },
        variablesNote: {
            title: "Por que variáveis no v4?",
            body: "O Tailwind v4 consegue passar valores simples como `generateContainers: false;` a um plugin, mas não objetos aninhados como `gutters`. As variáveis CSS cobrem esse caso e ainda podem ser sobrescritas por elemento.",
        },
    },
    classes: {
        eyebrow: "Referência",
        title: "Classes",
        description: "Tudo o que o plugin adiciona, em um só lugar.",
        tableCaption: "Classes de {title}",
        scrollableTable: "{title}, tabela rolável",
        columns: { name: "Classe", what: "O que faz", notes: "Observações" },
        groups: [
            {
                title: "Layout",
                rows: [
                    {
                        what: "width: 100%; centralizado; preenchimento conforme o gutter",
                        note: "A largura máxima vem dos breakpoints do Tailwind.",
                    },
                    { what: "igual a .container", note: "Largura total em todos os breakpoints." },
                    {
                        what: "display: flex; flex-wrap: wrap; margens negativas",
                        note: "Anula o gutter externo e organiza seus filhos.",
                    },
                ],
            },
            {
                title: "Colunas",
                rows: [
                    { what: "flex: 1 0 0%", note: "Divide o espaço restante igualmente." },
                    { what: "flex: 0 0 auto; width: auto", note: "Dimensionada pelo conteúdo." },
                    { what: "flex: 0 0 auto; width: n / 12", note: "Ocupa n de 12 partes." },
                ],
            },
            {
                title: "Offsets e colunas por linha",
                rows: [
                    { what: "margin-inline-start: n / 12", note: "Se inverte automaticamente em RTL." },
                    {
                        what: "os filhos recebem width: 1 / n",
                        note: "Definida na .row, vale para todos os filhos.",
                    },
                    { what: "os filhos recebem width: auto", note: "Os filhos são dimensionados pelo conteúdo." },
                ],
            },
            {
                title: "Gutters",
                rows: [
                    { what: "--bs-gutter-x e --bs-gutter-y", note: "As duas direções." },
                    { what: "--bs-gutter-x", note: "Somente horizontal." },
                    { what: "--bs-gutter-y", note: "Somente vertical." },
                ],
            },
        ],
        responsive: {
            title: "Tudo é responsivo",
            body: "Adicione um prefixo de breakpoint a qualquer classe acima: `md:col-6`, `lg:offset-3`, `sm:row-cols-2`, `xl:g-8`.",
        },
        gutterSteps: {
            title: "Quais degraus de gutter existem?",
            body: "`.g-*`, `.gx-*` e `.gy-*` são geradas a partir do seu tema de espaçamento. No v3, é cada chave de `theme.spacing` sem ponto (então `g-4` sim, `g-0.5` não). No v4, é a escala padrão, de `g-0` a `g-96` e `g-px`.",
        },
        alignment: {
            title: "Alinhamento e ordem vêm do Tailwind",
            body: "O plugin não traz seus próprios `justify-*`, `items-*` ou `order-*`. Uma `.row` é um contêiner flex comum, então as utilitárias do Tailwind funcionam diretamente nela.",
        },
    },
    migrationSummary: {
        eyebrow: "Vindo do Bootstrap",
        title: "Migrando do Bootstrap",
        description:
            "O grid funciona do jeito que você lembra. Três coisas parecem diferentes: como as classes responsivas são escritas, os números de espaçamento e as larguras dos breakpoints.",
        cards: [
            {
                title: "O que continua igual",
                body: "A estrutura: `.container`, `.row`, `.col-*`, `.offset-*`, `.row-cols-*`. Até as variáveis CSS mantêm os nomes, `--bs-gutter-x` e `--bs-gutter-y`, então o CSS próprio que as lê continua funcionando.",
            },
            {
                title: "Prefixo, não infixo",
                body: "O Bootstrap escreve `col-md-6`. O Tailwind escreve `md:col-6`. É a mudança que você mais vai tocar, e um script pode fazê-la por você.",
            },
            {
                title: "Números diferentes",
                body: "Os números de gutter e de espaçamento seguem a escala do Tailwind, então o `g-3` do Bootstrap é `g-4` aqui. As larguras dos breakpoints também diferem um pouco.",
            },
        ],
        ctaBody:
            "O guia completo tem as tabelas de equivalência, as mudanças nos tamanhos de gutter, como igualar os breakpoints do Bootstrap e um comando que converte seu código.",
        ctaButton: "Ler o guia de migração",
    },
    examples: {
        eyebrow: "Uso",
        title: "Exemplos",
        description:
            "Todo exemplo é interativo. Edite o HTML à esquerda e a pré-visualização é atualizada enquanto você digita. Se você conhece o [grid do Bootstrap](https://getbootstrap.com/docs/5.3/layout/grid/), vai parecer familiar.",
        preview: "Pré-visualização",
        editable: "HTML editável",
        reset: "Redefinir",
        rtl: "RTL",
        previewWidth: "Largura da pré-visualização",
        devices: {
            fit: "Ajustar ao painel",
            phone: "Celular, 375px",
            tablet: "Tablet, 768px",
            desktop: "Desktop, 1280px",
        },
        previewTitle: "Pré-visualização ao vivo: {title}",
        editorLabel: "HTML editável, {title}",
        editorLoading: "HTML editável, {title} (carregando o editor)",
        items: {
            basic: {
                title: "Um layout básico",
                description:
                    "Um `.container` centraliza seu conteúdo, uma `.row` alinha as colunas lado a lado e cada `.col-*` ocupa essa quantidade das 12 partes disponíveis. Duas colunas `col-6` dividem a linha ao meio.",
                tip: "As colunas sempre quebram de linha. O que passar de 12 partes em uma linha desce para a próxima, o que é útil para listas de cards.",
            },
            "equal-and-auto": {
                title: "Colunas iguais e de largura automática",
                description:
                    "Um `.col` simples divide o espaço que sobrar, então três delas são três colunas iguais. `.col-auto` se dimensiona pelo conteúdo e o `.col` vizinho fica com o resto.",
            },
            responsive: {
                title: "Colunas responsivas",
                description:
                    "Toda classe aceita os prefixos de breakpoint do Tailwind. Comece pensando em mobile com `col-12` e depois mude a largura em telas maiores com `sm:`, `md:`, `lg:` e assim por diante. Use os botões de largura acima da pré-visualização para ver cada breakpoint entrar em ação.",
                tip: "A pré-visualização é um viewport de verdade. Ela mostra a largura e o breakpoint no canto, e os botões de celular, tablet e desktop a alternam, então `md:` e `lg:` se aplicam exatamente como naquela tela.",
            },
            gutters: {
                title: "Gutters",
                description:
                    "Gutters são os espaços entre as colunas. `.g-*` define as duas direções, `.gx-*` só a horizontal e `.gy-*` só a vertical. Os números vêm da escala de espaçamento do Tailwind, então `g-4` é o mesmo degrau que `p-4`.",
                tip: "Coloque as classes de gutter na `.row`. Use `g-0` para remover os espaços por completo.",
            },
            offset: {
                title: "Offsets",
                description:
                    "`.offset-*` empurra uma coluna essa quantidade de partes. É o jeito rápido de centralizar uma coluna ou deixar um espaço. Os offsets também funcionam com prefixos de breakpoint, como `lg:offset-3`.",
                tip: "Os offsets usam `margin-inline-start`, então empurram do lado certo quando a página é da direita para a esquerda. Experimente o botão RTL acima da pré-visualização.",
            },
            "row-cols": {
                title: "Colunas por linha",
                description:
                    "Quando todas as colunas têm o mesmo tamanho, defina isso uma vez na linha em vez de em cada filho. `.row-cols-1` a `.row-cols-6` dão a cada filho uma parte igual, e `.row-cols-auto` os dimensiona pelo conteúdo.",
                tip: "Combine com breakpoints para mudar o número de colunas conforme a tela cresce, por exemplo `row-cols-2 lg:row-cols-3`.",
            },
            nesting: {
                title: "Aninhamento",
                description:
                    "Uma coluna pode conter sua própria `.row`. A linha aninhada começa um novo grid de 12 partes dentro da coluna, então você pode dividir um espaço quantas vezes precisar.",
            },
            "alignment-and-order": {
                title: "Alinhamento e ordem",
                description:
                    "Uma `.row` é um contêiner flex normal, então as utilitárias de flexbox do Tailwind funcionam nela: `items-*`, `justify-*`, `self-*` e `order-*`. O plugin não as redefine.",
                tip: "Trocas no estilo `order-2 md:order-1` são um padrão comum: empilhe em uma ordem no celular e inverta em telas maiores.",
            },
            rtl: {
                title: "Da direita para a esquerda",
                description:
                    'Defina `dir="rtl"` no contêiner, ou em `<html>` para a página toda, e o grid flui a partir da direita. É a opção para árabe, persa, hebraico e outros idiomas RTL.',
                tip: "Nada a configurar. Os gutters da linha são simétricos e os offsets usam propriedades lógicas, então se invertem sozinhos.",
            },
        },
    },
    rtl: {
        eyebrow: "Bom saber",
        title: "Da direita para a esquerda",
        description: 'Adicione `dir="rtl"` e o grid se espelha sozinho. Não há nada a configurar.',
        wholePage: "Para a página toda",
        oneSection: "Para uma seção",
        why: {
            title: "Por que simplesmente funciona",
            body: "Os offsets usam `margin-inline-start`, e as margens negativas da linha e o preenchimento das colunas são simétricos, então se invertem sozinhos. Use o botão RTL em qualquer exemplo acima para ver.",
        },
    },
    faq: {
        eyebrow: "Bom saber",
        title: "Perguntas frequentes",
        description: "Respostas para as perguntas mais comuns.",
        items: [
            {
                question: "Ele substitui o container do Tailwind?",
                answer: "Não. O `container` do Tailwind continua fornecendo as larguras máximas por breakpoint. O plugin acrescenta por cima a centralização e um preenchimento que considera o gutter. Se preferir não ter isso, defina `generateContainers` como `false`.",
            },
            {
                question: "Posso misturá-lo com as utilitárias normais do Tailwind?",
                answer: "Sim, essa é a ideia. Uma `.row` é um contêiner flex, então `items-center`, `justify-between`, `order-2`, `mt-4` e o resto se aplicam a ela e às suas colunas como de costume.",
            },
            {
                question: "Por que minha pré-visualização ignora uma classe?",
                answer: "O Tailwind só gera CSS para as classes que encontra nos seus arquivos de origem. No seu próprio projeto isso é automático. Nesta página os exemplos editáveis podem conter qualquer coisa, então a demo gera antecipadamente todas as classes e breakpoints do plugin.",
            },
            {
                question: "Posso usá-lo com o CDN do Tailwind?",
                answer: "Não. O script do CDN não consegue carregar plugins do npm. Use uma configuração de build como Vite, PostCSS, Webpack ou a CLI do Tailwind.",
            },
            {
                question: "Quais versões são suportadas?",
                answer: "Tailwind v3.4 e v4, com Node 18 ou mais recente. O pacote traz builds ESM e CommonJS com tipos do TypeScript.",
            },
            {
                question: "Estou vindo do Bootstrap. Como migro?",
                answer: "Os nomes das classes são parecidos: `col-md-6` vira `md:col-6`, e os números de gutter seguem a escala do Tailwind. O [guia de migração](/migrate-from-bootstrap/) tem a equivalência completa e um comando que converte seu código.",
            },
        ],
        feedback: {
            title: "Encontrou um bug ou tem uma ideia?",
            body: "[Abra uma issue](https://github.com/bawerbozdag/tw-bootstrap-grid/issues/new) ou envie um [pull request](https://github.com/bawerbozdag/tw-bootstrap-grid/pulls) no GitHub. Correções pequenas e melhorias na documentação são muito bem-vindas.",
        },
    },
    guide: {
        breadcrumb: "Trilha de navegação",
        breadcrumbCurrent: "Migrando do Bootstrap",
        eyebrow: "Guia",
        h1: "Migrando um grid do Bootstrap para o Tailwind CSS",
        lead: "Levar um layout do grid do Bootstrap para o Tailwind leva cinco passos e, na maior parte, um único comando. Este guia mostra o que muda, como as classes se correspondem e as poucas coisas que um script não consegue fazer por você.",
        stepsTitle: "Migração em cinco passos",
        steps: [
            {
                name: "Instale o plugin",
                text: "Instale o tw-bootstrap-grid e registre-o na sua configuração do Tailwind. O [guia de instalação](/#installation) tem os trechos para Tailwind v3 e v4.",
            },
            {
                name: "Iguale os breakpoints do Bootstrap (opcional)",
                text: "Se quiser que os layouts mudem nas mesmas larguras de antes, defina as telas do Tailwind como 576, 768, 992, 1200 e 1400px. Veja [os breakpoints](#breakpoints) mais abaixo.",
            },
            {
                name: "Renomeie as classes",
                text: "Faça commit do seu trabalho e depois execute o [comando Perl](#bulk-rename) abaixo. Ele renumera os gutters e transforma o `col-md-6` do Bootstrap em `md:col-6`.",
            },
            {
                name: "Corrija o que o comando não consegue",
                text: "Troque utilitárias de espaçamento como `mb-3` por `mb-4`, substitua as utilitárias de display e flex do Bootstrap pelas do Tailwind e troque classes como `container-md`.",
            },
            {
                name: "Remova o CSS do Bootstrap e confira o resultado",
                text: "Tire a folha de estilos do Bootstrap e depois percorra suas páginas em larguras de celular, tablet e desktop.",
            },
        ],
        changesTitle: "O que muda e o que não muda",
        beforeAfterTitle: "O mesmo layout, antes e depois",
        bootstrap5: "Bootstrap 5",
        classMappingTitle: "Equivalência de classes",
        tables: {
            responsive: {
                caption: "Classes responsivas",
                notes: [
                    "O Tailwind coloca o breakpoint na frente, como prefixo.",
                    "O mesmo vale para a coluna de largura igual.",
                    "",
                    "",
                    "",
                    "O número também muda, veja os tamanhos de gutter abaixo.",
                    "O xxl do Bootstrap se chama 2xl no Tailwind.",
                    "order-* é do Tailwind e vai até 12.",
                ],
            },
            gutters: { caption: "Tamanhos de gutter" },
            utilities: {
                caption: "Utilitárias que vêm do Tailwind",
                notes: ["", "", "", "", "", "As utilitárias de espaçamento mudam do mesmo jeito que os gutters."],
            },
            bootstrap: "Bootstrap",
            here: "Aqui",
            notes: "Observações",
            size: "Tamanho",
        },
        breakpoints: {
            title: "Iguale os breakpoints do Bootstrap",
            before: "Os breakpoints do Bootstrap são 576, 768, 992, 1200 e 1400px. Os do Tailwind são 640, 768, 1024, 1280 e 1536px, então um layout pode mudar um pouco antes ou depois após a migração. Se isso importa, defina as telas do Tailwind com os valores do Bootstrap.",
            after: "O `container` do Tailwind tem a largura do breakpoint em que está, então suas larguras máximas passam a ser 576, 768, 992, 1200 e 1400px. É parecido com os 540, 720, 960, 1140 e 1320px do Bootstrap, mas não idêntico.",
        },
        bulk: {
            title: "Renomear em massa",
            body: "Este comando Perl renumera os gutters e transforma `col-md-6` em `md:col-6`, `col-xxl-4` em `2xl:col-4` e o antigo `no-gutters` em `g-0`. Ele reescreve os arquivos no lugar, então faça commit antes e leia o diff depois.",
            warning: {
                title: "Execute uma vez e confira o resultado",
                body: "Executá-lo uma segunda vez renumeraria os gutters de novo. Ele também só conhece os nomes de classe acima, então utilitárias de espaçamento como `mb-3` ou `p-3` precisam de uma revisão manual, e o padrão casa com qualquer texto que pareça uma classe, inclusive dentro de comentários.",
            },
        },
        notIncluded: {
            title: "O que não é migrado",
            body: "O plugin só adiciona `.container` e `.container-fluid`, então `.container-sm`, `.container-md` e os outros contêineres responsivos do Bootstrap não estão incluídos. Monte-os com as utilitárias `max-w-*` do Tailwind se precisar. As outras utilitárias do Bootstrap (display, flex, espaçamento, texto) são substituídas pelas do Tailwind, como na última tabela acima.",
        },
        nextTitle: "Continue",
        next: [
            { title: "Configuração", body: "Tamanhos de gutter, breakpoints e como desativar os contêineres." },
            { title: "Referência de classes", body: "Toda classe que o plugin adiciona, em um só lugar." },
            { title: "Exemplos", body: "Layouts editáveis com pré-visualização de celular, tablet e desktop." },
        ],
    },
};

export default pt;
