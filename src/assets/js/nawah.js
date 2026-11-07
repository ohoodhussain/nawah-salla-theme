/**
 * Nawah additions. No product data lives here: products come from Salla through the Twig templates.
 * The only fixed data is the demo's sample figures, computed from the café product's demo workbook.
 */

const DEMO_BRANCHES = [
    { label: 'كل الفروع', where: 'الذروة في كل الفروع:', peak: '9 مساءً', top: 14, sales: 1253686, orders: 36000, aov: 34.82, margin: 63.8, hours: [2645, 2621, 2609, 2646, 1386, 1426, 1391, 1455, 959, 1706, 2895, 2836, 2824, 2867, 2921, 2813] },
    { label: 'حي الأعمال', where: 'حي الأعمال يزدحم:', peak: '10 صباحًا', top: 3, sales: 407264, orders: 11750, aov: 34.66, margin: 64.1, hours: [1700, 1706, 1644, 1707, 705, 709, 698, 719, 262, 286, 265, 278, 266, 276, 252, 277] },
    { label: 'الحي السكني', where: 'الحي السكني يزدحم:', peak: '4 عصرًا', top: 9, sales: 411425, orders: 11866, aov: 34.67, margin: 64.1, hours: [604, 584, 625, 625, 348, 383, 363, 376, 356, 1122, 1104, 1068, 1081, 1095, 1070, 1062] },
    { label: 'الواجهة البحرية', where: 'الواجهة البحرية تزدحم:', peak: '9 مساءً', top: 14, sales: 434997, orders: 12384, aov: 35.13, margin: 63.4, hours: [341, 331, 340, 314, 333, 334, 330, 360, 341, 298, 1526, 1490, 1477, 1496, 1599, 1474] },
];
const DEMO_SCALE = 2921; // One shared scale, so branches stay comparable.

class NawahDashboardDemo extends HTMLElement {
    connectedCallback() {
        if (this.dataset.ready) return;
        this.dataset.ready = '1';
        this.innerHTML = `
            <div class="nawah-demo">
                <span class="nawah-demo__tag">معاينة ببيانات تجريبية</span>
                <div class="nawah-demo__slicers" role="group" aria-label="اختيار الفرع">
                    ${DEMO_BRANCHES.map((b, i) => `<button type="button" data-i="${i}" aria-pressed="${i === 0}">${b.label}</button>`).join('')}
                </div>
                <div class="nawah-demo__kpis">
                    <div class="nawah-demo__main"><label>إجمالي المبيعات</label><div><b data-k="sales"></b><small>ريال</small></div></div>
                    <div><span>الطلبات</span><b data-k="orders"></b></div>
                    <div><span>متوسط الطلب</span><b data-k="aov"></b></div>
                    <div><span>الهامش</span><b data-k="margin"></b></div>
                </div>
                <div>
                    <div class="nawah-demo__peak" aria-live="polite"><span data-k="where"></span> <em data-k="peak"></em></div>
                    <div class="nawah-demo__bars" dir="ltr" role="img">${DEMO_BRANCHES[0].hours.map(() => '<i></i>').join('')}</div>
                    <div class="nawah-demo__axis" dir="ltr"><span dir="rtl">7 ص</span><span dir="rtl">12 ظ</span><span dir="rtl">5 م</span><span dir="rtl">10 م</span></div>
                </div>
            </div>`;
        this.bars = this.querySelectorAll('.nawah-demo__bars i');
        this.querySelector('.nawah-demo__slicers').addEventListener('click', (event) => {
            const button = event.target.closest('button');
            if (button) this.show(Number(button.dataset.i));
        });
        this.show(0);
    }

    set(key, value) {
        this.querySelector(`[data-k="${key}"]`).textContent = value;
    }

    show(index) {
        const branch = DEMO_BRANCHES[index];
        this.set('sales', branch.sales.toLocaleString('en-US'));
        this.set('orders', branch.orders.toLocaleString('en-US'));
        this.set('aov', branch.aov.toFixed(2));
        this.set('margin', `${branch.margin.toFixed(1)}%`);
        this.set('where', branch.where);
        this.set('peak', branch.peak);
        this.querySelector('.nawah-demo__bars').setAttribute('aria-label', `الطلبات حسب الساعة من 7 صباحًا إلى 10 مساءً، والذروة ${branch.peak}`);
        branch.hours.forEach((value, hour) => {
            this.bars[hour].style.height = `${Math.max(2, (value / DEMO_SCALE) * 100).toFixed(1)}%`;
            this.bars[hour].classList.toggle('is-top', hour === branch.top);
        });
        this.querySelectorAll('.nawah-demo__slicers button').forEach((button) => {
            button.setAttribute('aria-pressed', String(Number(button.dataset.i) === index));
        });
    }
}

class NawahProjectTabs extends HTMLElement {
    connectedCallback() {
        this.addEventListener('click', (event) => {
            const button = event.target.closest('button[data-image]');
            if (!button) return;
            const stage = this.querySelector('[data-stage]');
            stage.src = button.dataset.image;
            stage.alt = button.dataset.title;
            this.querySelectorAll('button[data-image]').forEach((other) => {
                other.setAttribute('aria-pressed', String(other === button));
            });
        });
    }
}

if (!customElements.get('nawah-dashboard-demo')) customElements.define('nawah-dashboard-demo', NawahDashboardDemo);
if (!customElements.get('nawah-project-tabs')) customElements.define('nawah-project-tabs', NawahProjectTabs);

/* Phone: show the bootcamp bar once the hero has scrolled away. CSS keeps it off wider screens. */
function initStickyBar() {
    const hero = document.querySelector('[data-nawah-hero]');
    const bar = document.querySelector('[data-nawah-stickybar]');
    if (!hero || !bar || !('IntersectionObserver' in window)) return;
    new IntersectionObserver(([entry]) => {
        bar.hidden = entry.isIntersecting;
    }).observe(hero.querySelector('.nawah-hero__row'));
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initStickyBar);
else initStickyBar();
