import Link from "next/link";

const COPY = {
  en: {
    h2: "Indoor air quality testing",
    intro:
      "A room can be cool and still have poor air. Indoor air quality testing measures what people are actually breathing, finds why it is off, and tells you what to change. We test occupied spaces — offices, classrooms, gyms, clinics, restaurants and homes — and report against the design intent and the relevant standard.",
    measureH: "What we measure",
    measure: [
      ["CO₂", "A practical indicator of whether enough fresh air reaches the people in the room: a reading that climbs through the day points to under-ventilation. Reference only: ASHRAE sets no CO₂ limit in Standard 62.1, and its position document on indoor carbon dioxide treats CO₂ as an indicator of ventilation, not a health threshold. Around 1,000 ppm is a widely used rule of thumb for flagging inadequate ventilation; we compare readings with the outdoor level and the design."],
      ["PM2.5 and PM10", "Fine dust and particles from outdoor air, cooking, construction and dirty filters. Reference values: the WHO Global Air Quality Guidelines (2021) give 15 µg/m³ as a 24-hour mean and 5 µg/m³ as an annual mean for PM2.5. These are WHO guideline values for outdoor air, not legal limits; we use them as a benchmark alongside the filter grade the system is meant to deliver."],
      ["Temperature and relative humidity", "Humidity that sits too high encourages condensation and mould. Reference: ASHRAE Standard 62.1 limits indoor humidity at design dehumidification conditions by dew point (60 °F, about 15.6 °C) in current editions, where earlier editions used 65% relative humidity. For comfort, roughly 40–60% RH is a commonly used target — a rule of thumb, not a code requirement."],
      ["Airflow", "Outdoor air quantity at the FAHU and at the diffusers, compared with the ASHRAE 62.1 requirement for the room's use and occupancy."],
    ],
    note: "The values above are guideline and reference values from WHO and ASHRAE. They are not legal limits and do not replace the requirements in your project specification or those of the authority. Sources: WHO Global Air Quality Guidelines (2021); ASHRAE Standard 62.1; ASHRAE position document on indoor carbon dioxide.",
    fixH: "What usually fixes it",
    fix: [
      "Restoring or increasing the outdoor-air supply and rebalancing the ductwork to deliver it",
      "Commissioning or repairing a fresh air handling unit that is not delivering its design airflow",
      "Upgrading filters to the grade the system and the space need, and keeping them changed",
      "Dehumidification and cooling-coil correction where humidity is the problem",
      "Cleaning ducts, coils and drain pans that are feeding dust, odour or microbial growth",
    ],
    outro: "You receive the measurements, the likely cause and the recommended fix, so the remedy is documented. Related: ",
    link: { href: "/services/tab-testing-adjusting-balancing-dubai", label: "airflow testing and balancing" },
    dir: "ltr" as const,
  },
  ar: {
    h2: "فحص جودة الهواء الداخلي",
    intro:
      "قد تكون الغرفة باردة وهواؤها رديء مع ذلك. فحص جودة الهواء الداخلي يقيس ما يتنفسه الناس فعلاً، ويحدّد سبب الخلل، ويبيّن ما يجب تغييره. نفحص الأماكن المشغولة — المكاتب والمدارس والنوادي الرياضية والعيادات والمطاعم والمنازل — ونقارن النتائج بمتطلبات التصميم والمعيار المعتمد.",
    measureH: "ماذا نقيس",
    measure: [
      ["ثاني أكسيد الكربون (CO₂)", "مؤشر عملي على وصول كمية كافية من الهواء النقي إلى الأشخاص داخل الغرفة: ارتفاع القراءة خلال اليوم يدل على نقص التهوية. للاسترشاد فقط: لا يضع معيار ASHRAE 62.1 حدّاً لثاني أكسيد الكربون، وتعامله وثيقة موقف ASHRAE بشأن ثاني أكسيد الكربون في الأماكن المغلقة كمؤشر على التهوية لا كعتبة صحية. ويُستخدم مستوى نحو 1,000 جزء في المليون قاعدةً تقريبية شائعة للتنبيه إلى تهوية غير كافية؛ ونقارن القراءات بمستوى الهواء الخارجي وبالتصميم."],
      ["الجسيمات PM2.5 وPM10", "غبار دقيق وجسيمات من الهواء الخارجي والطبخ والبناء والفلاتر المتسخة. قيم مرجعية: تحدّد الإرشادات العالمية لجودة الهواء الصادرة عن منظمة الصحة العالمية (2021) القيمة 15 ميكروغرام/م³ متوسطاً على 24 ساعة و5 ميكروغرام/م³ متوسطاً سنوياً للجسيمات PM2.5. وهي قيم إرشادية للهواء الخارجي وليست حدوداً قانونية؛ نستخدمها معياراً للمقارنة إلى جانب درجة الفلتر التي يُفترض أن يوفّرها النظام."],
      ["درجة الحرارة والرطوبة النسبية", "الرطوبة المرتفعة تشجّع التكثّف والعفن. للاسترشاد: يضبط معيار ASHRAE 62.1 في إصداراته الحالية رطوبة الأماكن عند ظروف التصميم لإزالة الرطوبة بحدّ لنقطة الندى (60 درجة فهرنهايت، أي نحو 15.6 درجة مئوية)، بينما استخدمت إصدارات أقدم 65٪ رطوبة نسبية. وللراحة يُستخدم عادةً نطاق نحو 40–60٪ رطوبة نسبية — قاعدة تقريبية وليست متطلباً في الأكواد."],
      ["تدفّق الهواء", "كمية الهواء الخارجي عند وحدة FAHU وعند الناشرات، مقارنةً بمتطلبات ASHRAE 62.1 لاستخدام الغرفة وعدد شاغليها."],
    ],
    note: "القيم أعلاه قيم إرشادية ومرجعية صادرة عن منظمة الصحة العالمية وASHRAE. وهي ليست حدوداً قانونية ولا تحلّ محل متطلبات مواصفات مشروعك أو متطلبات الجهة المختصة. المصادر: الإرشادات العالمية لجودة الهواء الصادرة عن منظمة الصحة العالمية (2021)؛ ASHRAE Standard 62.1؛ وثيقة موقف ASHRAE بشأن ثاني أكسيد الكربون في الأماكن المغلقة.",
    fixH: "ما الذي يعالج المشكلة عادةً",
    fix: [
      "إعادة أو زيادة إمداد الهواء الخارجي وإعادة موازنة المجاري لإيصاله",
      "تشغيل أو إصلاح وحدة FAHU التي لا تحقق تدفّقها التصميمي",
      "ترقية الفلاتر إلى الدرجة التي يحتاجها النظام والمكان، وتغييرها بانتظام",
      "إزالة الرطوبة وتصحيح عمل ملف التبريد حين تكون الرطوبة هي المشكلة",
      "تنظيف المجاري والملفات وأحواض التصريف التي تغذّي الغبار أو الروائح أو النمو الميكروبي",
    ],
    outro: "تحصل على القياسات والسبب المرجّح والإصلاح الموصى به، فيكون العلاج موثّقاً. ذو صلة: ",
    link: { href: "/ar/services/tab-testing-adjusting-balancing-dubai", label: "اختبار الهواء وموازنته" },
    dir: "rtl" as const,
  },
};

/** "Indoor air quality testing" section for the ventilation & fresh-air page (EN + AR). */
export function IaqSection({ lang = "en" }: { lang?: "en" | "ar" }) {
  const c = COPY[lang];
  return (
    <section id="indoor-air-quality" className="scroll-mt-24 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-heading text-3xl font-bold md:text-4xl">{c.h2}</h2>
        <p className="mt-6 max-w-3xl leading-relaxed text-text-muted">{c.intro}</p>
        <h3 className="mt-10 font-heading text-xl font-semibold">{c.measureH}</h3>
        <dl className="mt-4 grid max-w-4xl gap-5 sm:grid-cols-2">
          {c.measure.map(([k, v]) => (
            <div key={k} className="rounded-xl border border-border p-5">
              <dt className="font-semibold text-primary">{k}</dt>
              <dd className="mt-1 text-sm leading-relaxed text-text-muted">{v}</dd>
            </div>
          ))}
        </dl>
        <h3 className="mt-10 font-heading text-xl font-semibold">{c.fixH}</h3>
        <ul className="mt-4 max-w-3xl space-y-3">
          {c.fix.map((f) => (
            <li key={f} className="flex gap-3 text-text-muted">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {f}
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-text-muted">{c.note}</p>
        <p className="mt-4 max-w-3xl leading-relaxed text-text-muted">
          {c.outro}
          <Link href={c.link.href} className="font-semibold text-primary hover:underline">
            {c.link.label}
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
