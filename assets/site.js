/* ============================================================
   كل الكلام والأرقام في الملف ده — عدّل هنا والموقع كله يتغير
   ============================================================ */

/* (ب) النتيجة الكبيرة اللي بتتغير مع كل فتحة للصفحة */
const HIGHLIGHTS = [
  { fig:'4.64', unit:'مليون جنيه',
    what:'مبيعات لبراند فاشون في شهر واحد',
    meta:'بإنفاق إعلاني 350.8 ألف  ·  عائد 13.2 ضعف  ·  6,005 أوردر' },
  { fig:'2.57', unit:'مليون جنيه',
    what:'مبيعات لبراند فاشون في شهر واحد',
    meta:'بإنفاق إعلاني 224 ألف  ·  عائد 11.5 ضعف  ·  3,914 أوردر' },
  { fig:'27.8', unit:'ضعف عائد',
    what:'أعلى عائد على الإنفاق في يوم واحد',
    meta:'4.1 ألف جنيه رجّعوا 114.6 ألف  ·  تحويل المتجر 4.25%' },
  { fig:'1.21', unit:'مليون جنيه',
    what:'مبيعات في 9 أيام لبراند فاشون',
    meta:'بإنفاق 68.5 ألف  ·  عائد 17.7 ضعف  ·  1,300 أوردر' },
  { fig:'1.59', unit:'مليون جنيه',
    what:'مبيعات متجر في 3 أسابيع',
    meta:'1,763 أوردر  ·  الأوردرات زادت 215%  ·  الزيارات زادت 157%' }
];

/* كيس ستادي الإعلانات — كل كارت حملة أو فترة لوحدها */
const CASES = [
  { dark:true, tag:'براند فاشون', per:'يونيو 2026',
    title:'عائد 13.2 ضعف في شهر بإنفاق 350 ألف',
    body:'صرفت 350.8 ألف جنيه ورجعوا 4.64 مليون، 6,005 أوردر بـ 58 جنيه للأوردر. والمتجر نفسه سجّل 4.88 مليون في نفس الشهر.',
    kpis:[['13.2x','عائد على الإنفاق'],['4.64M','جنيه مبيعات'],['6,005','أوردر'],['58','جنيه للأوردر']],
    shots:['ads-june-meta.jpg','ads-june-store.jpg'] },

  { dark:false, tag:'براند فاشون', per:'يوم واحد',
    title:'عائد 27.8 ضعف في يوم واحد',
    body:'صرفت 4.1 ألف جنيه في اليوم ورجعوا 114.6 ألف. ولوحة المتجر في نفس اليوم بتقول 111 أوردر ومعدل تحويل 4.25%.',
    kpis:[['27.8x','عائد على الإنفاق'],['114.6K','جنيه مبيعات'],['125','أوردر'],['4.25%','تحويل المتجر']],
    shots:['ads-day-meta.jpg','ads-day-store.jpg'] },

  { dark:false, tag:'براند فاشون', per:'يوم واحد · 3 حملات',
    title:'عائد 18.3 ضعف على تلات حملات',
    body:'تلات حملات شغالة مع بعض في يوم: صرفت 12 ألف ورجعوا 219.4 ألف، 218 أوردر بـ 55 جنيه للأوردر. وأحسن حملة فيهم وصلت 20.9.',
    kpis:[['18.3x','عائد على الإنفاق'],['219.4K','جنيه مبيعات'],['218','أوردر'],['55','جنيه للأوردر']],
    shots:['ads-3campaigns.jpg'] },

  { dark:true, tag:'براند فاشون', per:'27 مايو – 4 يونيو',
    title:'عائد 17.7 ضعف في 9 أيام',
    body:'صرفت 68.5 ألف ورجعوا 1.21 مليون، و1,300 أوردر. والأدسِتس لوحدها في نفس الفترة كانت بين 11 و77 ضعف.',
    kpis:[['17.7x','عائد على الإنفاق'],['1.21M','جنيه مبيعات'],['1,300','أوردر'],['53','جنيه للأوردر']],
    shots:['ads-9days.jpg'] },

  { dark:true, tag:'براند فاشون', per:'يوم واحد · الحساب كله',
    title:'عائد 13.5 ضعف على الحساب كله في يوم',
    body:'صرفت 15 ألف على الحساب كله في يوم ورجعوا 203.8 ألف، 234 أوردر. والمتجر سجّل 230 أوردر و231.4 ألف في نفس اليوم — الرقمين مطابقين.',
    kpis:[['13.5x','عائد على الإنفاق'],['203.8K','جنيه مبيعات'],['234','أوردر'],['230','أوردر في المتجر']],
    shots:['ads-account-day.jpg','ads-store-day.jpg'] },

  { dark:false, tag:'براند فاشون', per:'أغسطس 2026',
    title:'عائد 11.5 ضعف والتحويل زاد 52%',
    body:'صرفت 224 ألف ورجعوا 2.57 مليون، 3,914 أوردر. وفي المتجر: 2.66 مليون و3,759 أوردر ومعدل تحويل 3.63% — بزيادة 52% عن الشهر اللي قبله.',
    kpis:[['11.5x','عائد على الإنفاق'],['2.57M','جنيه مبيعات'],['3,914','أوردر'],['3.63%','تحويل المتجر']],
    shots:['ads-august-meta.jpg','ads-august-store.jpg'] },

  { dark:false, tag:'براند كوزماتكس', per:'20 يوليو – 27 سبتمبر',
    title:'عائد 9.5 ضعف والتحويل زاد 225%',
    body:'حملة واحدة على شهرين: صرفت 29.9 ألف ورجعوا 283.4 ألف، 175 أوردر بـ 171 جنيه. ومتوسط قيمة الأوردر طلع زي المتجر تقريبًا بالظبط (1,619 مقابل 1,622 جنيه).',
    kpis:[['9.5x','عائد على الإنفاق'],['283.4K','جنيه مبيعات'],['175','أوردر'],['+225%','تحويل المتجر']],
    shots:['ads-cosmetics-meta.jpg','ads-cosmetics-store.jpg'] },

  { dark:true, tag:'براند فاشون', per:'8 – 31 مايو 2026',
    title:'مبيعات المتجر زادت 136% في 3 أسابيع',
    body:'من لوحة المتجر: 1.59 مليون جنيه مبيعات، 1,763 أوردر، و51.1 ألف زيارة — الأوردرات زادت 215% والزيارات 157% عن الفترة اللي قبلها.',
    kpis:[['1.59M','جنيه مبيعات'],['1,763','أوردر'],['+215%','نمو الأوردرات'],['51.1K','زيارة']],
    shots:['ads-may-store.jpg'] }
];

/* حملات الرسايل */
const MSGS = [
  { img:'msg-01_fabric_store_en.jpg', t:'محل أقمشة', s:'85 ألف مبيعات بـ 8.7 ألف إنفاق — أوردرات الشحن بس' },
  { img:'msg-10_appliance_repair_summary.jpg', t:'صيانة أجهزة', s:'5,571 محادثة بـ 17 جنيه للمحادثة' },
  { img:'msg-09_weight_loss_a.jpg', t:'مركز تخسيس', s:'4,882 محادثة على 1.5 مليون ظهور' },
  { img:'msg-02_steel_factory_b2b.jpg', t:'مصنع حديد', s:'1,237 استفسار من تجار ومقاولين' },
  { img:'msg-08_wedding_venue.jpg', t:'قاعة أفراح', s:'أكتر من 440 محادثة ونسبة نقر لحد 15.8%' },
  { img:'msg-06_swimming_academy.jpg', t:'أكاديمية سباحة', s:'أكتر من 600 محادثة ونسبة نقر لحد 10.3%' },
  { img:'msg-05_baby_beds.jpg', t:'سراير أطفال', s:'834 محادثة بـ 3.40 جنيه للمحادثة' },
  { img:'msg-03_medical_lab.jpg', t:'معمل تحاليل', s:'562 محادثة بـ 11.1 جنيه للمحادثة' },
  { img:'msg-11_gym.jpg', t:'جيم', s:'355 محادثة ونسبة نقر لحد 10.2%' },
  { img:'msg-04_handmade_canvas_art.jpg', t:'لوحات رسم يدوية', s:'249 محادثة بنسبة نقر 4.6%' },
  { img:'msg-07_hair_salon.jpg', t:'كوافير', s:'39 ألف تفاعل بـ 0.02 جنيه للتفاعل' },
  { img:'msg-12_page_followers.jpg', t:'زيادة متابعين', s:'5,164 متابعة بـ 0.47 جنيه للمتابعة' }
];

/* المتاجر — كارت كيس ستادي لكل واحد */
const PROJECTS = [
  { card:'sleepwear-product-after.jpg', dark:true, tags:['فاشون','إعادة بناء صفحة المنتج'],
    title:'متجر ملابس بيتي — صفحة منتج مبنية للبيع',
    problem:'صفحة المنتج كانت بتخلص بعد شاشتين: صورة وسعر وزرار. مفيش أي سبب يخلّي العميل يشتري دلوقتي مش بكرة.',
    did:'بنيتها من أول وجديد — سلايدر خصم الكميات، عرض باقة بعدّاد تنازلي، بار المخزون وعدّاد المشاهدين، ريفيوز واتساب حقيقية، وزر شراء ثابت تحت.',
    result:'الصفحة بقت 7 شاشات شغل بيع بدل شاشتين، واتسلّمت في 5 أيام.',
    built:'اتسلّم في 5 أيام',
    after:[['sleepwear-product-after.jpg','صفحة المنتج — بعد'],['sleepwear-home-after.jpg','الرئيسية — بعد']],
    before:[['sleepwear-product-before.jpg','صفحة المنتج — قبل'],['sleepwear-collection-before.jpg','صفحة المجموعة — قبل']] },

  { card:'kbeauty-home-after.jpg', dark:false, tags:['كوزماتكس','إعادة بناء كاملة'],
    title:'متجر كوزماتكس — رفع قيمة الأوردر الواحد',
    problem:'مكانش فيه صفحات مجموعات أصلاً، وصفحة المنتج شاشتين ونص: صورة، سعر، Add to cart، وخلاص.',
    did:'عملت صفحات مجموعات حقيقية بفلاتر وترتيب، سلايدر بيوري العميل فاضل كام للشحن المجاني، باقة بشيك بوكس بسعر مجمّع، أيقونات الدفع الآمن، ووصف وأسئلة شائعة بالعربي.',
    result:'صفحة المنتج بقت 7 شاشات، والسلة بقت بتشجّع العميل يزوّد عدد القطع.',
    built:'إعادة بناء الواجهة وصفحة المنتج',
    after:[['kbeauty-product-after.jpg','صفحة المنتج — بعد'],['kbeauty-home-after.jpg','الرئيسية — بعد'],['kbeauty-collection-after.jpg','صفحة المجموعة — بعد']],
    before:[['kbeauty-product-before.jpg','صفحة المنتج — قبل'],['kbeauty-home-before.jpg','الرئيسية — قبل'],['kbeauty-collection-before.jpg','التصنيفات — قبل']] },

  { card:'accessories-product-after.jpg', dark:true, tags:['فاشون','ريبراند وإعادة بناء'],
    title:'براند إكسسوارات — من الزحمة لنظام واحد',
    problem:'الصفحة الرئيسية كانت مخلوطة: بانر نيون جنب تايلز باستيل جنب خرايط جوجل ملزوقة زي ما هي. والأسعار في الجريد بألوان مختلفة في نفس الكارت.',
    did:'وحّدت الهوية في كل سكشن، عملت تابات للبراندات في الجريد، بلوك باقة في صفحة المنتج بسعر مجمّع، وكروت فروع بعناوين ومواعيد بدل الخرايط.',
    result:'المتجر بقى متناسق من أوله لآخره، والعين بقت تروح على الزرار مش على الزحمة.',
    built:'ريبراند وإعادة بناء',
    after:[['accessories-product-after.jpg','صفحة المنتج — بعد'],['accessories-home-after.jpg','الرئيسية — بعد'],['accessories-collection-after.jpg','جريد الشنط — بعد']],
    before:[['accessories-product-before.jpg','صفحة المنتج — قبل'],['accessories-home-before.jpg','الرئيسية — قبل'],['accessories-collection-before.jpg','جريد الشنط — قبل']] },

  { card:'gadgets-home-new.jpg', dark:false, tags:['أجهزة كهربائية · السعودية','من الصفر'],
    title:'متجر أجهزة كهربائية — اتبنى من الصفر',
    problem:'براند سعودي جديد، مفيش متجر خالص، وعايز يبدأ إعلانات على طول.',
    did:'بنيت متجر عربي كامل: أقسام بأيقونات، كاروسيل الأكثر مبيعًا، صف ضمانات، سكشن تقييمات، شريط ملاحة ثابت تحت، وصفحة منتج بجدول مواصفات كامل وأسئلة شائعة وبار مخزون.',
    result:'متجر جاهز يستقبل إعلانات من أول يوم، بالريال وبالعربي بالكامل.',
    built:'من الصفر',
    after:[['gadgets-home-new.jpg','الرئيسية'],['gadgets-product-new.jpg','صفحة المنتج']], before:[] },

  { card:'coffee-b-home-new.jpg', dark:true, tags:['مستلزمات قهوة','من الصفر'],
    title:'متجر أدوات قهوة — سلة بتزوّد عدد القطع',
    problem:'براند لسه بيبدأ، وعايز العميل ياخد أكتر من قطعة في الأوردر الواحد مش قطعة وخلاص.',
    did:'عملت سلة بتوري العميل فاضل كام للشحن المجاني، وبعدها لخصم 10%، وبعدها لـ 20%. وباقة "بيتشتروا مع بعض" بسعر واحد في صفحة المنتج.',
    result:'اتسلّم من الصفر في 4 أيام، والسلة مصمّمة تزوّد متوسط قيمة الأوردر.',
    built:'من الصفر في 4 أيام',
    after:[['coffee-b-home-new.jpg','الرئيسية'],['coffee-b-product-new.jpg','صفحة المنتج والسلة']], before:[] },

  { card:'dresses-product-new.jpg', dark:false, tags:['فاشون','من الصفر'],
    title:'متجر مصنع فساتين — أسعار على حسب الكمية',
    problem:'مصنع بيبيع بالجملة والقطاعي، ومحتاج المتجر يشجّع على الكميات من غير ما يتكلم مع حد.',
    did:'عملت 6 مستويات سعر حسب الكمية في صفحة المنتج (من قطعة لـ 6 قطع)، اختيار الألوان بسواتش، بار مخزون وعدّاد مشاهدين، وصف ضمانات عن الدفع عند الاستلام والسعر من المصنع.',
    result:'سلم الكميات بيخلّي العميل ياخد أكتر من قطعة في الأوردر الواحد، وده بيرفع الربح للبيزنس.',
    built:'من الصفر',
    after:[['dresses-home-new.jpg','الرئيسية'],['dresses-product-new.jpg','صفحة المنتج']], before:[] },

  { card:'pajamas-product-after.jpg', dark:true, tags:['فاشون','إعادة بناء للموبايل'],
    title:'براند بيجامات — مظبوط لمتسوقي الموبايل',
    problem:'المقاسات كانت في قايمة منسدلة والعميل على الموبايل بيتوه فيها، ومفيش شريط ملاحة ثابت يرجّعه للسلة.',
    did:'حوّلت المقاسات لأزرار بالوزن (من 50 لـ 100 كيلو)، ضفت شريط ملاحة ثابت تحت، بار مخزون في صفحات المنتج، وريفيوز واتساب حقيقية.',
    result:'التصفّح على الموبايل بقى أسهل، وعدد الخطوات لحد الشراء قلّ.',
    built:'إعادة بناء',
    after:[['pajamas-product-after.jpg','صفحة المنتج — بعد'],['pajamas-home-after.jpg','الرئيسية — بعد'],['pajamas-collection-after.jpg','جريد المنتجات — بعد']],
    before:[['pajamas-product-before.jpg','صفحة المنتج — قبل'],['pajamas-home-before.jpg','الرئيسية — قبل'],['pajamas-collection-before.jpg','جريد المنتجات — قبل']] },

  { card:'coffee-a-home-new.jpg', dark:false, tags:['مستلزمات قهوة','إعادة تصميم'],
    title:'براند قهوة — إعادة تصميم حوالين حكايته',
    problem:'البراند شغال من 2009 وليه اسم، بس المتجر شكله عادي ومش بيحكي القصة دي ولا بيبيع أكتر من منتج في المرة.',
    did:'هوية غامقة أنيقة، سكشن لحكاية البراند، باقة "شراء جميعها معًا" بشيك بوكس في صفحة المنتج، بار مخزون وعدّاد مشاهدين، وصف أيقونات الدفع الآمن.',
    result:'المتجر بقى شكله براند مش محل، وصفحة المنتج بقت بتعرض أكتر من منتج في المرة.',
    built:'إعادة تصميم',
    after:[['coffee-a-home-new.jpg','الرئيسية'],['coffee-a-product-new.jpg','صفحة المنتج']], before:[] },

  { card:'modest-product-after.jpg', dark:true, tags:['فاشون','إعادة بناء وإثبات'],
    title:'متجر أزياء محتشمة — مبني على الإثبات',
    problem:'المتجر كان شغال، بس مفيش حاجة تخلّي العميل يحس إن المنتج مطلوب ولا إن فيه سبب يستعجل.',
    did:'إشعارات شراء بتظهر وانت بتتصفح، عدّاد مشاهدين، بار مخزون، أزرار مقاسات بالوزن، وصف ضمانات من 4 نقاط.',
    result:'بقى فيه إثبات اجتماعي في كل خطوة. (البراند غيّر اسمه التجاري بعد التسليم بشهر — نفس المتجر.)',
    built:'إعادة بناء',
    after:[['modest-product-after.jpg','صفحة المنتج — بعد'],['modest-home-after.jpg','الرئيسية — بعد'],['modest-collection-after.jpg','جريد المنتجات — بعد']],
    before:[['modest-product-before.jpg','صفحة المنتج — قبل'],['modest-home-before.jpg','الرئيسية — قبل'],['modest-collection-before.jpg','جريد المنتجات — قبل']] }
];

/* ============================================================
   الرسم
   ============================================================ */
const $ = s => document.querySelector(s);
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- (ب) النتيجة الكبيرة ---------- */
let hi = Math.floor(Math.random() * HIGHLIGHTS.length);
function paintHighlight(animate){
  const box = $('#bigStat'); if(!box) return;
  const h = HIGHLIGHTS[hi];
  box.querySelector('.count').textContent =
    String(hi+1).padStart(2,'0') + ' / ' + String(HIGHLIGHTS.length).padStart(2,'0');
  box.querySelector('.unit').textContent = h.unit;
  box.querySelector('.what').textContent = h.what;
  box.querySelector('.meta').textContent = h.meta;
  const fig = box.querySelector('.fig');
  if(animate === false || reduce){ fig.textContent = h.fig; }
  else countUp(fig, h.fig);
}
function moveHighlight(step){
  const box = $('#bigStat'); if(!box) return;
  hi = (hi + step + HIGHLIGHTS.length) % HIGHLIGHTS.length;
  box.classList.add('fading');
  setTimeout(()=>{ paintHighlight(true); box.classList.remove('fading'); }, 300);
}

/* ---------- كيس ستادي الإعلانات ---------- */
function renderCases(){
  const el = $('#caseList'); if(!el) return;
  el.innerHTML = CASES.map(c=>`
    <article class="case${c.dark?'':' light'}">
      <div style="display:flex;flex-wrap:wrap;gap:10px;align-items:center;justify-content:space-between">
        <span class="pill tag">${c.tag}</span><span class="per">${c.per}</span>
      </div>
      <h3>${c.title}</h3>
      <p>${c.body}</p>
      <div class="kpis">${c.kpis.map(k=>`<div class="kpi"><b class="ltr">${k[0]}</b><span>${k[1]}</span></div>`).join('')}</div>
      <div class="shots">${c.shots.map(s=>
        `<div class="shot" data-one="assets/img/${s}"><img src="assets/img/${s}" alt="" loading="lazy"></div>`).join('')}</div>
    </article>`).join('');
}

function renderMsgs(){
  const el = $('#msgGrid'); if(!el) return;
  el.innerHTML = MSGS.map(m=>`
    <div class="msg" data-one="assets/img/${m.img}">
      <img src="assets/img/${m.img}" alt="" loading="lazy">
      <div>${m.t}<small>${m.s}</small></div>
    </div>`).join('');
}

/* ---------- كروت المتاجر ---------- */
function renderProjects(){
  const el = $('#projList'); if(!el) return;
  el.innerHTML = PROJECTS.map((p,i)=>`
    <article class="proj${p.dark?' dark':''}">
      <div class="pr-shell">
        <div class="pr-pic"><img src="assets/img/${p.card}" alt="${p.title}" loading="lazy"></div>
      </div>
      <div class="pr-body">
        <div class="tags">${p.tags.map(t=>`<span class="pill tag">${t}</span>`).join('')}</div>
        <h3>${p.title}</h3>
        <div class="pr-rows">
          <div class="pr-row"><b>المشكلة</b><p>${p.problem}</p></div>
          <div class="pr-row"><b>عملت إيه</b><p>${p.did}</p></div>
          <div class="pr-row"><b>النتيجة</b><p>${p.result}</p></div>
        </div>
        <div class="pr-actions">
          <button class="main" data-gal="${i}" data-set="after">شوف الصفحات كاملة</button>
          ${p.before.length ? `<button data-gal="${i}" data-set="before">شوف النسخة القديمة</button>` : ''}
        </div>
        <div class="pr-meta">${p.built}</div>
      </div>
    </article>`).join('');
}

/* ---------- لايت بوكس بمعرض ---------- */
let gal = [], gi = 0;
function openGal(list, start){
  gal = list; gi = start || 0;
  paintGal();
  $('#lb').classList.add('on');
  document.body.style.overflow = 'hidden';
}
function paintGal(){
  const [img,label] = gal[gi];
  $('#lbImg').src = img.indexOf('assets/') === 0 ? img : 'assets/img/' + img;
  $('#lbCap').innerHTML = gal.length > 1
    ? `${label} &nbsp;·&nbsp; <span class="ltr">${gi+1} / ${gal.length}</span> &nbsp;—&nbsp; اسحب لتحت تشوف الصفحة كلها`
    : (label ? `${label} &nbsp;—&nbsp; اسحب لتحت تشوف الصفحة كلها` : 'اسحب لتحت تشوف الصفحة كلها');
  $('#lbNav').style.display = gal.length > 1 ? 'flex' : 'none';
}
function moveGal(step){
  if(gal.length < 2) return;
  gi = (gi + step + gal.length) % gal.length;
  paintGal();
  $('#lb').scrollTop = 0;
}
function closeLb(){
  $('#lb').classList.remove('on');
  document.body.style.overflow = '';
}

/* ---------- عدّاد الأرقام ---------- */
function countUp(el, target){
  const raw = target != null ? String(target) : (el.dataset.target || el.textContent.trim());
  if(target == null) el.dataset.target = raw;
  const m = raw.match(/^([\d.,]+)(.*)$/);
  if(!m){ el.textContent = raw; return; }
  const clean = m[1].replace(/,/g,'');
  const end = parseFloat(clean), suffix = m[2], dec = (clean.split('.')[1]||'').length;
  const grouped = m[1].indexOf(',') > -1, dur = 1100, t0 = performance.now();
  (function step(t){
    const p = Math.min(1,(t-t0)/dur), e = 1-Math.pow(1-p,3), v = end*e;
    el.textContent = (grouped ? Math.round(v).toLocaleString('en-US') : v.toFixed(dec)) + suffix;
    if(p<1) requestAnimationFrame(step); else el.textContent = raw;
  })(performance.now());
}

/* ---------- الظهور بالسكرول ---------- */
let io;
function initFX(){
  if(reduce) return;
  if(io) io.disconnect();
  io = new IntersectionObserver(entries=>{
    entries.forEach(en=>{
      if(!en.isIntersecting) return;
      const el = en.target;
      if(el.classList.contains('num') && !el.dataset.done){ el.dataset.done='1'; countUp(el); }
      else {
        const sibs = el.parentElement ? [].slice.call(el.parentElement.children) : [el];
        el.style.transitionDelay = (Math.min(sibs.indexOf(el),5) * 90) + 'ms';
        el.classList.add('in');
      }
    });
  }, {threshold:.25, rootMargin:'0px 0px -8% 0px'});
  document.querySelectorAll('.sec-head h2, .hero h1, .page-head h1, .stat, .stat .num, .kpi')
    .forEach(el=>io.observe(el));
}

/* ---------- التشغيل ---------- */
document.addEventListener('click', e=>{
  const one = e.target.closest('[data-one]');
  if(one){ openGal([[one.dataset.one, '']], 0); return; }
  const g = e.target.closest('[data-gal]');
  if(g){
    const p = PROJECTS[+g.dataset.gal];
    openGal(g.dataset.set === 'before' ? p.before : p.after, 0);
    return;
  }
  if(e.target.closest('#lbNext')){ moveGal(1); return; }
  if(e.target.closest('#lbPrev')){ moveGal(-1); return; }
  if(e.target.closest('#hiNext')){ moveHighlight(1); return; }
  if(e.target.closest('#hiPrev')){ moveHighlight(-1); return; }
  if(e.target.closest('#lbClose') || (e.target.id === 'lb')) closeLb();
});
document.addEventListener('keydown', e=>{
  if(!$('#lb') || !$('#lb').classList.contains('on')) return;
  if(e.key === 'Escape') closeLb();
  if(e.key === 'ArrowLeft') moveGal(1);
  if(e.key === 'ArrowRight') moveGal(-1);
});

const hdr = document.querySelector('header');
if(hdr) addEventListener('scroll', ()=>{ hdr.classList.toggle('small', scrollY > 120); }, {passive:true});

renderCases(); renderMsgs(); renderProjects();
paintHighlight(true);
initFX();
