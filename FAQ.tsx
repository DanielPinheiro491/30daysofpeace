import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is this devotional only for people with clinical anxiety?",
      answer: "Not at all. This devotional is for anyone who struggles with worry, racing thoughts, fear of the future, or general unease – whether clinically diagnosed or not. If you feel anxious, this is for you."
    },
    {
      question: "What format is the devotional in?",
      answer: "You'll receive a beautifully formatted PDF that you can read on any device – phone, tablet, computer, or print at home. It's designed to be simple, clean and easy on the eyes."
    },
    {
      question: "How long does each daily reading take?",
      answer: "Each devotion is designed to take 10-15 minutes. Short enough to fit into a busy morning, but deep enough to truly meet with God. Perfect for before work, during lunch, or before bed."
    },
    {
      question: "What if I miss a day?",
      answer: "No guilt, no pressure. This isn't a legalistic program. If you miss a day (or several), simply pick up where you left off. The goal is progress, not perfection. Grace is built into every page."
    },
    {
      question: "Is this theologically sound? What tradition does it come from?",
      answer: "Yes, this devotional is rooted in historic, orthodox Christian faith. It draws from Scripture, pastoral wisdom, and sound theology. It's non-denominational and suitable for any Bible-believing Christian tradition."
    },
    {
      question: "Can I share this with my small group or church?",
      answer: "This purchase is for individual use. However, if you'd like to use it with a group, please contact us about group licensing options. We'd love to support your community!"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-700 mb-12 text-center">
          Everything you need to know before you begin your journey
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
              >
                <span className="font-bold text-lg text-gray-900 pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-teal-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-700" style={{ lineHeight: '1.7' }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
