import { GraduationCap, Briefcase, BookOpen, Building2, Globe } from "lucide-react";

export default function Experience() {
  const education = [
    {
      institution: "Põlva Riigigümnaasium",
      description: "Secondary education",
      icon: <GraduationCap size={24} />,
    },
    {
      institution: "Tartu Rakenduslik Kolledž (VOCO)",
      description: "Studies in Software Development",
      icon: <GraduationCap size={24} />,
    },
  ];

  const workExperience = [
    {
      role: "Construction worker",
      description: "Physical work, teamwork, and responsibility",
      icon: <Briefcase size={24} />,
    },
    {
      role: "Production worker",
      description: "Precision and adherence to processes",
      icon: <Briefcase size={24} />,
    },
    {
      role: "Security guard",
      description: "Responsibility, vigilance, and decision-making",
      icon: <Briefcase size={24} />,
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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
      {/* Education Section */}
      <section className="mb-16 md:mb-24">
        <h2
          style={{
            fontFamily: 'Space Mono, monospace',
            color: '#FFB000',
          }}
          className="text-2xl md:text-3xl mb-6"
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
              }}
              className="p-6 backdrop-blur-sm hover:scale-105 transition-transform"
            >
              <div className="flex items-start gap-4">
                <div style={{ color: '#FFB000' }}>
                  {edu.icon}
                </div>
                <div>
                  <h3
                    style={{
                      color: '#FFFFFF',
                      fontFamily: 'Space Mono, monospace',
                    }}
                    className="text-lg mb-2"
                  >
                    {edu.institution}
                  </h3>
                  <p style={{ color: '#888888' }} className="text-sm">
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="mb-16 md:mb-24">
        <h2
          style={{
            fontFamily: 'Space Mono, monospace',
            color: '#FFB000',
          }}
          className="text-2xl md:text-3xl mb-6"
        >
          {'> Work Experience'}
        </h2>
        <div
          style={{
            backgroundColor: '#1A1A1A',
            border: '1px solid #FFB000',
          }}
          className="p-6 md:p-8 backdrop-blur-sm mb-4"
        >
          <p style={{ color: '#888888' }} className="mb-6 text-sm md:text-base">
            A foundation of hard work and discipline
          </p>
          <div className="space-y-4">
            {workExperience.map((job, index) => (
              <div
                key={index}
                className="flex items-start gap-4 pb-4"
                style={{
                  borderBottom: index !== workExperience.length - 1 ? '1px solid #FFB000' : 'none',
                }}
              >
                <div style={{ color: '#FFB000' }}>
                  {job.icon}
                </div>
                <div>
                  <h3
                    style={{
                      color: '#FFFFFF',
                      fontFamily: 'Space Mono, monospace',
                    }}
                    className="mb-1"
                  >
                    {job.role}
                  </h3>
                  <p style={{ color: '#888888' }} className="text-sm">
                    {job.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Courses Section */}
      <section className="mb-16 md:mb-24">
        <h2
          style={{
            fontFamily: 'Space Mono, monospace',
            color: '#FFB000',
          }}
          className="text-2xl md:text-3xl mb-6"
        >
          {'> Online Courses'}
        </h2>
        <div
          style={{
            backgroundColor: '#1A1A1A',
            border: '1px solid #FFB000',
          }}
          className="p-6 md:p-8 backdrop-blur-sm"
        >
          <div className="grid md:grid-cols-2 gap-4">
            {courses.map((course, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3"
                style={{
                  backgroundColor: '#0F0F0F',
                  border: '1px solid #FFB000',
                }}
              >
                <BookOpen size={20} style={{ color: '#FFB000' }} />
                <span
                  style={{
                    color: '#FFFFFF',
                    fontFamily: 'Space Mono, monospace',
                  }}
                  className="text-sm"
                >
                  {course}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Study Visits Section */}
      <section className="mb-16 md:mb-24">
        <h2
          style={{
            fontFamily: 'Space Mono, monospace',
            color: '#FFB000',
          }}
          className="text-2xl md:text-3xl mb-6"
        >
          {'> Study Visits'}
        </h2>
        <div
          style={{
            backgroundColor: '#1A1A1A',
            border: '1px solid #FFB000',
          }}
          className="p-6 backdrop-blur-sm"
        >
          <div className="flex items-start gap-4">
            <div style={{ color: '#FFB000' }}>
              <Building2 size={24} />
            </div>
            <div>
              <h3
                style={{
                  color: '#FFFFFF',
                  fontFamily: 'Space Mono, monospace',
                }}
                className="text-lg mb-2"
              >
                Tartu Inforegister
              </h3>
              <p style={{ color: '#888888' }} className="text-sm">
                A visit to the company to learn about the work environment and practices
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section>
        <h2
          style={{
            fontFamily: 'Space Mono, monospace',
            color: '#FFB000',
          }}
          className="text-2xl md:text-3xl mb-6"
        >
          {'> Languages'}
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {languages.map((lang, index) => (
            <div
              key={index}
              style={{
                backgroundColor: '#1A1A1A',
                border: '1px solid #FFB000',
              }}
              className="p-6 backdrop-blur-sm"
            >
              <div className="flex items-start gap-3 mb-3">
                <Globe size={20} style={{ color: '#FFB000' }} />
                <h3
                  style={{
                    color: '#FFFFFF',
                    fontFamily: 'Space Mono, monospace',
                  }}
                >
                  {lang.language}
                </h3>
              </div>
              <div
                style={{
                  backgroundColor: '#FFB000',
                  color: '#0F0F0F',
                  fontFamily: 'Space Mono, monospace',
                }}
                className="inline-block px-3 py-1 text-sm"
              >
                {lang.level}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
