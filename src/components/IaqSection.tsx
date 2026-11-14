import Link from "next/link";

const COPY = {
  en: {
    h2: "Indoor air quality testing",
    intro:
      "A room can be cool and still have poor air. Indoor air quality testing measures what people are actually breathing, finds why it is off, and tells you what to change. We test occupied spaces — offices, classrooms, gyms, clinics, restaurants and homes — and report against the design intent and the relevant standard.",
    measureH: "What we measure",
    measure: [
      ["CO₂", "A direct indicator of whether enough fresh air reaches the people in the room. A reading that climbs through the day points to under-ventilation; a commonly used rule of thumb treats sustained readings around 1,000 ppm as a flag for inadequate ventilation."],
      ["PM2.5 and PM10", "Fine dust and particles from outdoor air, cooking, construction and dirty filters. We compare readings with the WHO air-quality guideline values and with the filter grade the system is meant to deliver."],
      ["Temperature and relative humidity", "Humidity that sits too high encourages condensation and mould; too low is uncomfortable. A band of roughly 40–60% relative humidity is the usual comfort target."],
      ["Airflow", "Outdoor air quantity at the FAHU and at the diffusers, compared with the ASHRAE 62.1 requirement for the room's use and occupancy."],
    ],
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
      ["ثاني أكسيد الكربون (CO₂)", "مؤشر مباشر على وصول كمية كافية من الهواء النقي إلى الأشخاص داخل الغرفة. ارتفاع القراءة خلال اليوم يدل على نقص التهوية، ويُستخدم عادةً مستوى نحو 1,000 جزء في المليون إذا استمر كإشارة تحذيرية إلى تهوية غير كافية."],
      ["الجسيمات PM2.5 وPM10", "غبار دقيق وجسيمات من الهواء الخارجي والطبخ والبناء والفلاتر المتسخة. نقارن القراءات بالقيم الإرشادية لمنظمة الصحة العالمية وبدرجة الفلتر التي يُفترض أن يوفّرها النظام."],
      ["درجة الحرارة والرطوبة النسبية", "الرطوبة المرتفعة تشجّع التكثّف والعفن، والمنخفضة جداً غير مريحة. المعدّل المعتاد للراحة نحو 40–60٪ رطوبة نسبية."],
      ["تدفّق الهواء", "كمية الهواء الخارجي عند وحدة FAHU وعند الناشرات، مقارنةً بمتطلبات ASHRAE 62.1 لاستخدام الغرفة وعدد شاغليها."],
    ],
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
        <p className="mt-8 max-w-3xl leading-relaxed text-text-muted">
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
