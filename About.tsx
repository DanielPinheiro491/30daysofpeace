export default function About() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-amber-50 to-rose-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          A Personal Word From the Author
        </h2>

        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <p className="text-lg text-gray-700 mb-6 italic" style={{ lineHeight: '1.8' }}>
            "For years I asked myself: Why do I still struggle with anxiety when I love Jesus? Why does my faith sometimes feel too small to hold my fear?"
          </p>

          <p className="text-lg text-gray-700 mb-6" style={{ lineHeight: '1.8' }}>
            I know what it's like to lie awake at night, heart racing, trying to pray but feeling like the words won't come. I know the guilt that creeps in when you think, "I should trust God more than this."
          </p>

          <p className="text-lg text-gray-700 mb-6" style={{ lineHeight: '1.8' }}>
            But here's what I've learned: God is not afraid of your anxiety. He doesn't condemn you for your racing thoughts. In fact, He invites you to bring every single worry to Him – not because you're failing, but because He cares.
          </p>

          <p className="text-lg text-gray-700 mb-6" style={{ lineHeight: '1.8' }}>
            That's why I created <span className="font-bold">30 Days of Peace</span>. This isn't a devotional written from a place of "I've got it all figured out." It's written from the trenches, for people in the trenches. It's biblical, it's practical, and it's full of grace.
          </p>

          <p className="text-lg text-gray-700" style={{ lineHeight: '1.8' }}>
            My prayer is that over these 30 days, you'll discover what I've discovered: that peace isn't the absence of anxiety, but the presence of God in the middle of it.
          </p>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-gray-600 text-center italic">
              Written with love, prayer, and deep understanding for every anxious heart seeking rest in Christ.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
