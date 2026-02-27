interface HeroProps {
  onCtaClick: () => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-amber-50 via-rose-50 to-peach-50 py-16 px-4 md:py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
          Discover a simple, biblical way to experience 30 days of peace in the middle of anxiety – even if you've tried everything and still feel overwhelmed.
        </h1>

        <h2 className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto" style={{ lineHeight: '1.8' }}>
          A practical, Christ‑centred and gentle devotional, created especially for anxious Christians who want to quiet racing thoughts, renew their minds in God's Word and learn to rest in Him again – day after day.
        </h2>

        <div className="mb-8">
          <img
            src="https://faithglobal.store/wp-content/uploads/2026/02/1772163815-scaled.png"
            alt="30 Days of Peace Devotional Book Cover"
            className="max-w-sm mx-auto shadow-2xl rounded-lg"
          />
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto mb-8">
          <div className="text-red-500 line-through text-xl mb-2">
            WAS $17.00
          </div>
          <div className="text-gray-600 text-sm uppercase tracking-wide mb-2">
            NOW ONLY
          </div>
          <div className="text-green-600 font-bold text-5xl mb-3">
            $4.90
          </div>
          <div className="text-gray-600 text-sm">
            One-time payment. Instant digital access.
          </div>
        </div>

        <button
          onClick={onCtaClick}
          className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg"
        >
          SEE EVERYTHING I'LL RECEIVE
        </button>
      </div>
    </section>
  );
}
