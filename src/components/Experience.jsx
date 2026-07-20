import { motion } from 'framer-motion'
import { Briefcase, MapPin, Calendar, CheckCircle2, TrendingUp } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { fadeUp, slideLeft } from '../lib/variants'
import { EXPERIENCE_BULLETS } from '../data'

const TAGS = ['OSPF', 'EIGRP', 'MPLS', 'VLANs', 'ACLs', 'Routing Policies']

export default function Experience() {
  const { ref, inView } = useScrollReveal()

  return (
    <section id="experience" className="relative bg-transparent">
      <div className="section-wrap" ref={ref}>
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-14"
        >
          <span className="eyebrow">Experience</span>
          <h2 className="heading-xl">Internship</h2>
        </motion.div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-8 items-start">
          {/* Left panel */}
          <motion.div
            custom={0.1}
            variants={slideLeft}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div className="glass-card p-6 sticky top-24 border-slate-200/60">
              <div
                className="w-12 h-12 rounded-lg mb-5 flex items-center justify-center border border-slate-100"
                style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.08), rgba(16,185,129,0.02))' }}
              >
                <Briefcase size={20} className="text-emerald-600" />
              </div>

              <h3 className="font-display font-bold text-slate-800 text-base mb-1">
                Networking & Security Intern
              </h3>
              <p className="font-mono font-bold text-emerald-600 text-xs mb-5">SYSTECH</p>

              <div className="flex flex-col gap-2.5">
                <div className="flex items-center gap-2 text-slate-400 text-[10px] font-mono">
                  <MapPin size={11} className="shrink-0" />
                  Trichy, Tamil Nadu
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-[10px] font-mono">
                  <Calendar size={11} className="shrink-0" />
                  Aug 2025 - Sep 2025
                </div>
                <div className="flex items-center gap-2 text-emerald-600 text-[10px] font-mono">
                  <TrendingUp size={11} className="shrink-0" />
                  Completed
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap gap-1.5">
                {TAGS.map(tag => (
                  <span
                    key={tag}
                    className="font-mono text-[9px] px-2 py-0.5 rounded bg-emerald-50 border border-emerald-100/60 text-emerald-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: bullets */}
          <motion.div
            custom={0.15}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <div className="glass-card p-7 border-slate-200/60">
              <h4 className="font-mono text-[10px] text-slate-400 uppercase tracking-widest mb-6">
                Key Contributions
              </h4>

              <ul className="flex flex-col gap-4">
                {EXPERIENCE_BULLETS.map((point, i) => (
                  <motion.li
                    key={i}
                    custom={0.2 + i * 0.07}
                    variants={fadeUp}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="flex items-start gap-4 group"
                  >
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-emerald-50 border border-emerald-100/60 flex items-center justify-center shrink-0 group-hover:bg-emerald-100 transition-colors">
                      <CheckCircle2 size={11} className="text-emerald-600" />
                    </div>
                    <p className="font-body text-sm text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors">
                      {point}
                    </p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
