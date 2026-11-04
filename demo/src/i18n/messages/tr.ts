import type { Messages } from "./en";

const tr: Messages = {
    meta: {
        home: {
            title: "tw-bootstrap-grid | Tailwind CSS için Bootstrap grid",
            description:
                "Tailwind CSS'e Bootstrap'in 12 sütunlu grid sistemini ekleyen bir eklenti: row, col, gutter, offset, row-cols ve RTL. Tailwind v3.4 ve v4 ile çalışır.",
            shareTitle: "tw-bootstrap-grid | Tailwind CSS için Bootstrap grid",
            shareDescription:
                "Bootstrap'in 12 sütunlu grid sistemi, Tailwind CSS eklentisi olarak: row, col, gutter, offset, row-cols ve RTL. Tailwind v3.4 ve v4 ile çalışır.",
        },
        migration: {
            title: "Bootstrap Grid'den Tailwind CSS'e Geçiş | tw-bootstrap-grid",
            description:
                "Bootstrap 5 grid'ini Tailwind CSS'e taşıyın: sınıf eşleme tabloları, gutter değişiklikleri, Bootstrap'in breakpoint'leri ve kodunuzu dönüştüren bir Perl komutu.",
            shareTitle: "Bootstrap Grid'den Tailwind CSS'e Geçiş",
            shareDescription:
                "Sınıf eşleme tabloları, gutter boyutlarındaki değişiklikler, Bootstrap'in breakpoint'leri ve kodunuzu dönüştüren bir Perl komutu.",
        },
        imageAlt: "tw-bootstrap-grid: Tailwind için Bootstrap grid. Üç sütunu vurgulanmış, on iki sütunlu bir grid.",
    },
    nav: {
        label: "Bölümler",
        introduction: "Giriş",
        installation: "Kurulum",
        configuration: "Yapılandırma",
        classes: "Sınıflar",
        migration: "Geçiş",
        examples: "Örnekler",
        rtl: "RTL",
        faq: "SSS",
        more: "Daha fazla",
    },
    common: {
        skipToContent: "İçeriğe geç",
        newTab: "(yeni sekmede açılır)",
        copy: "Kopyala",
        copied: "Kopyalandı",
        failed: "Başarısız",
        backToTop: "tw-bootstrap-grid, sayfanın başına dön",
        githubRepo: "GitHub deposu",
        npmPackage: "npm paketi",
        github: "GitHub",
        npm: "npm",
        changelog: "Sürüm notları",
        projectLinks: "Proje bağlantıları",
        switchToLight: "Açık temaya geç",
        switchToDark: "Koyu temaya geç",
        lightTheme: "Açık tema",
        darkTheme: "Koyu tema",
        tailwindVersion: "Tailwind sürümü",
        language: "Dil",
        code: "Kod",
        codeFile: "Kod: {file}",
        installCommand: "Kurulum komutu",
        packageManager: "Paket yöneticisi",
        license: "MIT © {year}",
    },
    versions: { v3Hint: "tailwind.config.js", v4Hint: "CSS içinde @plugin" },
    intro: {
        chip: "Tailwind CSS eklentisi · v{version}",
        titleStart: "Bootstrap grid,",
        titleEnd: "Tailwind için.",
        lead: "Satır ve sütun düşünmeye alışkınsanız, devam edin. tw-bootstrap-grid tanıdık 12 sütunlu grid'i, yani `.row`, `.col-6`, `.offset-2` ve `.g-4` sınıflarını Tailwind'e getirir. RTL desteği vardır ve bileşenlerinizin nasıl görüneceği konusunda hiçbir fikri dayatmaz.",
        getStarted: "Başlayın",
        viewOnGithub: "GitHub'da görüntüle",
        whatYouGet: "Neler sunuyor",
        features: [
            {
                title: "12 sütunlu grid",
                body: "`.row`, `.col`, `.col-auto` ve `.col-1` ile `.col-12` arası sınıflar, tıpkı Bootstrap'teki gibi.",
            },
            {
                title: "Temanızdan gelen gutter'lar",
                body: "`.g-*`, `.gx-*` ve `.gy-*` Tailwind boşluk ölçeğinizi kullanır, böylece tasarımınızın geri kalanıyla uyumlu olur.",
            },
            {
                title: "Offset'ler",
                body: "Bir sütunu ortalamak ya da boşluk bırakmak için `.offset-0` ile `.offset-12` arası sınıflar.",
            },
            {
                title: "Row sütunları",
                body: "`.row-cols-1` ile `.row-cols-6` arası sınıflar ve `.row-cols-auto`, satırdaki tek bir sınıfla tüm çocukların genişliğini belirler.",
            },
            {
                title: "Container'lar",
                body: "Gutter'a duyarlı iç boşluğa sahip `.container` ve `.container-fluid`. Maksimum genişlikler Tailwind'in kendi breakpoint'lerinden gelir.",
            },
            {
                title: "Responsive ve RTL",
                body: 'Her sınıf `md:col-6` gibi Tailwind breakpoint önekleri alır ve `dir="rtl"` ile doğru şekilde yön değiştirir.',
            },
        ],
        note: "Yalnızca yerleşimle ilgilenir: renk, bileşen ya da sıfırlama yoktur. Tailwind'in yerine geçmez, ona ekleme yapar. Bu yüzden aynı sayfada `col-4` ile `flex` kullanmak için iki kez düşünmenize gerek kalmaz.",
    },
    installation: {
        eyebrow: "Başlarken",
        title: "Kurulum",
        description: "Üç adım: paketi kurun, eklentiyi kaydedin, sınıfları kullanmaya başlayın.",
        step1: "Paketi kurun",
        step2: {
            title: "Eklentiyi kaydedin",
            body: "Üst çubuktan Tailwind sürümünüzü seçin, aşağıdaki kod ona göre değişir. Tailwind v4 eklentileri CSS'te, v3 ise yapılandırma dosyasında kaydeder.",
            note: 'CommonJS kullanan bir v3 yapılandırmasında `plugins: [require("tw-bootstrap-grid")]` da çalışır.',
        },
        step3: {
            title: "Sınıfları kullanın",
            body: "Hepsi bu kadar. Sınıfları işaretlemenizde diğer Tailwind sınıfları gibi kullanın. `sm:`, `md:` veya `hover:` ile yapabildiğiniz her şey burada da çalışır.",
        },
        buildStep: {
            title: "Bir derleme adımı gerekir",
            body: "Eklenti Tailwind'in derleyicisinin içinde çalışır (PostCSS, Vite, Webpack, Tailwind CLI…). Eklentileri npm'den yükleyemeyen Tailwind Play CDN betiğiyle çalışamaz.",
        },
    },
    configuration: {
        eyebrow: "Başlarken",
        title: "Yapılandırma",
        description:
            "Varsayılanlar Bootstrap ile aynıdır, bu sayfayı atlayabilirsiniz. Farklı breakpoint'ler ya da gutter boyutları istediğinizde geri dönün.",
        breakpoints: {
            title: "Breakpoint'ler",
            body: "Eklentinin kendi breakpoint'i yoktur. `md:col-6` gibi önekler ve `.container`'ın maksimum genişliği ikisi de Tailwind'den gelir, bu yüzden ekranlarınızı değiştirmek grid'i de değiştirir.",
        },
        gutters: {
            title: "Gutter boyutları",
            body: "Gutter'lar sütunlar arasındaki boşluktur. Varsayılan olarak yatayda `1.5rem`, dikeyde `0`'dır. Hepsi için bir kez ayarlayabilir ya da container'lar ve satırlar için ayrı ayrı belirleyebilirsiniz. v3'te eklentiye seçenekler verirsiniz, v4'te CSS değişkenlerini ayarlarsınız.",
            tableCaption: "Gutter çözümleme sırası",
            priority: "Öncelik",
            cssVariable: "CSS değişkeni",
            option: "Seçenek",
            notes: "Notlar",
            orderNotes: [
                "En belirli değer kazanır.",
                "İkisi için ortak yedek değer.",
                "Bootstrap'in kullandığı varsayılanların aynısı.",
            ],
            defaultVariable: "1.5rem (x) ve 0 (y)",
            defaultOption: "yerleşik varsayılan",
            after: "CSS değişkenleri çalışma anında okunur. Bu yüzden iki sürümde de herhangi bir öğede ezerek yalnızca o bölümün gutter'larını değiştirebilirsiniz. Tek bir satır için `.g-*`, `.gx-*` ve `.gy-*` kullanın.",
        },
        containers: {
            title: "Container'ları kapatın",
            body: "Yalnızca Tailwind'in kendi `container`'ını mı tercih ediyorsunuz? `generateContainers` değerini `false` yapın, eklenti `.container-fluid` ve gutter'a duyarlı iç boşluğu üretmeyi bırakır. Satırlar ve sütunlar etkilenmez.",
        },
        variablesNote: {
            title: "v4'te neden değişkenler?",
            body: "Tailwind v4 eklentiye `generateContainers: false;` gibi basit değerler verebilir, ama `gutters` gibi iç içe nesneler veremez. CSS değişkenleri bu durumu karşılar ve öğe başına ezilebilme avantajı da sunar.",
        },
    },
    classes: {
        eyebrow: "Başvuru",
        title: "Sınıflar",
        description: "Eklentinin eklediği her şey, tek yerde.",
        tableCaption: "{title} sınıfları",
        scrollableTable: "{title}, kaydırılabilir tablo",
        columns: { name: "Sınıf", what: "Ne yapar", notes: "Notlar" },
        groups: [
            {
                title: "Yerleşim",
                rows: [
                    {
                        what: "width: 100%; ortalı; iç boşluk gutter'dan gelir",
                        note: "Maksimum genişlik Tailwind'in breakpoint'lerinden gelir.",
                    },
                    { what: ".container ile aynı", note: "Her breakpoint'te tam genişlik." },
                    {
                        what: "display: flex; flex-wrap: wrap; negatif margin",
                        note: "Dış gutter'ı iptal eder ve çocuklarını yerleştirir.",
                    },
                ],
            },
            {
                title: "Sütunlar",
                rows: [
                    { what: "flex: 1 0 0%", note: "Kalan alanı eşit paylaşır." },
                    { what: "flex: 0 0 auto; width: auto", note: "İçeriğine göre boyutlanır." },
                    { what: "flex: 0 0 auto; width: n / 12", note: "12 dilimden n tanesini kaplar." },
                ],
            },
            {
                title: "Offset'ler ve row sütunları",
                rows: [
                    { what: "margin-inline-start: n / 12", note: "RTL'de otomatik olarak yön değiştirir." },
                    {
                        what: "çocuklar width: 1 / n alır",
                        note: ".row üzerinde ayarlanır, her çocuğa uygulanır.",
                    },
                    { what: "çocuklar width: auto alır", note: "Çocuklar içeriğine göre boyutlanır." },
                ],
            },
            {
                title: "Gutter'lar",
                rows: [
                    { what: "--bs-gutter-x ve --bs-gutter-y", note: "Her iki yön." },
                    { what: "--bs-gutter-x", note: "Yalnızca yatay." },
                    { what: "--bs-gutter-y", note: "Yalnızca dikey." },
                ],
            },
        ],
        responsive: {
            title: "Her şey responsive",
            body: "Yukarıdaki her sınıfa bir breakpoint öneki ekleyin: `md:col-6`, `lg:offset-3`, `sm:row-cols-2`, `xl:g-8`.",
        },
        gutterSteps: {
            title: "Hangi gutter adımları var?",
            body: "`.g-*`, `.gx-*` ve `.gy-*` boşluk temanızdan üretilir. v3'te `theme.spacing` içindeki noktasız her anahtar kullanılır (yani `g-4` var, `g-0.5` yok). v4'te varsayılan ölçek, yani `g-0` ile `g-96` arası ve `g-px`.",
        },
        alignment: {
            title: "Hizalama ve sıralama Tailwind'den gelir",
            body: "Eklenti kendi `justify-*`, `items-*` ya da `order-*` sınıflarını sunmaz. `.row` sıradan bir flex container'dır, bu yüzden Tailwind'in yardımcı sınıfları ona doğrudan uygulanır.",
        },
    },
    migrationSummary: {
        eyebrow: "Bootstrap'ten geliyorsanız",
        title: "Bootstrap'ten geçiş",
        description:
            "Grid hatırladığınız gibi çalışır. Üç şey farklı görünür: responsive sınıfların yazımı, boşluk sayıları ve breakpoint genişlikleri.",
        cards: [
            {
                title: "Değişmeyenler",
                body: "Yapı aynı: `.container`, `.row`, `.col-*`, `.offset-*`, `.row-cols-*`. CSS değişkenlerinin adları bile aynı kalır, `--bs-gutter-x` ve `--bs-gutter-y`. Bu yüzden onları okuyan özel CSS çalışmaya devam eder.",
            },
            {
                title: "Ön ek, ara ek değil",
                body: "Bootstrap `col-md-6` yazar. Tailwind `md:col-6` yazar. En çok dokunacağınız değişiklik budur ve bir betik bunu sizin yerinize yapabilir.",
            },
            {
                title: "Farklı sayılar",
                body: "Gutter ve boşluk sayıları Tailwind ölçeğini izler, yani Bootstrap'in `g-3`'ü burada `g-4`'tür. Breakpoint genişlikleri de biraz farklıdır.",
            },
        ],
        ctaBody:
            "Tam rehberde sınıf eşleme tabloları, gutter boyutlarındaki değişiklikler, Bootstrap'in breakpoint'lerini nasıl eşleyeceğiniz ve kodunuzu dönüştüren bir komut var.",
        ctaButton: "Geçiş rehberini okuyun",
    },
    examples: {
        eyebrow: "Kullanım",
        title: "Örnekler",
        description:
            "Her örnek canlıdır. Soldaki HTML'i düzenleyin, önizleme siz yazdıkça güncellenir. [Bootstrap grid](https://getbootstrap.com/docs/5.3/layout/grid/) sistemini biliyorsanız bu size tanıdık gelecek.",
        preview: "Önizleme",
        editable: "Düzenlenebilir HTML",
        reset: "Sıfırla",
        rtl: "RTL",
        previewWidth: "Önizleme genişliği",
        devices: {
            fit: "Panele sığdır",
            phone: "Telefon, 375px",
            tablet: "Tablet, 768px",
            desktop: "Masaüstü, 1280px",
        },
        previewTitle: "Canlı önizleme: {title}",
        editorLabel: "Düzenlenebilir HTML, {title}",
        editorLoading: "Düzenlenebilir HTML, {title} (düzenleyici yükleniyor)",
        items: {
            basic: {
                title: "Temel bir yerleşim",
                description:
                    "`.container` içeriğinizi ortalar, `.row` sütunları yan yana dizer ve her `.col-*` 12 dilimden o kadarını kaplar. İki `col-6` sütunu satırı ikiye böler.",
                tip: "Sütunlar her zaman alt satıra geçer. Tek satırda 12 dilimi aşan her şey bir alt satıra iner, bu da kart listeleri için kullanışlıdır.",
            },
            "equal-and-auto": {
                title: "Eşit ve otomatik genişlikli sütunlar",
                description:
                    "Yalın bir `.col` kalan alanı paylaşır, yani üçü yan yana üç eşit sütun olur. `.col-auto` içeriğine göre boyutlanır, yanındaki `.col` da geri kalanı alır.",
            },
            responsive: {
                title: "Responsive sütunlar",
                description:
                    "Her sınıf Tailwind breakpoint öneklerini alır. Önce mobil için `col-12` ile başlayın, sonra daha büyük ekranlarda `sm:`, `md:`, `lg:` ve benzerleriyle genişliği değiştirin. Her breakpoint'in devreye girişini görmek için önizlemenin üstündeki genişlik düğmelerini kullanın.",
                tip: "Önizleme gerçek bir viewport'tur. Köşede genişliği ve breakpoint'i gösterir, telefon, tablet ve masaüstü düğmeleri onu değiştirir. Böylece `md:` ve `lg:` o ekranda nasıl uygulanacaksa öyle uygulanır.",
            },
            gutters: {
                title: "Gutter'lar",
                description:
                    "Gutter'lar sütunlar arasındaki boşluklardır. `.g-*` iki yönü, `.gx-*` yalnızca yatayı, `.gy-*` yalnızca dikeyi ayarlar. Sayılar Tailwind boşluk ölçeğinden gelir, yani `g-4` ile `p-4` aynı adımdır.",
                tip: "Gutter sınıflarını `.row` üzerine koyun. Boşlukları tamamen kaldırmak için `g-0` kullanın.",
            },
            offset: {
                title: "Offset'ler",
                description:
                    "`.offset-*` bir sütunu o kadar dilim kadar öteler. Bir sütunu ortalamanın ya da boşluk bırakmanın hızlı yoludur. Offset'ler `lg:offset-3` gibi breakpoint öneklerini de kabul eder.",
                tip: "Offset'ler `margin-inline-start` kullanır, bu yüzden sayfa sağdan sola olduğunda doğru taraftan iterler. Önizlemenin üstündeki RTL düğmesini deneyin.",
            },
            "row-cols": {
                title: "Row sütunları",
                description:
                    "Tüm sütunlar aynı boyuttaysa bunu her çocuğa değil, satıra bir kez yazın. `.row-cols-1` ile `.row-cols-6` her çocuğa eşit pay verir, `.row-cols-auto` ise içeriğe göre boyutlandırır.",
                tip: "Ekran büyüdükçe sütun sayısını değiştirmek için breakpoint'lerle birleştirin, örneğin `row-cols-2 lg:row-cols-3`.",
            },
            nesting: {
                title: "İç içe yerleşim",
                description:
                    "Bir sütun kendi `.row`'unu barındırabilir. İç içe satır, sütunun içinde yeni bir 12 dilimlik grid başlatır, böylece bir alanı istediğiniz kadar bölebilirsiniz.",
            },
            "alignment-and-order": {
                title: "Hizalama ve sıralama",
                description:
                    "`.row` sıradan bir flex container'dır, bu yüzden Tailwind'in kendi flexbox yardımcı sınıfları ona uygulanır: `items-*`, `justify-*`, `self-*` ve `order-*`. Eklenti bunları yeniden tanımlamaz.",
                tip: "`order-2 md:order-1` tarzı yer değiştirmeler yaygın bir kalıptır: telefonda bir sırayla dizin, büyük ekranlarda ters çevirin.",
            },
            rtl: {
                title: "Sağdan sola",
                description:
                    'Container\'a ya da tüm sayfa için `<html>` üzerine `dir="rtl"` verin, grid sağdan akmaya başlar. Arapça, Farsça, İbranice ve diğer RTL diller için kullanılacak olan budur.',
                tip: "Yapılandırılacak bir şey yok. Satırın gutter'ları simetriktir ve offset'ler mantıksal özellikler kullanır, bu yüzden kendiliğinden yön değiştirirler.",
            },
        },
    },
    rtl: {
        eyebrow: "Bilmekte fayda var",
        title: "Sağdan sola",
        description: '`dir="rtl"` ekleyin, grid kendini yansıtır. Yapılandırılacak bir şey yoktur.',
        wholePage: "Tüm sayfa için",
        oneSection: "Tek bir bölüm için",
        why: {
            title: "Neden kendiliğinden çalışıyor",
            body: "Offset'ler `margin-inline-start` kullanır, satırın negatif margin'leri ve sütunların iç boşluğu da simetriktir, bu yüzden kendiliğinden yön değiştirirler. Görmek için yukarıdaki herhangi bir örnekte RTL düğmesini kullanın.",
        },
    },
    faq: {
        eyebrow: "Bilmekte fayda var",
        title: "Sıkça sorulan sorular",
        description: "En çok sorulan soruların yanıtları.",
        items: [
            {
                question: "Tailwind'in container'ının yerine mi geçiyor?",
                answer: "Hayır. Tailwind'in `container`'ı breakpoint başına maksimum genişlikleri sağlamaya devam eder. Eklenti bunun üstüne ortalama ve gutter'a duyarlı iç boşluk ekler. İstemiyorsanız `generateContainers` değerini `false` yapın.",
            },
            {
                question: "Normal Tailwind yardımcı sınıflarıyla karıştırabilir miyim?",
                answer: "Evet, amaç tam olarak bu. `.row` bir flex container'dır, bu yüzden `items-center`, `justify-between`, `order-2`, `mt-4` ve diğerleri ona ve sütunlarına her zamanki gibi uygulanır.",
            },
            {
                question: "Canlı önizleme neden bir sınıfı yok sayıyor?",
                answer: "Tailwind yalnızca kaynak dosyalarınızda bulabildiği sınıflar için CSS üretir. Kendi projenizde bu otomatiktir. Bu sayfadaki düzenlenebilir örnekler her şeyi içerebileceği için demo, eklentinin her sınıfını ve breakpoint'ini önceden üretir.",
            },
            {
                question: "Tailwind CDN ile kullanabilir miyim?",
                answer: "Hayır. CDN betiği eklentileri npm'den yükleyemez. Vite, PostCSS, Webpack ya da Tailwind CLI gibi bir derleme düzeni kullanın.",
            },
            {
                question: "Hangi sürümler destekleniyor?",
                answer: "Tailwind v3.4 ve v4, Node 18 veya daha yenisinde. Paket, TypeScript tipleriyle birlikte ESM ve CommonJS derlemeleri sunar.",
            },
            {
                question: "Bootstrap'ten geçiyorum. Nasıl taşırım?",
                answer: "Sınıf adları birbirine yakın: `col-md-6` `md:col-6` olur ve gutter sayıları Tailwind ölçeğini izler. [Geçiş rehberinde](/migrate-from-bootstrap/) tam eşleme ve kodunuzu dönüştüren bir komut var.",
            },
        ],
        feedback: {
            title: "Bir hata mı buldunuz ya da bir fikriniz mi var?",
            body: "GitHub'da [bir issue açın](https://github.com/bawerbozdag/tw-bootstrap-grid/issues/new) ya da bir [pull request](https://github.com/bawerbozdag/tw-bootstrap-grid/pulls) gönderin. Küçük düzeltmeler ve dokümantasyon iyileştirmeleri çok makbuldür.",
        },
    },
    guide: {
        breadcrumb: "Sayfa yolu",
        breadcrumbCurrent: "Bootstrap'ten geçiş",
        eyebrow: "Rehber",
        h1: "Bootstrap Grid'inden Tailwind CSS'e Geçiş",
        lead: "Bir yerleşimi Bootstrap'in grid'inden Tailwind'e taşımak beş adım sürer ve işin çoğu tek bir komutla halledilir. Bu rehber nelerin değiştiğini, sınıfların nasıl eşlendiğini ve bir betiğin sizin yerinize yapamayacağı birkaç şeyi anlatır.",
        stepsTitle: "Beş adımda geçiş",
        steps: [
            {
                name: "Eklentiyi kurun",
                text: "tw-bootstrap-grid'i kurun ve Tailwind yapılandırmanıza kaydedin. [Kurulum rehberinde](/#installation) Tailwind v3 ve v4 için kodlar var.",
            },
            {
                name: "Bootstrap'in breakpoint'lerini eşleyin (isteğe bağlı)",
                text: "Yerleşimlerin eskisiyle aynı genişliklerde değişmesini istiyorsanız Tailwind'in ekranlarını 576, 768, 992, 1200 ve 1400px olarak ayarlayın. Aşağıdaki [breakpoint'lere](#breakpoints) bakın.",
            },
            {
                name: "Sınıfları yeniden adlandırın",
                text: "Çalışmanızı commit edin, sonra aşağıdaki [Perl komutunu](#bulk-rename) çalıştırın. Gutter'ları yeniden numaralandırır ve Bootstrap'in `col-md-6` sınıfını `md:col-6` yapar.",
            },
            {
                name: "Komutun yapamadıklarını düzeltin",
                text: "`mb-3` gibi boşluk sınıflarını `mb-4` yapın, Bootstrap'in display ve flex sınıflarını Tailwind'inkilerle değiştirin ve `container-md` gibi sınıfları değiştirin.",
            },
            {
                name: "Bootstrap'in CSS'ini kaldırın ve sonucu kontrol edin",
                text: "Bootstrap stil dosyasını çıkarın, sonra sayfalarınıza telefon, tablet ve masaüstü genişliklerinde göz atın.",
            },
        ],
        changesTitle: "Neler değişiyor, neler değişmiyor",
        beforeAfterTitle: "Aynı yerleşim, önce ve sonra",
        bootstrap5: "Bootstrap 5",
        classMappingTitle: "Sınıf eşleme",
        tables: {
            responsive: {
                caption: "Responsive sınıflar",
                notes: [
                    "Tailwind breakpoint'i öne, ön ek olarak koyar.",
                    "Eşit genişlikli sütun için de aynı.",
                    "",
                    "",
                    "",
                    "Sayı da değişir, aşağıdaki gutter boyutlarına bakın.",
                    "Bootstrap'in xxl'i Tailwind'de 2xl olarak adlandırılır.",
                    "order-* Tailwind'e aittir ve 12'ye kadar gider.",
                ],
            },
            gutters: { caption: "Gutter boyutları" },
            utilities: {
                caption: "Tailwind'den gelen yardımcı sınıflar",
                notes: ["", "", "", "", "", "Boşluk yardımcı sınıfları da gutter'larla aynı şekilde kayar."],
            },
            bootstrap: "Bootstrap",
            here: "Burada",
            notes: "Notlar",
            size: "Boyut",
        },
        breakpoints: {
            title: "Bootstrap'in breakpoint'lerini eşleyin",
            before: "Bootstrap'in breakpoint'leri 576, 768, 992, 1200 ve 1400px'tir. Tailwind'inkiler 640, 768, 1024, 1280 ve 1536px'tir, bu yüzden bir yerleşim geçişten sonra biraz daha erken ya da geç değişebilir. Bu önemliyse Tailwind'in ekranlarını Bootstrap'in değerlerine ayarlayın.",
            after: "Tailwind'in `container`'ı üzerinde durduğu breakpoint kadar geniştir, bu yüzden maksimum genişlikleri 576, 768, 992, 1200 ve 1400px olur. Bu, Bootstrap'in 540, 720, 960, 1140 ve 1320px değerlerine yakındır ama birebir aynı değildir.",
        },
        bulk: {
            title: "Toplu yeniden adlandırma",
            body: "Bu Perl komutu gutter'ları yeniden numaralandırır, `col-md-6` sınıfını `md:col-6`, `col-xxl-4` sınıfını `2xl:col-4` ve eski `no-gutters` sınıfını `g-0` yapar. Dosyaları yerinde değiştirir, bu yüzden önce commit edin, sonra farkı (diff) okuyun.",
            warning: {
                title: "Bir kez çalıştırın ve sonucu kontrol edin",
                body: "İkinci kez çalıştırmak gutter'ları yeniden numaralandırır. Ayrıca yalnızca yukarıdaki sınıf adlarını bilir, bu yüzden `mb-3` ya da `p-3` gibi boşluk sınıfları elle düzeltilmelidir. Desen, yorum satırları dahil sınıfa benzeyen her metne uyar.",
            },
        },
        notIncluded: {
            title: "Taşınmayanlar",
            body: "Eklenti yalnızca `.container` ve `.container-fluid` ekler, bu yüzden Bootstrap'in `.container-sm`, `.container-md` ve diğer responsive container'ları dahil değildir. İhtiyacınız olursa Tailwind'in `max-w-*` yardımcı sınıflarıyla kurun. Bootstrap'in diğer yardımcı sınıfları (display, flex, boşluk, metin) yukarıdaki son tabloda olduğu gibi Tailwind'inkilerle değiştirilir.",
        },
        nextTitle: "Devam edin",
        next: [
            { title: "Yapılandırma", body: "Gutter boyutları, breakpoint'ler ve container'ları kapatma." },
            { title: "Sınıf başvurusu", body: "Eklentinin eklediği her sınıf, tek yerde." },
            { title: "Örnekler", body: "Telefon, tablet ve masaüstü önizlemeli düzenlenebilir yerleşimler." },
        ],
    },
};

export default tr;
