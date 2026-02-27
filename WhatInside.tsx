import { BookOpen, Heart, Lightbulb, PenTool, Target } from 'lucide-react';

export default function WhatInside() {
  const features = [
    {
      icon: BookOpen,
      title: "Short, deep daily readings",
      description: "No overwhelm. Each day brings a focused, Christ-centred reflection on one aspect of anxiety, fear or peace. Perfect for busy schedules and tired minds."
    },
    {
      icon: Heart,
      title: "Daily guided prayers",
      description: "You'll never wonder what to pray. Each devotion includes a simple, heartfelt prayer starter that helps you pour out your heart to God with confidence and honesty."
    },
    {
      icon: Lightbulb,
      title: "Practical applications",
      description: "Faith isn't just theory. Every day includes a small, doable step you can take to apply God's truth to your anxious thoughts and daily life."
    },
    {
      icon: PenTool,
      title: "Space for notes and responses",
      description: "Journaling prompts and reflection questions help you process your feelings, track God's faithfulness and see your own growth over the 30 days."
    },
    {
      icon: Target,
      title: "A clear focus on anxiety, fear and emotional overload",
      description: "This isn't a generic devotional. Every single page is written with the anxious Christian in mind, addressing real struggles with biblical hope and practical wisdom."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          What You'll Find Inside "30 Days of Peace"
        </h2>
        <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto" style={{ lineHeight: '1.8' }}>
          This devotional is carefully structured to guide you gently, day by day, into a deeper experience of God's peace.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-teal-100 p-3 rounded-lg">
                    <Icon className="w-8 h-8 text-teal-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700" style={{ lineHeight: '1.7' }}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
