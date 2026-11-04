import type { Messages } from "./en";

const ja: Messages = {
    meta: {
        home: {
            title: "tw-bootstrap-grid | Tailwind CSS 向け Bootstrap グリッド",
            description:
                "Bootstrap の 12 カラムグリッドを追加する Tailwind CSS プラグイン。row、col、ガター、オフセット、row-cols、RTL に対応し、Tailwind v3.4 と v4 で動作します。",
            shareTitle: "tw-bootstrap-grid | Tailwind CSS 向け Bootstrap グリッド",
            shareDescription:
                "Bootstrap の 12 カラムグリッドを Tailwind CSS プラグインとして。row、col、ガター、オフセット、row-cols、RTL に対応し、Tailwind v3.4 と v4 で動作します。",
        },
        migration: {
            title: "Bootstrap グリッドから Tailwind CSS への移行 | tw-bootstrap-grid",
            description:
                "Bootstrap 5 のグリッドを Tailwind CSS へ移行するためのガイド。クラスの対応表、ガターのサイズの変化、Bootstrap のブレークポイント、マークアップを変換する Perl コマンドを紹介します。",
            shareTitle: "Bootstrap グリッドから Tailwind CSS への移行",
            shareDescription:
                "クラスの対応表、ガターのサイズの変化、Bootstrap のブレークポイント、マークアップを変換する Perl コマンド。",
        },
        imageAlt:
            "tw-bootstrap-grid: Tailwind 向けの Bootstrap グリッド。3 つのカラムが強調された 12 カラムのグリッド。",
    },
    nav: {
        label: "セクション",
        introduction: "はじめに",
        installation: "インストール",
        configuration: "設定",
        classes: "クラス",
        migration: "移行",
        examples: "例",
        rtl: "RTL",
        faq: "FAQ",
        more: "その他",
    },
    common: {
        skipToContent: "本文へスキップ",
        newTab: "（新しいタブで開きます）",
        copy: "コピー",
        copied: "コピーしました",
        failed: "失敗しました",
        backToTop: "tw-bootstrap-grid、ページの先頭へ戻る",
        githubRepo: "GitHub リポジトリ",
        npmPackage: "npm パッケージ",
        github: "GitHub",
        npm: "npm",
        changelog: "変更履歴",
        projectLinks: "プロジェクトのリンク",
        switchToLight: "ライトテーマに切り替える",
        switchToDark: "ダークテーマに切り替える",
        lightTheme: "ライトテーマ",
        darkTheme: "ダークテーマ",
        tailwindVersion: "Tailwind のバージョン",
        language: "言語",
        code: "コード",
        codeFile: "コード: {file}",
        installCommand: "インストールコマンド",
        packageManager: "パッケージマネージャー",
        license: "MIT © {year}",
    },
    versions: { v3Hint: "tailwind.config.js", v4Hint: "CSS 内の @plugin" },
    intro: {
        chip: "Tailwind CSS プラグイン · v{version}",
        titleStart: "Bootstrap のグリッドを、",
        titleEnd: "Tailwind で。",
        lead: "すでに行と列で考える習慣があるなら、そのまま続けられます。tw-bootstrap-grid は、おなじみの 12 カラムグリッド、つまり `.row`、`.col-6`、`.offset-2`、`.g-4` を Tailwind に持ち込みます。RTL に対応しており、コンポーネントの見た目については何も指図しません。",
        getStarted: "始める",
        viewOnGithub: "GitHub で見る",
        whatYouGet: "できること",
        features: [
            {
                title: "12 カラムグリッド",
                body: "`.row`、`.col`、`.col-auto`、そして `.col-1` から `.col-12` まで。Bootstrap と同じです。",
            },
            {
                title: "テーマに沿ったガター",
                body: "`.g-*`、`.gx-*`、`.gy-*` は Tailwind のスペーシングスケールを使うので、デザインのほかの部分と揃います。",
            },
            {
                title: "オフセット",
                body: "`.offset-0` から `.offset-12` まで。カラムを中央に寄せたり、間隔を空けたりできます。",
            },
            {
                title: "行ごとのカラム数",
                body: "`.row-cols-1` から `.row-cols-6` と `.row-cols-auto` で、行に 1 つクラスを付けるだけで、すべての子要素の幅が決まります。",
            },
            {
                title: "コンテナ",
                body: "ガターを考慮したパディングを持つ `.container` と `.container-fluid`。最大幅は Tailwind 自身のブレークポイントから決まります。",
            },
            {
                title: "レスポンシブと RTL",
                body: 'すべてのクラスが `md:col-6` のような Tailwind のブレークポイント接頭辞に対応し、`dir="rtl"` で正しく反転します。',
            },
        ],
        note: "担当するのはレイアウトだけです。色もコンポーネントもリセットもありません。Tailwind を置き換えるのではなく、上に付け加えるので、同じページで `col-4` と `flex` を気兼ねなく併用できます。",
    },
    installation: {
        eyebrow: "はじめに",
        title: "インストール",
        description: "3 つのステップです。パッケージをインストールし、プラグインを登録して、クラスを使い始めます。",
        step1: "パッケージをインストールする",
        step2: {
            title: "プラグインを登録する",
            body: "ヘッダーで Tailwind のバージョンを選ぶと、下のコードもそれに合わせて切り替わります。Tailwind v4 では CSS で、v3 では設定ファイルでプラグインを登録します。",
            note: 'CommonJS を使う v3 の設定では、`plugins: [require("tw-bootstrap-grid")]` も使えます。',
        },
        step3: {
            title: "クラスを使う",
            body: "これだけです。ほかの Tailwind のクラスと同じようにマークアップに書いてください。`sm:`、`md:`、`hover:` でできることは、ここでも使えます。",
        },
        buildStep: {
            title: "ビルドステップが必要です",
            body: "プラグインは Tailwind のコンパイラ（PostCSS、Vite、Webpack、Tailwind CLI など）の中で動きます。npm からプラグインを読み込めない Tailwind Play CDN のスクリプトでは動きません。",
        },
    },
    configuration: {
        eyebrow: "はじめに",
        title: "設定",
        description:
            "デフォルトは Bootstrap と同じなので、このページは飛ばしても構いません。ブレークポイントやガターのサイズを変えたくなったら戻ってきてください。",
        breakpoints: {
            title: "ブレークポイント",
            body: "プラグイン自体にはブレークポイントがありません。`md:col-6` のような接頭辞も `.container` の最大幅も Tailwind から来るので、スクリーンの設定を変えればグリッドも一緒に変わります。",
        },
        gutters: {
            title: "ガターのサイズ",
            body: "ガターはカラム同士の間隔です。デフォルトは横が `1.5rem`、縦が `0` です。すべてに対して 1 度だけ設定することも、コンテナと行で別々に設定することもできます。v3 ではプラグインにオプションを渡し、v4 では CSS 変数を設定します。",
            tableCaption: "ガターが決まる順序",
            priority: "優先度",
            cssVariable: "CSS 変数",
            option: "オプション",
            notes: "備考",
            orderNotes: [
                "最も具体的な値が優先されます。",
                "両方に共通するフォールバックです。",
                "Bootstrap と同じデフォルトです。",
            ],
            defaultVariable: "1.5rem (x) と 0 (y)",
            defaultOption: "組み込みのデフォルト",
            after: "CSS 変数は実行時に読み込まれるので、どちらのバージョンでも、任意の要素で上書きしてそのセクションだけのガターを変えられます。1 つの行だけなら `.g-*`、`.gx-*`、`.gy-*` を使います。",
        },
        containers: {
            title: "コンテナをオフにする",
            body: "Tailwind 自身の `container` だけを使いたい場合は、`generateContainers` を `false` にします。プラグインは `.container-fluid` とガターを考慮したパディングを生成しなくなります。行とカラムには影響しません。",
        },
        variablesNote: {
            title: "v4 でなぜ変数なのか",
            body: "Tailwind v4 は `generateContainers: false;` のような単純な値はプラグインに渡せますが、`gutters` のような入れ子のオブジェクトは渡せません。CSS 変数ならそれを補え、要素ごとに上書きできるという利点もあります。",
        },
    },
    classes: {
        eyebrow: "リファレンス",
        title: "クラス",
        description: "プラグインが追加するものを、まとめて確認できます。",
        tableCaption: "{title}のクラス",
        scrollableTable: "{title}、スクロールできる表",
        columns: { name: "クラス", what: "働き", notes: "備考" },
        groups: [
            {
                title: "レイアウト",
                rows: [
                    {
                        what: "width: 100%、中央寄せ、ガターに基づくパディング",
                        note: "最大幅は Tailwind のブレークポイントから決まります。",
                    },
                    { what: ".container と同じ", note: "どのブレークポイントでも全幅です。" },
                    {
                        what: "display: flex; flex-wrap: wrap; 負のマージン",
                        note: "外側のガターを打ち消し、子要素を並べます。",
                    },
                ],
            },
            {
                title: "カラム",
                rows: [
                    { what: "flex: 1 0 0%", note: "残りの幅を均等に分け合います。" },
                    { what: "flex: 0 0 auto; width: auto", note: "内容に合わせた幅になります。" },
                    { what: "flex: 0 0 auto; width: n / 12", note: "12 分割のうち n 個分を占めます。" },
                ],
            },
            {
                title: "オフセットと行ごとのカラム数",
                rows: [
                    { what: "margin-inline-start: n / 12", note: "RTL では自動的に反転します。" },
                    { what: "子要素に width: 1 / n が付く", note: ".row に設定し、すべての子要素に適用されます。" },
                    { what: "子要素に width: auto が付く", note: "子要素は内容に合わせた幅になります。" },
                ],
            },
            {
                title: "ガター",
                rows: [
                    { what: "--bs-gutter-x と --bs-gutter-y", note: "両方向です。" },
                    { what: "--bs-gutter-x", note: "横方向のみです。" },
                    { what: "--bs-gutter-y", note: "縦方向のみです。" },
                ],
            },
        ],
        responsive: {
            title: "すべてレスポンシブです",
            body: "上のどのクラスにもブレークポイント接頭辞を付けられます。`md:col-6`、`lg:offset-3`、`sm:row-cols-2`、`xl:g-8` などです。",
        },
        gutterSteps: {
            title: "ガターの段階には何がありますか",
            body: "`.g-*`、`.gx-*`、`.gy-*` はスペーシングのテーマから生成されます。v3 では `theme.spacing` のキーのうち、小数点を含まないものすべてです（`g-4` はあり、`g-0.5` はありません）。v4 では標準のスケール、つまり `g-0` から `g-96` と `g-px` です。",
        },
        alignment: {
            title: "配置と並び順は Tailwind のものです",
            body: "プラグインは独自の `justify-*`、`items-*`、`order-*` を持ちません。`.row` は普通の flex コンテナなので、Tailwind のユーティリティをそのまま使えます。",
        },
    },
    migrationSummary: {
        eyebrow: "Bootstrap から来た方へ",
        title: "Bootstrap からの移行",
        description:
            "グリッドの使い方は、覚えているままです。違って見えるのは 3 つだけです。レスポンシブなクラスの書き方、スペーシングの数値、ブレークポイントの幅です。",
        cards: [
            {
                title: "変わらないもの",
                body: "構造です。`.container`、`.row`、`.col-*`、`.offset-*`、`.row-cols-*`。CSS 変数の名前も `--bs-gutter-x` と `--bs-gutter-y` のままなので、それらを読む独自の CSS もそのまま動きます。",
            },
            {
                title: "中置ではなく接頭辞",
                body: "Bootstrap では `col-md-6` と書きます。Tailwind では `md:col-6` と書きます。いちばん多く手を入れる部分ですが、スクリプトで置き換えられます。",
            },
            {
                title: "異なる数値",
                body: "ガターとスペーシングの数値は Tailwind のスケールに従うので、Bootstrap の `g-3` はここでは `g-4` です。ブレークポイントの幅も少し違います。",
            },
        ],
        ctaBody:
            "完全なガイドには、クラスの対応表、ガターのサイズの変化、Bootstrap のブレークポイントに合わせる方法、マークアップを変換するコマンドがあります。",
        ctaButton: "移行ガイドを読む",
    },
    examples: {
        eyebrow: "使い方",
        title: "例",
        description:
            "どの例もその場で動きます。左の HTML を編集すると、入力に合わせてプレビューが更新されます。[Bootstrap のグリッド](https://getbootstrap.com/docs/5.3/layout/grid/)を知っていれば、すぐになじめるはずです。",
        preview: "プレビュー",
        editable: "編集できる HTML",
        reset: "リセット",
        rtl: "RTL",
        previewWidth: "プレビューの幅",
        devices: {
            fit: "パネルに合わせる",
            phone: "スマートフォン、375px",
            tablet: "タブレット、768px",
            desktop: "デスクトップ、1280px",
        },
        previewTitle: "ライブプレビュー: {title}",
        editorLabel: "編集できる HTML、{title}",
        editorLoading: "編集できる HTML、{title}（エディターを読み込み中）",
        items: {
            basic: {
                title: "基本のレイアウト",
                description:
                    "`.container` は内容を中央に寄せ、`.row` はカラムを横に並べ、`.col-*` は使える 12 分割のうちその数だけを占めます。2 つの `col-6` で行を半分に分けられます。",
                tip: "カラムは必ず折り返します。1 行で 12 分割を超えた分は次の行に回るので、カードの一覧に便利です。",
            },
            "equal-and-auto": {
                title: "等幅のカラムと自動幅のカラム",
                description:
                    "何も付けない `.col` は残りの幅を分け合うので、3 つ並べれば 3 つの等幅カラムになります。`.col-auto` は内容に合わせた幅になり、隣の `.col` が残りを使います。",
            },
            responsive: {
                title: "レスポンシブなカラム",
                description:
                    "どのクラスも Tailwind のブレークポイント接頭辞に対応します。まずモバイル向けに `col-12` で始め、大きな画面では `sm:`、`md:`、`lg:` などで幅を変えます。プレビューの上にある幅のボタンで、各ブレークポイントが効く様子を確認できます。",
                tip: "プレビューは本物のビューポートです。隅に幅とブレークポイントが表示され、スマートフォン、タブレット、デスクトップのボタンで切り替えられるので、`md:` と `lg:` はその画面とまったく同じように適用されます。",
            },
            gutters: {
                title: "ガター",
                description:
                    "ガターはカラム同士の間隔です。`.g-*` は両方向、`.gx-*` は横だけ、`.gy-*` は縦だけを設定します。数値は Tailwind のスペーシングスケールから来ているので、`g-4` は `p-4` と同じ段階です。",
                tip: "ガターのクラスは `.row` に付けます。間隔を完全になくすには `g-0` を使います。",
            },
            offset: {
                title: "オフセット",
                description:
                    "`.offset-*` はカラムをその数だけ横にずらします。カラムを中央に寄せたり間隔を空けたりする手早い方法です。オフセットは `lg:offset-3` のようにブレークポイント接頭辞とも併用できます。",
                tip: "オフセットは `margin-inline-start` を使うので、ページが右から左のときも正しい側から押し出します。プレビューの上の RTL ボタンを試してみてください。",
            },
            "row-cols": {
                title: "行ごとのカラム数",
                description:
                    "すべてのカラムが同じ大きさなら、子要素ごとではなく行に 1 度だけ設定します。`.row-cols-1` から `.row-cols-6` は各子要素に等しい幅を与え、`.row-cols-auto` は内容に合わせた幅にします。",
                tip: "ブレークポイントと組み合わせると、画面が大きくなるにつれてカラム数を変えられます。たとえば `row-cols-2 lg:row-cols-3` です。",
            },
            nesting: {
                title: "入れ子",
                description:
                    "カラムの中に別の `.row` を置けます。入れ子の行はそのカラムの中で新しい 12 分割のグリッドを始めるので、必要なだけ何度でも領域を分けられます。",
            },
            "alignment-and-order": {
                title: "配置と並び順",
                description:
                    "`.row` は普通の flex コンテナなので、Tailwind の flexbox ユーティリティがそのまま使えます。`items-*`、`justify-*`、`self-*`、`order-*` などです。プラグインがこれらを再定義することはありません。",
                tip: "`order-2 md:order-1` のような入れ替えはよく使われる手法です。スマートフォンではある順序で積み、大きな画面では逆にします。",
            },
            rtl: {
                title: "右から左",
                description:
                    'コンテナに `dir="rtl"` を付けるか、ページ全体なら `<html>` に付けると、グリッドが右から流れます。アラビア語、ペルシャ語、ヘブライ語など RTL の言語ではこれを使います。',
                tip: "設定は不要です。行のガターは左右対称で、オフセットは論理プロパティを使うので、自動的に反転します。",
            },
        },
    },
    rtl: {
        eyebrow: "知っておくと便利",
        title: "右から左",
        description: '`dir="rtl"` を付けるだけで、グリッドが自分で反転します。設定は何もいりません。',
        wholePage: "ページ全体に",
        oneSection: "1 つのセクションに",
        why: {
            title: "なぜそのまま動くのか",
            body: "オフセットは `margin-inline-start` を使い、行の負のマージンとカラムのパディングも左右対称なので、自動的に反転します。上のどの例でも RTL ボタンで確認できます。",
        },
    },
    faq: {
        eyebrow: "知っておくと便利",
        title: "よくある質問",
        description: "よく寄せられる質問への答えです。",
        items: [
            {
                question: "Tailwind の container を置き換えますか？",
                answer: "いいえ。Tailwind の `container` が引き続きブレークポイントごとの最大幅を決めます。プラグインはその上に、中央寄せとガターを考慮したパディングを加えます。それが不要な場合は `generateContainers` を `false` にします。",
            },
            {
                question: "通常の Tailwind のユーティリティと併用できますか？",
                answer: "はい、それが狙いです。`.row` は flex コンテナなので、`items-center`、`justify-between`、`order-2`、`mt-4` などは、行にもその中のカラムにもいつもどおり適用されます。",
            },
            {
                question: "ライブプレビューがクラスを無視するのはなぜですか？",
                answer: "Tailwind は、ソースファイルの中で見つけたクラスの CSS だけを生成します。自分のプロジェクトではそれが自動で行われます。このページの編集できる例には何でも書けるので、デモではプラグインのすべてのクラスとブレークポイントをあらかじめ生成しています。",
            },
            {
                question: "Tailwind の CDN と一緒に使えますか？",
                answer: "いいえ。CDN のスクリプトは npm からプラグインを読み込めません。Vite、PostCSS、Webpack、Tailwind CLI などのビルド環境を使ってください。",
            },
            {
                question: "どのバージョンに対応していますか？",
                answer: "Tailwind v3.4 と v4 に対応し、Node 18 以降で動作します。パッケージには TypeScript の型つきの ESM と CommonJS のビルドが含まれます。",
            },
            {
                question: "Bootstrap から移行します。どうすればよいですか？",
                answer: "クラス名はよく似ています。`col-md-6` は `md:col-6` になり、ガターの数値は Tailwind のスケールに従います。[移行ガイド](/migrate-from-bootstrap/)に完全な対応表と、マークアップを変換するコマンドがあります。",
            },
        ],
        feedback: {
            title: "バグを見つけた、またはアイデアがありますか？",
            body: "GitHub で[issue を作成](https://github.com/bawerbozdag/tw-bootstrap-grid/issues/new)するか、[プルリクエスト](https://github.com/bawerbozdag/tw-bootstrap-grid/pulls)を送ってください。小さな修正やドキュメントの改善は大歓迎です。",
        },
    },
    guide: {
        breadcrumb: "パンくずリスト",
        breadcrumbCurrent: "Bootstrap からの移行",
        eyebrow: "ガイド",
        h1: "Bootstrap グリッドから Tailwind CSS への移行",
        lead: "レイアウトを Bootstrap のグリッドから Tailwind へ移すのは 5 つのステップで済み、その大半はコマンド 1 つでできます。このガイドでは、何が変わるのか、クラスがどう対応するのか、そしてスクリプトでは代わりにできない数点を説明します。",
        stepsTitle: "5 つのステップで移行する",
        steps: [
            {
                name: "プラグインをインストールする",
                text: "tw-bootstrap-grid をインストールし、Tailwind の設定に登録します。[インストールガイド](/#installation)に Tailwind v3 と v4 のコードがあります。",
            },
            {
                name: "Bootstrap のブレークポイントに合わせる（任意）",
                text: "レイアウトを以前と同じ幅で切り替えたい場合は、Tailwind のスクリーンを 576、768、992、1200、1400px に設定します。下の[ブレークポイント](#breakpoints)を参照してください。",
            },
            {
                name: "クラスの名前を変える",
                text: "作業をコミットしてから、下の [Perl コマンド](#bulk-rename)を実行します。ガターの数値を付け替え、Bootstrap の `col-md-6` を `md:col-6` に変えます。",
            },
            {
                name: "コマンドで直せない部分を直す",
                text: "`mb-3` のようなスペーシングのユーティリティを `mb-4` に変え、Bootstrap の display や flex のユーティリティを Tailwind のものに置き換え、`container-md` のようなクラスを置き換えます。",
            },
            {
                name: "Bootstrap の CSS を外して結果を確認する",
                text: "Bootstrap のスタイルシートを外し、スマートフォン、タブレット、デスクトップの幅でページを見て回ります。",
            },
        ],
        changesTitle: "変わるものと変わらないもの",
        beforeAfterTitle: "同じレイアウトの移行前と移行後",
        bootstrap5: "Bootstrap 5",
        classMappingTitle: "クラスの対応",
        tables: {
            responsive: {
                caption: "レスポンシブなクラス",
                notes: [
                    "Tailwind ではブレークポイントを先頭に、接頭辞として付けます。",
                    "等幅のカラムも同じです。",
                    "",
                    "",
                    "",
                    "数値も変わります。下のガターのサイズを参照してください。",
                    "Bootstrap の xxl は Tailwind では 2xl と呼びます。",
                    "order-* は Tailwind 自身のもので、12 まであります。",
                ],
            },
            gutters: { caption: "ガターのサイズ" },
            utilities: {
                caption: "Tailwind から来るユーティリティ",
                notes: ["", "", "", "", "", "スペーシングのユーティリティもガターと同じようにずれます。"],
            },
            bootstrap: "Bootstrap",
            here: "ここでは",
            notes: "備考",
            size: "サイズ",
        },
        breakpoints: {
            title: "Bootstrap のブレークポイントに合わせる",
            before: "Bootstrap のブレークポイントは 576、768、992、1200、1400px です。Tailwind は 640、768、1024、1280、1536px なので、移行後にレイアウトが少し早く、または遅く切り替わることがあります。それが気になる場合は、Tailwind のスクリーンを Bootstrap の値に設定してください。",
            after: "Tailwind の `container` は、置かれたブレークポイントと同じ幅になるので、最大幅は 576、768、992、1200、1400px になります。Bootstrap の 540、720、960、1140、1320px に近い値ですが、同じではありません。",
        },
        bulk: {
            title: "まとめて名前を変える",
            body: "この Perl コマンドは、ガターの数値を付け替え、`col-md-6` を `md:col-6` に、`col-xxl-4` を `2xl:col-4` に、古い `no-gutters` を `g-0` に変えます。ファイルをその場で書き換えるので、先にコミットしておき、実行後に差分を確認してください。",
            warning: {
                title: "1 回だけ実行し、結果を確認してください",
                body: "2 回目を実行すると、ガターの数値がもう一度付け替えられてしまいます。また、上のクラス名しか知らないため、`mb-3` や `p-3` のようなスペーシングのユーティリティは手作業で直す必要があり、パターンはコメントの中を含め、クラスのように見えるあらゆる文字列に一致します。",
            },
        },
        notIncluded: {
            title: "引き継がれないもの",
            body: "プラグインが追加するのは `.container` と `.container-fluid` だけなので、Bootstrap の `.container-sm`、`.container-md` などのレスポンシブなコンテナは含まれません。必要なら Tailwind の `max-w-*` ユーティリティで作ってください。Bootstrap のそのほかのユーティリティ（display、flex、スペーシング、テキスト）は、上の最後の表のように Tailwind のものに置き換わります。",
        },
        nextTitle: "次に読む",
        next: [
            { title: "設定", body: "ガターのサイズ、ブレークポイント、コンテナをオフにする方法。" },
            { title: "クラスリファレンス", body: "プラグインが追加するすべてのクラスを、まとめて確認できます。" },
            { title: "例", body: "スマートフォン、タブレット、デスクトップのプレビュー付きの、編集できるレイアウト。" },
        ],
    },
};

export default ja;
