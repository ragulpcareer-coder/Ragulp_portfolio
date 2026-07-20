import { motion } from 'framer-motion'
import { Award, Calendar, GraduationCap, MapPin } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { fadeUp } from '../lib/variants'
import { EDUCATION } from '../data'

export default function Education() {
  const { ref, inView } = useScrollReveal()

  return (
    <section id="education" className="relative bg-transparent">
      <div className="section-wrap" ref={ref}>
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-12"
        >
          <span className="eyebrow">Education</span>
          <h2 className="heading-xl">Academic Background</h2>
        </motion.div>

        <motion.div
          custom={0.12}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="glass-card p-7 md:p-8"
        >
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <div className="w-14 h-14 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
              <GraduationCap size={26} className="text-emerald-600" />
            </div>

            <div className="flex-1">
              <h3 className="font-display text-2xl font-bold text-slate-800 mb-2">
                {EDUCATION.degree}
              </h3>
              <p className="font-body text-slate-600 mb-6">
                {EDUCATION.institution}
              </p>

              <div className="grid sm:grid-cols-3 gap-3">
                <div className="flex items-center gap-2 text-slate-500 text-xs font-mono">
                  <Calendar size={13} className="shrink-0 text-emerald-600" />
                  {EDUCATION.duration}
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-xs font-mono">
                  <Award size={13} className="shrink-0 text-[#65a30d]" />
                  {EDUCATION.cgpa}
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-xs font-mono">
                  <MapPin size={13} className="shrink-0 text-emerald-600" />
                  Dindigul
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
