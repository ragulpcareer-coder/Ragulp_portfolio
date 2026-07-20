import { Bot, Shield, Database, Code2, Network, Mail, Linkedin, Github, Code, Award } from 'lucide-react'

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export const ABOUT_HIGHLIGHTS = [
  {
    icon: Code2,
    title: 'Full-Stack Engineering',
    desc: 'MERN applications with JWT authentication, RBAC, real-time features, and secure backend design.',
    color: '#059669',
  },
  {
    icon: Shield,
    title: 'Security Architecture',
    desc: 'JWT authentication, RBAC systems, rate limiting, and Zero-Trust Architecture.',
    color: '#0f766e',
  },
  {
    icon: Network,
    title: 'Network Design',
    desc: 'BGP, OSPF, EIGRP, MPLS, VLANs, ACLs, and routing policies for secure network setups.',
    color: '#65a30d',
  },
  {
    icon: Code,
    title: 'DSA & Problem Solving',
    desc: 'Regular practice of Data Structures & Algorithms on LeetCode to sharpen core CS fundamentals.',
    color: '#047857',
  },
]

export const SKILL_CATEGORIES = [
  { label: 'Programming', color: '#047857', skills: ['Java', 'Python', 'JavaScript', 'Data Structures & Algorithms'] },
  { label: 'Web Development', color: '#059669', skills: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'SQL', 'REST APIs', 'Bootstrap'] },
  { label: 'Security', color: '#0f766e', skills: ['JWT Authentication', 'RBAC', 'Rate Limiting', 'Zero-Trust Architecture'] },
  { label: 'Networking', color: '#65a30d', skills: ['BGP', 'OSPF', 'EIGRP', 'MPLS', 'Routing & Switching', 'CCNA/CCNP Coursework'] },
  { label: 'Tools', color: '#10b981', skills: ['Git', 'Linux', 'Cisco Packet Tracer'] },
  { label: 'Languages', color: '#059669', skills: ['English', 'Tamil'] },
]

export const EDUCATION = {
  degree: 'B.Tech in Information Technology',
  institution: 'PSNA College of Engineering and Technology, Dindigul',
  duration: '2023 - 2027',
  cgpa: 'CGPA: 7.75/10 (up to 5th semester)',
}

export const CERTIFICATIONS = [
  {
    icon: Code,
    title: 'Web Development Basics',
    issuer: 'IBM SkillsBuild',
    date: 'Jul 2026',
    desc: 'Completed a 1 hr 40 min course covering web development fundamentals, per the Adobe Learning Manager system of record.',
    color: '#059669',
  },
  {
    icon: Network,
    title: 'Networking Basics',
    issuer: 'Cisco Networking Academy',
    date: 'Jul 2026',
    desc: 'Achieved student-level credential covering network communication, IPv4/IPv6 addressing, routers, and network troubleshooting tools.',
    color: '#65a30d',
  },
]

export const PROJECTS = [
  {
    icon: Bot,
    number: '01',
    title: 'AI Mock Interview Platform',
    duration: 'Jan 2026 - Mar 2026',
    description:
      'Real-time AI-powered interview platform using the Gemini API for dynamic question generation based on resumes and job descriptions, with a live chat interface, structured evaluation metrics (accuracy, communication, impact), a performance analytics dashboard, and a fault-tolerant backend with fallback mechanisms for AI or database failures.',
    tech: ['MERN Stack', 'Gemini API', 'Real-Time Chat', 'Analytics', 'Fault-Tolerant Backend'],
    accent: '#059669',
    github: 'https://github.com/ragulpcareer-coder',
  },
  {
    icon: Shield,
    number: '02',
    title: 'Zero-Trust Network Architecture',
    duration: 'Feb 2025 - Apr 2025 | Solo Project',
    description:
      'Zero-trust network of 9 end devices and infrastructure nodes across 5 security segments (VLANs) plus a remote-access SDP segment, using micro-segmentation and identity-based access control. Secure remote access configured via a Software-Defined Perimeter and encrypted tunneling across 2 routers, 1 access switch, 4 user PCs, and 3 servers — reducing attack surface by replacing perimeter-based security with identity-driven policies.',
    tech: ['Cisco Packet Tracer', 'Micro-Segmentation', 'Identity-Based Access', 'SDP', 'Encrypted Tunneling'],
    accent: '#0f766e',
    github: 'https://github.com/ragulpcareer-coder',
  },
  {
    icon: Database,
    number: '03',
    title: 'IT Asset Management System',
    duration: 'May 2025 - Sep 2025 | Solo Project',
    description:
      'Secure MERN asset tracking system with JWT-based authentication and role-based access control, rate limiting, password validation, and audit logging, with real-time updates via Socket.IO and modular React components.',
    tech: ['MERN Stack', 'JWT', 'RBAC', 'Rate Limiting', 'Audit Logs', 'Socket.IO'],
    accent: '#65a30d',
    github: 'https://github.com/ragulpcareer-coder',
  },
]

export const EXPERIENCE_BULLETS = [
  'Configured OSPF and EIGRP routing protocols and implemented MPLS-based network setups',
  'Implemented network security configurations, including access control and continuous monitoring, to strengthen overall security posture',
  'Configured and validated secure network architectures using VLANs, ACLs, and routing policies to enhance segmentation and access control',
]

export const CONTACTS = [
  { icon: Mail, label: 'Email', value: 'ragulp.career@gmail.com', href: 'mailto:ragulp.career@gmail.com', color: '#059669' },
  { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/ragul-p04', href: 'https://linkedin.com/in/ragul-p04', color: '#0f766e' },
  { icon: Github, label: 'GitHub', value: 'github.com/ragulpcareer-coder', href: 'https://github.com/ragulpcareer-coder', color: '#65a30d' },
  { icon: Award, label: 'LeetCode', value: 'leetcode.com/u/Ragulp_career', href: 'https://leetcode.com/u/Ragulp_career', color: '#047857' },
]
