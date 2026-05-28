import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1
          style={{
            fontFamily: 'Space Mono, monospace',
            color: '#FFB000',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
          }}
          className="mb-4"
        >
          {'> Let\'s Connect'}
        </h1>
        <p style={{ color: '#888888' }} className="text-lg md:text-xl">
          Let's build something together!
        </p>
      </section>

      {/* Contact Info Cards */}
      <section className="mb-16 md:mb-24">
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Email Card */}
          <div
            style={{
              backgroundColor: '#1A1A1A',
              border: '2px solid #FFB000',
            }}
            className="p-8 backdrop-blur-sm hover:scale-105 transition-transform"
          >
            <div className="flex items-center gap-4 mb-4">
              <div
                style={{
                  backgroundColor: '#FFB000',
                  color: '#0F0F0F',
                }}
                className="p-3 rounded"
              >
                <Mail size={28} />
              </div>
              <h3
                style={{
                  color: '#FFB000',
                  fontFamily: 'Space Mono, monospace',
                }}
                className="text-xl"
              >
                Email
              </h3>
            </div>
            <a
              href="mailto:roven.piho@voco.ee"
              style={{
                color: '#FFFFFF',
                fontFamily: 'Space Mono, monospace',
              }}
              className="text-lg md:text-xl hover:opacity-80 transition-opacity break-all"
            >
              roven.piho@voco.ee
            </a>
          </div>

          {/* Phone Card */}
          <div
            style={{
              backgroundColor: '#1A1A1A',
              border: '2px solid #FFB000',
            }}
            className="p-8 backdrop-blur-sm hover:scale-105 transition-transform"
          >
            <div className="flex items-center gap-4 mb-4">
              <div
                style={{
                  backgroundColor: '#FFB000',
                  color: '#0F0F0F',
                }}
                className="p-3 rounded"
              >
                <Phone size={28} />
              </div>
              <h3
                style={{
                  color: '#FFB000',
                  fontFamily: 'Space Mono, monospace',
                }}
                className="text-xl"
              >
                Phone
              </h3>
            </div>
            <a
              href="tel:+37258141403"
              style={{
                color: '#FFFFFF',
                fontFamily: 'Space Mono, monospace',
              }}
              className="text-lg md:text-xl hover:opacity-80 transition-opacity"
            >
              +372 58141403
            </a>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <div className="mt-16 text-center">
        <p
          style={{
            color: '#888888',
            fontFamily: 'Space Mono, monospace',
          }}
          className="text-sm"
        >
          {'Roven Piho 2026'}
        </p>
      </div>
    </div>
  );
}
