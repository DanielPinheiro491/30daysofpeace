export default function SneakPeek() {
  const checkoutUrl = "https://pay.hotmart.com/V104670293D?checkoutMode=10";

  const samples = [
    {
      day: "Day 3",
      title: "When Worry Steals Your Sleep",
      focus: "Philippians 4:6-7 and practical steps for bedtime anxiety"
    },
    {
      day: "Day 7",
      title: "The 'What If' Trap",
      focus: "Breaking the cycle of catastrophic thinking with Matthew 6:34"
    },
    {
      day: "Day 12",
      title: "Anxiety and Guilt: The Double Burden",
      focus: "Why being anxious doesn't make you a 'bad Christian'"
    },
    {
      day: "Day 18",
      title: "When Prayer Feels Like Shouting Into the Void",
      focus: "Finding God in the silence, even when He feels distant"
    },
    {
      day: "Day 25",
      title: "Building a New Thought Pattern",
      focus: "Practical biblical meditation and renewing your mind (Romans 12:2)"
    },
    {
      day: "Day 30",
      title: "Peace as a Practice, Not a Destination",
      focus: "Moving forward with hope and establishing lasting peace habits"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          Here's a small sample of what you'll find inside:
        </h2>
        <p className="text-lg text-gray-700 mb-12 text-center" style={{ lineHeight: '1.8' }}>
          Each day addresses a specific aspect of anxiety, fear or peace, giving you exactly what you need, when you need it.
        </p>

        <div className="space-y-4 mb-12">
          {samples.map((sample, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg p-6 border-l-4 border-teal-500 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-teal-600 text-white font-bold rounded-full w-12 h-12 flex items-center justify-center">
                    {sample.day.split(' ')[1]}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-1">
                    {sample.title}
                  </h3>
                  <p className="text-gray-700">
                    {sample.focus}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-teal-50 rounded-lg p-6">
          <p className="text-lg text-gray-800 mb-4">
            Ready to start your own 30-day journey?
          </p>
          <a
            href={checkoutUrl}
            className="inline-block text-teal-700 font-semibold hover:text-teal-900 underline text-lg"
          >
            Get instant access for just $4.90 →
          </a>
        </div>
      </div>
    </section>
  );
}
