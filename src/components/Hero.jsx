import { motion } from 'framer-motion'
import { ArrowDown, Sparkles, ArrowRight } from 'lucide-react'

const ROLES = ['MERN Stack Developer', 'Network Security Enthusiast']

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

function TerminalConsole() {
  return (
    <div className="relative border border-slate-200 bg-white rounded-lg shadow-xl p-4 font-mono text-[11px] text-slate-700">
      {/* Terminal Header */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3 select-none">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/30 border border-emerald-500/60 animate-pulse" />
          <span className="text-[10px] text-slate-400 ml-2">profile.sys</span>
        </div>
        <div className="flex items-center gap-1 text-[9px] text-emerald-600/80">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
          USER_VERIFIED
        </div>
      </div>

      {/* Profile picture (standard color, no mouseover filters) */}
      <div className="relative aspect-[4/5] rounded overflow-hidden border border-slate-100 mb-3">
        <img
          src="ragul-profile.jpeg"
          alt="Ragul P"
          className="h-full w-full object-cover object-[50%_18%]"
        />
        {/* Subtle scanline overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.02)_50%,transparent_50%)] bg-[size:100%_4px] opacity-15 pointer-events-none" />
        
        {/* Framing corners */}
        <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-emerald-600/25" />
        <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-emerald-600/25" />
        <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-emerald-600/25" />
        <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-emerald-600/25" />
      </div>

      {/* Terminal data output */}
      <div className="space-y-1.5 bg-slate-50 p-3 rounded border border-slate-100 font-mono text-[10px] leading-relaxed text-slate-650">
        <div className="flex justify-between border-b border-slate-100/50 pb-1">
          <span className="text-slate-400">NAME</span>
          <span className="text-slate-700 font-bold">Ragul P</span>
        </div>
        <div className="flex justify-between border-b border-slate-100/50 pb-1">
          <span className="text-slate-400">EMAIL</span>
          <a href="mailto:ragulp.career@gmail.com" className="text-emerald-700 hover:underline font-bold truncate max-w-[150px]">ragulp.career@gmail.com</a>
        </div>
        <div className="flex justify-between border-b border-slate-100/50 pb-1">
          <span className="text-slate-400">LINKEDIN</span>
          <a href="https://linkedin.com/in/ragul-p04" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-emerald-700 hover:underline">ragul-p04</a>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-400">GITHUB</span>
          <a href="https://github.com/ragulpcareer-coder" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-emerald-700 hover:underline">ragulpcareer-coder</a>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const scrollTo = id => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background terminal grid */}
      <div className="absolute inset-0 bg-grid-faint bg-grid opacity-60 pointer-events-none" />

      {/* Decorative vertical line */}
      <div className="absolute top-24 right-12 hidden lg:block opacity-20">
        <div className="w-px h-24 bg-gradient-to-b from-transparent to-emerald-600" />
      </div>

      <div className="section-wrap relative z-10 pt-28 pb-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-[1fr_300px] gap-12 lg:gap-16 items-center"
        >
          <div className="max-w-3xl">
            {/* Eyebrow badge */}
            <motion.div variants={item} className="mb-6">
              <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] uppercase text-emerald-700 border border-emerald-200 bg-emerald-50 px-3 py-1.5 rounded">
                <Sparkles size={10} className="text-emerald-600" />
                Available for opportunities
              </span>
            </motion.div>

            {/* Mobile terminal photo */}
            <motion.div variants={item} className="mb-8 max-w-[260px] lg:hidden">
              <TerminalConsole />
            </motion.div>

            {/* Name */}
            <motion.h1 variants={item} className="font-display font-bold leading-[1.0] mb-6">
              <span className="block text-[clamp(3.5rem,8vw,6.5rem)] text-slate-900 tracking-tight">
                Ragul
              </span>
              <span className="block text-[clamp(3.5rem,8vw,6.5rem)] tracking-tight">
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #10b981 0%, #059669 50%, #10b981 100%)',
                    backgroundSize: '200% auto',
                    animation: 'shimmer 4s linear infinite',
                  }}
                >
                  P
                </span>
              </span>
            </motion.h1>

            {/* Role chips */}
            <motion.div variants={item} className="flex flex-wrap gap-2 mb-8">
              {ROLES.map(role => (
                <span
                  key={role}
                  className="font-mono text-xs text-slate-600 border border-slate-200 bg-slate-50 px-3 py-1.5 rounded"
                >
                  {role}
                </span>
              ))}
            </motion.div>

            {/* Tagline */}
            <motion.p variants={item} className="body-lg max-w-xl mb-10 font-body text-slate-600">
              I am a software developer focusing on the intersection of{' '}
              <span className="text-slate-900 font-medium">full-stack web applications</span> and{' '}
              <span className="text-emerald-700 font-medium">network security</span>.
              Combining MERN stack engineering with hands-on networking coursework, I write secure, structured code, solve algorithmic challenges on LeetCode, and build micro-segmented network configurations.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-3 mb-16">
              <button onClick={() => scrollTo('#projects')} className="btn-cta">
                View Projects <ArrowRight size={13} className="inline ml-1" />
              </button>
              <button onClick={() => scrollTo('#contact')} className="btn-outline">
                Let's Talk
              </button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={item}
              className="flex items-center gap-8 pt-8 border-t border-slate-200"
            >
              {[
                { val: '3', label: 'Projects' },
                { val: '7.75', label: 'CGPA' },
                { val: '2', label: 'Certifications' },
              ].map(stat => (
                <div key={stat.label}>
                  <div className="font-display font-bold text-2xl text-slate-800">{stat.val}</div>
                  <div className="font-mono text-[10px] text-slate-400 uppercase tracking-widest mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Desktop Terminal Photo Frame */}
          <motion.div
            variants={item}
            className="hidden lg:block w-full max-w-[300px]"
          >
            <TerminalConsole />
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo('#about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-400 hover:text-emerald-600 transition-colors"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="font-mono text-[9px] tracking-widest uppercase">Scroll</span>
        <ArrowDown size={14} />
      </motion.button>

      <style>{`
        @keyframes shimmer {
          from { background-position: 0% center; }
          to { background-position: 200% center; }
        }
      `}</style>
    </section>
  )
}
