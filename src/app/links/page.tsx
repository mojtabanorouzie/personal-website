import Link from 'next/link';

export default function Links() {
  const links = [
    {
      title: 'GitHub',
      url: 'https://github.com',
      description: 'Check out my open-source projects and contributions',
      icon: '🐙',
    },
    {
      title: 'LinkedIn',
      url: 'https://linkedin.com',
      description: 'Connect with me on LinkedIn',
      icon: '💼',
    },
    {
      title: 'Email',
      url: 'mailto:your.email@example.com',
      description: 'Send me an email',
      icon: '✉️',
    },
    {
      title: 'Medium',
      url: 'https://medium.com',
      description: 'Read my technical articles on Medium',
      icon: '📝',
    },
    {
      title: 'Dev.to',
      url: 'https://dev.to',
      description: 'Follow my content on Dev.to',
      icon: '💻',
    },
    {
      title: 'Twitter / X',
      url: 'https://twitter.com',
      description: 'Follow me for tech insights and updates',
      icon: '𝕏',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">Connect With Me</h1>
        <p className="text-xl text-slate-700 dark:text-slate-300 font-light">
          Feel free to reach out through any of these platforms
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {links.map((link) => (
          <a
            key={link.title}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 border-2 border-slate-200 dark:border-slate-700 rounded-xl hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-xl dark:hover:shadow-blue-900/20 transition-all duration-300 bg-white dark:bg-slate-800 hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 dark:hover:from-slate-700 dark:hover:to-slate-700 group"
          >
            <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">{link.icon}</div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
              {link.title}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 font-light">{link.description}</p>
            <div className="mt-4 text-blue-600 dark:text-blue-400 font-semibold text-sm group-hover:translate-x-2 transition-transform inline-flex items-center gap-1">
              Visit {link.title} <span>→</span>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-16 p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700 rounded-xl border-l-4 border-blue-600 dark:border-blue-400">
        <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white">Get In Touch</h2>
        <p className="text-slate-700 dark:text-slate-300 mb-4 font-light">
          I&apos;m always interested in discussing new projects, interesting ideas, or opportunities to collaborate.
          Whether you have a question or just want to say hi, feel free to reach out!
        </p>
        <a
          href="mailto:your.email@example.com"
          className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 dark:from-blue-500 dark:to-cyan-400 dark:hover:from-blue-600 dark:hover:to-cyan-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          Send Me an Email
        </a>
      </div>
    </div>
  );
}
