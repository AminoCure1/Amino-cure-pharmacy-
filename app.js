/* ====== إعداداتك / YOUR SETTINGS ====== */
const CONFIG = {
  name: 'Amino Cure',
  whatsapp: '249000000000',   // رقم الواتساب دولي بدون + (لإرسال الطلبات)
  phone: '+249 000 000 000',
  email: 'info@aminocure.com',
  links: { facebook: '#', instagram: '#', tiktok: '#' },
  rate: 600,                  // سعر الدولار بالجنيه السوداني (غيّره براحتك)
  city: { en: 'Khartoum, Sudan', ar: 'الخرطوم، السودان' }
};

const T = {
  en: {
    tag: 'Your trusted pharmacy',
    loc: 'Current Location',
    search: 'Search medicine here...',
    flat: 'Flat 20% Off',
    onSel: 'On Selected medicines',
    order: 'Order Now',
    shop: 'Shop by Categories',
    seeAll: 'See All',
    feat: 'Featured Products',
    off: '20% off',
    wish: 'My Wishlist',
    all: 'All Products',
    cart: 'My Cart',
    me: 'Contact Us',
    det: 'Medicine Details',
    pkg: 'Package size',
    desc: 'Description',
    rev: 'Review',
    how: 'How to Use',
    more: 'Read more',
    less: 'Show less',
    total: 'Total Cost',
    add: 'Add To Cart',
    added: 'Added to cart ✓',
    empty: 'Nothing here yet',
    emptyCart: 'Your cart is empty',
    checkout: 'Order via WhatsApp',
    msg: 'Hello Amino Cure, I would like to order:',
    cur: 'SDG',
    wa: 'WhatsApp',
    fb: 'Facebook',
    ig: 'Instagram',
    tt: 'TikTok',
    call: 'Call us',
    mail: 'Email',
    about: 'Trusted medicines & supplements, delivered with care.',
    caps: 'Capsules',
    pcs: 'Units',
    inbox: 'in 1 box',
    cats: {
      all: 'All',
      pain: 'Pain Relief',
      vit: 'Vitamins',
      baby: 'Baby Care',
      otc: 'OTC',
      women: "Women's Health"
    },
    soon: 'Pharmacist advice: ',
    howT: [
      'Follow the dose written on the label or given by your pharmacist.',
      'Take with water, preferably after a meal.',
      'Keep out of reach of children, in a cool dry place.',
      'Consult your pharmacist or doctor if you are pregnant, nursing, or on other medicines.'
    ],
    why: 'Why Amino Cure?',
    whyL: [
      ['Original products', 'Trusted brands from reliable sources.'],
      ['Fast delivery', 'Your order arrives at your door.'],
      ['Pharmacist advice', 'Ask our pharmacist anytime on WhatsApp.'],
      ['Fair prices', 'Clear prices and regular offers.']
    ],
    ordT: 'How to order',
    steps: [
      ['Choose', 'Browse and pick your medicines.'],
      ['Add to cart', 'Select the package and quantity.'],
      ['Send on WhatsApp', 'Confirm your order with one tap.']
    ],
    rvT: 'What our customers say'
  },

  ar: {
    tag: 'صيدليتك الموثوقة',
    loc: 'الموقع الحالي',
    search: 'ابحث عن الدواء هنا...',
    flat: 'خصم 20%',
    onSel: 'على أدوية مختارة',
    order: 'اطلب الآن',
    shop: 'تسوّق حسب القسم',
    seeAll: 'عرض الكل',
    feat: 'منتجات مميزة',
    off: 'خصم 20%',
    wish: 'المفضلة',
    all: 'كل المنتجات',
    cart: 'سلتي',
    me: 'تواصل معنا',
    det: 'تفاصيل الدواء',
    pkg: 'حجم العبوة',
    desc: 'الوصف',
    rev: 'التقييمات',
    how: 'طريقة الاستخدام',
    more: 'اقرأ المزيد',
    less: 'عرض أقل',
    total: 'الإجمالي',
    add: 'أضف للسلة',
    added: 'تمت الإضافة ✓',
    empty: 'لا يوجد شيء هنا بعد',
    emptyCart: 'السلة فارغة',
    checkout: 'اطلب عبر واتساب',
    msg: 'السلام عليكم Amino Cure، أرغب في طلب:',
    cur: 'ج.س',
    wa: 'واتساب',
    fb: 'فيسبوك',
    ig: 'انستغرام',
    tt: 'تيك توك',
    call: 'اتصل بنا',
    mail: 'البريد',
    about: 'أدوية ومكمّلات موثوقة تصلك بعناية.',
    caps: 'كبسولة',
    pcs: 'وحدة',
    inbox: 'في العلبة',
    cats: {
      all: 'الكل',
      pain: 'مسكنات',
      vit: 'فيتامينات',
      baby: 'عناية الطفل',
      otc: 'بدون وصفة',
      women: 'صحة المرأة'
    },
    soon: '',
    howT: [
      'اتبع الجرعة المكتوبة على العبوة أو التي يحددها الصيدلاني.',
      'يُؤخذ مع الماء، ويفضّل بعد الأكل.',
      'يُحفظ بعيداً عن متناول الأطفال في مكان بارد وجاف.',
      'استشر الصيدلاني أو الطبيب في حالة الحمل أو الرضاعة أو استخدام أدوية أخرى.'
    ],
    why: 'لماذا Amino Cure؟',
    whyL: [
      ['منتجات أصلية', 'علامات موثوقة من مصادر معتمدة.'],
      ['توصيل سريع', 'يصل طلبك إلى باب منزلك.'],
      ['استشارة صيدلاني', 'اسأل الصيدلاني في أي وقت عبر واتساب.'],
      ['أسعار عادلة', 'أسعار واضحة وعروض مستمرة.']
    ],
    ordT: 'طريقة الطلب',
    steps: [
      ['اختر', 'تصفّح الأدوية واختر ما تحتاجه.'],
      ['أضف للسلة', 'حدّد حجم العبوة والكمية.'],
      ['أرسل عبر واتساب', 'أكّد طلبك بضغطة واحدة.']
    ],
    rvT: 'آراء عملائنا'
  }
};

/* المنتجات: usd × rate = جنيه سوداني */
const P = [
  {
    id: 1,
    cat: 'vit',
    en: 'Vitamins Liver Oil',
    ar: 'زيت كبد الحوت',
    usd: 21.5,
    img: 'p1.png',
    big: 'p1.png',
    u: 'caps',
    off: 1,
    d: {
      en: 'Cod liver oil is a nutritional supplement that may contain essential vitamins such as Vitamin A and Vitamin D, along with Omega-3 fatty acids (EPA and DHA). It may support overall health, healthy bones, immune function and eye health.',
      ar: 'زيت كبد الحوت مكمّل غذائي قد يحتوي على فيتامينات أساسية مثل فيتامين A وD إضافة إلى أحماض أوميغا 3 (EPA وDHA). قد يدعم الصحة العامة وسلامة العظام والمناعة وصحة العين.'
    }
  },
  {
    id: 2,
    cat: 'pain',
    en: 'Pain Relief',
    ar: 'مسكّن الألم',
    usd: 21,
    img: 'p2.png',
    u: 'caps',
    d: {
      en: 'Over-the-counter pain reliever used for headaches, muscle aches and minor pains. Do not exceed the recommended dose.',
      ar: 'مسكّن ألم بدون وصفة يُستخدم للصداع وآلام العضلات والآلام البسيطة. لا تتجاوز الجرعة الموصى بها.'
    }
  },
  {
    id: 3,
    cat: 'vit',
    en: 'Multivitamin',
    ar: 'متعدد الفيتامينات',
    usd: 23,
    img: 'p3.png',
    u: 'pcs',
    d: {
      en: 'Chewable multivitamin that supplies daily vitamins and minerals to support growth, energy and immunity.',
      ar: 'فيتامينات متعددة قابلة للمضغ تمد الجسم بالفيتامينات والمعادن اليومية لدعم النمو والطاقة والمناعة.'
    }
  },
  {
    id: 4,
    cat: 'women',
    en: "Women's vitamin",
    ar: 'فيتامين النساء',
    usd: 22,
    img: 'p4.png',
    u: 'pcs',
    d: {
      en: "Gummy multivitamin formulated for women's daily needs, supporting energy, skin and general wellbeing.",
      ar: 'فيتامين متعدد على شكل حلوى مضغ مصمم لاحتياجات المرأة اليومية، يدعم الطاقة والبشرة والصحة العامة.'
    }
  },
  {
    id: 5,
    cat: 'vit',
    en: 'Zipvit Vitamin',
    ar: 'زيبفيت فيتامين',
    usd: 31,
    img: 'p5.png',
    u: 'caps',
    off: 1,
    d: {
      en: 'Vitamin K2 (MK-7) supplement that supports normal bone health and blood clotting. Ask your pharmacist if you take blood thinners.',
      ar: 'مكمّل فيتامين K2 (MK-7) يدعم صحة العظام والتخثر الطبيعي للدم. اسأل الصيدلاني إن كنت تستخدم أدوية مميّعة للدم.'
    }
  },
  {
    id: 6,
    cat: 'baby',
    en: 'Baby Rub',
    ar: 'بيبي رَب',
    usd: 19,
    img: 'p6.png',
    u: 'pcs',
    d: {
      en: 'Gentle soothing rub for babies, helps to comfort during colds. For external use only, follow label age limits.',
      ar: 'مرهم مهدّئ لطيف للأطفال يساعد على الراحة أثناء نزلات البرد. للاستعمال الخارجي فقط، والتزم بالفئة العمرية المكتوبة.'
    }
  },
  {
    id: 7,
    cat: 'vit',
    en: 'Vitamins A.D.K',
    ar: 'فيتامينات A.D.K',
    usd: 27,
    img: 'p7.png',
    u: 'caps',
    off: 1,
    d: {
      en: 'Combined fat-soluble vitamins A, D and K that support vision, bones and immunity.',
      ar: 'مزيج من الفيتامينات الذائبة في الدهون A وD وK يدعم النظر والعظام والمناعة.'
    }
  },
  {
    id: 8, cat: 'vit', en: 'Vitamin C', ar: 'فيتامين C', usd: 18, img: 'p8.png', u: 'pcs', off: 1,
    d: {
      en: 'Vitamin C supplement that supports immune function and helps protect cells from oxidative stress.',
      ar: 'مكمّل فيتامين C يدعم المناعة ويساعد على حماية الخلايا من الإجهاد التأكسدي.'
    }
  },
  {
    id: 9, cat: 'vit', en: 'Omega-3', ar: 'أوميغا 3', usd: 26, img: 'p9.png', u: 'caps',
    d: {
      en: 'Omega-3 fatty acids (EPA and DHA) that may support heart, brain and eye health.',
      ar: 'أحماض أوميغا 3 (EPA وDHA) قد تدعم صحة القلب والدماغ والعين.'
    }
  },
  {
    id: 10, cat: 'vit', en: 'Calcium + D3', ar: 'كالسيوم + د3', usd: 20, img: 'p10.png', u: 'pcs',
    d: {
      en: 'Calcium with Vitamin D3 to support bone and teeth health.',
      ar: 'كالسيوم مع فيتامين د3 لدعم صحة العظام والأسنان.'
    }
  },
  {
    id: 11, cat: 'vit', en: 'Zinc', ar: 'زنك', usd: 15, img: 'p11.png', u: 'pcs',
    d: {
      en: 'Zinc supplement that supports immunity and skin health. Take with food if it upsets your stomach.',
      ar: 'مكمّل زنك يدعم المناعة وصحة البشرة. يُؤخذ مع الطعام إذا سبّب اضطراباً في المعدة.'
    }
  },
  {
    id: 12, cat: 'vit', en: 'Magnesium', ar: 'ماغنسيوم', usd: 17, img: 'p12.png', u: 'caps',
    d: {
      en: 'Magnesium supplement that supports muscle and nerve function and normal energy levels.',
      ar: 'مكمّل ماغنسيوم يدعم وظائف العضلات والأعصاب ومستويات الطاقة الطبيعية.'
    }
  },
  {
    id: 13, cat: 'women', en: 'Iron + Folic Acid', ar: 'حديد وحمض الفوليك', usd: 19, img: 'p13.png', u: 'caps',
    d: {
      en: 'Iron with folic acid, commonly used to support healthy blood. Ask your pharmacist or doctor before use, especially during pregnancy.',
      ar: 'حديد مع حمض الفوليك يُستخدم عادةً لدعم صحة الدم. استشر الصيدلاني أو الطبيب قبل الاستخدام خاصة أثناء الحمل.'
    }
  },
  {
    id: 14, cat: 'baby', en: 'Baby Vitamin Drops', ar: 'قطرات فيتامين للأطفال', usd: 14, img: 'p14.png', u: 'pcs',
    d: {
      en: 'Vitamin drops for infants and children. Follow the age and dose on the label or from your pharmacist.',
      ar: 'قطرات فيتامين للرضع والأطفال. التزم بالعمر والجرعة المكتوبة على العبوة أو التي يحددها الصيدلاني.'
    }
  },
  {
    id: 15, cat: 'pain', en: 'Pain Relief Gel', ar: 'جل مسكّن موضعي', usd: 12, img: 'p15.png', u: 'pcs',
    d: {
      en: 'Topical gel for muscle and joint aches. For external use only; do not apply on broken skin.',
      ar: 'جل موضعي لآلام العضلات والمفاصل. للاستعمال الخارجي فقط، ولا يوضع على جلد مجروح.'
    }
  },
  {
    id: 16, cat: 'otc', en: 'Oral Rehydration Salts', ar: 'أملاح الإماهة الفموية', usd: 6, img: 'p16.png', u: 'pcs',
    d: {
      en: 'Oral rehydration salts used to replace fluids and salts lost during diarrhea or heat. Mix exactly as directed on the pack.',
      ar: 'أملاح تُستخدم لتعويض السوائل والأملاح المفقودة أثناء الإسهال أو الحرارة. تُحضَّر تماماً كما هو مكتوب على العبوة.'
    }
  }
];

const CATS = [
  ['pain', 2],
  ['vit', 1],
  ['baby', 6],
  ['otc', 3],
  ['women', 4]
];

const OTC = [2, 6, 3, 15, 16, 8, 11];

const PKG = [
  [1, 25],
  [1.4, 40],
  [1.92, 60],
  [2.29, 80]
];

const REV = [
  ['Sara M.', 'سارة م.', 'Very effective and the delivery was fast.', 'فعّال جداً والتوصيل كان سريعاً.'],
  ['Ahmed K.', 'أحمد ك.', 'Original product, good price.', 'منتج أصلي وسعر جيد.'],
  ['Huda A.', 'هدى ع.', 'The pharmacist helped me choose the right one.', 'ساعدني الصيدلاني في اختيار المناسب.']
];

const IC = {
  pin: '<path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
  bell: '<path d="M6 16V11a6 6 0 1 1 12 0v5l1.5 2h-15z"/><path d="M10 21h4"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  scan: '<path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3M8 12h8"/>',
  home: '<path d="M4 11 12 4l8 7v8a1 1 0 0 1-1 1h-4v-6h-6v6H5a1 1 0 0 1-1-1z"/>',
  heart: '<path d="M12 20s-7.500-4.600-9-9.500C2 7 4.500 4.500 7.500 4.500c1.800 0 3.500 1 4.500 2.500 1-1.500 2.700-2.500 4.500-2.500 3 0 5.500 2.500 4.500 6C19.500 15.400 12 20 12 20z"/>',
  grid: '<rect x="4" y="4" width="6.500" height="6.500" rx="1.500"/><rect x="13.500" y="4" width="6.500" height="6.500" rx="1.500"/><rect x="4" y="13.500" width="6.500" height="6.500" rx="1.500"/><rect x="13.500" y="13.500" width="6.500" height="6.500" rx="1.500"/>',
  cart: '<path d="M3 4h2.500l2 11h11l2-8H7"/><circle cx="9" cy="19.500" r="1.400"/><circle cx="17" cy="19.500" r="1.400"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4-6 8-6s7 2 8 6"/>',
  back: '<path d="m15 5-7 7 7 7"/>',
  more: '<circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/>',
  minus: '<path d="M5 12h14"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  arrow: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
  phone: '<path d="M5 4h4l2 5-2.500 1.500a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  chat: '<path d="M20 11.500a8 8 0 0 1-11.800 7L4 20l1.500-4A8 8 0 1 1 20 11.500z"/>',
  link: '<path d="M10 14a4 4 0 0 0 5.600 0l3-3a4 4 0 0 0-5.600-5.600l-1 1M14 10a4 4 0 0 0-5.600 0l-3 3a4 4 0 0 0 5.600 5.600l1-1"/>',
  shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="m9 12 2 2 4-4"/>',
  truck: '<path d="M3 6h11v10H3z"/><path d="M14 10h4l3 3v3h-7z"/><circle cx="7.5" cy="18" r="1.6"/><circle cx="17.5" cy="18" r="1.6"/>',
  tag: '<path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="8.5" r="1.2"/>'
};

const ic = (n, c = '') => `<svg class="i ${c}" viewBox="0 0 24 24">${IC[n]}</svg>`;

/* ====== الحالة ====== */
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

const store = {
  get(k, d) {
    try {
      const v = localStorage.getItem(k);
      return v == null ? d : JSON.parse(v);
    } catch (e) {
      return d;
    }
  },

  set(k, v) {
    try {
      localStorage.setItem(k, JSON.stringify(v));
    } catch (e) {}
  }
};

let lang = store.get('lang', 'ar'),
    tab = 'home',
    cat = 'all',
    q = '',
    cart = store.get('cart', []),
    wish = store.get('wish', [1, 3, 4, 5, 6, 7]),
    D = null,
    toastT;

// إصلاح بيانات السلة المحفوظة
if (!Array.isArray(cart)) {
  cart = [];
  store.set('cart', cart);
}

// التأكد من أن المفضلة مصفوفة
if (!Array.isArray(wish)) {
  wish = [1, 3, 4, 5, 6, 7];
  store.set('wish', wish);
}

const t = k => T[lang][k];

const sdg = usd => Math.round(usd * CONFIG.rate / 100) * 100;

const money = n => lang === 'ar'
  ? `${n.toLocaleString('en-US')} ${t('cur')}`
  : `${t('cur')} ${n.toLocaleString('en-US')}`;

const pr = (p, m = 1) => money(sdg(p.usd * m));

const words = (s, b = 0) =>
  s.split(' ').map((w, i) => `<span class="w" style="--i:${i + b}">${w}</span>`).join(' ');

const get = id => P.find(p => p.id === id);

/* ====== الواجهات ====== */
function pcard(p, i) {
  const on = wish.includes(p.id);

  return `<article class="pc rise" style="--d:${i * .07}s" data-open="${p.id}"><div class="pm">${p.off ? `<div class="rib"><span>${t('off')}</span></div>` : ''}<button class="hbtn${on ? ' on' : ''}" data-w="${p.id}" aria-label="Wishlist">${ic('heart')}</button><img src="${p.img}" alt="${p[lang]}" loading="lazy"></div>
  <div class="pi"><div><b>${p[lang]}</b><span>${pr(p)}</span></div><button class="cbtn" data-add="${p.id}" aria-label="Add">${ic('cart')}</button></div></article>`;
}

const head = (title, withBack) =>
  `<div class="ptitle rise">${withBack ? '' : `<span class="circ" style="visibility:hidden"></span>`}<h2>${title}</h2>${langBtn()}</div>`;

const langBtn = () =>
  `<div class="lang"><button data-l="ar" class="${lang === 'ar' ? 'on' : ''}">Ar</button><button data-l="en" class="${lang === 'en' ? 'on' : ''}">En</button></div>`;

const list = () =>
  P.filter(p => (cat === 'all' || (cat === 'otc' ? OTC.includes(p.id) : p.cat === cat)) && (!q || (p.en + p.ar).toLowerCase().includes(q.toLowerCase())));

const FEAT = ['shield', 'truck', 'chat', 'tag'];

function extra() {
  const ar = lang === 'ar';
  return `
  <div class="sh"><h3>${t('why')}</h3></div>
  <div class="feat-grid">${t('whyL').map((x, i) => `<div class="fc rise" style="--d:${i * .06}s"><span class="ic">${ic(FEAT[i])}</span><b>${x[0]}</b><small>${x[1]}</small></div>`).join('')}</div>

  <div class="sh"><h3>${t('ordT')}</h3></div>
  <div class="steps">${t('steps').map((x, i) => `<div class="st rise" style="--d:${i * .06}s"><em>${i + 1}</em><div><b>${x[0]}</b><small>${x[1]}</small></div></div>`).join('')}</div>

  <div class="sh"><h3>${t('rvT')}</h3></div>
  <div class="rvs">${REV.map((r, i) => `<div class="rvc rise" style="--d:${i * .06}s"><div class="rv"><div class="a">${r[ar ? 1 : 0][0]}</div><div><b>${r[ar ? 1 : 0]}</b> <span class="s">★★★★★</span></div></div><p>${r[ar ? 3 : 2]}</p></div>`).join('')}</div>`;
}

function renderHome() {
  const L = list();
  const shown = (cat === 'all' && !q) ? L.slice(0, 8) : L;

  $('#s-home').innerHTML = `
  <div class="top rise"><div class="circ">${ic('pin')}</div><div class="loc"><div><small>${t('loc')}</small><b>${CONFIG.city[lang]}</b></div></div>${langBtn()}<button class="circ bell" aria-label="Notifications">${ic('bell')}</button></div>
  <div class="searchrow rise" style="--d:.08s"><label class="search">${ic('search')}<input id="q" value="${q}" placeholder="${t('search')}" autocomplete="off"></label><button class="circ" style="width:46px;height:46px" aria-label="Scan">${ic('scan')}</button></div>
  <div class="banner rise" style="--d:.16s"><h2>${t('flat')}</h2><p>${t('onSel')}</p><button class="btn" data-go="cats">${t('order')} ${ic('arrow','flip')}</button>
    <div class="fan"><img src="p6.png" alt=""><img src="p1.png" alt=""><img src="p2.png" alt=""></div></div>
  <div class="sh rise" style="--d:.24s"><h3>${t('shop')}</h3><a data-go="cats">${t('seeAll')}</a></div>
  <div class="cats rise" style="--d:.3s">${CATS.map(([k, id]) => `<div class="cat${cat === k ? ' on' : ''}" data-cat="${k}"><div class="c"><img src="${get(id).img}" alt=""></div>${t('cats')[k]}</div>`).join('')}</div>
  <div class="sh"><h3>${words(t('feat'))}</h3><a data-go="cats">${t('seeAll')}</a></div>
  <div class="grid" id="hgrid">${shown.length ? shown.map(pcard).join('') : `<div class="empty">${t('empty')}</div>`}</div>
  ${extra()}`;
}

function renderWish() {
  const L = P.filter(p => wish.includes(p.id));

  $('#s-wish').innerHTML = head(t('wish')) + `<div class="grid">${L.length ? L.map(pcard).join('') : `<div class="empty">${t('empty')}</div>`}</div>`;
}

function renderCats() {
  $('#s-cats').innerHTML = head(t('all')) + `<div class="searchrow rise"><label class="search">${ic('search')}<input id="q2" value="${q}" placeholder="${t('search')}" autocomplete="off"></label></div>
  <div class="chips rise" style="--d:.1s">${['all', ...CATS.map(c => c[0])].map(k => `<button class="chip${cat === k ? ' on' : ''}" data-cat="${k}">${t('cats')[k]}</button>`).join('')}</div>
  <div class="grid">${list().length ? list().map(pcard).join('') : `<div class="empty">${t('empty')}</div>`}</div>`;
}

const cartTotal = () => cart.reduce((s, c) => s + sdg(get(c.id).usd * PKG[c.pk][0]) * c.n, 0);

function renderCart() {
  const items = cart.map((c, i) => {
    const p = get(c.id);

    return `<div class="ci rise" style="--d:${i * .06}s"><div class="pm"><img src="${p.img}" alt=""></div><div><b>${p[lang]}</b><small>${PKG[c.pk][1]} ${t(p.u)}</small><em>${money(sdg(p.usd * PKG[c.pk][0]) * c.n)}</em></div><div class="qty"><button data-q="${i}" data-v="-1">${ic('minus')}</button><span>${c.n}</span><button data-q="${i}" data-v="1">${ic('plus')}</button></div></div>`;
  }).join('');

  $('#s-cart').innerHTML = head(t('cart')) + (cart.length ? `<div class="cart-wrap"><div>${items}</div><div class="sum rise"><div class="r"><span>${t('total')}</span><b>${money(cartTotal())}</b></div><button class="cta" data-order>${ic('chat')} ${t('checkout')}</button></div></div>` : `<div class="empty">${t('emptyCart')}</div>`);

  const n = cart.reduce((s, c) => s + c.n, 0),
        e = $('#nav em');

  if (e) {
    e.textContent = n;
    e.classList.toggle('on', n > 0);
  }
}

function renderMe() {
  const L = CONFIG.links,
        a = (cls, ic_, tt, sub, href) => `<a class="${cls}" href="${href}" target="_blank" rel="noopener"><span class="ic">${ic(ic_)}</span><span>${tt}<small dir="ltr" style="text-align:start">${sub}</small></span></a>`;

  $('#s-me').innerHTML = head(t('me')) + `<div class="me"><div class="lg rise">${logo(true)}</div><h2 class="rise">${CONFIG.name}</h2><p class="rise">${t('about')}</p>
  <div class="links">${a('wa rise', 'chat', t('wa'), CONFIG.phone, 'https://wa.me/' + CONFIG.whatsapp)}${a('rise', 'phone', t('call'), CONFIG.phone, 'tel:' + CONFIG.phone.replace(/\s/g, ''))}${a('rise', 'mail', t('mail'), CONFIG.email, 'mailto:' + CONFIG.email)}${a('rise', 'link', t('fb'), 'Facebook', L.facebook)}${a('rise', 'link', t('ig'), 'Instagram', L.instagram)}${a('rise', 'link', t('tt'), 'TikTok', L.tiktok)}</div></div>`;
}

const logo = () =>
  `<img src="logo.png" alt="" onload="this.nextElementSibling.hidden=true" onerror="this.hidden=true"><svg viewBox="0 0 24 24"><path d="M5 19c0-8 5-14 15-14 0 10-5 15-13 14" fill="#fff"/><path d="M5 19c3-5 6-8 10-10" stroke="#5b2fa8" stroke-width="1.6" fill="none" stroke-linecap="round"/></svg>`;

function renderNav() {
  const n = cart.reduce((s, c) => s + c.n, 0);

  $('#nav').innerHTML = [['home', 'home'], ['wish', 'heart'], ['cats', 'grid'], ['cart', 'cart'], ['me', 'user']].map(([k, i]) => `<button data-go="${k}" class="${tab === k ? 'on' : ''}" aria-label="${k}">${ic(i)}${k === 'cart' ? `<em class="${n ? 'on' : ''}">${n}</em>` : ''}</button>`).join('');
}

function renderDetail() {
  if (!D) return;

  const p = get(D.id),
        [m, units] = PKG[D.pk],
        total = sdg(p.usd * m) * D.n;

  const body = D.tab === 'd'
    ? `<div class="tc${D.more ? '' : ' cl'}">${p.d[lang]}</div><button class="more" data-more>${D.more ? t('less') : t('more')}</button>`
    : D.tab === 'r'
      ? `<div class="tc">${REV.map((r, i) => `<div class="rv" style="animation-delay:${i * .08}s"><div class="a">${r[lang === 'ar' ? 1 : 0][0]}</div><div><b>${r[lang === 'ar' ? 1 : 0]}</b> <span class="s">★★★★★</span><div>${r[lang === 'ar' ? 3 : 2]}</div></div></div>`).join('')}</div>`
      : `<div class="tc"><ol>${t('howT').map(x => `<li>${x}</li>`).join('')}</ol></div>`;

  $('#detail').innerHTML = `<div class="dw"><div class="dh"><button class="circ" data-close aria-label="Back">${ic('back', 'flip')}</button><span>${t('det')}</span>${langBtn()}</div>
  <div class="dimg"><img src="${p.big || p.img}" alt="${p[lang]}"></div>
  <div class="sheet"><div class="t"><div><h2>${p[lang]}</h2><small>${units} ${t(p.u)} ${t('inbox')}</small></div><div class="qty"><button data-dq="-1">${ic('minus')}</button><span>${D.n}</span><button data-dq="1">${ic('plus')}</button></div></div>
  <h4>${t('pkg')}</h4><div class="pk">${PKG.map(([mm, u], i) => `<button data-pk="${i}" class="${i === D.pk ? 'on' : ''}"><b>${pr(p, mm)}</b><small>${u} ${t(p.u)}</small></button>`).join('')}</div>
  <div class="tabs">${[['d', t('desc')], ['r', t('rev')], ['h', t('how')]].map(([k, x]) => `<button data-tab="${k}" class="${D.tab === k ? 'on' : ''}">${x}</button>`).join('')}</div>${body}</div>
  <div class="dbar"><div><span><small>${t('total')}</small><b>${money(total)}</b></span><button class="cta" data-dadd>${t('add')}</button></div></div></div>`;
}

function renderAll() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  renderNav();
  renderHome();
  renderWish();
  renderCats();
  renderCart();
  renderMe();
  renderDetail();
}

function show(k) {
  tab = k;
  $$('.screen').forEach(s => s.classList.toggle('on', s.id === 's-' + k));
  renderNav();
  scrollTo({ top: 0, behavior: 'instant' });

  if (k === 'home') renderHome();
  if (k === 'wish') renderWish();
  if (k === 'cats') renderCats();
  if (k === 'me') renderMe();
  if (k === 'cart') renderCart();
}

function toast(m) {
  const e = $('#toast');

  e.textContent = m;
  e.classList.add('on');
  clearTimeout(toastT);
  toastT = setTimeout(() => e.classList.remove('on'), 1600);
}

function addCart(id, pk = 0, n = 1) {
  const x = cart.find(c => c.id === id && c.pk === pk);

  x ? x.n += n : cart.push({ id, pk, n });
  store.set('cart', cart);
  renderCart();

  const e = $('#nav em');
  e.classList.remove('bump');
  void e.offsetWidth;
  e.classList.add('bump');
  toast(t('added'));
}

function openD(id) {
  D = { id, pk: 0, n: 1, tab: 'd', more: false };
  renderDetail();
  $('#detail').scrollTop = 0;
  $('#detail').classList.add('on');
  document.body.style.overflow = 'hidden';
}

function closeD() {
  $('#detail').classList.remove('on');
  document.body.style.overflow = '';
  D = null;
}

/* ====== الأحداث ====== */
document.addEventListener('click', e => {
  const g = s => e.target.closest(s);
  let el;

  if (el = g('[data-l]')) {
    lang = el.dataset.l;
    store.set('lang', lang);
    renderAll();
  }

  else if (el = g('[data-w]')) {
    e.stopPropagation();
    const id = +el.dataset.w;

    wish = wish.includes(id) ? wish.filter(x => x !== id) : [...wish, id];
    store.set('wish', wish);
    el.classList.toggle('on', wish.includes(id));

    if (tab === 'wish') setTimeout(renderWish, 350);
  }

  else if (el = g('[data-add]')) {
    e.stopPropagation();
    addCart(+el.dataset.add);
    el.classList.add('ok');
    setTimeout(() => el.classList.remove('ok'), 900);
  }

  else if (el = g('[data-open]')) {
    openD(+el.dataset.open);
  }

  else if (el = g('[data-cat]')) {
    cat = el.dataset.cat;
    tab === 'home' ? renderHome() : renderCats();
  }

  else if (el = g('[data-go]')) {
    show(el.dataset.go);
  }

  else if (el = g('[data-q]')) {
    const i = +el.dataset.q;

    cart[i].n += +el.dataset.v;

    if (cart[i].n < 1) cart.splice(i, 1);

    store.set('cart', cart);
    renderCart();
  }

  else if (g('[data-order]')) {
    const lines = cart.map(c => {
      const p = get(c.id);
      return `• ${p[lang]} (${PKG[c.pk][1]} ${t(p.u)}) × ${c.n} — ${money(sdg(p.usd * PKG[c.pk][0]) * c.n)}`;
    }).join('\n');

    open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(t('msg') + '\n' + lines + '\n\n' + t('total') + ': ' + money(cartTotal()))}`, '_blank');
  }

  else if (g('[data-close]')) {
    closeD();
  }

  else if (el = g('[data-pk]')) {
    D.pk = +el.dataset.pk;
    renderDetail();
  }

  else if (el = g('[data-dq]')) {
    D.n = Math.max(1, D.n + +el.dataset.dq);
    renderDetail();
  }

  else if (el = g('[data-tab]')) {
    D.tab = el.dataset.tab;
    renderDetail();
  }

  else if (g('[data-more]')) {
    D.more = !D.more;
    renderDetail();
  }

  else if (g('[data-dadd]')) {
    addCart(D.id, D.pk, D.n);
    closeD();
  }
});

document.addEventListener('input', e => {
  if (e.target.id === 'q' || e.target.id === 'q2') {
    q = e.target.value;

    const pos = e.target.selectionStart,
          id = e.target.id;

    (id === 'q' ? renderHome : renderCats)();

    const n = $('#' + id);
    n.focus();
    n.setSelectionRange(pos, pos);
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && D) closeD();
});

/* ====== البداية: السبلاش ====== */
document.documentElement.lang = lang;
document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

$('#spName').innerHTML = words(CONFIG.name);
$('#spTag').textContent = t('tag');

renderAll();
show('home');

setTimeout(() => {
  $('#splash').classList.add('out');
  setTimeout(() => $('#splash').remove(), 900);
}, 3000);

/* ====== كشف الصور الناقصة (مؤقت: احذفه بعد التصليح) ====== */
const missing = new Set();
document.addEventListener('error', e => {
  const im = e.target;
  if (!im || im.tagName !== 'IMG') return;
  const f = (im.getAttribute('src') || '').split('/').pop();
  if (f === 'logo.png') return;
  missing.add(f);
  let bar = document.getElementById('missBar');
  if (!bar) {
    bar = document.createElement('div');
    bar.id = 'missBar';
    bar.style.cssText = 'position:fixed;z-index:999;bottom:0;left:0;right:0;background:#b91c1c;color:#fff;padding:8px;font:12px monospace;direction:ltr';
    document.body.appendChild(bar);
  }
  bar.textContent = 'Missing: ' + [...missing].join(', ');
}, true);
