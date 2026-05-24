import { Code2, Database, Award, ExternalLink } from "lucide-react";

export default function Home() {
  const skills = [
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React.js", icon: "⚛️" },
    { name: "Node.js", icon: "🔧" },
    { name: "MySQL", icon: "🗄️" },
    { name: "MongoDB", icon: "🍃" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
      {/* Hero Section */}
      <section className="mb-16 md:mb-24">
        <div className="mb-6">
          <h1
            style={{
              fontFamily: 'Space Mono, monospace',
              color: '#FFB000',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              lineHeight: '1.2',
            }}
            className="mb-4"
          >
            Roven Piho // Noorem tarkvaraarendaja
          </h1>
          <div
            style={{
              borderLeft: '3px solid #FFB000',
              paddingLeft: '1.5rem',
              color: '#FFFFFF',
            }}
            className="text-base md:text-lg leading-relaxed"
          >
            <p className="mb-3">
              19-aastane arendaja Eestist. Mulle meeldib alustada nullist ja näha projekti ellu ärkamist.
            </p>
            <p>
              Minu teekond algas mänguserveritega ja on kasvanud kireks tarkvaraarenduse vastu.
            </p>
          </div>
        </div>
      </section>

      {/* Personality Section */}
      <section className="mb-16 md:mb-24">
        <h2
          style={{
            fontFamily: 'Space Mono, monospace',
            color: '#FFB000',
          }}
          className="text-2xl md:text-3xl mb-6"
        >
          {'> Isiksus'}
        </h2>
        <div
          style={{
            backgroundColor: '#1A1A1A',
            border: '1px solid #FFB000',
          }}
          className="p-6 md:p-8 backdrop-blur-sm"
        >
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div style={{ color: '#FFB000', fontFamily: 'Space Mono, monospace' }} className="mb-2">
                🥊 MMA
              </div>
              <p style={{ color: '#888888' }} className="text-sm">
                Huvitun MMA-st ja spordist
              </p>
            </div>
            <div>
              <div style={{ color: '#FFB000', fontFamily: 'Space Mono, monospace' }} className="mb-2">
                💪 Aktiivne
              </div>
              <p style={{ color: '#888888' }} className="text-sm">
                Aktiivne eluviis ja tervislik elamine
              </p>
            </div>
            <div>
              <div style={{ color: '#FFB000', fontFamily: 'Space Mono, monospace' }} className="mb-2">
                🎯 Distsiplineeritud
              </div>
              <p style={{ color: '#888888' }} className="text-sm">
                Tugev distsipliin ja järjepidevus
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16 md:mb-24">
        <h2
          style={{
            fontFamily: 'Space Mono, monospace',
            color: '#FFB000',
          }}
          className="text-2xl md:text-3xl mb-6"
        >
          {'> Tehnilised oskused'}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              style={{
                backgroundColor: '#1A1A1A',
                border: '1px solid #FFB000',
              }}
              className="p-4 text-center hover:scale-105 transition-transform cursor-pointer backdrop-blur-sm"
            >
              <div className="text-3xl mb-2">{skill.icon}</div>
              <div
                style={{
                  color: '#FFFFFF',
                  fontFamily: 'Space Mono, monospace',
                }}
                className="text-sm"
              >
                {skill.name}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-16 md:mb-24">
        <h2
          style={{
            fontFamily: 'Space Mono, monospace',
            color: '#FFB000',
          }}
          className="text-2xl md:text-3xl mb-6"
        >
          {'> Projektid'}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Project 1 */}
          <a
            href="https://github.com/Roven555/Rakenduse-loomine"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#1A1A1A',
              border: '1px solid #FFB000',
            }}
            className="p-6 md:p-8 hover:scale-105 transition-transform backdrop-blur-sm cursor-pointer group"
          >
            <div className="flex items-start justify-between mb-4">
              <div
                style={{
                  backgroundColor: '#FFB000',
                  color: '#0F0F0F',
                }}
                className="p-3 rounded"
              >
                <Code2 size={28} />
              </div>
              <ExternalLink size={20} style={{ color: '#FFB000' }} />
            </div>
            <h3
              style={{
                color: '#FFB000',
                fontFamily: 'Space Mono, monospace',
              }}
              className="text-lg mb-2 group-hover:opacity-80 transition-opacity"
            >
              Filmide haldamise äpp
            </h3>
          </a>

          {/* Project 2 */}
          <a
            href="https://github.com/Roven555/ephod"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#1A1A1A',
              border: '1px solid #FFB000',
            }}
            className="p-6 md:p-8 hover:scale-105 transition-transform backdrop-blur-sm cursor-pointer group"
          >
            <div className="flex items-start justify-between mb-4">
              <div
                style={{
                  backgroundColor: '#FFB000',
                  color: '#0F0F0F',
                }}
                className="p-3 rounded"
              >
                <Database size={28} />
              </div>
              <ExternalLink size={20} style={{ color: '#FFB000' }} />
            </div>
            <h3
              style={{
                color: '#FFB000',
                fontFamily: 'Space Mono, monospace',
              }}
              className="text-lg mb-2 group-hover:opacity-80 transition-opacity"
            >
              E-pood
            </h3>
          </a>
        </div>
      </section>

      {/* Achievement Section */}
      <section>
        <h2
          style={{
            fontFamily: 'Space Mono, monospace',
            color: '#FFB000',
          }}
          className="text-2xl md:text-3xl mb-6"
        >
          {'> Saavutused'}
        </h2>
        <div
          style={{
            backgroundColor: '#1A1A1A',
            border: '1px solid #FFB000',
          }}
          className="p-6 md:p-8 backdrop-blur-sm"
        >
          <div className="flex items-start gap-4">
            <div
              style={{
                backgroundColor: '#FFB000',
                color: '#0F0F0F',
              }}
              className="p-3 rounded"
            >
              <Award size={32} />
            </div>
            <div className="flex-1">
              <h3
                style={{
                  color: '#FFB000',
                  fontFamily: 'Space Mono, monospace',
                }}
                className="text-xl mb-2"
              >
                Häkatoni üks parimaid projekte
              </h3>
              <p style={{ color: '#FFFFFF' }} className="mb-2">
                Häkatoni projektis osaline
              </p>
              <p style={{ color: '#888888' }} className="text-sm mb-4">
                Tiimitöö ja innovatsioon praktikas
              </p>
              <a
                href="https://github.com/marthansschmidt/H2katon"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#FFB000',
                  fontFamily: 'Space Mono, monospace',
                }}
                className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                Vaata projekti →
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}