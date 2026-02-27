import { Clock, TrendingDown } from 'lucide-react';

export default function FinalCTA() {
  const checkoutUrl = "https://pay.hotmart.com/V104670293D?checkoutMode=10";

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-teal-600 to-blue-700 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          You don't have to face anxious days on your own.
        </h2>

        <p className="text-xl md:text-2xl mb-8" style={{ lineHeight: '1.8' }}>
          God has already promised a peace that "surpasses all understanding".
        </p>

        <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto" style={{ lineHeight: '1.8' }}>
          This devotional is an invitation to experience that peace in practice, for 30 days in a row – one step at a time, one verse at a time, one deep breath at a time.
        </p>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <TrendingDown className="w-6 h-6 text-yellow-300" />
            <p className="text-yellow-300 font-bold text-lg uppercase tracking-wide">
              Limited Time Promotional Price
            </p>
          </div>

          <div className="mb-4">
            <p className="text-white/80 line-through text-2xl mb-2">
              Regular price: $17.00
            </p>
            <p className="text-yellow-300 font-bold text-5xl mb-2">
              Today: $4.90
            </p>
            <p className="text-white/90 text-lg">
              That's 71% off – but only for a limited time
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 text-white/80 text-sm">
            <Clock className="w-4 h-4" />
            <span>One-time payment. Instant access. No subscription.</span>
          </div>
        </div>

        <a
          href={checkoutUrl}
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-5 px-10 rounded-full text-xl transition-all transform hover:scale-105 shadow-2xl mb-6"
        >
          YES, I WANT TO LIVE 30 DAYS OF PEACE WITH GOD
        </a>

        <p className="text-white/80 text-sm">
          Protected by our 7-day money-back guarantee
        </p>
      </div>
    </section>
  );
}
