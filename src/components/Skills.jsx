import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { fadeUp } from '../lib/variants'
import { SKILL_CATEGORIES } from '../data'

function SkillTag({ name, color }) {
  return (
    <span
      className="font-mono text-[10px] px-2.5 py-1 rounded border cursor-default select-none transition-all duration-200 hover:bg-slate-50"
      style={{
        color,
        borderColor: `${color}35`,
        backgroundColor: `${color}05`,
      }}
    >
      {name}
    </span>
  )
}

function CategoryCard({ cat, index, inView }) {
  return (
    <motion.div
      custom={index * 0.08 + 0.1}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="glass-card p-6 group cursor-default"
    >
      {/* Left accent bar draw on hover */}
      <div
        className="absolute left-0 top-0 bottom-0 w-[3px] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300"
        style={{ backgroundColor: cat.color }}
      />

      <div className="flex items-center gap-3 mb-5 select-none">
        <div
          className="w-6 h-6 rounded flex items-center justify-center"
          style={{ backgroundColor: `${cat.color}10` }}
        >
          <div
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: cat.color, boxShadow: `0 0 6px ${cat.color}` }}
          />
        </div>
        <h3 className="font-mono font-bold text-xs uppercase tracking-[0.18em] flex items-center" style={{ color: cat.color }}>
          {cat.label}
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-1 font-mono">_</span>
        </h3>
        <span className="ml-auto font-mono text-[9px] text-slate-400">{cat.skills.length} items</span>
      </div>

      <div className="flex flex-wrap gap-2">
        {cat.skills.map(skill => (
          <SkillTag key={skill} name={skill} color={cat.color} />
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const { ref, inView } = useScrollReveal()

  return (
    <section id="skills" className="relative bg-transparent">
      <div className="section-wrap" ref={ref}>
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-14"
        >
          <span className="eyebrow">Toolkit</span>
          <h2 className="heading-xl">Skills</h2>
          <p className="body-lg mt-3 max-w-lg">
            A curated stack across full-stack development, security, and networking.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SKILL_CATEGORIES.map((cat, i) => (
            <CategoryCard key={cat.label} cat={cat} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
