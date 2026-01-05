export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-400 dark:text-slate-500 border-t border-slate-700 dark:border-slate-800 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-12 text-center">
        <p className="text-sm">&copy; {currentYear} Mojtaba Norouzi. All rights reserved.</p>
        <p className="text-xs mt-2 text-slate-600 dark:text-slate-700">
          Built with Next.js, TypeScript, and Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
