import type { MouseEvent } from "react";
import { useState } from "react";
import { ExternalLink, Github, GraduationCap, Briefcase, BookOpen, Building2, Globe, Mail, Phone, HardHat, Factory, Shield, ChevronDown } from "lucide-react";

export default function Home() {
  const [expandAbout, setExpandAbout] = useState(false);

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

  const scrollToAbout = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const target = document.querySelector("#about");
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
    window.history.pushState(null, "", "#about");
  };

  const education = [
    {
      institution: "Põlva Gymnasium",
      description: "Secondary education",
      icon: <GraduationCap size={24} />,
    },
    {
      institution: "Tartu Vocational College",
      description: "Studies in Software Development",
      icon: <GraduationCap size={24} />,
    },
  ];

  const workExperience = [
    {
      role: "Construction worker",
      description: "Physical work, teamwork, and responsibility",
      icon: <HardHat size={24} />,
    },
    {
      role: "Production worker",
      description: "Precision and adherence to processes",
      icon: <Factory size={24} />,
    },
    {
      role: "Security guard",
      description: "Responsibility, vigilance, and decision-making",
      icon: <Shield size={24} />,
    },
  ];

  const courses = [
    "Bootstrap 5 - Net Ninja",
    "Sass - Net Ninja",
    "Node.js - Net Ninja",
    "Express - Net Ninja",
    "WooCommerce",
  ];

  const languages = [
    { language: "Estonian", level: "Native" },
    { language: "English", level: "Fluent" },
    { language: "Russian", level: "Beginner" },
  ];

  const skills = [
    { name: "HTML", iconClass: "devicon-html5-plain colored" },
    { name: "CSS", iconClass: "devicon-css3-plain colored" },
    { name: "JavaScript", iconClass: "devicon-javascript-plain colored" },
    { name: "React.js", iconClass: "devicon-react-original colored" },
    { name: "Node.js", iconClass: "devicon-nodejs-plain-wordmark colored" },
    { name: "MySQL", iconClass: "devicon-mysql-plain-wordmark colored" },
    { name: "MongoDB", iconClass: "devicon-mongodb-plain-wordmark colored" },
  ];

  const projects = [
    {
      id: 1,
      name: "Teraskopp OÜ",
      description: "Team-built website for a timber and forest machinery business showcasing services and equipment.",
      image: "/images/Teraskopp.png",
      liveUrl: "https://teraskopp3.vercel.app",
      githubUrl: "https://github.com/Roven555/Teraskopp-3",
      tags: ["React", "TypeScript", "Tailwind CSS", "Teamwork"],
    },
    {
      id: 2,
      name: "FilmiRiiul",
      description: "Team-built movie shelf app for browsing, organizing, and tracking films in a clean interface.",
      image: "/images/FilmiRiiul.png",
      liveUrl: "https://rakenduse-loomine-rho.vercel.app",
      githubUrl: "https://github.com/Roven555/Rakenduse-loomine",
      tags: ["React", "TypeScript", "Tailwind CSS", "Teamwork"],
    },
    {
      id: 3,
      name: "Bootstrap Practice",
      description: "Responsive website built to practice Bootstrap 5 components and layout utilities.",
      image: "/images/Bootstrap.png",
      liveUrl: "https://bootstrap-rosy-rho.vercel.app/#intro",
      githubUrl: "https://github.com/Roven555/Bootstrapp5",
      tags: ["Bootstrap 5", "HTML", "CSS"],
    },
    {
      id: 4,
      name: "Hackathon Team Project",
      description: "Team-built hackathon project that received recognition as one of the top projects.",
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

        .card-item {
          animation: staggerFadeIn 0.6s ease-out forwards;
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

        .contact-card {
          animation: staggerFadeIn 0.6s ease-out forwards;
        }

        .contact-card:nth-child(1) { animation-delay: 0s; }
        .contact-card:nth-child(2) { animation-delay: 0.2s; }
        .contact-card:nth-child(3) { animation-delay: 0.4s; }

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
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </a>
            <a
              href="#about"
              onClick={scrollToAbout}
              style={{
                backgroundColor: '#FFB00020',
                color: '#FFB000',
                border: '1px solid #FFB000',
                fontFamily: 'Space Mono, monospace',
              }}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-semibold hover:bg-yellow-500/20 transition-all duration-300"
            >
              About Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-24 mb-16 md:mb-24">
        <h2
          style={{
            fontFamily: 'Space Mono, monospace',
            color: '#FFB000',
          }}
          className="section-title text-2xl md:text-3xl mb-6"
        >
          {'> About'}
        </h2>
        <div
          style={{
            backgroundColor: '#1A1A1A',
            border: '1px solid #FFB000',
          }}
          className="p-6 md:p-8 backdrop-blur-sm glow-border rounded-lg transition-all duration-300"
        >
          <div style={{ color: '#FFFFFF' }} className="text-base md:text-lg leading-relaxed space-y-4">
            {/* Main intro paragraph */}
            <p className="text-gray-100">
              I'm Roven, a 19-year-old Junior Software Developer student at Tartu Vocational College (VOCO). Technology has been part of my life since childhood, but the real spark came when my friends and I developed our own game servers – which inspired my definitive goal to turn this passion into a professional career.
            </p>

            {/* Expandable content */}
            <div
              className="overflow-hidden transition-all duration-300"
              style={{
                maxHeight: expandAbout ? '500px' : '0px',
                opacity: expandAbout ? 1 : 0,
              }}
            >
              <p className="text-gray-200 pt-4">
                I love building projects from the ground up and tackling complex challenges. One of my proudest achievements so far is winning a hackathon with a classmate, which gave me strong confidence in teamwork and high-pressure situations. I stay connected to the industry through daily discussions with developer friends and a mentor who shares valuable insights from his own development firm.
              </p>
              <p className="text-gray-200 pt-4">
                Outside of coding, I lead an active life – spending time with my girlfriend and friends, playing outdoor sports, and recharging in the sauna to maintain a healthy work-life balance.
              </p>
              <p className="text-gray-200 pt-4">
                I am always open to exciting new challenges and projects to apply my knowledge, gain real-world experience, and continuously grow as a developer.
              </p>
            </div>

            {/* Read More Button */}
            <button
              onClick={() => setExpandAbout(!expandAbout)}
              style={{
                color: '#FFB000',
              }}
              className="mt-4 inline-flex items-center gap-2 font-semibold hover:opacity-80 transition-opacity duration-300 text-sm md:text-base"
            >
              {expandAbout ? 'Read Less' : 'Read More'}
              <ChevronDown
                size={18}
                className={`transition-transform duration-300 ${expandAbout ? 'rotate-180' : ''}`}
              />
            </button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="scroll-mt-24 mb-16 md:mb-24">
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
              className="skill-item group p-4 text-center hover:scale-110 transition-all duration-300 cursor-pointer backdrop-blur-sm glow-border rounded-lg"
            >
              <i
                className={`${skill.iconClass} block text-5xl mb-3 transition-transform duration-300 group-hover:animate-bounce`}
                aria-hidden="true"
              />
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

      {/* Education Section */}
      <section id="education" className="scroll-mt-24 mb-16 md:mb-24">
        <h2
          style={{
            fontFamily: 'Space Mono, monospace',
            color: '#FFB000',
          }}
          className="section-title text-2xl md:text-3xl mb-6"
        >
          {'> Education'}
        </h2>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#1A1A1A',
                border: '1px solid #FFB000',
                animation: `staggerFadeIn 0.6s ease-out ${index * 0.1}s both`,
              }}
              className="card-item p-6 backdrop-blur-sm hover:scale-105 transition-all duration-300 glow-border rounded-lg"
            >
              <div className="flex items-start gap-4">
                <div style={{ color: '#FFB000' }} className="flex-shrink-0 transition-transform duration-300 hover:scale-110">
                  {edu.icon}
                </div>
                <div>
                  <h3
                    style={{
                      color: '#FFFFFF',
                      fontFamily: 'Space Mono, monospace',
                    }}
                    className="text-lg font-bold mb-2"
                  >
                    {edu.institution}
                  </h3>
                  <p style={{ color: '#888888' }} className="text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="scroll-mt-24 mb-16 md:mb-24">
        <h2
          style={{
            fontFamily: 'Space Mono, monospace',
            color: '#FFB000',
          }}
          className="section-title text-2xl md:text-3xl mb-6"
        >
          {'> Work Experience'}
        </h2>
        <div
          style={{
            backgroundColor: '#1A1A1A',
            border: '1px solid #FFB000',
          }}
          className="p-6 md:p-8 backdrop-blur-sm mb-4 glow-border rounded-lg transition-all duration-300"
        >
          <p style={{ color: '#888888' }} className="mb-6 text-sm md:text-base leading-relaxed">
            A foundation of hard work and discipline
          </p>
          <div className="space-y-4">
            {workExperience.map((job, index) => (
              <div
                key={index}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${0.1 * index}s both`,
                  borderBottom: index !== workExperience.length - 1 ? '1px solid #FFB000' : 'none',
                }}
                className="flex items-start gap-4 pb-4"
              >
                <div style={{ color: '#FFB000' }} className="flex-shrink-0 transition-transform duration-300 hover:scale-110">
                  {job.icon}
                </div>
                <div className="flex-1">
                  <h3
                    style={{
                      color: '#FFFFFF',
                      fontFamily: 'Space Mono, monospace',
                    }}
                    className="mb-1 font-semibold"
                  >
                    {job.role}
                  </h3>
                  <p style={{ color: '#888888' }} className="text-sm leading-relaxed">
                    {job.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
              className="project-card overflow-hidden backdrop-blur-sm group cursor-pointer rounded-lg flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-800 to-black flex-shrink-0">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex-1">
                  <h3
                    style={{
                      color: '#FFB000',
                      fontFamily: 'Space Mono, monospace',
                    }}
                    className="text-lg font-bold mb-2 group-hover:text-yellow-300 transition-colors"
                  >
                    {project.name}
                  </h3>
                  <p style={{ color: '#CCCCCC' }} className="text-sm mb-4 leading-relaxed">
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
                </div>

                {/* Links */}
                <div className="flex gap-3 mt-auto">
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

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-24 mb-16 md:mb-24">
        <h2
          style={{
            fontFamily: 'Space Mono, monospace',
            color: '#FFB000',
          }}
          className="section-title text-2xl md:text-3xl mb-6 text-center"
        >
          {'> Let\'s Connect'}
        </h2>
        <p style={{ color: '#888888' }} className="text-center mb-8 text-lg md:text-xl leading-relaxed">
          Let's build something together!
        </p>

        {/* Contact Info Cards */}
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
              +372 5814 1403
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

      {/* Footer */}
      <div className="mt-16 text-center border-t" style={{ borderColor: '#FFB000' }}>
        <p
          style={{
            color: '#888888',
            fontFamily: 'Space Mono, monospace',
          }}
          className="mt-8 text-sm font-medium"
        >
          {'Roven Piho 2026'}
        </p>
      </div>
    </div>
  );
}
