import { Check, Shield, Download, Calendar } from 'lucide-react';

export default function OfferCard() {
  const checkoutUrl = "https://pay.hotmart.com/V104670293D?checkoutMode=10";

  return (
    <section id="offer" className="py-16 px-4 bg-gradient-to-br from-amber-50 to-rose-50">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12 border-4 border-teal-500">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
            Here's everything you'll receive today for just $4.90
          </h2>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-lg text-gray-900">
                  30 Days of Peace: A Devotional for Anxious Christians (Digital eBook – PDF)
                </p>
                <p className="text-gray-700">
                  A complete 30-day guided journey to biblical peace, with daily readings, prayers, and practical applications.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-gray-900">
                  Bonus 1: Quick Scripture Guide for Moments of Acute Anxiety
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-gray-900">
                  Bonus 2: Printable Prayer Pages for Your 30 Days of Peace
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold text-gray-900">
                  Bonus 3: Audio version of key prayers (MP3)
                </p>
              </div>
            </div>
          </div>

          <div className="border-t-2 border-gray-200 pt-6 mb-6">
            <p className="text-gray-600 text-sm mb-2">
              Total value of this peace toolkit: <span className="line-through">$17.00+</span>
            </p>
            <p className="text-green-600 font-bold text-3xl md:text-4xl">
              TODAY ONLY: $4.90 <span className="text-lg text-gray-600 font-normal">(one-time payment)</span>
            </p>
          </div>

          <a
            href={checkoutUrl}
            className="block w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-full text-center text-lg transition-all transform hover:scale-105 shadow-lg mb-6"
          >
            SECURE MY COPY FOR $4.90 NOW
          </a>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-teal-600" />
              <span>Secure payment</span>
            </div>
            <div className="flex items-center gap-2">
              <Download className="w-5 h-5 text-teal-600" />
              <span>Instant delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-teal-600" />
              <span>7-day guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
