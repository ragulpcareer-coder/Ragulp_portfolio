import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { fadeUp } from '../lib/variants'
import { CONTACTS } from '../data'

function ContactCard({ item, index, inView }) {
  return (
    <motion.a
      href={item.href}
      target={item.href.startsWith('mailto') ? undefined : '_blank'}
      rel="noopener noreferrer"
      custom={index * 0.1 + 0.15}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="glass-card p-6 flex flex-col items-center text-center gap-4 group border-slate-200/60 hover:border-emerald-500/30 select-none cursor-pointer"
    >
      <div
        className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-105"
        style={{ background: `linear-gradient(135deg, ${item.color}08, ${item.color}01)`, border: `1px solid ${item.color}25` }}
      >
        <item.icon size={20} style={{ color: item.color }} />
      </div>

      <div>
        <p className="font-mono text-[9px] text-slate-400 uppercase tracking-widest mb-1.5">{item.label}</p>
        <p className="font-mono text-xs text-slate-700 font-medium leading-snug break-all">{item.value}</p>
      </div>

      <div
        className="mt-auto flex items-center gap-1 text-[10px] font-mono transition-colors"
        style={{ color: `${item.color}b0` }}
      >
        <span>CONNECT</span>
        <ArrowUpRight size={11} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </div>
    </motion.a>
  )
}

export default function Contact() {
  const { ref, inView } = useScrollReveal()

  return (
    <section id="contact" className="relative bg-transparent">
      {/* Top separator line */}
      <div className="absolute inset-x-0 top-0 h-px bg-slate-200/60" />

      <div className="section-wrap" ref={ref}>
        {/* Heading block */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="text-center max-w-xl mx-auto mb-16"
        >
          <span className="eyebrow justify-center">Get In Touch</span>
          <h2 className="heading-xl mb-4">Let's Build<br />Something Great</h2>
          <p className="body-lg text-slate-600">
            Open to full-time roles, freelance projects, and interesting collaborations.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {CONTACTS.map((item, i) => (
            <ContactCard key={item.label} item={item} index={i} inView={inView} />
          ))}
        </div>

        {/* Availability badge */}
        <motion.div
          custom={0.45}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mt-12 flex justify-center"
        >
          <div className="inline-flex items-center gap-2.5 font-mono text-[10px] text-slate-500 border border-slate-200 px-4 py-2 rounded-md bg-white/70 shadow-sm shadow-blue-900/5">
            <span className="relative flex w-1.5 h-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
            </span>
            SYSTEMS ONLINE // OPEN FOR OPPORTUNITIES
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-200 bg-slate-50/60 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-display font-bold text-lg text-slate-800">
            RP
          </span>
          <p className="font-mono text-[9px] text-slate-400 text-center uppercase tracking-wider">
            Built with React | Tailwind | Framer Motion
          </p>
          <p className="font-mono text-[9px] text-slate-400 uppercase tracking-wider">
            (c) {new Date().getFullYear()} Ragul P
          </p>
        </div>
      </div>
    </section>
  )
}
