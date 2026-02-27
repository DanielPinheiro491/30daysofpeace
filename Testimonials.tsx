import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "Manchester, UK",
      text: "I've struggled with anxiety for years, and I've tried so many devotionals that just made me feel more guilty. This one is different. It's like the author truly understands what it's like to lie awake at 3am with your heart racing. By day 10, I noticed I was actually sleeping better. By day 30, I had tools I never had before. This devotional didn't 'fix' my anxiety overnight, but it gave me a biblical framework to walk through it with Jesus. Worth far more than £4."
    },
    {
      name: "James O'Connor",
      location: "Dublin, Ireland",
      text: "As a father of three and a church leader, I felt like I couldn't admit I was anxious. This devotional gave me permission to be honest with God and with myself. The daily prayers were especially powerful – sometimes I couldn't find the words, but they were right there on the page. I've recommended this to at least a dozen people in my congregation. Genuine, pastoral, and deeply biblical."
    },
    {
      name: "Emma Cartwright",
      location: "Edinburgh, Scotland",
      text: "I was skeptical at first – another Christian book promising peace? But this isn't just platitudes. The Scripture references are spot-on, the applications are realistic (not 'just pray more'), and the tone is so gentle. I actually looked forward to my devotional time each morning, which is something I've never been able to say before. Day 18 on 'When Prayer Feels Like Shouting Into the Void' brought me to tears. I felt seen, known, and loved."
    },
    {
      name: "David Hughes",
      location: "Cardiff, Wales",
      text: "I bought this during a particularly difficult season at work when I was having daily panic attacks. The 30-day structure kept me going – I knew I just had to get through today's reading. The bonus Scripture guide became my lifeline during meetings when I felt anxiety rising. Four months later, I still go back to specific days when I need encouragement. Best investment I've made in my mental and spiritual health."
    },
    {
      name: "Rachel Thompson",
      location: "Belfast, Northern Ireland",
      text: "What I love most is that this devotional doesn't shame you for being anxious. It meets you where you are. The journaling prompts helped me see patterns in my worry I'd never noticed before, and the prayers gave me words when I had none. My husband even noticed the difference – he said I seemed 'lighter' by the third week. If you're on the fence, just try it. It's the cost of a coffee, but it could change your whole year."
    },
    {
      name: "Timothy Brooks",
      location: "London, UK",
      text: "I'm a counselor and a Christian, and I've started recommending this devotional to my clients who share my faith. It's theologically sound, psychologically informed, and pastorally sensitive. The way it balances truth and grace is rare. I've personally used it twice now – once when I first got it, and again six months later during a difficult season. Both times, it anchored me in God's Word exactly when I needed it most."
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          What Others Are Saying
        </h2>
        <p className="text-lg text-gray-700 mb-12 text-center">
          Real stories from real people who've walked the 30-day journey
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow relative"
            >
              <Quote className="w-10 h-10 text-teal-200 absolute top-4 right-4" />
              <p className="text-gray-700 mb-4 italic" style={{ lineHeight: '1.7' }}>
                "{testimonial.text}"
              </p>
              <div className="border-t pt-4">
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
