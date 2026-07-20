import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, ShieldAlert, Cpu, Terminal } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { fadeUp } from '../lib/variants'
import { PROJECTS } from '../data'

function ZeroTrustDiagram() {
  const [activeSegment, setActiveSegment] = useState(null)

  const segments = {
    sdp: { name: 'SDP Segment (Remote Access)', desc: 'Encrypts remote access tunnels and applies identity verification before granting access to network paths.' },
    vlan10: { name: 'VLAN 10 (Management)', desc: 'Houses Server 1 (Active Directory/Identity Provider) under tight access control policies.' },
    vlan20: { name: 'VLAN 20 (Engineering)', desc: 'Segment for developer terminals containing User PC 2. Direct routing to production is blocked.' },
    vlan30: { name: 'VLAN 30 (Operations)', desc: 'Segment for operational terminals containing User PC 3. Restricted ACL privileges.' },
    vlan40: { name: 'VLAN 40 (Finance)', desc: 'Segment for finance workstation containing User PC 4. Highly isolated with strict stateful firewall checks.' },
    vlan50: { name: 'VLAN 50 (Production)', desc: 'Critical segment containing Server 2 (Database) & Server 3 (App). Restricted to authorized application ports.' },
  }

  return (
    <div className="flex flex-col h-full justify-between">
      {/* SVG Diagram */}
      <svg viewBox="0 0 500 320" className="w-full h-auto bg-slate-50 border border-slate-100 rounded p-3 select-none">
        {/* SDP Segment boundary */}
        <rect
          x="10" y="105" width="60" height="110" rx="4"
          fill="none" stroke={activeSegment === 'sdp' ? '#059669' : '#0f766e'}
          strokeWidth={activeSegment === 'sdp' ? '1.5' : '1'}
          strokeDasharray="3,3" className={activeSegment === 'sdp' ? 'opacity-90' : 'opacity-30'}
          onMouseEnter={() => setActiveSegment('sdp')}
          onMouseLeave={() => setActiveSegment(null)}
        />
        <text x="15" y="120" fill="#059669" fontSize="8" fontFamily="monospace" className="opacity-80 font-bold">SDP</text>

        {/* VLAN 10 boundary */}
        <rect
          x="240" y="20" width="100" height="70" rx="4"
          fill="none" stroke={activeSegment === 'vlan10' ? '#059669' : '#0f766e'}
          strokeWidth={activeSegment === 'vlan10' ? '1.5' : '1'}
          strokeDasharray="3,3" className={activeSegment === 'vlan10' ? 'opacity-90' : 'opacity-30'}
          onMouseEnter={() => setActiveSegment('vlan10')}
          onMouseLeave={() => setActiveSegment(null)}
        />
        <text x="245" y="32" fill="#059669" fontSize="8" fontFamily="monospace" className="opacity-80 font-bold">VLAN 10</text>

        {/* VLAN 20 boundary */}
        <rect
          x="360" y="20" width="125" height="70" rx="4"
          fill="none" stroke={activeSegment === 'vlan20' ? '#059669' : '#0f766e'}
          strokeWidth={activeSegment === 'vlan20' ? '1.5' : '1'}
          strokeDasharray="3,3" className={activeSegment === 'vlan20' ? 'opacity-90' : 'opacity-30'}
          onMouseEnter={() => setActiveSegment('vlan20')}
          onMouseLeave={() => setActiveSegment(null)}
        />
        <text x="365" y="32" fill="#059669" fontSize="8" fontFamily="monospace" className="opacity-80 font-bold">VLAN 20</text>

        {/* VLAN 30 boundary */}
        <rect
          x="240" y="110" width="100" height="70" rx="4"
          fill="none" stroke={activeSegment === 'vlan30' ? '#059669' : '#0f766e'}
          strokeWidth={activeSegment === 'vlan30' ? '1.5' : '1'}
          strokeDasharray="3,3" className={activeSegment === 'vlan30' ? 'opacity-90' : 'opacity-30'}
          onMouseEnter={() => setActiveSegment('vlan30')}
          onMouseLeave={() => setActiveSegment(null)}
        />
        <text x="245" y="122" fill="#059669" fontSize="8" fontFamily="monospace" className="opacity-80 font-bold">VLAN 30</text>

        {/* VLAN 40 boundary */}
        <rect
          x="360" y="110" width="125" height="70" rx="4"
          fill="none" stroke={activeSegment === 'vlan40' ? '#059669' : '#0f766e'}
          strokeWidth={activeSegment === 'vlan40' ? '1.5' : '1'}
          strokeDasharray="3,3" className={activeSegment === 'vlan40' ? 'opacity-90' : 'opacity-30'}
          onMouseEnter={() => setActiveSegment('vlan40')}
          onMouseLeave={() => setActiveSegment(null)}
        />
        <text x="365" y="122" fill="#059669" fontSize="8" fontFamily="monospace" className="opacity-80 font-bold">VLAN 40</text>

        {/* VLAN 50 boundary */}
        <rect
          x="240" y="200" width="245" height="100" rx="4"
          fill="none" stroke={activeSegment === 'vlan50' ? '#059669' : '#0f766e'}
          strokeWidth={activeSegment === 'vlan50' ? '1.5' : '1'}
          strokeDasharray="3,3" className={activeSegment === 'vlan50' ? 'opacity-90' : 'opacity-30'}
          onMouseEnter={() => setActiveSegment('vlan50')}
          onMouseLeave={() => setActiveSegment(null)}
        />
        <text x="245" y="212" fill="#059669" fontSize="8" fontFamily="monospace" className="opacity-80 font-bold">VLAN 50 (PROD)</text>

        {/* Connections / Paths */}
        {/* SDP PC (35, 160) to Router 1 (100, 100) - dashed secure tunnel */}
        <path
          d="M 50 160 Q 75 130 90 110"
          fill="none"
          stroke="#059669"
          strokeWidth={activeSegment === 'sdp' ? '2' : '1.2'}
          strokeDasharray="4,4"
          className="transition-all duration-300 opacity-60"
        />

        {/* Router 1 to Router 2 trunk */}
        <line x1="100" y1="112" x2="100" y2="208" stroke="#65a30d" strokeWidth="1" strokeDasharray="2,2" className="opacity-40" />

        {/* Router 1 (100, 100) to Switch (180, 160) */}
        <line x1="112" y1="106" x2="170" y2="148" stroke="#0f766e" strokeWidth="1" className="opacity-45" />

        {/* Router 2 (100, 220) to Switch (180, 160) */}
        <line x1="112" y1="214" x2="170" y2="172" stroke="#0f766e" strokeWidth="1" className="opacity-45" />

        {/* Access Switch to VLANs */}
        <path d="M 192 150 Q 215 90 238 60" fill="none" stroke="#0f766e" strokeWidth="1" className="opacity-35" />
        <path d="M 192 155 Q 275 140 358 60" fill="none" stroke="#0f766e" strokeWidth="1" className="opacity-35" />
        <line x1="192" y1="160" x2="238" y2="160" stroke="#0f766e" strokeWidth="1" className="opacity-35" />
        <path d="M 192 165 Q 275 180 358 160" fill="none" stroke="#0f766e" strokeWidth="1" className="opacity-35" />
        <path d="M 192 170 Q 215 220 238 250" fill="none" stroke="#0f766e" strokeWidth="1" className="opacity-35" />

        {/* SDP User PC (35, 160) */}
        <g className="cursor-pointer" onMouseEnter={() => setActiveSegment('sdp')} onMouseLeave={() => setActiveSegment(null)}>
          <rect x="25" y="145" width="20" height="14" rx="2" fill="white" stroke="#059669" strokeWidth="1" />
          <line x1="30" y1="159" x2="40" y2="159" stroke="#059669" strokeWidth="1" />
          <line x1="35" y1="159" x2="35" y2="164" stroke="#059669" strokeWidth="1" />
          <line x1="28" y1="164" x2="42" y2="164" stroke="#059669" strokeWidth="1" />
          <text x="21" y="174" fill="#1e293b" fontSize="7" fontFamily="monospace">RemotePC</text>
        </g>

        {/* Router 1 (100, 100) */}
        <g>
          <circle cx="100" cy="100" r="12" fill="white" stroke="#65a30d" strokeWidth="1" />
          <line x1="93" y1="100" x2="107" y2="100" stroke="#65a30d" strokeWidth="1" />
          <line x1="100" y1="93" x2="100" y2="107" stroke="#65a30d" strokeWidth="1" />
          <text x="83" y="119" fill="#1e293b" fontSize="7" fontFamily="monospace">SDP_Gate</text>
        </g>

        {/* Router 2 (100, 220) */}
        <g>
          <circle cx="100" cy="220" r="12" fill="white" stroke="#65a30d" strokeWidth="1" />
          <line x1="93" y1="220" x2="107" y2="220" stroke="#65a30d" strokeWidth="1" />
          <line x1="100" y1="213" x2="100" y2="227" stroke="#65a30d" strokeWidth="1" />
          <text x="85" y="239" fill="#1e293b" fontSize="7" fontFamily="monospace">Router_2</text>
        </g>

        {/* Access Switch (180, 160) */}
        <g>
          <rect x="170" y="150" width="22" height="20" rx="2" fill="white" stroke="#0f766e" strokeWidth="1" />
          <line x1="173" y1="155" x2="189" y2="155" stroke="#0f766e" strokeWidth="0.8" />
          <line x1="173" y1="160" x2="189" y2="160" stroke="#0f766e" strokeWidth="0.8" />
          <line x1="173" y1="165" x2="189" y2="165" stroke="#0f766e" strokeWidth="0.8" />
          <text x="165" y="179" fill="#1e293b" fontSize="7" fontFamily="monospace">Switch</text>
        </g>

        {/* VLAN 10 Server 1 (290, 55) */}
        <g className="cursor-pointer" onMouseEnter={() => setActiveSegment('vlan10')} onMouseLeave={() => setActiveSegment(null)}>
          <rect x="280" y="40" width="20" height="22" rx="2" fill="white" stroke="#65a30d" strokeWidth="1" />
          <line x1="284" y1="46" x2="296" y2="46" stroke="#65a30d" strokeWidth="0.8" />
          <circle cx="286" cy="52" r="1" fill="#059669" />
          <circle cx="294" cy="52" r="1" fill="#059669" />
          <line x1="284" y1="56" x2="296" y2="56" stroke="#65a30d" strokeWidth="0.8" />
          <text x="274" y="72" fill="#1e293b" fontSize="7" fontFamily="monospace">Server_1</text>
        </g>

        {/* VLAN 20 PC 2 (410, 55) */}
        <g className="cursor-pointer" onMouseEnter={() => setActiveSegment('vlan20')} onMouseLeave={() => setActiveSegment(null)}>
          <rect x="400" y="40" width="20" height="14" rx="2" fill="white" stroke="#059669" strokeWidth="1" />
          <line x1="405" y1="54" x2="415" y2="54" stroke="#059669" strokeWidth="1" />
          <line x1="410" y1="54" x2="410" y2="59" stroke="#059669" strokeWidth="1" />
          <line x1="403" y1="59" x2="417" y2="59" stroke="#059669" strokeWidth="1" />
          <text x="396" y="72" fill="#1e293b" fontSize="7" fontFamily="monospace">UserPC_2</text>
        </g>

        {/* VLAN 30 PC 3 (290, 145) */}
        <g className="cursor-pointer" onMouseEnter={() => setActiveSegment('vlan30')} onMouseLeave={() => setActiveSegment(null)}>
          <rect x="280" y="130" width="20" height="14" rx="2" fill="white" stroke="#059669" strokeWidth="1" />
          <line x1="285" y1="144" x2="295" y2="144" stroke="#059669" strokeWidth="1" />
          <line x1="290" y1="144" x2="290" y2="149" stroke="#059669" strokeWidth="1" />
          <line x1="283" y1="149" x2="297" y2="149" stroke="#059669" strokeWidth="1" />
          <text x="276" y="162" fill="#1e293b" fontSize="7" fontFamily="monospace">UserPC_3</text>
        </g>

        {/* VLAN 40 PC 4 (410, 145) */}
        <g className="cursor-pointer" onMouseEnter={() => setActiveSegment('vlan40')} onMouseLeave={() => setActiveSegment(null)}>
          <rect x="400" y="130" width="20" height="14" rx="2" fill="white" stroke="#059669" strokeWidth="1" />
          <line x1="405" y1="144" x2="415" y2="144" stroke="#059669" strokeWidth="1" />
          <line x1="410" y1="144" x2="410" y2="149" stroke="#059669" strokeWidth="1" />
          <line x1="403" y1="149" x2="417" y2="149" stroke="#059669" strokeWidth="1" />
          <text x="396" y="162" fill="#1e293b" fontSize="7" fontFamily="monospace">UserPC_4</text>
        </g>

        {/* VLAN 50 Server 2 (300, 240) */}
        <g className="cursor-pointer" onMouseEnter={() => setActiveSegment('vlan50')} onMouseLeave={() => setActiveSegment(null)}>
          <rect x="290" y="225" width="20" height="22" rx="2" fill="white" stroke="#0f766e" strokeWidth="1" />
          <line x1="294" y1="231" x2="306" y2="231" stroke="#0f766e" strokeWidth="0.8" />
          <circle cx="296" cy="237" r="1" fill="#059669" />
          <circle cx="304" cy="237" r="1" fill="#059669" />
          <line x1="294" y1="241" x2="306" y2="241" stroke="#0f766e" strokeWidth="0.8" />
          <text x="276" y="258" fill="#1e293b" fontSize="7" fontFamily="monospace">Server_2_DB</text>
        </g>

        {/* VLAN 50 Server 3 (410, 240) */}
        <g className="cursor-pointer" onMouseEnter={() => setActiveSegment('vlan50')} onMouseLeave={() => setActiveSegment(null)}>
          <rect x="400" y="225" width="20" height="22" rx="2" fill="white" stroke="#0f766e" strokeWidth="1" />
          <line x1="404" y1="231" x2="416" y2="231" stroke="#0f766e" strokeWidth="0.8" />
          <circle cx="406" cy="237" r="1" fill="#059669" />
          <circle cx="414" cy="237" r="1" fill="#059669" />
          <line x1="404" y1="241" x2="416" y2="241" stroke="#0f766e" strokeWidth="0.8" />
          <text x="388" y="258" fill="#1e293b" fontSize="7" fontFamily="monospace">Server_3_App</text>
        </g>
      </svg>

      {/* Interactive Topology Monitor readout */}
      <div className="mt-3 bg-slate-50 border border-slate-100 rounded p-3 font-mono text-[10px] text-slate-500 min-h-[58px]">
        {activeSegment ? (
          <div>
            <div className="text-emerald-700 font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 inline-block animate-ping" />
              {segments[activeSegment].name}
            </div>
            <p className="text-slate-500 leading-normal">{segments[activeSegment].desc}</p>
          </div>
        ) : (
          <div className="text-slate-450 italic flex items-center justify-center h-full pt-1">
            Hover over network segments to audit micro-segmentation boundaries.
          </div>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  const { ref, inView } = useScrollReveal()
  const p1 = PROJECTS[0]
  const p2 = PROJECTS[1]
  const p3 = PROJECTS[2]

  return (
    <section id="projects" className="relative bg-transparent">
      <div className="section-wrap" ref={ref}>
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mb-14"
        >
          <span className="eyebrow">Portfolio</span>
          <h2 className="heading-xl">Projects</h2>
          <p className="body-lg mt-3 max-w-lg">
            Selected work spanning web applications, security research, and network engineering.
          </p>
        </motion.div>

        {/* Asymmetrical Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Card 1: AI Mock Interview Platform */}
          <motion.div
            custom={0.1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="glass-card p-6 flex flex-col group border-slate-200/60 hover:border-emerald-600/30 transition-all duration-300 select-none cursor-default"
          >
            <div className="flex items-start justify-between mb-5">
              <div className="flex items-center gap-3">
                <div
                  className="p-2.5 rounded-lg border border-slate-100"
                  style={{ backgroundColor: `${p1.accent}05` }}
                >
                  <Cpu size={18} className="text-emerald-600" />
                </div>
                <span className="font-mono text-xs font-bold tracking-widest text-emerald-600/60">
                  {p1.number}
                </span>
              </div>
              <a
                href={p1.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded text-slate-450 hover:text-slate-800 hover:bg-slate-50 transition-all duration-200"
                aria-label="View on GitHub"
              >
                <Github size={15} />
              </a>
            </div>

            <h3 className="font-display font-bold text-lg text-slate-800 mb-2 leading-snug">
              {p1.title}
            </h3>
            <p className="font-mono text-[10px] text-slate-400 mb-4">{p1.duration}</p>
            <p className="font-body text-sm text-slate-600 leading-relaxed mb-6 flex-1">
              {p1.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {p1.tech.map(t => (
                <span key={t} className="tag-pill">{t}</span>
              ))}
            </div>

            {/* AI Process Readout (Custom Visual Element) */}
            <div className="mt-auto bg-slate-50 border border-slate-100/60 rounded p-3 font-mono text-[9px] text-slate-500 leading-normal">
              <div className="text-emerald-700 mb-1.5 border-b border-slate-200/50 pb-1 flex justify-between uppercase tracking-wider font-bold">
                <span>AI_ENGINE_STATUS</span>
                <span className="text-[8px] opacity-60">ACTIVE</span>
              </div>
              <div className="space-y-1">
                <div>[01] RESUME_SCANNER: <span className="text-slate-600 font-medium">DONE</span></div>
                <div>[02] GEMINI_API_EVAL: <span className="text-emerald-600 font-medium">200 OK</span></div>
                <div>[03] METRIC_AGGREGATE: <span className="text-slate-700">ACC: 88%, COM: 92%</span></div>
                <div>[04] FALLBACK_FAILSAFE: <span className="text-slate-400">STANDBY</span></div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: IT Asset Management System */}
          <motion.div
            custom={0.2}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="glass-card p-6 flex flex-col group border-slate-200/60 hover:border-emerald-600/30 transition-all duration-300 select-none cursor-default"
          >
            <div className="flex items-start justify-between mb-5">
              <div className="flex items-center gap-3">
                <div
                  className="p-2.5 rounded-lg border border-slate-100"
                  style={{ backgroundColor: `${p3.accent}05` }}
                >
                  <Terminal size={18} className="text-emerald-600" />
                </div>
                <span className="font-mono text-xs font-bold tracking-widest text-emerald-600/60">
                  {p3.number}
                </span>
              </div>
              <a
                href={p3.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded text-slate-450 hover:text-slate-800 hover:bg-slate-50 transition-all duration-200"
                aria-label="View on GitHub"
              >
                <Github size={15} />
              </a>
            </div>

            <h3 className="font-display font-bold text-lg text-slate-800 mb-2 leading-snug">
              {p3.title}
            </h3>
            <p className="font-mono text-[10px] text-slate-400 mb-4">{p3.duration}</p>
            <p className="font-body text-sm text-slate-600 leading-relaxed mb-6 flex-1">
              {p3.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {p3.tech.map(t => (
                <span key={t} className="tag-pill">{t}</span>
              ))}
            </div>

            {/* Audit Log Stream (Custom Visual Element) */}
            <div className="mt-auto bg-slate-50 border border-slate-100/60 rounded p-3 font-mono text-[9px] text-slate-500 leading-normal">
              <div className="text-emerald-700 mb-1.5 border-b border-slate-200/50 pb-1 flex justify-between uppercase tracking-wider font-bold">
                <span>AUDIT_LOG_STREAM</span>
                <span className="text-[8px] opacity-60">STREAMING</span>
              </div>
              <div className="space-y-1">
                <div>[INFO] JWT_AUTH: <span className="text-slate-600 font-medium">Admin session initial</span></div>
                <div>[WARN] RATE_LIMIT: <span className="text-emerald-650 font-medium">Shield triggers on port 443</span></div>
                <div>[INFO] SOCKET_SYNC: <span className="text-slate-700">Asset node #082 synced</span></div>
                <div>[INFO] AUDIT_LOG: <span className="text-slate-400">Committed hash: 0x9f2a</span></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Card 2: Zero-Trust Network Architecture (Large Visual Layout Centerpiece) */}
        <motion.div
          custom={0.3}
          variants={fadeUp}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="glass-card p-6 md:p-8 border-slate-200/60 hover:border-emerald-600/30 transition-all duration-300 select-none cursor-default"
        >
          <div className="grid lg:grid-cols-[1fr_minmax(320px,460px)] gap-8 items-stretch">
            {/* Project Specs */}
            <div className="flex flex-col">
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div
                    className="p-2.5 rounded-lg border border-slate-100"
                    style={{ backgroundColor: `${p2.accent}05` }}
                  >
                    <ShieldAlert size={18} className="text-emerald-600" />
                  </div>
                  <span className="font-mono text-xs font-bold tracking-widest text-emerald-600/60">
                    {p2.number}
                  </span>
                </div>
                <a
                  href={p2.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded text-slate-450 hover:text-slate-800 hover:bg-slate-50 transition-all duration-200"
                  aria-label="View on GitHub"
                >
                  <Github size={15} />
                </a>
              </div>

              <h3 className="font-display font-bold text-xl text-slate-800 mb-2 leading-snug">
                {p2.title}
              </h3>
              <p className="font-mono text-[10px] text-slate-400 mb-4">{p2.duration}</p>
              <p className="font-body text-sm text-slate-600 leading-relaxed mb-6">
                {p2.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {p2.tech.map(t => (
                  <span key={t} className="tag-pill">{t}</span>
                ))}
              </div>

              <a
                href={p2.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono font-medium text-emerald-700 hover:underline underline-offset-4 mt-auto"
              >
                <Github size={13} />
                <span>Verify Source Repository</span>
                <ExternalLink size={11} className="opacity-60" />
              </a>
            </div>

            {/* Network Topology Visual (Custom Visual Element) */}
            <div className="flex flex-col justify-center">
              <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mb-2 flex items-center justify-between">
                <span>Network Topology Diagram</span>
                <span className="text-emerald-600 font-semibold">IDENTITY-POLICIES</span>
              </div>
              <ZeroTrustDiagram />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
