import { motion } from 'framer-motion'
import { Calendar, BadgeCheck } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { fadeUp } from '../lib/variants'
import { CERTIFICATIONS } from '../data'

function CertCard({ cert, index, inView }) {
  return (
    <motion.div
      custom={index * 0.1 + 0.1}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="glass-card p-6 group border-slate-200/60 hover:border-[#059669]/30 transition-all duration-300 select-none cursor-default"
    >
      <div className="flex items-start gap-4">
        <div
          className="p-2.5 rounded-lg shrink-0 transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: `${cert.color}08`, border: `1px solid ${cert.color}20` }}
        >
          <cert.icon size={18} style={{ color: cert.color }} />
        </div>

        <div className="flex-1 min-w-0 font-body">
          <div className="flex items-start justify-between gap-3 mb-1.5">
            <h3 className="font-display font-bold text-slate-800 text-base leading-snug group-hover:text-emerald-700 transition-colors">{cert.title}</h3>
            <BadgeCheck size={16} className="shrink-0 mt-0.5 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
          </div>
          <p className="font-mono text-[10px] uppercase tracking-wider mb-3 font-semibold" style={{ color: cert.color }}>{cert.issuer}</p>
          <p className="font-body text-sm text-slate-500 leading-relaxed mb-4">{cert.desc}</p>
          <div className="flex items-center gap-2 text-slate-400 text-[10px] font-mono">
            <Calendar size={11} className="shrink-0" />
            {cert.date}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Certifications() {
  const { ref, inView } = useScrollReveal()

  return (
    <section id="certifications" className="relative bg-transparent">
      <div className="section-wrap" ref={ref}>
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-14"
        >
          <span className="eyebrow">Credentials</span>
          <h2 className="heading-xl">Certifications</h2>
          <p className="body-lg mt-3 max-w-lg">
            Verified credentials backing up hands-on development and networking work.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {CERTIFICATIONS.map((cert, i) => (
            <CertCard key={cert.title} cert={cert} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
