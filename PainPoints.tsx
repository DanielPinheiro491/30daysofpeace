import { X } from 'lucide-react';

export default function PainPoints() {
  const struggles = [
    "Try to trust God, but negative thoughts seem louder than any verse you can remember.",
    "Feel guilty for being a Christian and still struggling with anxiety, fear and insecurity.",
    "Find it hard to keep a devotional routine because you simply don't know where to start.",
    "Have read articles, listened to sermons and maybe even had counselling, but still miss something practical, daily, loving and biblical that walks with you."
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
          Do you feel stuck in a constant cycle of worry, even though you know "God cares for you"?
        </h2>

        <p className="text-lg text-gray-700 mb-8 text-center" style={{ lineHeight: '1.8' }}>
          Have you ever gone to bed exhausted, with your heart racing, your mind full of "what if…?" and, even after praying, it felt like the anxiety just wouldn't let go?
        </p>

        <div className="bg-gray-50 rounded-lg p-8 mb-8">
          <p className="text-lg font-semibold text-gray-900 mb-4">
            Maybe you:
          </p>
          <div className="space-y-3">
            {struggles.map((struggle, index) => (
              <div key={index} className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700" style={{ lineHeight: '1.7' }}>
                  {struggle}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-xl font-bold text-teal-700 mb-2">
            If this sounds like you, it's not a lack of faith.
          </p>
          <p className="text-lg text-gray-700" style={{ lineHeight: '1.8' }}>
            It's a lack of guidance and consistency in a journey of peace that starts inside your heart.
          </p>
        </div>
      </div>
    </section>
  );
}
