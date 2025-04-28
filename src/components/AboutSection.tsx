import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { Image } from './Image';
import { Illustration } from './Illustration';

function Skill({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100">
      <span className="text-sm font-medium">{label}</span>
    </div>
  );
}

function SoftwareIcon({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="p-2 rounded-lg bg-gray-100">
      <img 
        src={src} 
        alt={alt} 
        className="w-8 h-8 object-contain" 
        loading="lazy"
      />
    </div>
  );
}

export function AboutSection() {
  const skills = [
    'Full Stack Development',
    'UI/UX Design',
    'Web Applications',
    'E-Commerce',
    'Performance Optimization',
    'Mobile Development'
  ];

  const software = [
    {
      name: 'React',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
    },
    {
      name: 'Next.js',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg'
    },
    {
      name: 'Node.js',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg'
    },
    {
      name: 'TypeScript',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg'
    },
    {
      name: 'Tailwind CSS',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg'
    },
    {
      name: 'WordPress',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/98/WordPress_blue_logo.svg'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/koyunbakan',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/koyunbakan',
      label: 'LinkedIn'
    },
    {
      icon: Twitter,
      href: 'https://twitter.com/koyunbakan',
      label: 'Twitter'
    }
  ];

  return (
    <section className="section-offset py-20 relative overflow-hidden bg-gray-50">
      {/* Decorative illustrations */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <Illustration 
          name="coffee" 
          className="absolute -left-8 top-1/4 opacity-10 rotate-6"
          size="md"
        />
        <Illustration 
          name="coding" 
          className="absolute -right-8 bottom-1/4 opacity-10 -rotate-6"
          size="md"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="aspect-square rounded-[2.5rem] overflow-hidden glass-card shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <Image
                src="/oemer.jpeg"
                alt="Ömer Koyunbakan - kb digital"
                className="w-full h-full object-cover"
              />
            </div>

            <motion.div 
              className="absolute -bottom-6 -right-6 p-4 rounded-xl shadow-xl glass-card"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-3xl font-bold gradient-text">10+</p>
              <p className="text-sm text-gray-600">Jahre Erfahrung</p>
            </motion.div>

            {/* Social Links */}
            <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full transition-colors shadow-lg gradient-hover glass-card"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Das Gehirn hinter kb digital
            </h2>
            <h3 className="text-xl font-semibold mb-4 gradient-text">
              Ömer Koyunbakan
            </h3>
            <p className="mb-6 leading-relaxed text-gray-600">
              Als Front End Developer und UI/UX Designer entwickle ich seit über 10 Jahren 
              maßgeschneiderte Weblösungen für Unternehmen aller Branchen. Mein Fokus liegt auf der 
              Entwicklung performanter, skalierbarer Webanwendungen und E-Commerce Plattformen, die 
              nicht nur technisch überzeugen, sondern auch durch exzellentes Design begeistern. 🚀
            </p>
            <p className="mb-8 leading-relaxed text-gray-600">
              Mit einem tiefen Verständnis für moderne Webtechnologien und einem Auge für Design 
              entwickle ich digitale Lösungen, die Ihre Geschäftsziele optimal unterstützen - von 
              der ersten Konzeption bis zur finalen Umsetzung, inklusive Print und Corporate Design. ✨
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {skills.map((skill, index) => (
                <Skill key={index} label={skill} />
              ))}
            </div>

            <div className="p-6 rounded-[2.5rem] glass-card">
              <h4 className="font-semibold mb-4">Tech-Stack & Tools 🛠️</h4>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                {software.map((item) => (
                  <SoftwareIcon
                    key={item.name}
                    src={item.logo}
                    alt={item.name}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}