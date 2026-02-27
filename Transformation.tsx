import { Sparkles } from 'lucide-react';

export default function Transformation() {
  const transformations = [
    "Recognize anxious thoughts faster and replace them with scriptural truth before they spiral.",
    "Build a daily habit of meeting with God that doesn't feel forced, legalistic or overwhelming.",
    "Experience real moments of peace, even on days when circumstances haven't changed.",
    "Pray with more confidence, knowing God hears you and cares deeply about your struggles.",
    "Sleep better at night because your mind is anchored in God's promises, not 'what ifs'.",
    "Feel less alone in your anxiety, knowing you're walking a path designed just for you.",
    "Grow in trust, hope and resilience – one Scripture, one prayer, one day at a time."
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Sparkles className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Transformation You'll Experience
          </h2>
          <p className="text-lg text-gray-700" style={{ lineHeight: '1.8' }}>
            As you walk through these 30 days of peace, you will be able to:
          </p>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg p-8 border-2 border-yellow-200">
          <div className="space-y-4">
            {transformations.map((transformation, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <p className="text-gray-800 text-lg pt-1" style={{ lineHeight: '1.7' }}>
                  {transformation}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-xl font-semibold text-teal-700 italic">
            This is not just information. This is transformation.
          </p>
        </div>
      </div>
    </section>
  );
}
