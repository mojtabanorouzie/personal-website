export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <article className="space-y-12">
        <div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">About Me</h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg font-light">
            Senior .NET Developer with a passion for building scalable, high-performance systems
          </p>
        </div>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">Overview</h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4 font-light">
            I am a Senior .NET Developer with extensive experience in building enterprise-grade applications and
            distributed systems. My focus is on creating clean, maintainable code that solves complex problems
            efficiently. I have a deep passion for microservices architecture, event-driven systems, and optimizing
            performance in high-throughput environments.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700 rounded-xl border border-blue-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all">
              <h3 className="text-lg font-semibold mb-3 text-blue-600 dark:text-blue-400">Core Technologies</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 font-light">
                <li>.NET Core / .NET Framework</li>
                <li>C# Programming</li>
                <li>SQL & NoSQL Databases</li>
                <li>RESTful APIs & GraphQL</li>
                <li>Entity Framework & Dapper</li>
              </ul>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-xl border border-purple-200 dark:border-slate-700 hover:border-purple-400 dark:hover:border-purple-500 transition-all">
              <h3 className="text-lg font-semibold mb-3 text-purple-600 dark:text-purple-400">Specialized Skills</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 font-light">
                <li>Kafka & Event Streaming</li>
                <li>Microservices Architecture</li>
                <li>Distributed Systems Design</li>
                <li>Performance Optimization</li>
                <li>System Design & Scalability</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Professional Background</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 dark:border-blue-400 pl-6 py-4 bg-gradient-to-r from-blue-50 to-transparent dark:from-slate-800 dark:to-transparent rounded-r-lg">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Senior .NET Developer</h3>
              <p className="text-slate-600 dark:text-slate-400 font-light">Building scalable microservices and event-driven systems</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 font-light">
                Designed and implemented high-performance systems handling millions of events per day using Kafka.
                Led architectural decisions for microservices migration from monolithic applications.
              </p>
            </div>

            <div className="border-l-4 border-purple-600 dark:border-purple-400 pl-6 py-4 bg-gradient-to-r from-purple-50 to-transparent dark:from-slate-800 dark:to-transparent rounded-r-lg">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Full Stack Developer</h3>
              <p className="text-slate-600 dark:text-slate-400 font-light">Enterprise application development</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 font-light">
                Developed robust backend services, optimized database queries, and created efficient APIs
                serving millions of requests per day.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">What Drives Me</h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-light">
            I am driven by the challenge of solving complex problems with elegant solutions. I believe in writing
            code that is not just functional, but also readable, maintainable, and performant. I continuously learn
            new technologies and best practices to stay at the forefront of software development.
          </p>
        </section>
      </article>
    </div>
  );
}
