interface ListingsHeroBannerProps {
  headingId?: string;
  searchQuery?: string;
  onGoHome?: () => void;
  onBrowseListings?: () => void;
  isEn?: boolean;
}

export function ListingsHeroBanner({
  headingId = 'directory-page-heading',
  searchQuery = '',
  onGoHome,
  onBrowseListings,
  isEn = false,
}: ListingsHeroBannerProps) {
  const trimmedQuery = searchQuery.trim();

  const subtitle = trimmedQuery
    ? isEn
      ? `Search results for "${trimmedQuery}" — inspect age, weight, vaccination status, and SAR pricing.`
      : `نتائج البحث الحالية عن «${trimmedQuery}» — تصفّح المواصفات والعمر والوزن والتحصين بالريال السعودي.`
    : isEn
    ? 'Carefully raised, veterinary-checked livestock with direct breeder contact across Saudi Arabia.'
    : 'تربية بعناية وتحصين بيطري وتواصل مباشر مع المربين في جميع مناطق المملكة.';

  return (
    <section
      aria-labelledby={headingId}
      className="relative w-full overflow-hidden bg-[#0E261C] min-h-[290px] sm:min-h-[360px] lg:min-h-[420px] flex items-center"
    >
      {/* Background Sunlit Livestock Pen Photograph */}
      <img
        src="/src/assets/images/listings_hero_sheep_pen_1795504704605.jpg"
        alt={
          isEn
            ? 'Healthy white Saudi Harri sheep in a sunlit livestock pen'
            : 'أغنام سعودية صحية داخل مراح مشمس'
        }
        className="absolute inset-0 w-full h-full object-cover object-[28%_45%] sm:object-[25%_42%]"
        fetchPriority="high"
      />

      {/* Emerald-Woodland Contrast Scrim (Mobile) */}
      <div
        aria-hidden="true"
        className="md:hidden absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(11, 35, 26, 0.90) 0%, rgba(16, 60, 44, 0.68) 55%, rgba(11, 35, 26, 0.36) 100%)',
        }}
      />

      {/* Emerald-Woodland Contrast Scrim (Desktop RTL/LTR) */}
      <div
        aria-hidden="true"
        className="hidden md:block absolute inset-0 z-10 pointer-events-none"
        style={{
          background: isEn
            ? 'linear-gradient(to right, rgba(11, 35, 26, 0.92) 0%, rgba(16, 60, 44, 0.78) 38%, rgba(16, 60, 44, 0.25) 66%, transparent 92%)'
            : 'linear-gradient(to left, rgba(11, 35, 26, 0.92) 0%, rgba(16, 60, 44, 0.78) 38%, rgba(16, 60, 44, 0.25) 66%, transparent 92%)',
        }}
      />

      {/* Foreground Copy & Single Primary CTA */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14 sm:pt-12 sm:pb-16">
        <div className="max-w-xl text-start">
          <nav
            aria-label={isEn ? 'Breadcrumb' : 'مسار التنقل'}
            className="mb-3 flex items-center gap-2 text-xs font-semibold text-white/80"
          >
            {onGoHome ? (
              <button
                type="button"
                onClick={onGoHome}
                className="hover:text-[#F4C569] transition-colors cursor-pointer"
              >
                {isEn ? 'Home' : 'الرئيسية'}
              </button>
            ) : (
              <span>{isEn ? 'Home' : 'الرئيسية'}</span>
            )}
            <span aria-hidden="true" className="text-white/45">
              /
            </span>
            <span className="text-[#F4C569]">{isEn ? 'Listings Directory' : 'دليل الإعلانات'}</span>
          </nav>

          <h1
            id={headingId}
            className="font-display text-3xl sm:text-5xl font-black text-white leading-[1.24] tracking-tight drop-shadow-sm"
          >
            {isEn ? (
              <>
                From Verified Saudi Ranches
                <br />
                Directly to Your Choice
              </>
            ) : (
              <>
                من مراح المربين الموثقين
                <br />
                مباشرةً إلى اختيارك
              </>
            )}
          </h1>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base font-medium text-emerald-50/95 leading-relaxed max-w-md">
            {subtitle}
          </p>

          {onBrowseListings && (
            <button
              type="button"
              onClick={onBrowseListings}
              className="mt-5 sm:mt-6 min-h-[44px] px-7 py-2.5 rounded-lg bg-[#F4C569] hover:bg-[#ffd582] text-[#0B231A] text-sm sm:text-base font-extrabold shadow-lg transition-all cursor-pointer whitespace-nowrap"
            >
              {isEn ? 'Browse Now' : 'تصفّح الآن'}
            </button>
          )}
        </div>
      </div>

      {/* Organic Torn Edge Transition into Page Canvas */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 inset-x-0 z-20 overflow-hidden leading-none"
      >
        <svg
          viewBox="0 0 1440 48"
          preserveAspectRatio="none"
          className="block w-full h-6 sm:h-9 fill-[var(--color-canvas)]"
        >
          <path d="M0,26 L42,18 L86,28 L134,14 L182,27 L230,19 L278,30 L328,15 L376,26 L425,17 L474,29 L522,16 L570,27 L618,18 L666,28 L715,15 L764,26 L812,17 L860,29 L908,18 L956,27 L1005,15 L1054,28 L1102,19 L1150,27 L1198,16 L1246,28 L1295,17 L1344,26 L1392,18 L1440,25 L1440,48 L0,48 Z" />
        </svg>
      </div>
    </section>
  );
}
