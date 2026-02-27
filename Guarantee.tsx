import { Shield } from 'lucide-react';

export default function Guarantee() {
  const checkoutUrl = "https://pay.hotmart.com/V104670293D?checkoutMode=10";

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-teal-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Shield className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            7-Day Money-Back Guarantee
          </h2>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <p className="text-lg text-gray-700 mb-6" style={{ lineHeight: '1.8' }}>
            I'm so confident that <span className="font-bold">30 Days of Peace</span> will bring real value to your life that I'm offering a complete, no-questions-asked 7-day money-back guarantee.
          </p>

          <p className="text-lg text-gray-700 mb-6" style={{ lineHeight: '1.8' }}>
            If you download the devotional, read through the first few days, and feel it's not what you need right now, simply send a quick email within 7 days and you'll receive a full refund.
          </p>

          <p className="text-lg text-gray-700 mb-6" style={{ lineHeight: '1.8' }}>
            No hassle. No hard feelings. No risk.
          </p>

          <div className="bg-teal-50 rounded-lg p-6 mb-8 border-l-4 border-teal-600">
            <p className="text-lg text-gray-800 font-semibold mb-2">
              Here's what you receive when you order today:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Instant digital access to the full 30 Days of Peace devotional (PDF)</li>
              <li>✓ All 3 bonus resources included</li>
              <li>✓ One-time payment of just $4.90 (no subscription, no hidden fees)</li>
              <li>✓ Lifetime access – download it once, keep it forever</li>
              <li>✓ Full 7-day money-back guarantee</li>
            </ul>
          </div>

          <div className="text-center">
            <p className="text-xl text-gray-900 font-bold mb-4">
              That's less than the price of a coffee – for 30 days of biblical peace.
            </p>
            <a
              href={checkoutUrl}
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              START MY 30 DAYS OF PEACE FOR ONLY $4.90
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
