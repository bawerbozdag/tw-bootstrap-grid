import type { Messages } from "./en";

const zh: Messages = {
    meta: {
        home: {
            title: "tw-bootstrap-grid | 适用于 Tailwind CSS 的 Bootstrap 栅格",
            description:
                "一个 Tailwind CSS 插件，为 Tailwind 加入 Bootstrap 的 12 列栅格：row、col、gutter、offset、row-cols 和 RTL。支持 Tailwind v3.4 和 v4。",
            shareTitle: "tw-bootstrap-grid | 适用于 Tailwind CSS 的 Bootstrap 栅格",
            shareDescription:
                "以 Tailwind CSS 插件形式提供的 Bootstrap 12 列栅格：row、col、gutter、offset、row-cols 和 RTL。支持 Tailwind v3.4 和 v4。",
        },
        migration: {
            title: "将 Bootstrap 栅格迁移到 Tailwind CSS | tw-bootstrap-grid",
            description:
                "把 Bootstrap 5 栅格迁移到 Tailwind CSS：类名对照表、gutter 尺寸的变化、Bootstrap 的断点，以及一条可以转换你的标记的 Perl 命令。",
            shareTitle: "将 Bootstrap 栅格迁移到 Tailwind CSS",
            shareDescription: "类名对照表、gutter 尺寸的变化、Bootstrap 的断点，以及一条可以转换你的标记的 Perl 命令。",
        },
        imageAlt: "tw-bootstrap-grid：适用于 Tailwind 的 Bootstrap 栅格。一个十二列的栅格，其中三列被高亮显示。",
    },
    nav: {
        label: "章节",
        introduction: "简介",
        installation: "安装",
        configuration: "配置",
        classes: "类名",
        migration: "迁移",
        examples: "示例",
        rtl: "RTL",
        faq: "常见问题",
        more: "更多",
    },
    common: {
        skipToContent: "跳到正文",
        newTab: "（在新标签页中打开）",
        copy: "复制",
        copied: "已复制",
        failed: "失败",
        backToTop: "tw-bootstrap-grid，回到页面顶部",
        githubRepo: "GitHub 仓库",
        npmPackage: "npm 包",
        github: "GitHub",
        npm: "npm",
        changelog: "更新日志",
        projectLinks: "项目链接",
        switchToLight: "切换到浅色主题",
        switchToDark: "切换到深色主题",
        lightTheme: "浅色主题",
        darkTheme: "深色主题",
        tailwindVersion: "Tailwind 版本",
        language: "语言",
        code: "代码",
        codeFile: "代码：{file}",
        installCommand: "安装命令",
        packageManager: "包管理器",
        license: "MIT © {year}",
    },
    versions: { v3Hint: "tailwind.config.js", v4Hint: "CSS 中的 @plugin" },
    intro: {
        chip: "Tailwind CSS 插件 · v{version}",
        titleStart: "Bootstrap 栅格，",
        titleEnd: "为 Tailwind 而生。",
        lead: "如果你已经习惯用行和列来思考，那就继续这样。tw-bootstrap-grid 把你熟悉的 12 列栅格带到 Tailwind 中，包括 `.row`、`.col-6`、`.offset-2` 和 `.g-4`，支持 RTL，并且不会对你的组件应该是什么样子指手画脚。",
        getStarted: "开始使用",
        viewOnGithub: "在 GitHub 上查看",
        whatYouGet: "你能得到什么",
        features: [
            {
                title: "12 列栅格",
                body: "`.row`、`.col`、`.col-auto`，以及 `.col-1` 到 `.col-12`，和 Bootstrap 一样。",
            },
            {
                title: "来自你主题的 gutter",
                body: "`.g-*`、`.gx-*` 和 `.gy-*` 使用你的 Tailwind 间距刻度，因此与设计的其余部分保持一致。",
            },
            {
                title: "Offset 偏移",
                body: "`.offset-0` 到 `.offset-12`，用来让一列居中或留出空隙。",
            },
            {
                title: "每行列数",
                body: "`.row-cols-1` 到 `.row-cols-6` 以及 `.row-cols-auto`，只需在行上写一个类，就能设定所有子元素的宽度。",
            },
            {
                title: "容器",
                body: "`.container` 和 `.container-fluid`，其内边距会考虑 gutter。最大宽度来自 Tailwind 自己的断点。",
            },
            {
                title: "响应式与 RTL",
                body: '每个类都支持 Tailwind 的断点前缀，例如 `md:col-6`，并且在 `dir="rtl"` 下会正确翻转。',
            },
        ],
        note: "它只负责布局：没有颜色，没有组件，也没有重置样式。它是在 Tailwind 之上添加内容，而不是替换其中任何东西，所以你可以毫不犹豫地在同一个页面里混用 `col-4` 和 `flex`。",
    },
    installation: {
        eyebrow: "快速上手",
        title: "安装",
        description: "三个步骤：安装包、注册插件、开始使用这些类。",
        step1: "安装包",
        step2: {
            title: "注册插件",
            body: "在页眉中选择你的 Tailwind 版本，下面的代码片段会随之变化。Tailwind v4 在 CSS 中注册插件，v3 则在配置文件中注册。",
            note: '在使用 CommonJS 的 v3 配置中，`plugins: [require("tw-bootstrap-grid")]` 同样可用。',
        },
        step3: {
            title: "使用这些类",
            body: "就是这样。像使用其他 Tailwind 类一样，把它们写进你的标记里。凡是 `sm:`、`md:` 或 `hover:` 能做到的，在这里同样适用。",
        },
        buildStep: {
            title: "你需要一个构建步骤",
            body: "插件运行在 Tailwind 的编译器内部（PostCSS、Vite、Webpack、Tailwind CLI……）。它无法配合 Tailwind Play CDN 脚本使用，因为那个脚本没办法从 npm 加载插件。",
        },
    },
    configuration: {
        eyebrow: "快速上手",
        title: "配置",
        description: "默认值与 Bootstrap 一致，所以你可以跳过本页。当你想要不同的断点或 gutter 尺寸时再回来。",
        breakpoints: {
            title: "断点",
            body: "插件本身没有断点。像 `md:col-6` 这样的前缀以及 `.container` 的最大宽度都来自 Tailwind，因此修改你的屏幕断点，栅格也会随之改变。",
        },
        gutters: {
            title: "Gutter 尺寸",
            body: "Gutter 是列与列之间的间距。默认情况下水平方向为 `1.5rem`，垂直方向为 `0`。你可以一次性为所有内容设置，也可以分别为容器和行设置。在 v3 中向插件传入选项，在 v4 中设置 CSS 变量。",
            tableCaption: "Gutter 的取值顺序",
            priority: "优先级",
            cssVariable: "CSS 变量",
            option: "选项",
            notes: "说明",
            orderNotes: ["最具体的值优先。", "两者共用的后备值。", "与 Bootstrap 使用的默认值相同。"],
            defaultVariable: "1.5rem (x) 和 0 (y)",
            defaultOption: "内置默认值",
            after: "CSS 变量在运行时读取，因此无论哪个版本，你都可以在任意元素上覆盖它们，只改变那一部分的 gutter。对于单独一行，请使用 `.g-*`、`.gx-*` 和 `.gy-*`。",
        },
        containers: {
            title: "关闭容器",
            body: "只想用 Tailwind 自带的 `container`？把 `generateContainers` 设为 `false`，插件就不再生成 `.container-fluid` 及其考虑 gutter 的内边距。行和列不受影响。",
        },
        variablesNote: {
            title: "为什么 v4 用变量？",
            body: "Tailwind v4 可以向插件传递 `generateContainers: false;` 这样的简单值，但不能传递 `gutters` 这样的嵌套对象。CSS 变量能解决这个问题，还有一个好处，就是可以针对单个元素覆盖。",
        },
    },
    classes: {
        eyebrow: "参考",
        title: "类名",
        description: "插件添加的所有内容，集中在这里。",
        tableCaption: "{title}类名",
        scrollableTable: "{title}，可滚动的表格",
        columns: { name: "类名", what: "作用", notes: "说明" },
        groups: [
            {
                title: "布局",
                rows: [
                    { what: "width: 100%；居中；内边距取自 gutter", note: "最大宽度来自 Tailwind 的断点。" },
                    { what: "与 .container 相同", note: "在每个断点下都是全宽。" },
                    {
                        what: "display: flex; flex-wrap: wrap; 负外边距",
                        note: "抵消外侧的 gutter，并排布它的子元素。",
                    },
                ],
            },
            {
                title: "列",
                rows: [
                    { what: "flex: 1 0 0%", note: "平均分配剩余空间。" },
                    { what: "flex: 0 0 auto; width: auto", note: "宽度由内容决定。" },
                    { what: "flex: 0 0 auto; width: n / 12", note: "占 12 份中的 n 份。" },
                ],
            },
            {
                title: "Offset 与每行列数",
                rows: [
                    { what: "margin-inline-start: n / 12", note: "在 RTL 中自动翻转。" },
                    { what: "子元素获得 width: 1 / n", note: "设置在 .row 上，作用于每个子元素。" },
                    { what: "子元素获得 width: auto", note: "子元素的宽度由内容决定。" },
                ],
            },
            {
                title: "Gutter",
                rows: [
                    { what: "--bs-gutter-x 和 --bs-gutter-y", note: "两个方向。" },
                    { what: "--bs-gutter-x", note: "仅水平方向。" },
                    { what: "--bs-gutter-y", note: "仅垂直方向。" },
                ],
            },
        ],
        responsive: {
            title: "一切都是响应式的",
            body: "给上面任何一个类加上断点前缀即可：`md:col-6`、`lg:offset-3`、`sm:row-cols-2`、`xl:g-8`。",
        },
        gutterSteps: {
            title: "有哪些 gutter 档位？",
            body: "`.g-*`、`.gx-*` 和 `.gy-*` 由你的间距主题生成。在 v3 中，是 `theme.spacing` 里所有不带小数点的键（所以有 `g-4`，没有 `g-0.5`）。在 v4 中，是默认刻度，即 `g-0` 到 `g-96` 以及 `g-px`。",
        },
        alignment: {
            title: "对齐与排序来自 Tailwind",
            body: "插件不提供自己的 `justify-*`、`items-*` 或 `order-*`。`.row` 就是一个普通的 flex 容器，所以 Tailwind 的工具类可以直接作用于它。",
        },
    },
    migrationSummary: {
        eyebrow: "从 Bootstrap 迁移",
        title: "从 Bootstrap 迁移",
        description: "栅格的工作方式和你记忆中的一样。有三处看起来不同：响应式类的写法、间距数值，以及断点宽度。",
        cards: [
            {
                title: "保持不变的部分",
                body: "结构：`.container`、`.row`、`.col-*`、`.offset-*`、`.row-cols-*`。就连 CSS 变量的名字也保持不变，即 `--bs-gutter-x` 和 `--bs-gutter-y`，所以读取它们的自定义 CSS 仍然可用。",
            },
            {
                title: "前缀，而不是中缀",
                body: "Bootstrap 写作 `col-md-6`，Tailwind 写作 `md:col-6`。这是你改动最多的地方，而一个脚本就可以替你完成。",
            },
            {
                title: "不同的数值",
                body: "Gutter 和间距的数值遵循 Tailwind 的刻度，所以 Bootstrap 的 `g-3` 在这里是 `g-4`。断点的宽度也略有不同。",
            },
        ],
        ctaBody:
            "完整指南包含类名对照表、gutter 尺寸的变化、如何对齐 Bootstrap 的断点，以及一条可以转换你的标记的命令。",
        ctaButton: "阅读迁移指南",
    },
    examples: {
        eyebrow: "用法",
        title: "示例",
        description:
            "每个示例都是实时的。编辑左侧的 HTML，预览会随着你的输入更新。如果你了解 [Bootstrap 栅格](https://getbootstrap.com/docs/5.3/layout/grid/)，这会让你感到熟悉。",
        preview: "预览",
        editable: "可编辑的 HTML",
        reset: "重置",
        rtl: "RTL",
        previewWidth: "预览宽度",
        devices: {
            fit: "适应面板",
            phone: "手机，375px",
            tablet: "平板，768px",
            desktop: "桌面，1280px",
        },
        previewTitle: "实时预览：{title}",
        editorLabel: "可编辑的 HTML，{title}",
        editorLoading: "可编辑的 HTML，{title}（正在加载编辑器）",
        items: {
            basic: {
                title: "基本布局",
                description:
                    "`.container` 让内容居中，`.row` 把各列并排排列，每个 `.col-*` 占据 12 份中相应的份数。两个 `col-6` 列把一行平分。",
                tip: "列总是会换行。一行中超过 12 份的部分会掉到下一行，这对卡片列表很方便。",
            },
            "equal-and-auto": {
                title: "等宽列与自动宽度列",
                description:
                    "单独的 `.col` 会平分剩余空间，所以三个这样的列就是三个等宽列。`.col-auto` 根据内容决定自己的宽度，旁边的 `.col` 占据剩下的部分。",
            },
            responsive: {
                title: "响应式列",
                description:
                    "每个类都支持 Tailwind 的断点前缀。先从移动端的 `col-12` 开始，再用 `sm:`、`md:`、`lg:` 等在更大的屏幕上改变宽度。使用预览上方的宽度按钮，可以看到每个断点如何生效。",
                tip: "预览是一个真实的视口。它在角落显示宽度和断点，手机、平板和桌面按钮可以切换它，所以 `md:` 和 `lg:` 的生效方式与在那种屏幕上完全一样。",
            },
            gutters: {
                title: "Gutter",
                description:
                    "Gutter 是列与列之间的间隙。`.g-*` 同时设置两个方向，`.gx-*` 只设置水平方向，`.gy-*` 只设置垂直方向。数值来自 Tailwind 的间距刻度，所以 `g-4` 和 `p-4` 是同一档。",
                tip: "把 gutter 类放在 `.row` 上。使用 `g-0` 可以完全去掉间隙。",
            },
            offset: {
                title: "Offset 偏移",
                description:
                    "`.offset-*` 把一列向旁边推开相应的份数。这是让一列居中或留出空隙的快捷方式。Offset 也支持断点前缀，例如 `lg:offset-3`。",
                tip: "Offset 使用 `margin-inline-start`，所以页面从右向左排布时，它会从正确的一侧推开。试试预览上方的 RTL 按钮。",
            },
            "row-cols": {
                title: "每行列数",
                description:
                    "当所有列大小相同时，只需在行上设置一次，而不必给每个子元素都设置。`.row-cols-1` 到 `.row-cols-6` 让每个子元素获得相同的份额，`.row-cols-auto` 则按内容决定宽度。",
                tip: "把它与断点结合，可以随屏幕变大而改变列数，例如 `row-cols-2 lg:row-cols-3`。",
            },
            nesting: {
                title: "嵌套",
                description:
                    "一列可以包含它自己的 `.row`。嵌套的行会在这一列内部开始一个新的 12 份栅格，所以你可以把一块空间按需要分割任意多次。",
            },
            "alignment-and-order": {
                title: "对齐与排序",
                description:
                    "`.row` 是一个普通的 flex 容器，所以 Tailwind 自己的 flexbox 工具类可以作用于它：`items-*`、`justify-*`、`self-*` 和 `order-*`。插件不会重新定义它们。",
                tip: "`order-2 md:order-1` 这样的调换是一种常见模式：在手机上按一种顺序堆叠，在更大的屏幕上反过来。",
            },
            rtl: {
                title: "从右到左",
                description:
                    '在容器上设置 `dir="rtl"`，或者在 `<html>` 上设置以作用于整个页面，栅格就会从右侧开始排布。阿拉伯语、波斯语、希伯来语等 RTL 语言就用它。',
                tip: "无需配置。行的 gutter 是对称的，offset 使用逻辑属性，所以它们会自行翻转。",
            },
        },
    },
    rtl: {
        eyebrow: "值得了解",
        title: "从右到左",
        description: '加上 `dir="rtl"`，栅格就会自己镜像翻转。无需任何配置。',
        wholePage: "用于整个页面",
        oneSection: "用于某一部分",
        why: {
            title: "为什么它自然就能工作",
            body: "Offset 使用 `margin-inline-start`，而行的负外边距和列的内边距是对称的，所以它们会自行翻转。在上面任何一个示例中使用 RTL 按钮就能看到效果。",
        },
    },
    faq: {
        eyebrow: "值得了解",
        title: "常见问题",
        description: "最常被问到的问题的解答。",
        items: [
            {
                question: "它会取代 Tailwind 的 container 吗？",
                answer: "不会。Tailwind 的 `container` 仍然负责提供各断点的最大宽度。插件在它之上添加居中和考虑 gutter 的内边距。如果你不想要这些，把 `generateContainers` 设为 `false` 即可。",
            },
            {
                question: "可以和普通的 Tailwind 工具类混用吗？",
                answer: "可以，这正是设计的初衷。`.row` 是一个 flex 容器，所以 `items-center`、`justify-between`、`order-2`、`mt-4` 等都会像往常一样作用于它和它的列。",
            },
            {
                question: "为什么我的实时预览会忽略某个类？",
                answer: "Tailwind 只会为它在你的源文件里找到的类生成 CSS。在你自己的项目中这是自动完成的。而在这个页面上，可编辑的示例可以包含任何内容，所以演示会预先生成插件的每个类和每个断点。",
            },
            {
                question: "可以配合 Tailwind CDN 使用吗？",
                answer: "不可以。CDN 脚本无法从 npm 加载插件。请使用 Vite、PostCSS、Webpack 或 Tailwind CLI 这样的构建环境。",
            },
            {
                question: "支持哪些版本？",
                answer: "Tailwind v3.4 和 v4，Node 18 或更高版本。该包同时提供 ESM 和 CommonJS 构建，并附带 TypeScript 类型。",
            },
            {
                question: "我正在从 Bootstrap 迁移，该怎么做？",
                answer: "类名很接近：`col-md-6` 变成 `md:col-6`，gutter 数值遵循 Tailwind 的刻度。[迁移指南](/migrate-from-bootstrap/)里有完整的对照表，以及一条可以转换你的标记的命令。",
            },
        ],
        feedback: {
            title: "发现了 bug 或有想法？",
            body: "欢迎在 GitHub 上[提交 issue](https://github.com/bawerbozdag/tw-bootstrap-grid/issues/new)或发送 [pull request](https://github.com/bawerbozdag/tw-bootstrap-grid/pulls)。小的修复和文档改进都非常欢迎。",
        },
    },
    guide: {
        breadcrumb: "面包屑导航",
        breadcrumbCurrent: "从 Bootstrap 迁移",
        eyebrow: "指南",
        h1: "将 Bootstrap 栅格迁移到 Tailwind CSS",
        lead: "把布局从 Bootstrap 的栅格迁移到 Tailwind 需要五个步骤，其中大部分只需一条命令。本指南介绍哪些会变化、类名如何对应，以及脚本无法替你完成的少数几件事。",
        stepsTitle: "五步完成迁移",
        steps: [
            {
                name: "安装插件",
                text: "安装 tw-bootstrap-grid，并在你的 Tailwind 配置中注册它。[安装指南](/#installation)里有适用于 Tailwind v3 和 v4 的代码片段。",
            },
            {
                name: "对齐 Bootstrap 的断点（可选）",
                text: "如果你希望布局在与之前相同的宽度处切换，请把 Tailwind 的屏幕断点设置为 576、768、992、1200 和 1400px。参见下面的[断点](#breakpoints)。",
            },
            {
                name: "重命名类名",
                text: "先提交你的工作，然后运行下面的 [Perl 命令](#bulk-rename)。它会重新编号 gutter，并把 Bootstrap 的 `col-md-6` 变成 `md:col-6`。",
            },
            {
                name: "修复命令处理不了的部分",
                text: "把 `mb-3` 这样的间距工具类改成 `mb-4`，把 Bootstrap 的 display 和 flex 工具类换成 Tailwind 的，并替换 `container-md` 这样的类。",
            },
            {
                name: "移除 Bootstrap 的 CSS 并检查结果",
                text: "去掉 Bootstrap 的样式表，然后在手机、平板和桌面宽度下检查你的页面。",
            },
        ],
        changesTitle: "哪些会变，哪些不变",
        beforeAfterTitle: "同一个布局，迁移前后",
        bootstrap5: "Bootstrap 5",
        classMappingTitle: "类名对照",
        tables: {
            responsive: {
                caption: "响应式类名",
                notes: [
                    "Tailwind 把断点放在前面，作为前缀。",
                    "等宽列同样如此。",
                    "",
                    "",
                    "",
                    "数值也会变化，见下面的 gutter 尺寸。",
                    "Bootstrap 的 xxl 在 Tailwind 中叫 2xl。",
                    "order-* 是 Tailwind 自带的，最大到 12。",
                ],
            },
            gutters: { caption: "Gutter 尺寸" },
            utilities: {
                caption: "来自 Tailwind 的工具类",
                notes: ["", "", "", "", "", "间距工具类的偏移方式与 gutter 相同。"],
            },
            bootstrap: "Bootstrap",
            here: "这里",
            notes: "说明",
            size: "尺寸",
        },
        breakpoints: {
            title: "对齐 Bootstrap 的断点",
            before: "Bootstrap 的断点是 576、768、992、1200 和 1400px。Tailwind 的是 640、768、1024、1280 和 1536px，所以迁移之后布局可能会稍早或稍晚地切换。如果这很重要，请把 Tailwind 的屏幕断点设置成 Bootstrap 的值。",
            after: "Tailwind 的 `container` 与它所处的断点一样宽，所以它的最大宽度会变成 576、768、992、1200 和 1400px。这与 Bootstrap 的 540、720、960、1140 和 1320px 很接近，但并不完全相同。",
        },
        bulk: {
            title: "批量重命名",
            body: "这条 Perl 命令会重新编号 gutter，把 `col-md-6` 变成 `md:col-6`，把 `col-xxl-4` 变成 `2xl:col-4`，并把旧的 `no-gutters` 变成 `g-0`。它会就地改写文件，所以请先提交，之后再查看 diff。",
            warning: {
                title: "只运行一次，并检查结果",
                body: "再运行一次会再次重新编号 gutter。它也只认识上面这些类名，所以 `mb-3` 或 `p-3` 这样的间距工具类需要手动处理，而且这个匹配模式会匹配任何看起来像类名的文本，包括注释里的内容。",
            },
        },
        notIncluded: {
            title: "不会迁移的内容",
            body: "插件只添加 `.container` 和 `.container-fluid`，所以 Bootstrap 的 `.container-sm`、`.container-md` 以及其他响应式容器都不包含在内。如有需要，请用 Tailwind 的 `max-w-*` 工具类自行搭建。Bootstrap 的其他工具类（display、flex、间距、文本）由 Tailwind 自己的工具类取代，如上面最后一张表所示。",
        },
        nextTitle: "继续阅读",
        next: [
            { title: "配置", body: "Gutter 尺寸、断点，以及如何关闭容器。" },
            { title: "类名参考", body: "插件添加的每一个类，集中在一处。" },
            { title: "示例", body: "带有手机、平板和桌面预览的可编辑布局。" },
        ],
    },
};

export default zh;
