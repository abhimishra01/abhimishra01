import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="border-t border-violet-500/10 bg-[#07040f] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-5">
        {/* Social links */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/abhimishra01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-violet-400 transition-colors"
            aria-label="GitHub"
          >
            <FiGithub size={18} />
          </a>
          <a
            href="https://linkedin.com/in/abhimishra321"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-violet-400 transition-colors"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={18} />
          </a>
          <a
            href="https://x.com/abhimishra__"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-violet-400 transition-colors"
            aria-label="Twitter / X"
          >
            <FiTwitter size={18} />
          </a>
        </div>

        {/* Availability indicator */}
        <div className="flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full bg-violet-500 animate-pulse"
            style={{ boxShadow: '0 0 8px rgba(139,92,246,0.7)' }}
          />
          <span className="text-xs text-slate-500">Open to opportunities</span>
        </div>

        {/* Copyright */}
        <p className="text-xs text-slate-600">
          Built by <span className="text-violet-400">Abhishek Mishra</span> · 2026
        </p>
      </div>
    </footer>
  )
}
