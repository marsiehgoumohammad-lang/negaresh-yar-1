import React from 'react';

type Courthouse = {
  name: string;
  area: string;
  lat: number;
  lng: number;
};

const COURTHOUSES: Courthouse[] = [
  { name: 'مجتمع قضایی قدس', area: 'غرب و شمال غرب تهران', lat: 35.7746803, lng: 51.3102853 },
  { name: 'مجتمع قضایی شهید بهشتی', area: 'مرکز تهران', lat: 35.7056301, lng: 51.4183227 },
];

export function CourthouseMapSection({ heading }: { heading?: string }) {
  return (
    <section className="space-y-5" aria-labelledby="courthouse-map-heading">
      <h2 id="courthouse-map-heading" className="text-xl sm:text-2xl font-black text-white leading-snug">
        {heading || 'مجتمع های قضایی مهم تهران روی نقشه'}
      </h2>
      <p className="text-sm sm:text-base text-slate-300 leading-8">
        برای برنامه ریزی رفت و آمد به دادگاه، موقعیت دو مجتمع قضایی پرمراجعه تهران در نقشه آمده است. شعبه و مجتمع
        رسیدگی کننده به پرونده شما را همیشه ابلاغیه یا درگاه رسمی عدل ایران تعیین می کند، نه نزدیکی به محل زندگی یا دفتر وکیل.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {COURTHOUSES.map((c) => (
          <div key={c.name} className="rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden">
            <div className="aspect-video w-full">
              <iframe
                src={`https://maps.google.com/maps?q=${c.lat},${c.lng}&z=15&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`موقعیت ${c.name} در نقشه گوگل`}
              />
            </div>
            <div className="p-4 space-y-3">
              <div>
                <p className="font-bold text-white text-sm sm:text-base">{c.name}</p>
                <p className="text-xs text-slate-400">{c.area}</p>
              </div>
              <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${c.lat},${c.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-[#E5C158] hover:border-[#E5C158]/60 transition-colors"
                >
                  مسیریابی در گوگل مپ
                </a>
                <a
                  href={`https://waze.com/ul?ll=${c.lat},${c.lng}&navigate=yes`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 hover:border-slate-600 transition-colors"
                >
                  مسیریابی در Waze
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-xs text-slate-400 leading-7">
        مجتمع های قضایی گاهی جابه جا می شوند؛ پیش از مراجعه آدرس و شعبه را در ابلاغیه یا درگاه عدل ایران بررسی کنید.
        نگارش یار دفتر یا شعبه حضوری در تهران ندارد و خدمات خود را به صورت غیرحضوری ارائه می دهد.
      </p>
    </section>
  );
}
