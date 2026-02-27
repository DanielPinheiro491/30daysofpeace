import { Check } from 'lucide-react';

interface WhoThisIsForProps {
  onCtaClick: () => void;
}

export default function WhoThisIsFor({ onCtaClick }: WhoThisIsForProps) {
  const criteria = [
    "You are a Christian and struggle with anxiety, constant worry, fear of the future or racing thoughts.",
    "Your mind often runs faster than your prayers, and that steals your peace every day.",
    "You long for daily time with God, but don't know how to structure simple, deep devotions.",
    "You already know the Bible, but want to apply it in a practical way to your emotional life.",
    "You live in the UK or Ireland and want solid, Christian content to support you in this season.",
    "You want to cultivate a heart that is steady, confident and full of hope, even in uncertainty."
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          This devotional is for you if:
        </h2>

        <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-8 mb-8 border-2 border-green-200">
          <div className="space-y-4">
            {criteria.map((criterion, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-800 text-lg" style={{ lineHeight: '1.7' }}>
                  {criterion}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={onCtaClick}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg"
          >
            THIS IS ME – SHOW ME THE OFFER
          </button>
        </div>
      </div>
    </section>
  );
}
