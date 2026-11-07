/* ===== أكاديمية نواة: كود JavaScript لثيم رائد (يُلصق في: تصميم المتجر > تخصيص الثيم > JS) =====
 * لا توجد بيانات منتجات هنا: الاسم والسعر والخصم والرابط تُسحب من سلة عند كل زيارة.
 * لتغيير نص أو منتج، عدّلي قسم NAWAH فقط.
 */
(function () {
  var NAWAH = {
    bootcampId: 1510922975,          // منتج المعسكر في سلة
    shelfIds: [941992584, 1239450488], // المنتجات في قسم الموارد
    cafeId: 941992584,               // المنتج الذي تظهر فيه تجربة اللوحة
    shortName: 'معسكر تحليل البيانات',
    eyebrow: 'برنامج تحويل مهني مكثف · 7 أسابيع',
    lede: 'من الصفر إلى محلل بيانات: جلسات مسجلة، جلسات 1:1 أسبوعية، مشاريع حقيقية، وشهادة معتمدة.',
    tools: ['Excel', 'Power BI', 'SQL', 'AI'],
    facts: ['الأحد والأربعاء 8 مساءً · أونلاين', 'معتمد CPD · 10 دفعات · +100 خريجة'],
    cta: 'التسجيل في المعسكر',
    more: 'تفاصيل المسار',
    caption: 'نماذج من مشاريع المعسكر، مبنية على بيانات تدريبية.',
    images: {
      main: 'https://cdn.jsdelivr.net/gh/ohoodhussain/nawah-salla-theme@main/src/assets/images/nawah/cafe-window.jpg',
      start: 'https://cdn.jsdelivr.net/gh/ohoodhussain/nawah-salla-theme@main/src/assets/images/nawah/hr-panel.jpg',
      end: 'https://cdn.jsdelivr.net/gh/ohoodhussain/nawah-salla-theme@main/src/assets/images/nawah/voltedge.jpg',
      workforce: 'https://cdn.jsdelivr.net/gh/ohoodhussain/nawah-salla-theme@main/src/assets/images/nawah/hr-workforce.jpg'
    },
    programTitle: '7 أسابيع تحوّل حياتك المهنية',
    weeks: [
      ['1. أساسيات Excel', 'تنظيف البيانات، Pivot Tables، وتصميم الداشبورد'],
      ['2. Power BI و DAX', 'Power Query، Data Model، والـ KPIs'],
      ['3. داشبوردات Power BI', 'UX، Storytelling، وتحليل دوران الموظفين'],
      ['4. SQL من الألف إلى الياء', 'JOINS، Subqueries، وأسئلة المقابلات'],
      ['5. الذكاء الاصطناعي للمحللين', 'ChatGPT و Claude، وكتابة الصيغ بالـ AI'],
      ['6. بناء البورتفوليو', 'Case Studies، و Notion و GitHub'],
      ['7. إطلاق المسيرة المهنية', 'LinkedIn، استراتيجية التوظيف، وخطة 30 يوم']
    ],
    projects: [
      ['main', 'لوحة مبيعات الكوفي شوب', 'Excel', 'مبيعات سلسلة مقاهي بثلاثة فروع خلال 2025، من الأشهر والساعات إلى هامش كل فئة.'],
      ['end', 'لوحة مبيعات VoltEdge', 'Power BI', 'ثلاث صفحات: نظرة عامة على المبيعات، المنتجات والفئات، والعملاء والمناطق.'],
      ['workforce', 'تحليل الموارد البشرية', 'Power BI', 'لوحتان: القوى العاملة، وتحليل مغادرة الموظفين.']
    ],
    pillars: [
      ['+14 جلسة مسجلة', 'Excel و Power BI و DAX و SQL و AI، بمحتوى منظم.'],
      ['7 جلسات 1:1 أسبوعية', '45 دقيقة مع عهود مباشرة لمراجعة المشاريع والأهداف.'],
      ['5 مشاريع حقيقية', 'Sales و HR و E-Commerce و AI Churn ومشروع التخرج.'],
      ['شهادة إتمام معتمدة', 'بعد استيفاء جميع متطلبات البرنامج.'],
      ['البورتفوليو والمسار المهني', 'LinkedIn والسيرة الذاتية واستراتيجية البحث الوظيفي والمقابلات.'],
      ['وحدة AI في تحليل البيانات', 'ChatGPT و Claude للتحليل، ومكتبة Prompts.']
    ],
    shelfTitle: 'موارد جاهزة للتطبيق',
    shelfText: 'قوالب وخدمات لتحليل البيانات، للتدريب أو للاستخدام في الشغل مباشرة.',
    demoTitle: 'التجربة قبل الشراء',
    demoText: 'اختيار الفرع يغيّر الأرقام والرسم. هذي معاينة على الويب ببيانات تجريبية، والمنتج نفسه ملف Excel.',
    demoLink: 'تفاصيل لوحة مبيعات المقهى'
  };

  // Sample figures computed from the café product's demo workbook. Hours run 7:00 to 22:00.
  var DEMO = [
    { label: 'كل الفروع', where: 'الذروة في كل الفروع:', peak: '9 مساءً', top: 14, sales: 1253686, orders: 36000, aov: 34.82, margin: 63.8, hours: [2645, 2621, 2609, 2646, 1386, 1426, 1391, 1455, 959, 1706, 2895, 2836, 2824, 2867, 2921, 2813] },
    { label: 'حي الأعمال', where: 'حي الأعمال يزدحم:', peak: '10 صباحًا', top: 3, sales: 407264, orders: 11750, aov: 34.66, margin: 64.1, hours: [1700, 1706, 1644, 1707, 705, 709, 698, 719, 262, 286, 265, 278, 266, 276, 252, 277] },
    { label: 'الحي السكني', where: 'الحي السكني يزدحم:', peak: '4 عصرًا', top: 9, sales: 411425, orders: 11866, aov: 34.67, margin: 64.1, hours: [604, 584, 625, 625, 348, 383, 363, 376, 356, 1122, 1104, 1068, 1081, 1095, 1070, 1062] },
    { label: 'الواجهة البحرية', where: 'الواجهة البحرية تزدحم:', peak: '9 مساءً', top: 14, sales: 434997, orders: 12384, aov: 35.13, margin: 63.4, hours: [341, 331, 340, 314, 333, 334, 330, 360, 341, 298, 1526, 1490, 1477, 1496, 1599, 1474] }
  ];
  var SCALE = 2921;

  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function money(v) { try { return salla.money(v); } catch (e) { return Number(v).toLocaleString('en-US') + ' ر.س'; } }
  function priceOf(p) { return p.is_on_sale ? p.sale_price : (p.starting_price || p.price); }
  function priceHtml(p) {
    if (p.price == null) return '';
    return p.is_on_sale ? '<b>' + money(p.sale_price) + '</b> <s>' + money(p.regular_price) + '</s>' : '<b>' + money(priceOf(p)) + '</b>';
  }
  var BOWL = '<svg viewBox="10 26 80 50"><path d="M10 36A40 40 0 0 0 90 36H73A23 23 0 0 1 27 36Z" fill="#0C2A38" stroke="#1E4A58" stroke-width="0.25"></path><circle cx="50" cy="36" r="10" fill="#18A57A"></circle></svg>';

  function demoHtml() {
    return '<div class="nawah-demo"><span class="nawah-demo__tag">معاينة ببيانات تجريبية</span>' +
      '<div class="nawah-demo__slicers" role="group" aria-label="اختيار الفرع">' + DEMO.map(function (b, i) { return '<button type="button" data-i="' + i + '" aria-pressed="' + (i === 0) + '">' + b.label + '</button>'; }).join('') + '</div>' +
      '<div class="nawah-demo__kpis"><div class="nawah-demo__main"><label>إجمالي المبيعات</label><div><b data-k="sales"></b><small>ريال</small></div></div><div><span>الطلبات</span><b data-k="orders"></b></div><div><span>متوسط الطلب</span><b data-k="aov"></b></div><div><span>الهامش</span><b data-k="margin"></b></div></div>' +
      '<div><div class="nawah-demo__peak" aria-live="polite"><span data-k="where"></span> <em data-k="peak"></em></div><div class="nawah-demo__bars" dir="ltr" role="img">' + DEMO[0].hours.map(function () { return '<i></i>'; }).join('') + '</div>' +
      '<div class="nawah-demo__axis" dir="ltr"><span dir="rtl">7 ص</span><span dir="rtl">12 ظ</span><span dir="rtl">5 م</span><span dir="rtl">10 م</span></div></div></div>';
  }
  function wireDemo(root) {
    var bars = root.querySelectorAll('.nawah-demo__bars i');
    function set(k, v) { root.querySelector('[data-k="' + k + '"]').textContent = v; }
    function show(i) {
      var d = DEMO[i];
      set('sales', d.sales.toLocaleString('en-US')); set('orders', d.orders.toLocaleString('en-US')); set('aov', d.aov.toFixed(2)); set('margin', d.margin.toFixed(1) + '%'); set('where', d.where); set('peak', d.peak);
      root.querySelector('.nawah-demo__bars').setAttribute('aria-label', 'الطلبات حسب الساعة من 7 صباحًا إلى 10 مساءً، والذروة ' + d.peak);
      d.hours.forEach(function (v, h) { bars[h].style.height = Math.max(2, v / SCALE * 100).toFixed(1) + '%'; bars[h].classList.toggle('is-top', h === d.top); });
      root.querySelectorAll('.nawah-demo__slicers button').forEach(function (b) { b.setAttribute('aria-pressed', String(Number(b.dataset.i) === i)); });
    }
    root.querySelector('.nawah-demo__slicers').addEventListener('click', function (e) { var b = e.target.closest('button'); if (b) show(Number(b.dataset.i)); });
    show(0);
  }

  function heroHtml(p) {
    var buyText = esc(NAWAH.cta);
    return '<section class="nawah-hero" data-nawah-hero><div class="container nawah-hero__row"><div class="nawah-hero__copy">' +
      '<div class="nawah-eyebrow">' + esc(NAWAH.eyebrow) + '</div>' +
      '<h2 class="nawah-hero__title"><a href="' + esc(p.url) + '" data-nawah-link>' + esc(NAWAH.shortName || p.name) + '</a></h2>' +
      '<p class="nawah-hero__lede">' + esc(NAWAH.lede) + '</p>' +
      '<ul class="nawah-tools">' + NAWAH.tools.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul>' +
      '<div class="nawah-facts">' + NAWAH.facts.map(function (f) { return '<span>' + esc(f) + '</span>'; }).join('') + '</div>' +
      '<div class="nawah-buy"><div class="nawah-price" data-nawah-price>' + priceHtml(p) + '</div>' +
      '<a class="nawah-btn nawah-btn--primary nawah-btn--lg" href="' + esc(p.url) + '" data-nawah-link>' + buyText + '</a>' +
      '<a class="nawah-btn nawah-btn--ghost nawah-hero__more" href="#nawah-program">' + esc(NAWAH.more) + '</a></div></div>' +
      '<div class="nawah-hero__visual"><div class="nawah-collage" aria-hidden="true">' + BOWL +
      '<img class="nawah-collage__end" loading="lazy" alt="" src="' + NAWAH.images.end + '">' +
      '<img class="nawah-collage__start" loading="lazy" alt="" src="' + NAWAH.images.start + '">' +
      '<img class="nawah-collage__main" alt="" src="' + NAWAH.images.main + '"></div>' +
      '<p class="nawah-note nawah-collage__cap">' + esc(NAWAH.caption) + '</p></div></div>' +
      '<div class="nawah-stickybar" data-nawah-stickybar hidden><span class="nawah-stickybar__price" data-nawah-sticky-price>' + (p.price == null ? '' : money(priceOf(p))) + '</span><a class="nawah-btn nawah-btn--primary" href="' + esc(p.url) + '" data-nawah-link>' + buyText + '</a></div></section>';
  }

  function programHtml(p) {
    var first = NAWAH.projects[0];
    return '<section class="nawah-program" id="nawah-program"><div class="container nawah-program__in">' +
      '<h2 class="nawah-title">' + esc(NAWAH.programTitle) + '</h2>' +
      '<ol class="nawah-track">' + NAWAH.weeks.map(function (w) { return '<li><div class="nawah-track__node"><i></i><u></u></div><div><b>' + esc(w[0]) + '</b><span>' + esc(w[1]) + '</span></div></li>'; }).join('') + '</ol>' +
      '<div class="nawah-showcase" data-nawah-tabs><div class="nawah-showcase__stage"><img data-stage loading="lazy" src="' + NAWAH.images[first[0]] + '" alt="' + esc(first[1]) + '"></div>' +
      '<div class="nawah-showcase__tabs" role="group">' + NAWAH.projects.map(function (pr, i) { return '<button type="button" aria-pressed="' + (i === 0) + '" data-image="' + NAWAH.images[pr[0]] + '" data-title="' + esc(pr[1]) + '"><b>' + esc(pr[1]) + ' <em>' + esc(pr[2]) + '</em></b><span>' + esc(pr[3]) + '</span></button>'; }).join('') + '</div></div>' +
      '<div class="nawah-pillars">' + NAWAH.pillars.map(function (x) { return '<div><h3>' + esc(x[0]) + '</h3><p>' + esc(x[1]) + '</p></div>'; }).join('') + '</div>' +
      '<div class="nawah-cta"><h3>' + esc(NAWAH.shortName || p.name) + '</h3><div class="nawah-buy"><div class="nawah-price" data-nawah-price>' + priceHtml(p) + '</div><a class="nawah-btn nawah-btn--primary nawah-btn--lg" href="' + esc(p.url) + '" data-nawah-link>' + esc(NAWAH.cta) + '</a></div></div>' +
      '</div></section>';
  }

  function shelfHtml() {
    return '<section class="nawah-shelf"><div class="container nawah-shelf__in"><div><h2 class="nawah-title">' + esc(NAWAH.shelfTitle) + '</h2><p class="nawah-sub">' + esc(NAWAH.shelfText) + '</p></div>' +
      '<div class="nawah-cards" data-nawah-cards></div></div></section>';
  }

  // Salla's own product card, filled with live product data. A list added after page load does not render, so cards are built here.
  function fillCards(root) {
    fetchProducts(NAWAH.shelfIds).then(function (list) {
      NAWAH.shelfIds.forEach(function (id) {
        var p = list.filter(function (x) { return Number(x.id) === id; })[0];
        if (!p) return; // Hidden or removed in Salla: skip it.
        var tag = customElements.get('custom-salla-product-card') ? 'custom-salla-product-card' : 'salla-product-card';
        var card = document.createElement(tag);
        card.product = p;
        if (tag === 'salla-product-card') card.setAttribute('product', JSON.stringify(p));
        root.appendChild(card);
      });
      if (!root.children.length) root.closest('.nawah-shelf').remove();
    }).catch(function () { root.closest('.nawah-shelf').remove(); });
  }

  function demoSectionHtml(cafeUrl) {
    return '<section class="nawah-demo-sec"><div class="container nawah-demo-sec__row"><div class="nawah-demo-sec__copy" data-nawah-demo-copy><h2 class="nawah-title">' + esc(NAWAH.demoTitle) + '</h2><p class="nawah-sub">' + esc(NAWAH.demoText) + '</p>' +
      (cafeUrl ? '<a class="nawah-btn nawah-btn--primary" href="' + esc(cafeUrl) + '">' + esc(NAWAH.demoLink) + '</a>' : '') +
      '</div><div class="nawah-demo-sec__slot" data-nawah-demo>' + demoHtml() + '</div></div></section>';
  }

  function wireTabs(root) {
    root.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-image]'); if (!b) return;
      var stage = root.querySelector('[data-stage]'); stage.src = b.dataset.image; stage.alt = b.dataset.title;
      root.querySelectorAll('button[data-image]').forEach(function (o) { o.setAttribute('aria-pressed', String(o === b)); });
    });
  }

  function wireStickyBar() {
    var hero = document.querySelector('[data-nawah-hero] .nawah-hero__row'), bar = document.querySelector('[data-nawah-stickybar]');
    if (!hero || !bar || !('IntersectionObserver' in window)) return;
    new IntersectionObserver(function (es) { bar.hidden = es[0].isIntersecting; }).observe(hero);
  }

  function fetchProducts(ids) {
    return salla.product.fetch({ source: 'selected', source_value: ids }).then(function (r) { return (r && (r.data || r)) || []; });
  }

  function whenSalla(cb) {
    if (window.salla && typeof salla.onReady === 'function') { salla.onReady(cb); return; }
    var tries = 0, timer = setInterval(function () {
      tries++;
      if (window.salla && typeof salla.onReady === 'function') { clearInterval(timer); salla.onReady(cb); }
      else if (tries > 50) clearInterval(timer);
    }, 200);
  }

  // The sections appear at once, so the page does not jump. Price and links fill in when Salla answers.
  function buildHome() {
    var main = document.querySelector('#main-content') || document.querySelector('main');
    if (!main || main.querySelector('[data-nawah-hero]')) return;
    var placeholder = { url: '#', name: NAWAH.shortName, price: null };
    var wrap = document.createElement('div');
    wrap.className = 'nawah-home';
    wrap.innerHTML = heroHtml(placeholder) + programHtml(placeholder) + shelfHtml() + demoSectionHtml(null);
    main.insertBefore(wrap, main.firstChild);
    document.body.classList.add('nawah-ready');
    wireDemo(wrap.querySelector('[data-nawah-demo]'));
    wireTabs(wrap.querySelector('[data-nawah-tabs]'));
    wireStickyBar();

    // Hidden or removed in Salla, or any error: put the store's own home page back.
    function giveUp() { wrap.remove(); document.body.classList.remove('nawah-ready'); }
    whenSalla(function () {
      fetchProducts([NAWAH.bootcampId, NAWAH.cafeId]).then(function (list) {
        var boot = list.filter(function (p) { return Number(p.id) === NAWAH.bootcampId; })[0];
        var cafe = list.filter(function (p) { return Number(p.id) === NAWAH.cafeId; })[0];
        if (!boot) { giveUp(); return; }
        wrap.querySelectorAll('[data-nawah-link]').forEach(function (a) { a.href = boot.url; });
        wrap.querySelectorAll('[data-nawah-price]').forEach(function (el) { el.innerHTML = priceHtml(boot); });
        var stickyPrice = wrap.querySelector('[data-nawah-sticky-price]');
        if (stickyPrice) stickyPrice.innerHTML = money(priceOf(boot));
        if (cafe) wrap.querySelector('[data-nawah-demo-copy]').insertAdjacentHTML('beforeend', '<a class="nawah-btn nawah-btn--primary" href="' + esc(cafe.url) + '">' + esc(NAWAH.demoLink) + '</a>');
        fillCards(wrap.querySelector('[data-nawah-cards]'));
      }).catch(giveUp);
    });
  }

  function productId() {
    var m = location.pathname.match(/\/p(\d+)(?:$|[/?#])/);
    return m ? Number(m[1]) : null;
  }

  function buildProduct() {
    var id = productId(), anchor = document.querySelector('.container--product-details');
    if (!id || !anchor || document.querySelector('.nawah-extra')) return;
    var html = '';
    if (id === NAWAH.bootcampId) {
      html = '<section class="container nawah-extra"><h2 class="nawah-title">ماذا يشمل المعسكر</h2><ul class="nawah-tools">' + ['Excel', 'Power BI', 'DAX', 'SQL', 'AI'].map(function (t) { return '<li>' + t + '</li>'; }).join('') + '</ul>' +
        '<div class="nawah-pillars">' + NAWAH.pillars.map(function (x) { return '<div><h3>' + esc(x[0]) + '</h3><p>' + esc(x[1]) + '</p></div>'; }).join('') + '</div></section>';
    } else if (id === NAWAH.cafeId) {
      html = '<section class="container nawah-extra"><h2 class="nawah-title">' + esc(NAWAH.demoTitle) + '</h2><p class="nawah-sub">معاينة على الويب ببيانات تجريبية، والمنتج نفسه ملف Excel.</p><div data-nawah-demo>' + demoHtml() + '</div></section>';
    }
    if (!html) return;
    anchor.insertAdjacentHTML('afterend', html);
    var demo = document.querySelector('.nawah-extra [data-nawah-demo]');
    if (demo) wireDemo(demo);
  }

  function start() {
    if (document.body.classList.contains('index')) buildHome();
    if (document.querySelector('.container--product-details')) buildProduct();
  }

  // Runs as soon as the page structure exists, without waiting for Salla to finish loading.
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
