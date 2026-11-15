# ARABIC_REVIEW.md — Arabic copy for native-speaker review

All Arabic strings on agec.ae are listed here so a native speaker can check them.
Nothing was invented: every string is a translation of existing English copy, or a
figure (32 projects, 32 reviews, 5.0, licence 1221573, prices) taken from the shared
constants in `src/lib/company.ts`. Arabic is Modern Standard, aimed to be Gulf‑neutral.

**How to review:** read each string below in context (open the file listed), note any
wording you'd change, and send the edits back — we'll apply them. Mark anything that
reads awkwardly, is too formal/informal, or where a UAE‑specific term is preferred.

Phone numbers, email, licence number, brand names (Google Nest, ecobee, VRF, ASHRAE,
SMACNA, CIBSE, DEWA/ديوا) and the roman company name (AGEC) are intentionally kept LTR.

---

## 1. Shared chrome — `src/components/ArabicChrome.tsx`

Header nav: الرئيسية · الخدمات · صيانة المكيفات · إصلاح المكيفات · تنظيف المجاري ·
عقود الصيانة · من نحن · اتصل بنا
Header buttons: English (switch) · عرض سعر (quote CTA)
Footer tagline: «التاهر غبون للمقاولات الهندسية (AGEC) — تصميم وتركيب وصيانة أنظمة
التكييف والتهوية في دبي والإمارات.»
Footer note: «متاحون على الهاتف والواتساب على مدار الساعة — نرد خلال ساعة واحدة.»
Footer legal: «© {year} AGEC Technical Services L.L.C. · رخصة تجارية دبي رقم 1221573.
جميع الحقوق محفوظة.»
Mobile bar: اتصل · واتساب · aria: «اتصل بـ AGEC» / «تواصل مع AGEC على واتساب»

> NOTE for reviewer: the company's own Arabic rendering of "Altaher" is written here as
> «التاهر». Confirm whether you prefer «الطاهر». (English keeps "Altaher Ghabboun".)

## 2. Forms (shared, bilingual)

### Contact form — `src/components/ContactForm.tsx`
Labels: الاسم · البريد الإلكتروني · الهاتف · الموضوع · الرسالة
Helpers: (اختياري) · * (required)
Validation: «الاسم مطلوب» · «يرجى إدخال بريد إلكتروني صحيح» · «رقم الهاتف مطلوب» ·
«الرسالة مطلوبة»
Button: «إرسال الرسالة» / «جارٍ الإرسال...»
Success: «تم إرسال الرسالة» — «سنعاود التواصل معك قريباً.»

### Quote form — `src/components/QuoteForm.tsx`
Request types: «طارئ — المكيف متوقف الآن» · «خدمة أو إصلاح أو صيانة مكيف» ·
«تركيب جديد أو عرض سعر لمشروع» · «استفسار آخر»
Emirates: دبي · أبوظبي · الشارقة · عجمان · رأس الخيمة · الفجيرة · أم القيوين
Labels: «ما الذي تحتاجه؟» · الاسم الكامل · الهاتف · البريد الإلكتروني · الإمارة / المنطقة ·
«اختر الإمارة» · «أخبرنا بما تحتاجه»
Details placeholder: «مثال: 3 وحدات سبليت في فيلا تحتاج صيانة، أو عرض سعر VRF لتجهيز مكتب جديد.»
Button: «احصل على عرض سعر» / «جارٍ الإرسال...»
Validation: «يرجى اختيار ما تحتاجه» · «الاسم الكامل مطلوب» · «رقم الهاتف مطلوب» ·
«يرجى إدخال بريد إلكتروني صحيح»
Success: «شكراً — تم استلام طلبك» — «استلمنا تفاصيلك وسنتواصل معك قريباً.»

### Form assurance note — `src/lib/company.ts` (FORM_*_NOTE_AR)
«نرد عبر الهاتف والواتساب على مدار الساعة.» ·
«تُستخدم بياناتك للرد على استفسارك فقط — لا تُشارك ولا تُباع أبداً.»

## 3. Service-page template chrome — `src/components/ServiceDetailLayout.tsx` (lang="ar")
Breadcrumb: الخدمات · Eyebrow: خدمة
Headings: «ما هي {العنوان}؟» · «متى تحتاج هذه الخدمة» · «ماذا تقدّم AGEC» ·
«لماذا AGEC لـ {العنوان}» · «أسئلة شائعة»
CTA: «احصل على عرض سعر» · «أو اتصل على +971 58 557 5987» · «هل أنت مستعد لمناقشة مشروع {العنوان}؟»
Inline form: «احصل على عرض سعر لـ {العنوان}» — «أرسل تفاصيلك وسيعاود فريقنا الهندسي التواصل معك.»

## 4. Coverage sentence — `src/lib/company.ts` (COVERAGE_SENTENCE_AR)
«نخدم دبي والشارقة وعجمان وأبوظبي، مع توفّر الخدمة في جميع أنحاء الإمارات عند الطلب.»

## 5. WhatsApp prefilled messages — `src/lib/contact.ts`
`/ar`, `/ar/ac-repair-dubai`, `/ar/ac-amc-dubai`, `/ar/ac-maintenance-dubai`,
`/ar/ac-duct-cleaning-dubai` — short Arabic prefills (see file).

---

## 6. Pages — titles, descriptions, headings, FAQ questions

> The full body prose of each page is in the file listed. The key discrete strings
> are below; read the file for the paragraphs.

### Home — `src/app/(ar)/ar/page.tsx` (pre-existing; verified wording)
Coverage card: «نخدم دبي والشارقة وعجمان وأبوظبي، مع توفّر الخدمة في جميع أنحاء الإمارات عند الطلب.»
Projects card: «32 مشروعاً» (matches the English "32 projects")

### Services hub — `src/app/(ar)/ar/services/page.tsx`
Title: «خدمات التكييف في دبي والإمارات | AGEC»
Desc: «تصميم وتركيب واختبار وتشغيل تجريبي وصيانة أنظمة التكييف للفلل والمكاتب والمباني التجارية عبر الإمارات.»
H1: «خدمات تكييف متكاملة لكل أنواع المشاريع»
Service names: أنظمة VRF / VRV · تركيب أنظمة التكييف · التشيلر · صيانة التشيلر · وحدات DX ·
تركيب الثرموستات الذكي · التهوية والهواء النقي · تصميم التكييف والاستشارات ·
الاختبار والتشغيل التجريبي · الاختبار والضبط والموازنة (TAB) · صيانة وإصلاح المكيفات ·
عقود الصيانة السنوية (AMC)
Process steps: الاستشارة · التصميم والعرض · التوريد · التركيب · التشغيل والتسليم

### Quote — `src/app/(ar)/ar/quote/page.tsx`
Title: «احصل على عرض سعر أو احجز خدمة في دبي | AGEC»
H1: «احصل على عرض سعر أو احجز خدمة»
Emergency line: «مكيّفك متوقّف الآن؟ اتصل بـ +971 58 557 5987»
Rating line: «مقيّمون 5.0★ من 32 مراجعة على Google»

### Contact — `src/app/(ar)/ar/contact/page.tsx`
Title: «اتصل بـ AGEC | خدمات التكييف في دبي»
H1: «تواصل معنا» — «أخبرنا عن مشروعك أو أرسل لنا سؤالاً.»
Info labels: الهاتف · واتساب · البريد الإلكتروني · الموقع · التوفّر
Address: «مبنى المصرف، شارع الشيخ زايد، دبي، الإمارات»
Availability: «اتصل أو راسلنا على واتساب في أي وقت، 24/7. نرد خلال ساعة.»
Review button: «اترك تقييماً على Google» · Map heading: «زورونا»

### About — `src/app/(ar)/ar/about/page.tsx`
Title: «من نحن | AGEC مقاول تكييف في دبي»
H1: «مقاولات تكييف يقودها المهندسون في دبي»
Section headings: «مبنيّة على الهندسة لا على الطرق المختصرة» · «ما الذي يحرّكنا» ·
«ما الذي نقدّمه» · «المهندس وراء العمل»
Values: صرامة هندسية · التزام بمواصفات المصنّع · دعم 24/7 · سجلّ مُثبَت
Engineer role: «المؤسّس وكبير مهندسي التكييف»
Facts kept from English: تأسست 2022 · 32 مشروعاً · 240 طن · 8.75 مليون درهم ·
ASHRAE 111 / SMACNA / CIBSE · رخصة 1221573 · إكسبو 2020 (Parcels)

### HVAC Installation — `src/app/(ar)/ar/services/hvac-installation-dubai/page.tsx`
Title: «تركيب أنظمة التكييف في دبي | من التصميم للتسليم | AGEC»
H1: «تركيب أنظمة التكييف»
FAQ Qs: «هل تركّبون أنظمة صمّمها طرف آخر؟» · «ما أنواع التكييف التي تركّبونها؟» ·
«ماذا أستلم عند التسليم؟» · «هل يمكنكم العمل مع المقاول الرئيسي لدينا؟» ·
«هل تتولّون الصيانة بعد ذلك؟»

### TAB — `src/app/(ar)/ar/services/tab-testing-adjusting-balancing-dubai/page.tsx`
Title: «موازنة واختبار وضبط أنظمة التكييف (TAB) في دبي | AGEC»
H1: «اختبار وضبط وموازنة الأنظمة (TAB)»
FAQ Qs: «ما الفرق بين TAB والتشغيل التجريبي؟» · «ماذا أستلم في النهاية؟» ·
«غرفي تبرد بتفاوت — هل هذه مشكلة موازنة؟» · «هل توازنون أنظمة الهواء والماء معاً؟» ·
«هل تقرير الموازنة مطلوب للتسليم؟»

### Chiller Maintenance — `src/app/(ar)/ar/services/chiller-maintenance-dubai/page.tsx`
Title: «صيانة التشيلر في دبي | صيانة محطات التبريد | AGEC»
H1: «صيانة التشيلر»
FAQ Qs: «كم مرة ينبغي صيانة التشيلر؟» · «هل تصونون التشيلرات المبرّدة بالهواء والماء معاً؟» ·
«هل يمكنكم تولّي عقد صيانة قائم؟» · «ماذا نستلم بعد كل زيارة؟» ·
«هل تُصلحون التشيلرات وتركّبونها أيضاً؟»

### Ventilation & Fresh Air — `src/app/(ar)/ar/services/ventilation-fresh-air/page.tsx`
Title: «تهوية الهواء النقي وفحص ثاني أكسيد الكربون في دبي | AGEC»
H1: «تهوية الهواء النقي وفحص ثاني أكسيد الكربون»
FAQ Qs: «لماذا يرتفع ثاني أكسيد الكربون في مكتبي؟» · «ما سبب ضعف دوران الهواء النقي؟» ·
«كيف تقيسون الهواء النقي وثاني أكسيد الكربون؟» · «ماذا يتضمّن تقرير تقييم الهواء النقي؟»
(Kept figures: ASHRAE 62.1 / بلدية دبي / الدفاع المدني / «حتى 40%» لاسترجاع الطاقة)

### Smart Thermostat — `src/app/(ar)/ar/smart-thermostat-installation-dubai/page.tsx`
Title: «تركيب ثرموستات Nest و ecobee الذكي في دبي | AGEC»
H1: «تركيب الثرموستات الذكي (Nest و ecobee)»
12 FAQ questions translated (compatibility, 220V interface module, C-wire, cost, savings
«حتى 26%», Nest vs ecobee, same-day, warranty, villas, phone control, warranty void, booking).

### Air Balancing — `src/app/(ar)/ar/air-balancing-airflow-testing-dubai/page.tsx`
Title: «موازنة الهواء واختبار التدفّق في دبي | AGEC»
H1: «موازنة الهواء واختبار تدفّق التكييف»
FAQ Qs: «ما هي موازنة الهواء؟» · «كم تستغرق؟» · «هل تعملون وفق تصميم الاستشاري؟» ·
«هل توازنون المباني القائمة لا الجديدة فقط؟» · «ما المعيار الذي تتّبعونه؟» · «هل تغطّون إمارتي؟»

### Added in the content-gaps pass (2026-11-14) — please review these first

All of these are translations of the English page of the same name; no new claims. Technical
terms kept in Latin script: VRF, VRV, DX, TR, FAHU, BMS, SMACNA, ASHRAE, CIBSE, PIR, GI, NOC.

**Live now (indexable, hreflang-paired, in the sitemap):**

- **VRF / VRV** — `src/app/(ar)/ar/services/vrf-vrv-systems/page.tsx`
  Title: «تركيب وصيانة أنظمة VRF وVRV في دبي | AGEC» · H1: «أنظمة VRF / VRV»
- **DX units** — `src/app/(ar)/ar/services/dx-units/page.tsx`
  Title: «وحدات DX وتركيب مكيفات سبليت مجاري في دبي | AGEC» · H1: «وحدات DX وأنظمة السبليت»
  (links to the Arabic smart-thermostat page)
- **HVAC design** — `src/app/(ar)/ar/services/hvac-design/page.tsx`
  Title: «تصميم أنظمة التكييف وحساب الحمل الحراري في دبي | AGEC» · H1: «تصميم أنظمة التكييف والاستشارات»
  (Wording to check: «نظام السعفة» for Dubai's Al Sa'fat green-building rating; «هندسة القيمة» for
  value engineering; «حزم التصميم» for design packages.)

**Indoor-air-quality section added to the Arabic ventilation page** (parity with English) —
`src/components/IaqSection.tsx` (Arabic copy), shown on `/ar/services/ventilation-fresh-air`
H2: «فحص جودة الهواء الداخلي» · H3s: «ماذا نقيس» / «ما الذي يعالج المشكلة عادةً»
Terms to check: «ثاني أكسيد الكربون (CO₂)», «الجسيمات PM2.5 وPM10», «الرطوبة النسبية»,
«نقطة الندى», «وحدة FAHU», «قيم إرشادية ومرجعية». Reference values are worded as guidance, not
legal limits, with sources named: WHO Global Air Quality Guidelines 2021 (PM2.5: 15 µg/m³ 24-hour,
5 µg/m³ annual); ASHRAE 62.1 (no CO₂ limit; ~1,000 ppm is only a rule of thumb; humidity by dew
point 60 °F, earlier editions 65% RH; 40–60% RH comfort target is a rule of thumb) and the ASHRAE
position document on indoor CO₂.

**Drafts — NOT published yet (noindex, out of the sitemap, unlinked, no hreflang).** They
follow their English twin's switch in `src/data/new-pages.ts`; review the Arabic now so it is
ready when the English facts are confirmed. Each page keeps the English `[TO CONFIRM: …]`
markers on purpose (they are the same open questions as in `docs/open-questions.md`).

- **Ducting** — `src/data/long-services-ar.ts` (`DUCTING_AR`), route `src/app/(ar)/ar/ac-ducting-installation-dubai/page.tsx`
  Title: «تركيب مجاري التكييف وتصنيع المجاري في دبي | AGEC» · H1: «تركيب مجاري التكييف وتصنيعها في دبي»
  Terms to check: «المجاري المعزولة مسبقاً (PIR)», «التقوية», «الدرزات», «البلينوم», «دامبرات الحريق»,
  «فراغ السقف», «مخططات الورشة».
- **HVAC for MEP projects** — `src/data/long-services-ar.ts` (`MEP_AR`), route `src/app/(ar)/ar/mep-contractors-dubai/page.tsx`
  Title: «مقاول تكييف لمشاريع MEP في دبي | AGEC» · H1: «مقاول تكييف لمشاريع MEP في دبي»
  HVAC scope only (matches the trade licence): other trades are described as coordinated, not delivered.
  Terms to check: «نقاط التماس», «مخططات الورشة», «موافقات الجهات المختصة», «مقاول تكييف لمشاريع MEP».
  Both draft pages return 404 on the live site until their publish switch is on.

**Update (owner answers written in):** the two draft Arabic pages now carry confirmed facts, please
re-read these sentences:
- Ducting (`DUCTING_AR`): fabrication «جزئياً في ورشتنا الخاصة وجزئياً عبر شريك تصنيع»; leakage testing
  per «SMACNA HVAC Air Duct Leakage Test Manual» with the acceptance class set by the project
  specification and a test report at handover; reference «SMACNA HVAC Duct Construction Standards —
  Metal and Flexible» 4th edition (2020).
- HVAC for MEP projects (`MEP_AR`): «يقدّم الاستشاري طلبات موافقات الجهات المختصة وشهادات عدم الممانعة (NOC)؛
  وتعدّ AGEC وتوفّر مخططات التكييف والحسابات والمستندات اللازمة للتقديم.»
- Ducting (`DUCTING_AR`): pre-insulated panels are described generically («من موردين معتمدين… وفق مواصفات المشروع»); no brands or fire ratings are named. The ducting pages (EN + AR) are now published.
- The kitchen exhaust cleaning page is published in English only; there is no Arabic version yet.
- The HVAC-for-MEP pages (EN + AR) stay off until the owner has reviewed them on the preview URL.

### Existing Arabic landing pages (already live; included for completeness)
`src/app/(ar)/ar/ac-maintenance-dubai/page.tsx`, `/ar/ac-repair-dubai`, `/ar/ac-amc-dubai`,
`/ar/ac-duct-cleaning-dubai` — hero, why cards, steps and FAQs in Arabic (see files).

---

## Open questions for the reviewer
1. «التاهر» vs «الطاهر» for the founder/company surname rendering in Arabic.
2. Prefer «عرض سعر» or «طلب عرض أسعار» for the quote CTA?
3. «التشيلر» (loanword) vs «المبرّدات» for chillers — which reads better for UAE trade?
4. Any technical term you'd localise differently (e.g. التشغيل التجريبي for commissioning,
   الموازنة for balancing, المجاري for ducts).
5. «سبليت مجاري» (ducted split) vs «سبليت دكت» — which is the usual trade wording in the UAE?
6. «الخليج التجاري» for Business Bay in the VRF page's image caption — correct for your audience?

---

## Added in the speed-and-conversions pass (2026-11-14)

**Mid-page "Talk to an engineer" block** (`src/components/MidPageCta.tsx`, `MidPageForm.tsx`) on every
Arabic service, AMC, repair, duct-cleaning, maintenance and thermostat page:
- Headline: «تحدّث مع مهندس بخصوص {الخدمة}»
- Fields: «الاسم الكامل» · «الهاتف» · «نوع العقار» (placeholder «اختر نوع العقار»; options فيلا · شقة · مكتب · مطعم · أخرى)
- Button: «اطلب اتصالاً» / «جارٍ الإرسال...» · errors «الاسم الكامل مطلوب» · «رقم الهاتف مطلوب»
- Success: «شكراً — تم استلام طلبك» + «سيتصل بك مهندس قريباً. للرد الأسرع اتصل بنا أو راسلنا على واتساب.»
- Buttons: «واتساب» · «اتصل {الرقم}»

**Per-page WhatsApp message** (`src/data/whatsapp-pages.ts`, Arabic template):
«مرحباً AGEC، أنا في صفحة {اسم الصفحة} — أحتاج مساعدة بخصوص {نوع العقار} في {المنطقة}.»
Default property type «عقاري», default area «دبي». Arabic page names: الرئيسية · من نحن · الخدمات ·
صيانة المكيفات · إصلاح المكيفات · عقود الصيانة السنوية · تنظيف مجاري التكييف · تركيب الثرموستات الذكي ·
تركيب أنظمة التكييف · الاختبار والضبط والموازنة · صيانة التشيلر · أنظمة VRF / VRV · وحدات DX ·
التهوية والهواء النقي · تصميم أنظمة التكييف · تركيب المجاري وتصنيعها · تكييف لمشاريع MEP · اتصل بنا · طلب عرض سعر.
Please check «أنا في صفحة …» reads naturally as a WhatsApp opener.

**HVAC-for-MEP Arabic page, wording fixes** (`MEP_AR` in `src/data/long-services-ar.ts`): the interface
paragraph («نحن نورّد ونوصّل معدّات التكييف الخاصة بنا فقط…»), the authority-approvals paragraph (fire
and life-safety systems are «يصمّمها ويعتمدها مصمّم ومقاول الحماية من الحريق، وليس نحن»), the interface
bullet «…وإنذار الحريق، مع مسؤول عن كل منها», and the draft-banner text. Still gated (404 on the live site).

---

## `/ar/ac-amc-dubai` — Arabic brought in line with the English page (2026-11-15) — IN PR #63, AWAITING OWNER OK

The Arabic AMC page now has every section the English page has. Written as natural Gulf business Arabic, not
word for word. Owner-confirmed facts used: SLA tiers emergency 4 hours · urgent same day · routine 48 hours;
service report with photos after every visit; FCU / indoor-unit filter cleaning quarterly; no CAFM; one
visit-frequency wording («كل 3 أشهر (4 زيارات سنوياً)» / "every 3 months (4 visits a year)").
Owner-chosen terms: «صيانة دورية» for planned (PPM) maintenance, «اعتيادي» for the routine SLA tier.
Order on the page: hero · who it suits · what the contract covers · plans · mid-page CTA · exclusions ·
commercial & building · how it works · switching · FAQs · CTA.

### 0. Title and meta description (aligned with the H1)
**Title (45 characters):** «عقد صيانة المكيفات السنوي (AMC) في دبي | AGEC»
**Meta description (152 characters):** «عقد صيانة المكيفات السنوي (AMC) في دبي للفلل والشقق والمكاتب والمباني: زيارات مجدولة، وتقرير خدمة مع صور بعد كل زيارة، وأولوية في الاستجابة عند الأعطال.»

### 1. Hero
**H1 (was «عقود صيانة المكيفات السنوية في دبي»):** «عقد صيانة المكيفات السنوي (AMC) في دبي»
**Intro:** «عقد صيانة المكيفات السنوي (AMC) في دبي يُبقي مكيفك تحت صيانة مجدولة: مهندس مخصّص، وتقرير خدمة مع صور بعد كل زيارة، وأولوية في الاستجابة عند أي عطل. تبدأ خدمة الوحدة لمرة واحدة من 350 درهماً (بحد أدنى 3 وحدات).»
(The price sentence at the end is the existing one, unchanged.)

### 2. Who the contract suits (new)
**Eyebrow:** «لمن يناسب العقد»
**H2:** «لمن يناسب عقد الصيانة السنوي»
**Text:** «ملّاك الفلل وملّاك العقارات ومديرو العقارات، والمكاتب والمحلات التجارية. مقاول واحد يتولّى كل وحدة وفق جدول ثابت، فتُكتشف الأعطال قبل ذروة الصيف لا في أثنائها.»

### 3. What the contract covers (new)
**Eyebrow:** «ما يشمله العقد»
**H2:** «ماذا يشمل عقد الصيانة السنوي للمكيفات (AMC) في دبي؟»
- «زيارات مجدولة — زيارتان أو 4 أو 6 زيارات في السنة حسب الخطة؛ والموصى به كل 3 أشهر (4 زيارات سنوياً)»
- «تنظيف الفلاتر والملفات»
- «تنظيف خط التصريف»
- «فحص ضغط الفريون»
- «فحص الأجزاء الكهربائية والتحكم»
- «اختبار الأداء»
- «تقرير خدمة مع صور بعد كل زيارة»

### 4. Plans — two existing strings changed (photo reports)
- Lead-in: «الأسعار لكل وحدة لكل زيارة. جميع الخطط تشمل تقرير خدمة مع صور بعد كل زيارة.»
- Tick on each plan card: «تقرير خدمة مع صور لكل زيارة»

### 5. Commercial & building section (new)
**Eyebrow:** «للمباني والمنشآت»
**H2:** «عقد الصيانة للمباني والمنشآت التجارية (صيانة التكييف والتهوية HVAC)»
**Intro:** «العقد نفسه يتّسع من فيلا واحدة إلى مبنى كامل. في المكاتب والمحلات التجارية والمطاعم والفنادق والمجمّعات المُدارة، نضع كامل منظومة التكييف والتهوية لديكم تحت عقد صيانة واحد — سبليت ومجاري، وVRF/VRV، وتشيلرات، ووحدات مناولة الهواء (AHU)، ووحدات ملف المروحة (FCU)، والتهوية — فيكون فريق هندسي واحد مسؤولاً عن كل شيء، بدلاً من زيارات متفرقة من جهات مختلفة.»
**Two ticks:**
- «كل المعدات تحت عقد واحد — سبليت، ومجاري، وVRF/VRV، وتشيلرات، ووحدات مناولة الهواء، ووحدات ملف المروحة، والتهوية»
- «تسعير شفاف — الزيارات المجدولة بسعر ثابت، وقطع الغيار والأعمال الكبرى تُسعَّر كتابةً قبل التنفيذ»

**H3:** «جدول الصيانة الدورية (PPM)» — «زيارات الصيانة الدورية حسب نوع المعدات.»

| المعدات | زيارات الصيانة الدورية |
|---|---|
| وحدات السبليت والمجاري | زيارتان أو 4 أو 6 زيارات في السنة حسب الخطة؛ والموصى به كل 3 أشهر (4 زيارات سنوياً). في كل زيارة: تنظيف الفلاتر والملفات، وتنظيف خط التصريف، وفحص ضغط الفريون، وفحص الأجزاء الكهربائية والتحكم، واختبار الأداء، وتقرير خدمة مع صور. |
| VRF/VRV، ووحدات مناولة الهواء، ووحدات ملف المروحة، والتهوية | تنظيف فلاتر وحدات ملف المروحة والوحدات الداخلية: كل 3 أشهر. باقي الزيارات تُحدَّد لكل موقع بعد المعاينة، بحسب عدد المعدات وأنواعها. |
| التشيلرات (link to `/ar/services/chiller-maintenance-dubai`) | جدول مخصّص — راجع صيانة التشيلر. |

**H3:** «مستويات الاستجابة (SLA)»

| المستوى | زمن الاستجابة |
|---|---|
| طارئ | خلال 4 ساعات |
| عاجل | في نفس اليوم |
| اعتيادي | خلال 48 ساعة |

«نربط مستوى الاستجابة بمدى أهمية كل نظام، ويكون المستوى الذي تحتاجونه جزءاً من عرض السعر بعد معاينة الموقع.»

**H3:** «التقارير لفرق إدارة المرافق»
«تقرير خدمة مع صور بعد كل زيارة — هو السجل الذي يحتاجه مديرو المرافق للتدقيق وإعداد الميزانيات.»

**Closing line:** «يُسعَّر عقد المباني بعد معاينة الموقع، بحسب عدد الوحدات وأنواعها ومستوى الاستجابة الذي تحتاجونه.»

### 6. How it works (new)
**Eyebrow:** «كيف يعمل»
**H2:** «كيف يعمل العقد»
1. «1معاينة الموقع وفحص مرجعي للمنظومة الحالية.»
2. «2عرض مكتوب.»
3. «3توقيع العقد.»
4. «4زيارات مجدولة.»
5. «5تقرير بعد كل زيارة.»

### 7. Switching contractor (new)
**Eyebrow:** «الانتقال»
**H2:** «الانتقال من مقاولكم الحالي»
**Text:** «يمكننا استلام الصيانة من مقاولكم الحالي، ونبدأ بفحص مرجعي لوحداتكم.»

### 8. FAQs (11 in total, same as English; the FAQPage schema is built from the same list)
1. **CHANGED** **س:** «كم مرة يجب صيانة مكيف الفيلا في دبي؟»
   **ج:** «نوصي بزيارة كل 3 أشهر (4 زيارات سنوياً)، مع أعلى استخدام بين مايو وأكتوبر.»
2. (unchanged) **س:** «ما الفرق بين عقد الصيانة والخدمة لمرة واحدة؟»
   **ج:** «الخدمة لمرة واحدة تعالج مشكلة اليوم. أما العقد السنوي فيجدول زيارات السنة، ويمنحك مهندساً مخصّصاً وتقارير، ويضع إصلاحاتك في مقدمة الأولوية.»
3. (unchanged) **س:** «هل قطع الغيار والغاز مشمولة؟»
   **ج:** «الصيانة الدورية مشمولة في سعر الزيارة. قطع الغيار وتعبئة الفريون غير مشمولة، لكننا نسعّرها كتابةً قبل أي عمل، ويحصل عملاء العقود على خصم على القطع حسب الخطة.»
4. (unchanged) **س:** «هل تستلمون الصيانة من مقاول حالي؟»
   **ج:** «نعم. نبدأ بفحص مرجعي لوحداتكم، ثم نتفق على النطاق كتابةً.»
5. **NEW** **س:** «هل يمكنني إلغاء العقد أو تعديل نطاقه؟»
   **ج:** «مدة العقد 12 شهراً. يمكنكم إضافة وحدات أو إزالتها كتابةً في أي وقت، ويحق لأي من الطرفين إنهاء العقد بإشعار كتابي مدته 30 يوماً. وتُحتسب الزيارات المنفَّذة فعلاً بسعر الخطة.»
6. **NEW** **س:** «هل يمكنكم تغطية مبنى كامل أو عدة وحدات بعقد واحد؟»
   **ج:** «نعم. في المكاتب والمحلات التجارية والفنادق والمجمّعات المُدارة نضع كامل منظومة التكييف والتهوية لديكم — سبليت ومجاري، وVRF/VRV، وتشيلرات، ووحدات مناولة الهواء (AHU)، ووحدات ملف المروحة (FCU)، والتهوية — تحت عقد صيانة واحد، مع مستويات استجابة محدّدة (SLA) وتقارير موثّقة لفريق إدارة المرافق.»
7. **NEW** **س:** «كيف يُسعَّر عقد الصيانة التجاري؟»
   **ج:** «تبدأ الخطط السكنية من 250 درهماً للوحدة في الزيارة الواحدة. أما التغطية التجارية وتغطية المباني فتُسعَّر بعد معاينة الموقع، بحسب عدد الوحدات وأنواعها ومستوى الاستجابة الذي تحتاجونه — الزيارات المجدولة بسعر ثابت، وقطع الغيار والأعمال الكبرى تُسعَّر كتابةً قبل التنفيذ.»
8. **NEW** **س:** «ماذا يستلم مدير المبنى بعد كل زيارة؟»
   **ج:** «تقرير خدمة مع صور بعد كل زيارة، موثّق لفريق إدارة المرافق. وهو السجل الذي يحتاجه مدير المرافق للتدقيق وإعداد الميزانيات.»
9. **NEW** **س:** «بمن نتصل إذا تعطّلت إحدى الوحدات في المبنى؟»
   **ج:** «يمكنكم التواصل معنا على مدار الساعة (24/7) بالاتصال أو عبر واتساب. مستويات الاستجابة في عقود المباني: الطارئ خلال 4 ساعات، والعاجل في نفس اليوم، والاعتيادي خلال 48 ساعة.»
10. **NEW** **س:** «هل تعاينون المبنى قبل تسعير عقد الصيانة التجاري؟»
   **ج:** «نعم. نبدأ بمعاينة الموقع وفحص مرجعي للمنظومة الحالية، ثم نرسل عرضاً مكتوباً. يُسعَّر العقد بحسب عدد الوحدات وأنواعها ومستوى الاستجابة الذي تحتاجونه.»
11. (unchanged) **س:** «هل تغطّون إمارتي؟»
   **ج:** «نفّذنا مشاريع في دبي والشارقة وعجمان وأبوظبي، ونخدم جميع أنحاء الإمارات. اتصل أو راسلنا على واتساب على الرقم +971 58 557 5987.»

### Changes on the English page made at the same time
- Visit frequency reads "every 3 months (4 visits a year)" in all three places on `/ac-amc-dubai`.
- PPM table, split & ducted row, and the hero: "a written report" → "a service report with photos".

### Wording choices (settled by the owner)
«صيانة دورية» for planned/PPM maintenance; «اعتيادي» for the routine tier; «عاجل» urgent; «طارئ» emergency.
«وحدات ملف المروحة (FCU)», «وحدات مناولة الهواء (AHU)», «تقرير خدمة», «معاينة الموقع», «الفريون» match the rest of the site.
PPM, SLA, AHU, FCU, VRF/VRV, HVAC stay in Latin letters as trade terms.
Plural-polite («لديكم / تحتاجونه / يمكنكم») in the new text, as in the existing FAQs.

### Not changed (owner decision)
"Every 3–4 months" stays on `/ac-maintenance-dubai`, `/ar/ac-maintenance-dubai` and the blog posts: general servicing advice, not the AMC recommendation.
The Arabic chiller page («زيارات وقائية مخطّطة») still uses the older wording; not part of this PR.
