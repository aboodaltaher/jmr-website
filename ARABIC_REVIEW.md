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

### Home — `src/app/ar/page.tsx` (pre-existing; verified wording)
Coverage card: «نخدم دبي والشارقة وعجمان وأبوظبي، مع توفّر الخدمة في جميع أنحاء الإمارات عند الطلب.»
Projects card: «32 مشروعاً» (matches the English "32 projects")

### Services hub — `src/app/ar/services/page.tsx`
Title: «خدمات التكييف في دبي والإمارات | AGEC»
Desc: «تصميم وتركيب واختبار وتشغيل تجريبي وصيانة أنظمة التكييف للفلل والمكاتب والمباني التجارية عبر الإمارات.»
H1: «خدمات تكييف متكاملة لكل أنواع المشاريع»
Service names: أنظمة VRF / VRV · تركيب أنظمة التكييف · التشيلر · صيانة التشيلر · وحدات DX ·
تركيب الثرموستات الذكي · التهوية والهواء النقي · تصميم التكييف والاستشارات ·
الاختبار والتشغيل التجريبي · الاختبار والضبط والموازنة (TAB) · صيانة وإصلاح المكيفات ·
عقود الصيانة السنوية (AMC)
Process steps: الاستشارة · التصميم والعرض · التوريد · التركيب · التشغيل والتسليم

### Quote — `src/app/ar/quote/page.tsx`
Title: «احصل على عرض سعر أو احجز خدمة في دبي | AGEC»
H1: «احصل على عرض سعر أو احجز خدمة»
Emergency line: «مكيّفك متوقّف الآن؟ اتصل بـ +971 58 557 5987»
Rating line: «مقيّمون 5.0★ من 32 مراجعة على Google»

### Contact — `src/app/ar/contact/page.tsx`
Title: «اتصل بـ AGEC | خدمات التكييف في دبي»
H1: «تواصل معنا» — «أخبرنا عن مشروعك أو أرسل لنا سؤالاً.»
Info labels: الهاتف · واتساب · البريد الإلكتروني · الموقع · التوفّر
Address: «مبنى المصرف، شارع الشيخ زايد، دبي، الإمارات»
Availability: «اتصل أو راسلنا على واتساب في أي وقت، 24/7. نرد خلال ساعة.»
Review button: «اترك تقييماً على Google» · Map heading: «زورونا»

### About — `src/app/ar/about/page.tsx`
Title: «من نحن | AGEC مقاول تكييف في دبي»
H1: «مقاولات تكييف يقودها المهندسون في دبي»
Section headings: «مبنيّة على الهندسة لا على الطرق المختصرة» · «ما الذي يحرّكنا» ·
«ما الذي نقدّمه» · «المهندس وراء العمل»
Values: صرامة هندسية · التزام بمواصفات المصنّع · دعم 24/7 · سجلّ مُثبَت
Engineer role: «المؤسّس وكبير مهندسي التكييف»
Facts kept from English: تأسست 2022 · 32 مشروعاً · 240 طن · 8.75 مليون درهم ·
ASHRAE 111 / SMACNA / CIBSE · رخصة 1221573 · إكسبو 2020 (Parcels)

### HVAC Installation — `src/app/ar/services/hvac-installation-dubai/page.tsx`
Title: «تركيب أنظمة التكييف في دبي | من التصميم للتسليم | AGEC»
H1: «تركيب أنظمة التكييف»
FAQ Qs: «هل تركّبون أنظمة صمّمها طرف آخر؟» · «ما أنواع التكييف التي تركّبونها؟» ·
«ماذا أستلم عند التسليم؟» · «هل يمكنكم العمل مع المقاول الرئيسي لدينا؟» ·
«هل تتولّون الصيانة بعد ذلك؟»

### TAB — `src/app/ar/services/tab-testing-adjusting-balancing-dubai/page.tsx`
Title: «موازنة واختبار وضبط أنظمة التكييف (TAB) في دبي | AGEC»
H1: «اختبار وضبط وموازنة الأنظمة (TAB)»
FAQ Qs: «ما الفرق بين TAB والتشغيل التجريبي؟» · «ماذا أستلم في النهاية؟» ·
«غرفي تبرد بتفاوت — هل هذه مشكلة موازنة؟» · «هل توازنون أنظمة الهواء والماء معاً؟» ·
«هل تقرير الموازنة مطلوب للتسليم؟»

### Chiller Maintenance — `src/app/ar/services/chiller-maintenance-dubai/page.tsx`
Title: «صيانة التشيلر في دبي | صيانة محطات التبريد | AGEC»
H1: «صيانة التشيلر»
FAQ Qs: «كم مرة ينبغي صيانة التشيلر؟» · «هل تصونون التشيلرات المبرّدة بالهواء والماء معاً؟» ·
«هل يمكنكم تولّي عقد صيانة قائم؟» · «ماذا نستلم بعد كل زيارة؟» ·
«هل تُصلحون التشيلرات وتركّبونها أيضاً؟»

### Ventilation & Fresh Air — `src/app/ar/services/ventilation-fresh-air/page.tsx`
Title: «تهوية الهواء النقي وفحص ثاني أكسيد الكربون في دبي | AGEC»
H1: «تهوية الهواء النقي وفحص ثاني أكسيد الكربون»
FAQ Qs: «لماذا يرتفع ثاني أكسيد الكربون في مكتبي؟» · «ما سبب ضعف دوران الهواء النقي؟» ·
«كيف تقيسون الهواء النقي وثاني أكسيد الكربون؟» · «ماذا يتضمّن تقرير تقييم الهواء النقي؟»
(Kept figures: ASHRAE 62.1 / بلدية دبي / الدفاع المدني / «حتى 40%» لاسترجاع الطاقة)

### Smart Thermostat — `src/app/ar/smart-thermostat-installation-dubai/page.tsx`
Title: «تركيب ثرموستات Nest و ecobee الذكي في دبي | AGEC»
H1: «تركيب الثرموستات الذكي (Nest و ecobee)»
12 FAQ questions translated (compatibility, 220V interface module, C-wire, cost, savings
«حتى 26%», Nest vs ecobee, same-day, warranty, villas, phone control, warranty void, booking).

### Air Balancing — `src/app/ar/air-balancing-airflow-testing-dubai/page.tsx`
Title: «موازنة الهواء واختبار التدفّق في دبي | AGEC»
H1: «موازنة الهواء واختبار تدفّق التكييف»
FAQ Qs: «ما هي موازنة الهواء؟» · «كم تستغرق؟» · «هل تعملون وفق تصميم الاستشاري؟» ·
«هل توازنون المباني القائمة لا الجديدة فقط؟» · «ما المعيار الذي تتّبعونه؟» · «هل تغطّون إمارتي؟»

### Added in the content-gaps pass (2026-11-14) — please review these first

All of these are translations of the English page of the same name; no new claims. Technical
terms kept in Latin script: VRF, VRV, DX, TR, FAHU, BMS, SMACNA, ASHRAE, CIBSE, PIR, GI, NOC.

**Live now (indexable, hreflang-paired, in the sitemap):**

- **VRF / VRV** — `src/app/ar/services/vrf-vrv-systems/page.tsx`
  Title: «تركيب وصيانة أنظمة VRF وVRV في دبي | AGEC» · H1: «أنظمة VRF / VRV»
- **DX units** — `src/app/ar/services/dx-units/page.tsx`
  Title: «وحدات DX وتركيب مكيفات سبليت مجاري في دبي | AGEC» · H1: «وحدات DX وأنظمة السبليت»
  (links to the Arabic smart-thermostat page)
- **HVAC design** — `src/app/ar/services/hvac-design/page.tsx`
  Title: «تصميم أنظمة التكييف وحساب الحمل الحراري في دبي | AGEC» · H1: «تصميم أنظمة التكييف والاستشارات»
  (Wording to check: «نظام السعفة» for Dubai's Al Sa'fat green-building rating; «هندسة القيمة» for
  value engineering; «حزم التصميم» for design packages.)

**Indoor-air-quality section added to the Arabic ventilation page** (parity with English) —
`src/components/IaqSection.tsx` (Arabic copy), shown on `/ar/services/ventilation-fresh-air`
H2: «فحص جودة الهواء الداخلي» · H3s: «ماذا نقيس» / «ما الذي يعالج المشكلة عادةً»
Terms to check: «ثاني أكسيد الكربون (CO₂)», «الجسيمات PM2.5 وPM10», «الرطوبة النسبية»,
«وحدة FAHU». Reference values quoted (same as English): ~1,000 ppm CO₂ as a ventilation flag,
~40–60% relative humidity, WHO guideline values for PM2.5 — please confirm you are happy to
publish these as general guidance.

**Drafts — NOT published yet (noindex, out of the sitemap, unlinked, no hreflang).** They
follow their English twin's switch in `src/data/new-pages.ts`; review the Arabic now so it is
ready when the English facts are confirmed. Each page keeps the English `[TO CONFIRM: …]`
markers on purpose (they are the same open questions as in `TO_CONFIRM.md`).

- **Ducting** — `src/data/long-services-ar.ts` (`DUCTING_AR`), route `src/app/ar/ac-ducting-installation-dubai/page.tsx`
  Title: «تركيب مجاري التكييف وتصنيع المجاري في دبي | AGEC» · H1: «تركيب مجاري التكييف وتصنيعها في دبي»
  Terms to check: «المجاري المعزولة مسبقاً (PIR)», «التقوية», «الدرزات», «البلينوم», «دامبرات الحريق»,
  «فراغ السقف», «مخططات الورشة».
- **MEP** — `src/data/long-services-ar.ts` (`MEP_AR`), route `src/app/ar/mep-contractors-dubai/page.tsx`
  Title: «مقاول MEP بقيادة التكييف في دبي | AGEC» · H1: «مقاول MEP بقيادة التكييف في دبي»
  Terms to check: «بقيادة التكييف», «نقاط التماس», «مخططات الورشة», «موافقات الجهات المختصة».

### Existing Arabic landing pages (already live; included for completeness)
`src/app/ar/ac-maintenance-dubai/page.tsx`, `/ar/ac-repair-dubai`, `/ar/ac-amc-dubai`,
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
