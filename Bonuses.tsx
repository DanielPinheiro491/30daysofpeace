import { FileText, Printer, Headphones } from 'lucide-react';

export default function Bonuses() {
  const bonuses = [
    {
      icon: FileText,
      title: "Bonus 1 – Quick Scripture Guide for Moments of Acute Anxiety",
      description: "A handy reference guide with powerful Scripture verses organized by specific anxiety triggers, so you can find God's truth exactly when you need it most."
    },
    {
      icon: Printer,
      title: "Bonus 2 – Printable Prayer Pages for Your 30 Days of Peace",
      description: "Beautiful, professionally designed prayer journal pages you can print and use alongside your devotional to track your journey and deepen your time with God."
    },
    {
      icon: Headphones,
      title: "Bonus 3 – Audio version of key prayers (MP3)",
      description: "Listen to soothing, professionally narrated prayers before sleep or during moments of overwhelm. Perfect for when reading feels too difficult."
    }
  ];

  const checkoutUrl = "https://pay.hotmart.com/V104670293D?checkoutMode=10";

  return (
    <section id="bonuses" className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gradient-to-r from-pink-100 to-rose-100 rounded-t-lg py-4 px-6 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900">
            You're not just getting a devotional – you're getting a complete peace toolkit
          </h2>
        </div>

        <div className="space-y-6 mb-12">
          {bonuses.map((bonus, index) => {
            const Icon = bonus.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 flex items-start gap-4 shadow-sm border border-gray-200"
              >
                <div className="flex-shrink-0 bg-teal-100 p-3 rounded-lg">
                  <Icon className="w-8 h-8 text-teal-700" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    {bonus.title}
                  </h3>
                  <p className="text-gray-700" style={{ lineHeight: '1.7' }}>
                    {bonus.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href={checkoutUrl}
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            YES, I WANT ALL THE BONUSES AND THE DEVOTIONAL FOR JUST $4.90
          </a>
        </div>
      </div>
    </section>
  );
}
