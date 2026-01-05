import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="space-y-12">
        <section className="pt-8">
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 dark:from-blue-400 dark:via-cyan-300 dark:to-teal-300 bg-clip-text text-transparent animate-fade-in">
              Hello, I'm Mojtaba
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 leading-relaxed max-w-2xl font-light">
              Senior .NET Developer crafting scalable, high-performance systems with expertise in Kafka, microservices architecture, and distributed systems.
            </p>
          </div>
        </section>

        <section className="flex flex-col sm:flex-row gap-4 pt-4">
          <Link
            href="/about"
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 dark:from-blue-500 dark:to-cyan-400 dark:hover:from-blue-600 dark:hover:to-cyan-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-center"
          >
            Learn More About Me
          </Link>
          <Link
            href="/blog"
            className="px-8 py-4 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-300 rounded-xl font-semibold hover:bg-blue-50 dark:hover:bg-slate-800 transition-all duration-300 transform hover:scale-105 text-center"
          >
            Read My Blog
          </Link>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
          <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700 rounded-xl border border-blue-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all hover:shadow-lg">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">High Performance</h3>
            <p className="text-slate-700 dark:text-slate-300 text-sm">Building systems that handle millions of events and scale horizontally</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-xl border border-purple-200 dark:border-slate-700 hover:border-purple-400 dark:hover:border-purple-500 transition-all hover:shadow-lg">
            <div className="text-4xl mb-3">🏗️</div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Microservices</h3>
            <p className="text-slate-700 dark:text-slate-300 text-sm">Designing distributed architectures that are maintainable and scalable</p>
          </div>
          <div className="p-6 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-xl border border-pink-200 dark:border-slate-700 hover:border-pink-400 dark:hover:border-pink-500 transition-all hover:shadow-lg">
            <div className="text-4xl mb-3">🔧</div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">.NET Expertise</h3>
            <p className="text-slate-700 dark:text-slate-300 text-sm">Crafting robust solutions with C#, ASP.NET Core, and modern frameworks</p>
          </div>
        </section>
      </div>
    </div>
  );
}
