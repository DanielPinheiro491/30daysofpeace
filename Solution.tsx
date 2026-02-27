import { Check } from 'lucide-react';

interface SolutionProps {
  onCtaClick: () => void;
}

export default function Solution({ onCtaClick }: SolutionProps) {
  const benefits = [
    "Help anxious Christians organise their thoughts in the light of Scripture.",
    "Build a gentle spiritual rhythm, without guilt or unrealistic expectations.",
    "Turn each day into a meeting of peace with the Lord, even on the hardest days."
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          What if, instead of trying to "defeat anxiety" by sheer willpower, you could walk with God one day at a time, with clear, simple and deeply biblical direction?
        </h2>

        <p className="text-xl text-center text-gray-700 mb-8" style={{ lineHeight: '1.8' }}>
          That's exactly why <span className="font-bold text-teal-700">30 Days of Peace: A Devotional for Anxious Christians</span> was created.
        </p>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <p className="text-lg font-semibold text-gray-900 mb-4">
            This devotional was designed to:
          </p>
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg" style={{ lineHeight: '1.7' }}>
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={onCtaClick}
            className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            YES, I WANT THIS PEACE
          </button>
        </div>
      </div>
    </section>
  );
}
