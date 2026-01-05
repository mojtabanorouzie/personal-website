import Link from 'next/link';

export default function Resume() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">Resume</h1>
        <p className="text-slate-600 dark:text-slate-400 mb-6 font-light">Download my resume or view my experience below</p>
        <a
          href="/resume.pdf"
          download="Mojtaba_Norouzi_Resume.pdf"
          className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 dark:from-blue-500 dark:to-cyan-400 dark:hover:from-blue-600 dark:hover:to-cyan-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          Download PDF Resume
        </a>
      </div>

      <article className="space-y-12">
        <section>
          <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Professional Experience</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 dark:border-blue-400 pl-6 py-4 bg-gradient-to-r from-blue-50 to-transparent dark:from-slate-800 dark:to-transparent rounded-r-lg">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Senior .NET Developer</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">Current Position</p>
                </div>
                <span className="text-slate-600 dark:text-slate-400">Present</span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 mt-3 font-light">
                <li>Design and implement high-performance microservices architecture</li>
                <li>Lead Kafka integration for event-driven systems processing millions of events daily</li>
                <li>Optimize database performance and query efficiency</li>
                <li>Architect distributed systems for scalability and reliability</li>
                <li>Mentor junior developers and review code for quality</li>
              </ul>
            </div>

            <div className="border-l-4 border-purple-600 dark:border-purple-400 pl-6 py-4 bg-gradient-to-r from-purple-50 to-transparent dark:from-slate-800 dark:to-transparent rounded-r-lg">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">.NET Developer</h3>
                  <p className="text-slate-600 dark:text-slate-400">Previous Position</p>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 mt-3 font-light">
                <li>Developed and maintained enterprise applications using .NET Core</li>
                <li>Created RESTful APIs and integrated third-party services</li>
                <li>Improved application performance and reduced technical debt</li>
                <li>Participated in design reviews and architecture decisions</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700 rounded-xl border border-blue-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold mb-3 text-blue-600 dark:text-blue-400">Languages & Frameworks</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 font-light">
                <li>C# & .NET 6, 7, 8</li>
                <li>ASP.NET Core</li>
                <li>Entity Framework Core</li>
                <li>LINQ</li>
                <li>TypeScript & JavaScript</li>
              </ul>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-xl border border-purple-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold mb-3 text-purple-600 dark:text-purple-400">Databases & Data</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 font-light">
                <li>SQL Server</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>Redis</li>
                <li>Elasticsearch</li>
              </ul>
            </div>
            <div className="p-6 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-xl border border-pink-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold mb-3 text-pink-600 dark:text-pink-400">Architecture & Patterns</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 font-light">
                <li>Microservices</li>
                <li>Event-Driven Architecture</li>
                <li>CQRS Pattern</li>
                <li>Domain-Driven Design</li>
                <li>Clean Architecture</li>
              </ul>
            </div>
            <div className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-xl border border-cyan-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold mb-3 text-cyan-600 dark:text-cyan-400">Tools & Platforms</h3>
              <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 font-light">
                <li>Kafka & RabbitMQ</li>
                <li>Docker & Kubernetes</li>
                <li>Git & CI/CD</li>
                <li>Azure & AWS</li>
                <li>Visual Studio</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Education</h2>
          <div className="border-l-4 border-blue-600 dark:border-blue-400 pl-6 py-4 space-y-4 bg-gradient-to-r from-blue-50 to-transparent dark:from-slate-800 dark:to-transparent rounded-r-lg">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Software Engineering Degree</h3>
              <p className="text-slate-600 dark:text-slate-400 font-light">University/Institution Name</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-light">Graduation Year</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6 text-slate-900 dark:text-white">Additional Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-700 rounded-xl border border-blue-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold mb-2 text-blue-600 dark:text-blue-400">Certifications</h3>
              <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300 font-light">
                <li>Azure Developer Associate</li>
                <li>Microsoft Certified Associate</li>
              </ul>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-xl border border-purple-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold mb-2 text-purple-600 dark:text-purple-400">Languages</h3>
              <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300 font-light">
                <li>English</li>
                <li>Persian</li>
              </ul>
            </div>
          </div>
        </section>
      </article>

      <div className="mt-12 pt-8 border-t border-slate-300 dark:border-slate-700">
        <p className="text-slate-600 dark:text-slate-400 font-light">
          For more information, please{' '}
          <Link href="/links" className="text-blue-600 dark:text-blue-400 hover:underline font-semibold">
            contact me
          </Link>
          {' '}or download the PDF version above.
        </p>
      </div>
    </div>
  );
}
