import type { MouseEvent } from "react";
import { ArrowDown, ExternalLink, Github } from "lucide-react";

export default function Home() {
  const scrollToProjects = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const target = document.querySelector("#projects");
    if (!target) {
      return;
    }

    const startPosition = window.scrollY;
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - 96;
    const distance = targetPosition - startPosition;
    const duration = 1600;
    let startTime: number | null = null;

    const easeInOutCubic = (progress: number) =>
      progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    const animateScroll = (currentTime: number) => {
      if (startTime === null) {
        startTime = currentTime;
      }

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      window.scrollTo(0, startPosition + distance * easeInOutCubic(progress));

      if (progress < 1) {
        window.requestAnimationFrame(animateScroll);
      }
    };

    window.requestAnimationFrame(animateScroll);
    window.history.pushState(null, "", "#projects");
  };

  const skills = [
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "JavaScript", icon: "⚡" },
    { name: "React.js", icon: "⚛️" },
    { name: "Node.js", icon: "🔧" },
    { name: "MySQL", icon: "🗄️" },
    { name: "MongoDB", icon: "🍃" },
  ];

  const projects = [
    {
      id: 1,
      name: "Teraskopp OÜ",
      description: "Professional website for a timber and forest machinery business showcasing services, equipment, and expertise in the forestry industry.",
      image: "/images/Teraskopp.png",
      liveUrl: "https://teraskopp3.vercel.app",
      githubUrl: "https://github.com/Roven555/Teraskopp-3",
      tags: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      id: 2,
      name: "FilmiRiiul",
      description: "Movie shelf application for browsing, organizing, and keeping track of films in a clean, responsive interface.",
      image: "/images/FilmiRiiul.png",
      liveUrl: "https://rakenduse-loomine-rho.vercel.app",
      githubUrl: "https://github.com/Roven555/Rakenduse-loomine",
      tags: ["React", "TypeScript", "Tailwind CSS"],
    },
    {
      id: 3,
      name: "Bootstrap Practice",
      description: "Responsive website built to practice Bootstrap 5 components, layout utilities, and clean section-based page structure.",
      image: "/images/Bootstrap.png",
      liveUrl: "https://bootstrap-rosy-rho.vercel.app/#intro",
      githubUrl: "https://github.com/Roven555/Bootstrapp5",
      tags: ["Bootstrap 5", "HTML", "CSS"],
    },
    {
      id: 4,
      name: "Hackathon Team Project",
      description: "Team-built hackathon project that received recognition as one of the top projects. I contributed as part of a collaborative development team.",
      image: "/images/Suumadin.png",
      liveUrl: "https://h2katon.vercel.app",
      githubUrl: "https://github.com/marthansschmidt/H2katon",
      tags: ["Hackathon", "Teamwork", "Recognition"],
    },
  ];

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

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 10px rgba(255, 176, 0, 0.5);
          }
          50% {
            box-shadow: 0 0 20px rgba(255, 176, 0, 0.8);
          }
        }

        @keyframes borderShine {
          0%, 100% {
            border-color: #FFB000;
          }
          50% {
            border-color: #ffc933;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
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

        .skill-item {
          animation: staggerFadeIn 0.6s ease-out forwards;
        }

        .skill-item:nth-child(1) { animation-delay: 0s; }
        .skill-item:nth-child(2) { animation-delay: 0.1s; }
        .skill-item:nth-child(3) { animation-delay: 0.2s; }
        .skill-item:nth-child(4) { animation-delay: 0.3s; }
        .skill-item:nth-child(5) { animation-delay: 0.4s; }
        .skill-item:nth-child(6) { animation-delay: 0.5s; }
        .skill-item:nth-child(7) { animation-delay: 0.6s; }

        .glow-border:hover {
          box-shadow: 0 0 20px rgba(255, 176, 0, 0.6), inset 0 0 20px rgba(255, 176, 0, 0.1);
        }

        .project-card {
          animation: fadeInUp 0.8s ease-out;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .project-card:hover {
          box-shadow: 0 20px 40px rgba(255, 176, 0, 0.15), inset 0 0 20px rgba(255, 176, 0, 0.05);
        }

        .section-title {
          position: relative;
          display: inline-block;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #FFB000, transparent);
          animation: slideInLeft 0.6s ease-out forwards;
        }
      `}</style>

      {/* Hero Section */}
      <section className="min-h-[68vh] md:min-h-[78vh] mb-16 md:mb-24 flex items-center">
        <div className="mb-6 max-w-5xl">
          <h1
            style={{
              fontFamily: 'Space Mono, monospace',
              color: '#FFB000',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              lineHeight: '1.2',
            }}
            className="hero-title mb-4 font-bold tracking-tight"
          >
            Roven Piho // Junior Software Developer
          </h1>
          <div
            style={{
              borderLeft: '3px solid #FFB000',
              paddingLeft: '1.5rem',
              color: '#FFFFFF',
            }}
            className="hero-description text-base md:text-lg leading-relaxed"
          >
            <p className="mb-3 text-gray-100">
              19-year-old developer from Estonia. I enjoy starting from scratch and watching a project come to life.
            </p>
            <p className="text-gray-200">
              My journey began with game servers and has grown into a passion for software development.
            </p>
          </div>
          <div className="hero-description mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
            <a
              href="#projects"
              onClick={scrollToProjects}
              style={{
                backgroundColor: '#FFB000',
                color: '#0F0F0F',
                fontFamily: 'Space Mono, monospace',
              }}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-semibold hover:brightness-110 transition-all duration-300"
            >
              View Projects
              <ArrowDown size={18} />
            </a>
            <div
              style={{
                color: '#CCCCCC',
                fontFamily: 'Space Mono, monospace',
              }}
              className="text-sm"
            >
              4 projects
            </div>
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
          className="section-title text-2xl md:text-3xl mb-6"
        >
          {'> Personality'}
        </h2>
        <div
          style={{
            backgroundColor: '#1A1A1A',
            border: '1px solid #FFB000',
          }}
          className="p-6 md:p-8 backdrop-blur-sm glow-border rounded-lg transition-all duration-300"
        >
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { emoji: "🥊", title: "MMA", desc: "Interested in MMA and sports" },
              { emoji: "💪", title: "Active", desc: "Active lifestyle and healthy living" },
              { emoji: "🎯", title: "Disciplined", desc: "Strong discipline and consistency" }
            ].map((item, idx) => (
              <div
                key={idx}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${0.1 * idx}s both`,
                }}
              >
                <div style={{ color: '#FFB000', fontFamily: 'Space Mono, monospace' }} className="mb-2 text-lg font-bold">
                  {item.emoji} {item.title}
                </div>
                <p style={{ color: '#888888' }} className="text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
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
          className="section-title text-2xl md:text-3xl mb-6"
        >
          {'> Technical Skills'}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              style={{
                backgroundColor: '#1A1A1A',
                border: '1px solid #FFB000',
              }}
              className="skill-item p-4 text-center hover:scale-110 transition-all duration-300 cursor-pointer backdrop-blur-sm glow-border rounded-lg"
            >
              <div className="text-4xl mb-3 transition-transform duration-300 hover:animate-bounce">{skill.icon}</div>
              <div
                style={{
                  color: '#FFFFFF',
                  fontFamily: 'Space Mono, monospace',
                }}
                className="text-sm font-semibold"
              >
                {skill.name}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="scroll-mt-24 mb-16 md:mb-24">
        <h2
          style={{
            fontFamily: 'Space Mono, monospace',
            color: '#FFB000',
          }}
          className="section-title text-2xl md:text-3xl mb-6"
        >
          {'> Projects'}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              style={{
                backgroundColor: '#1A1A1A',
                border: '1px solid #FFB000',
              }}
              className="project-card overflow-hidden backdrop-blur-sm group cursor-pointer rounded-lg"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-800 to-black">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3
                  style={{
                    color: '#FFB000',
                    fontFamily: 'Space Mono, monospace',
                  }}
                  className="text-lg font-bold mb-2 group-hover:text-yellow-300 transition-colors"
                >
                  {project.name}
                </h3>
                <p style={{ color: '#CCCCCC' }} className="text-sm mb-4 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={tag}
                      style={{
                        backgroundColor: '#FFB00020',
                        color: '#FFB000',
                        border: '1px solid #FFB000',
                        animation: `fadeInUp 0.4s ease-out ${0.1 * idx}s both`,
                      }}
                      className="text-xs px-3 py-1 rounded-full font-medium transition-all duration-300 hover:bg-yellow-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        backgroundColor: '#FFB000',
                        color: '#0F0F0F',
                      }}
                      className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg font-semibold hover:brightness-110 transition-all duration-300 text-sm hover:shadow-lg hover:shadow-yellow-500/50"
                    >
                      <ExternalLink size={16} />
                      Live Site
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: '#FFB00020',
                      color: '#FFB000',
                      border: '1px solid #FFB000',
                    }}
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg font-semibold hover:bg-yellow-500/30 transition-all duration-300 text-sm glow-border"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
