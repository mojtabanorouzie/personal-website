import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-900 border-b border-slate-800 backdrop-blur-sm bg-opacity-95 shadow-sm">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent hover:from-blue-300 hover:to-cyan-200 transition-all duration-300"
        >
          Mojtaba
        </Link>
        <div className="flex gap-1 items-center">
          <div className="hidden md:flex gap-8 items-center mr-8">
            <Link 
              href="/about" 
              className="text-slate-300 hover:text-blue-400 transition-colors font-medium"
            >
              About
            </Link>
            <Link 
              href="/resume" 
              className="text-slate-300 hover:text-blue-400 transition-colors font-medium"
            >
              Resume
            </Link>
            <Link 
              href="/blog" 
              className="text-slate-300 hover:text-blue-400 transition-colors font-medium"
            >
              Blog
            </Link>
            <Link 
              href="/links" 
              className="text-slate-300 hover:text-blue-400 transition-colors font-medium"
            >
              Links
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
