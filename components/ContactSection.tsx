'use client';
import { useState } from 'react';

export default function ContactSection() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section
      className="relative px-6 py-32 text-white"
      style={{
        backgroundImage: "url('/assets/image7.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Framing and Fade */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-cyan-300">📬 Contact & Collaboration</h2>
        <p className="text-gray-300 mb-4">
          AlynCoin is a private, community-driven initiative built by passionate contributors across the world.
          While our core GitHub repositories remain private for now, we are selectively onboarding developers,
          cryptographers, and early supporters aligned with our mission.
        </p>
        <p className="text-gray-300 mb-8">
          If you're an investor, researcher, or builder interested in shaping the future of quantum-secure
          decentralized systems, we welcome your collaboration.
        </p>

        <div className="text-sm text-teal-400 space-y-2 mb-8">
          <p><strong>Email:</strong> <a href="mailto:contact@alyncoin.com">contact@alyncoin.com</a></p>
          <p><strong>Twitter:</strong> <a href="https://twitter.com/alyncoin" target="_blank">@alyncoin</a></p>
          <p><strong>Instagram:</strong> <a href="https://instagram.com/alyncoin_official" target="_blank">@alyncoin_official</a></p>
          <p><strong>GitHub:</strong> <a href="https://github.com/ab1567/alyncoin" target="_blank">github.com/ab1567/alyncoin</a></p>
        </div>

        <div className="flex justify-center mb-8">
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg shadow transition"
          >
            🤝 Become a Contributor
          </button>
        </div>

        {showForm && (
          <div id="contributorForm" className="bg-white/5 p-6 rounded-xl border border-gray-700">
            <h3 className="text-2xl font-semibold mb-2 text-white">🤝 Join the AlynCoin Mission</h3>
            <p className="text-gray-300 mb-4">
              If you're interested in supporting AlynCoin — whether through funding, development, design, or ideas —
              we’d love to hear from you.
            </p>

            <form action="https://formspree.io/f/movdqqod" method="POST" className="space-y-4">
              {/* Hidden subject and honeypot anti-spam field */}
              <input type="hidden" name="_subject" value="New Contributor Request via AlynCoin.com" />
              <input type="text" name="_gotcha" style={{ display: 'none' }} />

              <div>
                <label htmlFor="name" className="block text-sm text-gray-300">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full p-2 bg-black/70 text-white border border-gray-600 rounded"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-300">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full p-2 bg-black/70 text-white border border-gray-600 rounded"
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm text-gray-300">I'm interested in:</label>
                <select
                  name="interest"
                  id="interest"
                  required
                  defaultValue=""
                  className="w-full p-2 bg-black/70 text-white border border-gray-600 rounded"
                >
                  <option value="" disabled>Select one</option>
                  <option value="investment">💸 Investing / Funding</option>
                  <option value="development">💻 Technical Contribution</option>
                  <option value="design">🎨 Design / UI / Branding</option>
                  <option value="marketing">📢 Community / Marketing</option>
                  <option value="other">🌍 Something else</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-300">Tell us a bit more</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  placeholder="Why do you want to join AlynCoin? What skills or ideas do you have?"
                  className="w-full p-2 bg-black/70 text-white border border-gray-600 rounded"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg shadow"
              >
                Submit Application
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
