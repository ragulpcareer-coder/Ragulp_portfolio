import { motion } from 'framer-motion'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { fadeUp, slideLeft, slideRight } from '../lib/variants'
import { ABOUT_HIGHLIGHTS } from '../data'

export default function About() {
  const { ref, inView } = useScrollReveal()

  return (
    <section id="about" className="relative bg-transparent">
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-transparent pointer-events-none" />

      <div className="section-wrap" ref={ref}>
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <span className="eyebrow">Who I Am</span>
          <h2 className="heading-xl mb-10">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1px_1fr] gap-12 lg:gap-0 items-start">
          {/* Bio */}
          <motion.div
            custom={0.1}
            variants={slideLeft}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="lg:pr-14"
          >
            <p className="body-lg mb-5 text-slate-600">
              I'm a MERN Stack Software Developer with hands-on experience in{' '}
              <span className="text-slate-900 font-medium">network security</span> and{' '}
              <span className="text-emerald-700 font-medium">fault-tolerant backend systems</span>.
              I build secure, modular full-stack applications with reliability built in by design.
            </p>
            <p className="body-lg mb-8 text-slate-600">
              My work includes JWT authentication, role-based access control (RBAC), real-time features, and a self-designed
              zero-trust network architecture in Cisco Packet Tracer. I regularly practice Data
              Structures & Algorithms on LeetCode and have completed CCNA/CCNP networking coursework.
            </p>

            <div className="flex flex-col gap-3 font-mono">
              {[
                { k: 'Status', v: 'Open to opportunities' },
                { k: 'Location', v: 'Dindigul, Tamil Nadu' },
                { k: 'Focus', v: 'MERN Stack + Network Security' },
              ].map(({ k, v }) => (
                <div key={k} className="flex items-center gap-3">
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest w-20 shrink-0">{k}</span>
                  <span className="w-px h-3 bg-slate-200" />
                  <span className="text-xs text-slate-600">{v}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Divider */}
          <div className="hidden lg:block w-px bg-gradient-to-b from-transparent via-slate-200 to-transparent mx-auto h-full" />

          {/* Highlights */}
          <motion.div
            custom={0.2}
            variants={slideRight}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="lg:pl-14 flex flex-col gap-4"
          >
            {ABOUT_HIGHLIGHTS.map((item, i) => (
              <motion.div
                key={item.title}
                custom={0.25 + i * 0.1}
                variants={fadeUp}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 305 }}
                className="glass-card p-5 flex items-start gap-4 group cursor-default"
                style={{ borderColor: `${item.color}25` }}
              >
                <div
                  className="mt-0.5 p-2.5 rounded-lg shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${item.color}08`, border: `1px solid ${item.color}15` }}
                >
                  <item.icon size={18} style={{ color: item.color }} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-slate-800 text-sm mb-1">{item.title}</h3>
                  <p className="font-body text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(300px circle at 20% 50%, ${item.color}04, transparent)` }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
