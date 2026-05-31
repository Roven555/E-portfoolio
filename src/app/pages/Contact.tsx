import { Github, Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes staggerFadeIn {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .hero-title {
          animation: fadeInUp 0.8s ease-out;
        }

        .hero-description {
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }

        .contact-card {
          animation: staggerFadeIn 0.6s ease-out forwards;
        }

        .contact-card:nth-child(1) { animation-delay: 0s; }
        .contact-card:nth-child(2) { animation-delay: 0.2s; }
        .contact-card:nth-child(3) { animation-delay: 0.4s; }

        .glow-border:hover {
          box-shadow: 0 0 20px rgba(255, 176, 0, 0.6), inset 0 0 20px rgba(255, 176, 0, 0.05);
        }

        .footer-text {
          animation: fadeInUp 0.8s ease-out 0.4s both;
        }
      `}</style>

      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1
          style={{
            fontFamily: 'Space Mono, monospace',
            color: '#FFB000',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
          }}
          className="hero-title mb-4 font-bold tracking-tight"
        >
          {'> Let\'s Connect'}
        </h1>
        <p style={{ color: '#888888' }} className="hero-description text-lg md:text-xl leading-relaxed">
          Let's build something together!
        </p>
      </section>

      {/* Contact Info Cards */}
      <section className="mb-16 md:mb-24">
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Email Card */}
          <div
            style={{
              backgroundColor: '#1A1A1A',
              border: '2px solid #FFB000',
            }}
            className="contact-card p-8 backdrop-blur-sm hover:scale-105 transition-all duration-300 glow-border rounded-lg"
          >
            <div className="flex items-center gap-4 mb-4">
              <div
                style={{
                  backgroundColor: '#FFB000',
                  color: '#0F0F0F',
                }}
                className="p-3 rounded-lg transition-transform duration-300 hover:scale-110"
              >
                <Mail size={28} />
              </div>
              <h3
                style={{
                  color: '#FFB000',
                  fontFamily: 'Space Mono, monospace',
                }}
                className="text-xl font-bold"
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
              className="text-lg md:text-xl hover:text-yellow-300 transition-colors duration-300 break-all font-semibold"
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
            className="contact-card p-8 backdrop-blur-sm hover:scale-105 transition-all duration-300 glow-border rounded-lg"
          >
            <div className="flex items-center gap-4 mb-4">
              <div
                style={{
                  backgroundColor: '#FFB000',
                  color: '#0F0F0F',
                }}
                className="p-3 rounded-lg transition-transform duration-300 hover:scale-110"
              >
                <Phone size={28} />
              </div>
              <h3
                style={{
                  color: '#FFB000',
                  fontFamily: 'Space Mono, monospace',
                }}
                className="text-xl font-bold"
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
              className="text-lg md:text-xl hover:text-yellow-300 transition-colors duration-300 font-semibold"
            >
              +372 58141403
            </a>
          </div>

          {/* GitHub Card */}
          <div
            style={{
              backgroundColor: '#1A1A1A',
              border: '2px solid #FFB000',
            }}
            className="contact-card p-8 backdrop-blur-sm hover:scale-105 transition-all duration-300 glow-border rounded-lg"
          >
            <div className="flex items-center gap-4 mb-4">
              <div
                style={{
                  backgroundColor: '#FFB000',
                  color: '#0F0F0F',
                }}
                className="p-3 rounded-lg transition-transform duration-300 hover:scale-110"
              >
                <Github size={28} />
              </div>
              <h3
                style={{
                  color: '#FFB000',
                  fontFamily: 'Space Mono, monospace',
                }}
                className="text-xl font-bold"
              >
                GitHub
              </h3>
            </div>
            <a
              href="https://github.com/Roven555"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#FFFFFF',
                fontFamily: 'Space Mono, monospace',
              }}
              className="text-lg md:text-xl hover:text-yellow-300 transition-colors duration-300 break-all font-semibold"
            >
              github.com/Roven555
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
          className="footer-text text-sm font-medium"
        >
          {'Roven Piho 2026'}
        </p>
      </div>
    </div>
  );
}
