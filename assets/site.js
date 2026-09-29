/* ============================================================
   CONTENT + BEHAVIOUR — shared by every page
   ============================================================ */

/* ---------- ad cases: each entry is one campaign / one period ---------- */
const CASES = [
  { dark:true,
    tag:{en:'Fashion brand',ar:'براند فاشون'},
    per:{en:'June 2026',ar:'يونيو ٢٠٢٦'},
    title:{en:'13.2x ROAS on a 350K EGP month',ar:'ROAS ١٣.٢ في شهر بـ ٣٥٠ ألف'},
    body:{en:'350.8K EGP spent, 4.64M EGP back, 6,005 purchases at 58 EGP each. The store itself reported 4.88M EGP that month.',
          ar:'صرفت ٣٥٠.٨ ألف ورجعوا ٤.٦٤ مليون، ٦٠٠٥ أوردر بـ ٥٨ جنيه للأوردر. والمتجر نفسه سجّل ٤.٨٨ مليون في الشهر.'},
    kpis:[['13.2x',{en:'ROAS',ar:'ROAS'}],['4.64M',{en:'EGP revenue',ar:'جنيه مبيعات'}],['6,005',{en:'Purchases',ar:'أوردر'}],['58',{en:'EGP per purchase',ar:'جنيه للأوردر'}]],
    shots:['ads-june-meta.jpg','ads-june-store.jpg'] },

  { dark:false,
    tag:{en:'Fashion brand',ar:'براند فاشون'},
    per:{en:'One day',ar:'يوم واحد'},
    title:{en:'27.8x ROAS in a single day',ar:'ROAS ٢٧.٨ في يوم واحد'},
    body:{en:'4.1K EGP spent that day brought 114.6K EGP back. The store dashboard for the same day shows 111 orders at a 4.25% conversion rate.',
          ar:'صرفت ٤.١ ألف جنيه في اليوم ورجعوا ١١٤.٦ ألف. ولوحة المتجر في نفس اليوم بتقول ١١١ أوردر ومعدل تحويل ٤.٢٥٪.'},
    kpis:[['27.8x',{en:'ROAS',ar:'ROAS'}],['114.6K',{en:'EGP revenue',ar:'جنيه مبيعات'}],['125',{en:'Purchases',ar:'أوردر'}],['4.25%',{en:'Store CVR',ar:'تحويل المتجر'}]],
    shots:['ads-day-meta.jpg','ads-day-store.jpg'] },

  { dark:false,
    tag:{en:'Fashion brand',ar:'براند فاشون'},
    per:{en:'One day · 3 campaigns',ar:'يوم واحد · ٣ حملات'},
    title:{en:'18.3x ROAS across three campaigns',ar:'ROAS ١٨.٣ على تلات حملات'},
    body:{en:'Three campaigns running together in one day: 12K EGP spent, 219.4K EGP back, 218 purchases at 55 EGP each. The best of the three hit 20.9x.',
          ar:'تلات حملات شغالة مع بعض في يوم: صرفت ١٢ ألف ورجعوا ٢١٩.٤ ألف، ٢١٨ أوردر بـ ٥٥ جنيه للأوردر. وأحسن حملة فيهم وصلت ٢٠.٩.'},
    kpis:[['18.3x',{en:'ROAS',ar:'ROAS'}],['219.4K',{en:'EGP revenue',ar:'جنيه مبيعات'}],['218',{en:'Purchases',ar:'أوردر'}],['55',{en:'EGP per purchase',ar:'جنيه للأوردر'}]],
    shots:['ads-3campaigns.jpg'] },

  { dark:true,
    tag:{en:'Fashion brand',ar:'براند فاشون'},
    per:{en:'27 May – 4 Jun',ar:'٢٧ مايو – ٤ يونيو'},
    title:{en:'17.7x ROAS over nine days',ar:'ROAS ١٧.٧ في ٩ أيام'},
    body:{en:'68.5K EGP spent, 1.21M EGP back, 1,300 purchases. Individual ad sets in the same window ran between 11x and 77x.',
          ar:'صرفت ٦٨.٥ ألف ورجعوا ١.٢١ مليون، و١٣٠٠ أوردر. والأدسِتس لوحدها في نفس الفترة كانت بين ١١ و٧٧.'},
    kpis:[['17.7x',{en:'ROAS',ar:'ROAS'}],['1.21M',{en:'EGP revenue',ar:'جنيه مبيعات'}],['1,300',{en:'Purchases',ar:'أوردر'}],['53',{en:'EGP per purchase',ar:'جنيه للأوردر'}]],
    shots:['ads-9days.jpg'] },

  { dark:true,
    tag:{en:'Fashion brand',ar:'براند فاشون'},
    per:{en:'One day · whole account',ar:'يوم واحد · الحساب كله'},
    title:{en:'13.5x ROAS on a full account day',ar:'ROAS ١٣.٥ على الحساب كله في يوم'},
    body:{en:'15K EGP spent across the account in one day, 203.8K EGP back, 234 purchases. The store logged 230 orders and 231.4K EGP the same day — the two match.',
          ar:'صرفت ١٥ ألف على الحساب كله في يوم ورجعوا ٢٠٣.٨ ألف، ٢٣٤ أوردر. والمتجر سجّل ٢٣٠ أوردر و٢٣١.٤ ألف في نفس اليوم — الرقمين مطابقين.'},
    kpis:[['13.5x',{en:'ROAS',ar:'ROAS'}],['203.8K',{en:'EGP revenue',ar:'جنيه مبيعات'}],['234',{en:'Purchases',ar:'أوردر'}],['230',{en:'Store orders',ar:'أوردر في المتجر'}]],
    shots:['ads-account-day.jpg','ads-store-day.jpg'] },

  { dark:false,
    tag:{en:'Fashion brand',ar:'براند فاشون'},
    per:{en:'August 2026',ar:'أغسطس ٢٠٢٦'},
    title:{en:'11.5x ROAS with conversion up 52%',ar:'ROAS ١١.٥ والتحويل زاد ٥٢٪'},
    body:{en:'224K EGP spent, 2.57M EGP back, 3,914 purchases. Store side: 2.66M EGP, 3,759 orders, and a conversion rate of 3.63% — up 52% on the month before.',
          ar:'صرفت ٢٢٤ ألف ورجعوا ٢.٥٧ مليون، ٣٩١٤ أوردر. وفي المتجر: ٢.٦٦ مليون و٣٧٥٩ أوردر ومعدل تحويل ٣.٦٣٪ — بزيادة ٥٢٪ عن الشهر اللي قبله.'},
    kpis:[['11.5x',{en:'ROAS',ar:'ROAS'}],['2.57M',{en:'EGP revenue',ar:'جنيه مبيعات'}],['3,914',{en:'Purchases',ar:'أوردر'}],['3.63%',{en:'Store CVR',ar:'تحويل المتجر'}]],
    shots:['ads-august-meta.jpg','ads-august-store.jpg'] },

  { dark:false,
    tag:{en:'Cosmetics brand',ar:'براند كوزماتكس'},
    per:{en:'20 Jul – 27 Sep',ar:'٢٠ يوليو – ٢٧ سبتمبر'},
    title:{en:'9.5x ROAS and conversion up 225%',ar:'ROAS ٩.٥ والتحويل زاد ٢٢٥٪'},
    body:{en:'One campaign over two months: 29.9K EGP spent, 283.4K EGP back, 175 purchases at 171 EGP each. Average order value on Meta matched the store almost exactly (1,619 vs 1,622 EGP).',
          ar:'حملة واحدة على شهرين: صرفت ٢٩.٩ ألف ورجعوا ٢٨٣.٤ ألف، ١٧٥ أوردر بـ ١٧١ جنيه. ومتوسط قيمة الأوردر طلع زي المتجر تقريبًا بالظبط (١٦١٩ مقابل ١٦٢٢ جنيه).'},
    kpis:[['9.5x',{en:'ROAS',ar:'ROAS'}],['283.4K',{en:'EGP revenue',ar:'جنيه مبيعات'}],['175',{en:'Purchases',ar:'أوردر'}],['+225%',{en:'Store CVR',ar:'تحويل المتجر'}]],
    shots:['ads-cosmetics-meta.jpg','ads-cosmetics-store.jpg'] },

  { dark:true,
    tag:{en:'Fashion brand',ar:'براند فاشون'},
    per:{en:'8 – 31 May 2026',ar:'٨ – ٣١ مايو ٢٠٢٦'},
    title:{en:'Store sales up 136% in three weeks',ar:'مبيعات المتجر زادت ١٣٦٪ في ٣ أسابيع'},
    body:{en:'Store dashboard only: 1.59M EGP in sales, 1,763 orders and 51.1K sessions — orders up 215% and traffic up 157% against the previous period.',
          ar:'من لوحة المتجر: ١.٥٩ مليون جنيه مبيعات، ١٧٦٣ أوردر، و٥١.١ ألف زيارة — الأوردرات زادت ٢١٥٪ والزيارات ١٥٧٪ عن الفترة اللي قبلها.'},
    kpis:[['1.59M',{en:'EGP sales',ar:'جنيه مبيعات'}],['1,763',{en:'Orders',ar:'أوردر'}],['+215%',{en:'Orders growth',ar:'نمو الأوردرات'}],['51.1K',{en:'Sessions',ar:'زيارة'}]],
    shots:['ads-may-store.jpg'] }
];

/* ---------- messaging campaigns ---------- */
const MSGS = [
  { img:'msg-01_fabric_store_en.jpg', t:{en:'Fabric shop',ar:'محل أقمشة'}, s:{en:'85K EGP revenue on 8.7K spend — shipped orders only',ar:'٨٥ ألف مبيعات بـ ٨.٧ ألف إنفاق — أوردرات الشحن بس'} },
  { img:'msg-10_appliance_repair_summary.jpg', t:{en:'Appliance repair',ar:'صيانة أجهزة'}, s:{en:'5,571 conversations at 17 EGP each',ar:'٥٥٧١ محادثة بـ ١٧ جنيه للمحادثة'} },
  { img:'msg-09_weight_loss_a.jpg', t:{en:'Weight-loss clinic',ar:'مركز تخسيس'}, s:{en:'4,882 conversations across 1.5M impressions',ar:'٤٨٨٢ محادثة على ١.٥ مليون ظهور'} },
  { img:'msg-02_steel_factory_b2b.jpg', t:{en:'Steel factory (B2B)',ar:'مصنع حديد'}, s:{en:'1,237 enquiries from traders and contractors',ar:'١٢٣٧ استفسار من تجار ومقاولين'} },
  { img:'msg-08_wedding_venue.jpg', t:{en:'Wedding venue',ar:'قاعة أفراح'}, s:{en:'440+ conversations, CTR up to 15.8%',ar:'أكتر من ٤٤٠ محادثة ونسبة نقر لحد ١٥.٨٪'} },
  { img:'msg-06_swimming_academy.jpg', t:{en:'Swimming academy',ar:'أكاديمية سباحة'}, s:{en:'600+ conversations, CTR up to 10.3%',ar:'أكتر من ٦٠٠ محادثة ونسبة نقر لحد ١٠.٣٪'} },
  { img:'msg-05_baby_beds.jpg', t:{en:'Baby beds',ar:'سراير أطفال'}, s:{en:'834 conversations at 3.40 EGP each',ar:'٨٣٤ محادثة بـ ٣.٤٠ جنيه للمحادثة'} },
  { img:'msg-03_medical_lab.jpg', t:{en:'Medical lab',ar:'معمل تحاليل'}, s:{en:'562 conversations at 11.1 EGP each',ar:'٥٦٢ محادثة بـ ١١.١ جنيه للمحادثة'} },
  { img:'msg-11_gym.jpg', t:{en:'Gym',ar:'جيم'}, s:{en:'355 conversations, CTR up to 10.2%',ar:'٣٥٥ محادثة ونسبة نقر لحد ١٠.٢٪'} },
  { img:'msg-04_handmade_canvas_art.jpg', t:{en:'Handmade canvas art',ar:'لوحات رسم يدوية'}, s:{en:'249 conversations at 4.6% CTR',ar:'٢٤٩ محادثة بنسبة نقر ٤.٦٪'} },
  { img:'msg-07_hair_salon.jpg', t:{en:'Hair salon',ar:'كوافير'}, s:{en:'39K post engagements at 0.02 EGP each',ar:'٣٩ ألف تفاعل بـ ٠.٠٢ جنيه للتفاعل'} },
  { img:'msg-12_page_followers.jpg', t:{en:'Page growth',ar:'زيادة متابعين'}, s:{en:'5,164 follows at 0.47 EGP each',ar:'٥١٦٤ متابعة بـ ٠.٤٧ جنيه للمتابعة'} }
];

/* ---------- stores ---------- */
const STORES = [
  { kind:'ba',
    tabs:[
      {key:'product',label:{en:'Product page',ar:'صفحة المنتج'},screens:[['sleepwear-product-before.jpg','before'],['sleepwear-product-after.jpg','after']]},
      {key:'home',label:{en:'Homepage',ar:'الصفحة الرئيسية'},screens:[['sleepwear-home-after.jpg','after']]},
      {key:'collection',label:{en:'Collection page',ar:'صفحة المجموعة'},screens:[['sleepwear-collection-before.jpg','before']]}
    ],
    tags:{en:['Fashion','Product page rebuild'],ar:['فاشون','إعادة بناء صفحة المنتج']},
    title:{en:'Sleepwear store, product page rebuilt',ar:'متجر ملابس بيتي، صفحة منتج جديدة'},
    feats:{en:['The old page ended after two screens','Volume-discount slider','Bundle offer with a countdown','Stock counter and live viewer count','WhatsApp reviews and a sticky add-to-cart'],
           ar:['القديمة كانت بتخلص بعد شاشتين','سلايدر خصم الكميات','عرض باقة بعدّاد','بار المخزون وعدد اللي بيتفرجوا','ريفيوز واتساب وزر شراء ثابت']},
    built:{en:'Delivered in 5 days',ar:'خلصته في ٥ أيام'} },

  { kind:'ba',
    tabs:[
      {key:'product',label:{en:'Product page',ar:'صفحة المنتج'},screens:[['kbeauty-product-before.jpg','before'],['kbeauty-product-after.jpg','after']]},
      {key:'home',label:{en:'Homepage',ar:'الصفحة الرئيسية'},screens:[['kbeauty-home-before.jpg','before'],['kbeauty-home-after.jpg','after']]},
      {key:'collection',label:{en:'Collection page',ar:'صفحة المجموعة'},screens:[['kbeauty-collection-before.jpg','before'],['kbeauty-collection-after.jpg','after']]}
    ],
    tags:{en:['Cosmetics','Full rebuild'],ar:['كوزماتكس','إعادة بناء كاملة']},
    title:{en:'K-beauty store rebuilt to raise order value',ar:'متجر كوزماتكس لرفع قيمة الأوردر'},
    feats:{en:['Free-shipping progress slider','Checkbox bundle at one price','Safe-payment badges','Arabic description and FAQ','Real collection pages with filters'],
           ar:['سلايدر تقدّم الشحن المجاني','باقة بشيك بوكس بسعر واحد','أيقونات الدفع الآمن','وصف وأسئلة شائعة بالعربي','صفحات مجموعات حقيقية بفلاتر']},
    built:{en:'Product page and storefront rebuild',ar:'إعادة بناء صفحة المنتج والواجهة'} },

  { kind:'ba',
    tabs:[
      {key:'product',label:{en:'Product page',ar:'صفحة المنتج'},screens:[['accessories-product-before.jpg','before'],['accessories-product-after.jpg','after']]},
      {key:'home',label:{en:'Homepage',ar:'الصفحة الرئيسية'},screens:[['accessories-home-before.jpg','before'],['accessories-home-after.jpg','after']]},
      {key:'collection',label:{en:'Collection page',ar:'صفحة المجموعة'},screens:[['accessories-collection-before.jpg','before'],['accessories-collection-after.jpg','after']]}
    ],
    tags:{en:['Fashion','Rebrand + rebuild'],ar:['فاشون','ريبراند وإعادة بناء']},
    title:{en:'Accessories brand, from clutter to one system',ar:'براند إكسسوارات، من الزحمة لنظام واحد'},
    feats:{en:['One palette across every section','Brand tabs in the grid','Bundle block on the product page','Branch cards instead of raw maps'],
           ar:['نفس البالتة في كل سكشن','تابات البراندات في الجريد','بلوك الباقات في صفحة المنتج','كروت الفروع بدل الخرايط الملزوقة']},
    built:{en:'Rebrand and rebuild',ar:'ريبراند وإعادة بناء'} },

  { kind:'ba',
    tabs:[
      {key:'product',label:{en:'Product page',ar:'صفحة المنتج'},screens:[['pajamas-product-before.jpg','before'],['pajamas-product-after.jpg','after']]},
      {key:'home',label:{en:'Homepage',ar:'الصفحة الرئيسية'},screens:[['pajamas-home-before.jpg','before'],['pajamas-home-after.jpg','after']]},
      {key:'collection',label:{en:'Collection page',ar:'صفحة المجموعة'},screens:[['pajamas-collection-before.jpg','before'],['pajamas-collection-after.jpg','after']]}
    ],
    tags:{en:['Fashion','Mobile-first rebuild'],ar:['فاشون','إعادة بناء للموبايل']},
    title:{en:'Pajama brand rebuilt for mobile',ar:'براند بيجامات مظبوط للموبايل'},
    feats:{en:['Weight-range size buttons','Sticky bottom navigation','Stock counters on product pages','Real WhatsApp reviews'],
           ar:['أزرار مقاسات بالوزن','شريط ملاحة ثابت تحت','بار مخزون في صفحات المنتج','ريفيوز واتساب حقيقية']},
    built:{en:'Rebuild',ar:'إعادة بناء'} },

  { kind:'ba',
    tabs:[
      {key:'product',label:{en:'Product page',ar:'صفحة المنتج'},screens:[['modest-product-before.jpg','before'],['modest-product-after.jpg','after']]},
      {key:'home',label:{en:'Homepage',ar:'الصفحة الرئيسية'},screens:[['modest-home-before.jpg','before'],['modest-home-after.jpg','after']]},
      {key:'collection',label:{en:'Collection page',ar:'صفحة المجموعة'},screens:[['modest-collection-before.jpg','before'],['modest-collection-after.jpg','after']]}
    ],
    tags:{en:['Fashion','Rebuild + social proof'],ar:['فاشون','إعادة بناء وإثبات']},
    title:{en:'Modest fashion store rebuilt around proof',ar:'متجر أزياء محتشمة مبني على الإثبات'},
    feats:{en:['Live purchase notifications','Viewer counter and stock urgency','Weight-based size buttons','Four-point trust row'],
           ar:['إشعارات شراء وانت بتتصفح','عدّاد مشاهدين وبار مخزون','أزرار مقاسات بالوزن','صف ضمانات من ٤ نقاط']},
    built:{en:'Rebuild',ar:'إعادة بناء'} },

  { kind:'new',
    tabs:[
      {key:'home',label:{en:'Homepage',ar:'الصفحة الرئيسية'},screens:[['gadgets-home-new.jpg','new']]},
      {key:'product',label:{en:'Product page',ar:'صفحة المنتج'},screens:[['gadgets-product-new.jpg','new']]}
    ],
    tags:{en:['Home appliances · Saudi','Built from scratch'],ar:['أجهزة كهربائية · السعودية','من الصفر']},
    title:{en:'Appliance store built from scratch',ar:'متجر أجهزة كهربائية من الصفر'},
    feats:{en:['Arabic storefront, category tiles','Best-seller carousel','Trust row and review section','Full spec table and FAQ','Sticky bottom navigation'],
           ar:['متجر عربي بأقسام وأيقونات','كاروسيل الأكثر مبيعًا','صف الضمانات وسكشن التقييمات','جدول مواصفات كامل وأسئلة شائعة','شريط ملاحة ثابت تحت']},
    built:{en:'Built from scratch',ar:'من الصفر'} },

  { kind:'new',
    tabs:[
      {key:'home',label:{en:'Homepage',ar:'الصفحة الرئيسية'},screens:[['coffee-b-home-new.jpg','new']]},
      {key:'product',label:{en:'Product page',ar:'صفحة المنتج'},screens:[['coffee-b-product-new.jpg','new']]}
    ],
    tags:{en:['Coffee supplies','Built from scratch'],ar:['مستلزمات قهوة','من الصفر']},
    title:{en:'Coffee store with a spend-tier cart',ar:'متجر قهوة بسلة بتشجّع على الزيادة'},
    feats:{en:['Free shipping, then 10%, then 20% off tiers','\"Bought together\" bundle at one price','Stock bar and viewer counter','Arabic reviews section'],
           ar:['مراحل: شحن مجاني، بعدين ١٠٪، بعدين ٢٠٪','باقة \"بيتشتروا مع بعض\" بسعر واحد','بار المخزون وعدّاد المشاهدين','سكشن آراء العملاء']},
    built:{en:'Built from scratch in 4 days',ar:'من الصفر في ٤ أيام'} },

  { kind:'new',
    tabs:[
      {key:'home',label:{en:'Homepage',ar:'الصفحة الرئيسية'},screens:[['dresses-home-new.jpg','new']]},
      {key:'product',label:{en:'Product page',ar:'صفحة المنتج'},screens:[['dresses-product-new.jpg','new']]}
    ],
    tags:{en:['Fashion','Built from scratch'],ar:['فاشون','من الصفر']},
    title:{en:'Dress factory store with volume pricing',ar:'متجر مصنع فساتين بأسعار الكميات'},
    feats:{en:['Six quantity tiers on the product page','Colour swatches','Stock bar and viewer counter','Cash-on-delivery trust row'],
           ar:['٦ مستويات سعر حسب الكمية','اختيار الألوان بسواتش','بار المخزون وعدّاد المشاهدين','صف ضمانات للدفع عند الاستلام']},
    built:{en:'Built from scratch',ar:'من الصفر'} },

  { kind:'new',
    tabs:[
      {key:'home',label:{en:'Homepage',ar:'الصفحة الرئيسية'},screens:[['coffee-a-home-new.jpg','new']]},
      {key:'product',label:{en:'Product page',ar:'صفحة المنتج'},screens:[['coffee-a-product-new.jpg','new']]}
    ],
    tags:{en:['Coffee supplies','Redesign'],ar:['مستلزمات قهوة','إعادة تصميم']},
    title:{en:'Coffee brand redesign',ar:'إعادة تصميم براند قهوة'},
    feats:{en:['Dark editorial storefront','Brand-story section','\"Buy them all together\" bundle','Payment-badge row'],
           ar:['هوية غامقة أنيقة','سكشن حكاية البراند','باقة \"شراء جميعها معًا\"','صف أيقونات الدفع الآمن']},
    built:{en:'Redesign',ar:'إعادة تصميم'} }
];

/* ---------- Arabic copy (Egyptian, plain) ---------- */
const T = { en:{}, ar:{
  nav1:'الخدمات', nav2:'نتايج الإعلانات', nav3:'متاجر شوبيفاي', nav4:'بنشتغل إزاي', nav5:'تواصل', nav0:'الرئيسية',
  cta1:'احجز مكالمة', cta2:'كلمني واتساب', cta3:'شوف النتايج',
  role:'ميديا باير ومطوّر متاجر شوبيفاي',
  h1:'أظبطلك المتجر — وأجيبلك الأوردرات.',
  lede:'بشتغل إعلانات ميتا وببني متاجر شوبيفاي لبراندات في مصر والخليج. وكل اللي تحت ده صور حقيقية من مدير الإعلانات ومن المتجر نفسه.',
  s1:'أعلى ROAS في يوم', s2:'جنيه مبيعات في شهر', s3:'أوردر في نفس الشهر', s4:'متاجر عملتها',
  svcTitle:'مهارتين بيكملوا بعض', svcSub:'اشتغل معايا في جزء واحد، أو سلّمني الاتنين — من بناء المتجر لتوسيع الحملات.',
  svcA:'الميديا باينج',
  svcA1:'حملات بيع (Conversion) للمتاجر',
  svcA2:'حملات رسايل للخدمات والمحلات',
  svcA3:'تظبيط البيكسل والـ CAPI والأحداث',
  svcA4:'تجريب كرياتيف وجماهير، وبعدها توسيع',
  svcA5:'تقرير كل أسبوع بسيط وتفهمه',
  svcB:'تطوير شوبيفاي',
  svcB1:'بناء متجر كامل من الصفر',
  svcB2:'تركيب الثيم وتظبيطه (Kalles وغيره)',
  svcB3:'إعادة بناء صفحة المنتج علشان تبيع',
  svcB4:'التطبيقات والدفع والشحن والدفع عند الاستلام',
  svcB5:'تسريع المتجر وتحسين التحويل',
  bigA:'نتايج الإعلانات', bigAd:'٨ كيس ستاديز بالأرقام والصور من مدير الإعلانات، وحملات رسايل في ١١ مجال.',
  bigB:'متاجر شوبيفاي', bigBd:'٩ متاجر — تقدر تسكرول جوه شاشة الموبايل وتشوف كل صفحة بالكامل.',
  goA:'شوف النتايج →', goB:'شوف المتاجر →',
  adsTitle:'نتايج، حملة حملة',
  adsSub:'كل كارت ده حملة أو فترة لوحدها، مش مجموع. والصور من مدير الإعلانات ومن لوحة المتجر. أسامي العملاء مستخبية.',
  msgTitle:'حملات رسايل في ١١ مجال',
  msgSub:'خدمات ومحلات. كل كارت حملة لوحدها بتكلفة المحادثة بتاعتها.',
  stTitle:'متاجر عملتها على شوبيفاي',
  stSub:'اختار الصفحة اللي عايز تشوفها — الموبايلين يتحولوا عليها. واسحب جوه الشاشة بإيدك، ولو سيبتها بتكمل لوحدها.',
  hint:'اسحب لتحت', expand:'تكبير',
  prTitle:'بنشتغل إزاي',
  p1t:'أراجع', p1b:'أبص على المتجر وحساب الإعلانات والتتبع، وأقولك إيه اللي بيضيّع فلوس.',
  p2t:'أبني', p2b:'أظبط المتجر أو صفحة المنتج، وأركّب البيكسل والأحداث صح، وأجهّز العروض والباقات.',
  p3t:'أطلق وأجرّب', p3b:'أجرّب جماهير وكرياتيف وعروض ضد بعضها لحد ما الأرقام تستقر.',
  p4t:'أوسّع', p4b:'أزوّد الميزانية على اللي شغال، وأخلي تكلفة الأوردر ثابتة، وأبعتلك تقرير كل أسبوع.',
  coTitle:'تحب نكبّر متجرك؟', coBody:'ابعتلي لينك متجرك وأرقامك الحالية، وهقولك بصراحة أقدر أساعدك ولا لأ، وإزاي.',
  waBtn:'ابعتلي ويلا نكبر مع بعض 🔥', waBubble:'جاهز نكبر شغلك؟ ابعتلي رسالة 👋',
  foot:'ميديا باير ومطوّر شوبيفاي — القاهرة، مصر',
  adsHeadTitle:'نتايج الإعلانات', adsHeadSub:'كل كيس ستادي هنا حملة أو فترة لوحدها، بالصور من مدير الإعلانات ومن لوحة المتجر.',
  stHeadTitle:'متاجر شوبيفاي', stHeadSub:'٩ متاجر بنيتها أو أعدت بناءها. اختار الصفحة الرئيسية أو صفحة المنتج أو صفحة المجموعة، واسحب جوه الشاشة تشوفها كلها.'
}};

/* ---------- renderers ---------- */
function renderCases(lang){
  const el = document.getElementById('caseList'); if(!el) return;
  el.innerHTML = CASES.map(c=>`
    <article class="case${c.dark?'':' light'}">
      <div style="display:flex;flex-wrap:wrap;gap:10px;align-items:center;justify-content:space-between">
        <span class="pill tag">${c.tag[lang]}</span><span class="per">${c.per[lang]}</span>
      </div>
      <h3>${c.title[lang]}</h3>
      <p>${c.body[lang]}</p>
      <div class="kpis">${c.kpis.map(k=>`<div class="kpi"><b>${k[0]}</b><span>${k[1][lang]}</span></div>`).join('')}</div>
      <div class="shots">${c.shots.map(s=>`<div class="shot" data-full="assets/img/${s}"><img src="assets/img/${s}" alt="" loading="lazy"></div>`).join('')}</div>
    </article>`).join('');
}

function renderMsgs(lang){
  const el = document.getElementById('msgGrid'); if(!el) return;
  el.innerHTML = MSGS.map(m=>`
    <div class="msg" data-full="assets/img/${m.img}">
      <img src="assets/img/${m.img}" alt="" loading="lazy">
      <div>${m.t[lang]}<small>${m.s[lang]}</small></div>
    </div>`).join('');
}

function renderStores(lang){
  const el = document.getElementById('storeList'); if(!el) return;
  const L = {
    before:{en:'BEFORE',ar:'قبل'}, after:{en:'AFTER',ar:'بعد'}, new:{en:'BUILT BY ME',ar:'من تنفيذي'},
    hint:{en:'Scroll inside',ar:'اسحب لتحت'}, exp:{en:'Expand',ar:'تكبير'}
  };
  el.innerHTML = STORES.map((s,si)=>`
    <article class="store">
      <div class="screens-col">
        ${s.tabs.length>1 ? `<div class="tabs" role="tablist">${s.tabs.map((t,ti)=>
          `<button class="tab${ti===0?' on':''}" data-store="${si}" data-tab="${t.key}">${t.label[lang]}</button>`).join('')}</div>` : ''}
        ${s.tabs.map((t,ti)=>`
          <div class="phones${ti===0?' on':''}" data-store="${si}" data-panel="${t.key}">
            ${t.screens.map(([img,kind])=>`
              <div class="phone-wrap">
                <span class="phone-label ${kind}">${L[kind][lang]}</span>
                <div class="phone">
                  <div class="scroll"><img src="assets/img/${img}" alt="${L[kind][lang]}" loading="lazy"></div>
                  <button class="expand" data-full="assets/img/${img}" aria-label="${L.exp[lang]}">⤢</button>
                  <span class="hint">${L.hint[lang]}</span>
                </div>
              </div>`).join('')}
          </div>`).join('')}
      </div>
      <div>
        <div class="tags">${s.tags[lang].map(t=>`<span class="pill tag">${t}</span>`).join('')}</div>
        <h3 style="margin-top:14px">${s.title[lang]}</h3>
        <ul class="feats">${s.feats[lang].map(f=>`<li>${f}</li>`).join('')}</ul>
        <div class="built">${s.built[lang]}</div>
      </div>
    </article>`).join('');

  el.querySelectorAll('.tab').forEach(btn=>btn.addEventListener('click',()=>{
    const si=btn.dataset.store, key=btn.dataset.tab;
    el.querySelectorAll(`.tab[data-store="${si}"]`).forEach(b=>b.classList.toggle('on', b===btn));
    el.querySelectorAll(`.phones[data-store="${si}"]`).forEach(p=>p.classList.toggle('on', p.dataset.panel===key));
    initPhones();
  }));

  initPhones();
}

/* ---------- language ---------- */
const EN = {};
document.querySelectorAll('[data-i18n]').forEach(el=>EN[el.dataset.i18n]=el.innerHTML);
document.querySelectorAll('[data-i18n-html]').forEach(el=>EN[el.dataset.i18nHtml]=el.innerHTML);

function setLang(lang){
  const html=document.documentElement;
  html.lang=lang; html.dir = lang==='ar' ? 'rtl':'ltr';
  try{ localStorage.setItem('lang',lang); }catch(e){}
  const dict = lang==='ar' ? T.ar : EN;
  document.querySelectorAll('[data-i18n]').forEach(el=>{ const k=el.dataset.i18n; if(dict[k]) el.innerHTML=dict[k]; });
  document.querySelectorAll('[data-i18n-html]').forEach(el=>{ const k=el.dataset.i18nHtml; if(dict[k]) el.innerHTML=dict[k]; });
  const b=document.getElementById('lang'); if(b) b.textContent = lang==='ar' ? 'English' : 'العربية';
  renderCases(lang); renderMsgs(lang); renderStores(lang);
  document.querySelectorAll('.stat .num').forEach(el=>{ delete el.dataset.done; });
  initFX();
}

/* ---------- lightbox ---------- */
const lb=document.getElementById('lb'), lbImg=document.getElementById('lbImg');
document.addEventListener('click',e=>{
  const t=e.target.closest('[data-full]'); if(!t) return;
  lbImg.src=t.dataset.full; lb.classList.add('on'); document.body.style.overflow='hidden';
});
function closeLb(){ lb.classList.remove('on'); document.body.style.overflow=''; }
if(lb){
  lb.addEventListener('click',e=>{ if(e.target!==lbImg) closeLb(); });
  document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeLb(); });
}

/* ---------- scrollable phone mockups ----------
   The visitor can scroll inside the screen. If they stop, it keeps
   scrolling on its own; when it reaches the end it goes back up.        */
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let phoneObs;
function initPhones(){
  const phones = document.querySelectorAll('.phone');
  if(!phones.length) return;
  if(phoneObs) phoneObs.disconnect();
  phoneObs = new IntersectionObserver(es=>es.forEach(e=>{
    const st = e.target._auto;
    if(!st) return;
    st.visible = e.isIntersecting;
  }), {threshold:.3});

  phones.forEach(ph=>{
    const sc = ph.querySelector('.scroll');
    if(!sc || ph._auto) { if(ph._auto) phoneObs.observe(ph); return; }
    const st = { visible:false, paused:reduce, dir:1, idle:null };
    ph._auto = st;

    const pause = () => {
      st.paused = true;
      ph.classList.add('touched');
      clearTimeout(st.idle);
      st.idle = setTimeout(()=>{ st.paused = reduce; }, 2600);
    };
    ['pointerdown','wheel','touchstart','touchmove'].forEach(ev=>sc.addEventListener(ev,pause,{passive:true}));
    ph.addEventListener('mouseenter',()=>{ st.paused=true; clearTimeout(st.idle); });
    ph.addEventListener('mouseleave',()=>{ clearTimeout(st.idle); st.idle=setTimeout(()=>{ st.paused=reduce; },600); });

    phoneObs.observe(ph);

    (function step(){
      if(st.visible && !st.paused){
        const max = sc.scrollHeight - sc.clientHeight;
        if(max > 10){
          sc.scrollTop += 0.55 * st.dir;
          if(sc.scrollTop >= max - 1) st.dir = -1;
          if(sc.scrollTop <= 0) st.dir = 1;
        }
      }
      requestAnimationFrame(step);
    })();
  });
}

/* ---------- reveal + counters ---------- */
function countUp(el){
  const raw = el.dataset.target || el.textContent.trim();
  el.dataset.target = raw;
  const m = raw.match(/^([\d.,]+)(.*)$/); if(!m) return;
  const clean = m[1].replace(/,/g,'');
  const end = parseFloat(clean), suffix = m[2], dec = (clean.split('.')[1]||'').length;
  const grouped = m[1].includes(','), dur = 1100, t0 = performance.now();
  (function step(t){
    const p = Math.min(1,(t-t0)/dur), e = 1-Math.pow(1-p,3), v = end*e;
    el.textContent = (grouped ? Math.round(v).toLocaleString('en-US') : v.toFixed(dec)) + suffix;
    if(p<1) requestAnimationFrame(step); else el.textContent = raw;
  })(performance.now());
}
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
        const sibs = el.parentElement ? [...el.parentElement.children] : [el];
        el.style.transitionDelay = (Math.min(sibs.indexOf(el),5) * 90) + 'ms';
        el.classList.add('in');
      }
    });
  }, {threshold:.25, rootMargin:'0px 0px -8% 0px'});
  document.querySelectorAll('.sec-head h2, .hero h1, .page-head h1, .stat, .stat .num, .kpi').forEach(el=>io.observe(el));
}

/* ---------- boot ---------- */
const hdr=document.querySelector('header');
if(hdr) addEventListener('scroll',()=>{ hdr.classList.toggle('small', scrollY>120); },{passive:true});

let saved='en';
try{ saved = localStorage.getItem('lang') || 'en'; }catch(e){}
if(saved==='ar'){ setLang('ar'); }
else { renderCases('en'); renderMsgs('en'); renderStores('en'); initFX(); }
