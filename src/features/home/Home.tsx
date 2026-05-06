import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Database, Shield, Layers, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Terminal, Zap, Globe } from 'lucide-react';
import LibraryCard from '../libraries/components/LibraryCard';
import SEO from '../../shared/components/ui/SEO';
import { getAllPosts } from '../../shared/utils/contentLoader';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

const Home: React.FC = () => {
  const libraries = getAllPosts().filter((post: any) => post.category === 'library');

  const capabilities = [
    {
      icon: Terminal,
      title: "Backend Architecture",
      description: "Designing event-driven distributed systems that handle bursty traffic without dropping a single packet.",
      link: "/blog/webhook-delivery-engine"
    },
    {
      icon: Shield,
      title: "Hardened Infrastructure",
      description: "Implementing defense-in-depth, idempotency keys, and granular RBAC to protect critical production data.",
      link: "/blog/idempotency-patterns"
    },
    {
      icon: Zap,
      title: "Systems Optimization",
      description: "Low-latency Redis caching, BullMQ tuning, and PostgreSQL index optimization for high-throughput workloads.",
      link: "/blog/rate-limiting-lua"
    },
    {
      icon: Globe,
      title: "Tooling & DX",
      description: "Building production-grade libraries and internal tooling to solve recurring engineering bottlenecks.",
      link: "/blog/bullmq-observability"
    },
  ];

  return (
    <div className="">
      <SEO 
        title="Systems Architect" 
        description="I architect the backend that lets your product scale without breaking. Specializing in NestJS, distributed systems, and open-source infrastructure."
      />
      {/* ─── Hero Section ─── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full bg-paper-accent/[0.03] blur-[100px]" />
          <div className="absolute bottom-20 left-[5%] w-[400px] h-[400px] rounded-full bg-paper-warm/[0.04] blur-[100px]" />
        </div>

        <div className="max-w-6xl mx-auto px-6 pt-32 pb-24 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="lg:col-span-7"
            >
              {/* Status Badge */}
              <motion.div variants={fadeUp} custom={0}>
                <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full border border-paper-accent/20 bg-paper-accent/5 text-paper-accent text-[10px] font-bold tracking-[0.2em] uppercase mb-10">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-paper-accent/60"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-paper-accent"></span>
                  </span>
                  <span>Available for Architecture Consulting</span>
                </div>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={fadeUp}
                custom={0.1}
                className="mb-8 text-paper-text"
                style={{ lineHeight: '0.9' }}
              >
                I architect systems <br className="hidden sm:block" />
                that <span className="text-paper-accent italic">Scale</span> with <span className="text-paper-accent">Authority</span>
                <span className="text-paper-warm">.</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={fadeUp}
                custom={0.2}
                className="text-base sm:text-lg md:text-xl text-paper-muted font-serif leading-relaxed mb-12 max-w-xl"
              >
                I am <span className="text-paper-text font-semibold">Mohamed Saba</span>, a backend architect specializing in the invisible infrastructure that makes modern engineering possible. Reliability isn't a feature—it's my baseline.
              </motion.p>

              {/* Actions */}
              <motion.div variants={fadeUp} custom={0.3} className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                <a
                  href="#projects"
                  className="w-full sm:w-auto group px-6 py-3 bg-paper-accent text-paper-bg rounded-xl text-sm font-bold tracking-tight hover:shadow-xl hover:shadow-paper-accent/20 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Review my Stack</span>
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a
                  href="/contact"
                  className="w-full sm:w-auto group px-6 py-3 bg-paper-code border border-paper-border text-paper-text rounded-xl text-sm font-bold tracking-tight hover:border-paper-accent/40 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Consulting</span>
                </a>
                <a
                  href="/resume.docx"
                  target="_blank"
                  className="w-full sm:w-auto group px-6 py-3 bg-paper-bg border border-paper-border text-paper-text rounded-xl text-sm font-bold tracking-tight hover:border-paper-warm transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <ArrowRight size={16} className="rotate-90" />
                  <span>Download CV</span>
                </a>
                <div className="flex items-center space-x-2 sm:ml-2">
                  {[
                    { href: 'https://github.com/mohamedsaba', icon: Github, label: 'GitHub' },
                    { href: 'https://linkedin.com/in/mohamedsabea', icon: Linkedin, label: 'LinkedIn' },
                    { href: 'mailto:mohamedsabawork@gmail.com', icon: Mail, label: 'Email' },
                  ].map(social => (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith('mailto') ? undefined : '_blank'}
                      rel={social.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                      className="p-2.5 rounded-xl border border-paper-border/40 text-paper-muted hover:text-paper-accent hover:border-paper-accent/30 hover:bg-paper-accent/5 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Hero Visual — Terminal / Architecture Diagram */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="lg:col-span-5 hidden md:block"
            >
              <div className="relative aspect-square">
                {/* Main Terminal Panel */}
                <div className="absolute inset-0 bg-[#0C0F05] rounded-[2.5rem] border border-paper-border overflow-hidden shadow-2xl">
                  {/* Terminal Header */}
                  <div className="h-10 bg-[#141808] border-b border-paper-border flex items-center px-6 justify-between">
                    <div className="flex space-x-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-paper-border" />
                      <div className="w-2.5 h-2.5 rounded-full bg-paper-border" />
                      <div className="w-2.5 h-2.5 rounded-full bg-paper-border" />
                    </div>
                    <span className="text-[10px] font-mono text-paper-muted uppercase tracking-widest">architecture-debug</span>
                  </div>
                  
                  {/* Terminal Content */}
                  <div className="p-8 font-mono text-xs space-y-4 text-paper-muted/80">
                    <div className="flex space-x-2">
                      <span className="text-paper-accent">$</span>
                      <motion.span
                        initial={{ width: 0 }}
                        animate={{ width: "auto" }}
                        transition={{ duration: 1.5, delay: 1 }}
                        className="overflow-hidden whitespace-nowrap inline-block"
                      >
                        npm test @mohamedsaba/airlock
                      </motion.span>
                    </div>
                    <div className="pl-4 space-y-1">
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} className="text-paper-accent/60">✓ Load balancer integration [stable]</motion.div>
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.7 }} className="text-paper-accent/60">✓ Distributed lock mechanism [pass]</motion.div>
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.9 }} className="text-paper-accent/60">✓ Cache invalidation strategy [pass]</motion.div>
                    </div>
                    <div className="pt-4 flex space-x-2">
                      <span className="text-paper-accent">$</span>
                      <motion.span
                        initial={{ width: 0 }}
                        animate={{ width: "auto" }}
                        transition={{ duration: 1.5, delay: 3.5 }}
                        className="overflow-hidden whitespace-nowrap inline-block"
                      >
                        systemctl status idempotent-service
                      </motion.span>
                    </div>
                    <div className="pl-4">
                      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 5 }} className="bg-paper-accent/10 text-paper-accent px-1.5 py-0.5 rounded">ACTIVE</motion.span>
                      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 5.2 }} className="ml-2">Uptime: 99.999%</motion.span>
                    </div>
                    
                    {/* Abstract Diagram Visual */}
                    <div className="pt-8 flex justify-center">
                      <svg width="200" height="120" viewBox="0 0 200 120" fill="none" className="text-paper-accent/30">
                        <motion.circle 
                          initial={{ pathLength: 0 }} 
                          animate={{ pathLength: 1 }} 
                          transition={{ duration: 2, delay: 6 }} 
                          cx="100" cy="60" r="15" stroke="currentColor" strokeWidth="1" 
                        />
                        <motion.circle 
                          initial={{ pathLength: 0 }} 
                          animate={{ pathLength: 1 }} 
                          transition={{ duration: 1, delay: 7 }} 
                          cx="40" cy="20" r="10" stroke="currentColor" strokeWidth="1" 
                        />
                        <motion.circle 
                          initial={{ pathLength: 0 }} 
                          animate={{ pathLength: 1 }} 
                          transition={{ duration: 1, delay: 7.2 }} 
                          cx="40" cy="100" r="10" stroke="currentColor" strokeWidth="1" 
                        />
                        <motion.path 
                          initial={{ pathLength: 0 }} 
                          animate={{ pathLength: 1 }} 
                          transition={{ duration: 1.5, delay: 8 }} 
                          d="M50 25 L85 50" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" 
                        />
                        <motion.path 
                          initial={{ pathLength: 0 }} 
                          animate={{ pathLength: 1 }} 
                          transition={{ duration: 1.5, delay: 8.2 }} 
                          d="M50 95 L85 70" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" 
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Floating Tech Badges */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 bg-paper-code border border-paper-accent/30 p-4 rounded-2xl shadow-xl backdrop-blur-sm"
                >
                  <Zap size={20} className="text-paper-accent" />
                </motion.div>
                
                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-6 -left-4 bg-paper-code border border-paper-warm/30 p-4 rounded-2xl shadow-xl backdrop-blur-sm"
                >
                  <Database size={20} className="text-paper-warm" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Capabilities Section ─── */}
      <section className="relative py-28 px-6 bg-paper-bg">
        <div className="max-w-6xl mx-auto">
          <div className="section-divider mb-20" />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                variants={fadeUp}
                custom={index * 0.1}
                className="group relative"
              >
                <Link to={cap.link} className="block group">
                  {/* Left accent hover line */}
                  <div className="absolute top-0 left-0 w-[2px] h-0 group-hover:h-full bg-paper-accent transition-all duration-500 ease-out" />
                  <div className="pl-6 py-4">
                    <div className="p-3 bg-paper-code rounded-xl border border-paper-border/50 w-fit mb-6 text-paper-accent group-hover:bg-paper-accent group-hover:text-paper-bg transition-all duration-400">
                      <cap.icon size={22} />
                    </div>
                    <h4 className="text-xl font-serif mb-3 text-paper-text group-hover:text-paper-accent transition-colors" style={{ letterSpacing: '-0.02em' }}>
                      {cap.title}
                    </h4>
                    <p className="text-[15px] text-paper-muted leading-relaxed">
                      {cap.description}
                    </p>
                    <div className="mt-6 flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-paper-accent opacity-0 group-hover:opacity-100 transition-all">
                      <span>Read More</span>
                      <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Philosophy Section ─── */}
      <section className="relative overflow-hidden bg-[#0C0F05]">
        <div className="py-32 px-6">
          {/* Subtle gradient accents */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-paper-accent/5 -skew-x-12 transform translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-paper-warm/5 skew-x-12 transform -translate-x-1/4" />

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              {/* Left — Philosophy Content */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={stagger}
              >
                <motion.span
                  variants={fadeUp}
                  custom={0}
                  className="text-xs font-bold uppercase tracking-[0.3em] text-paper-accent mb-6 block"
                >
                  Engineering Philosophy
                </motion.span>
                <motion.h2
                  variants={fadeUp}
                  custom={0.1}
                  className="text-5xl lg:text-6xl font-serif mb-12 text-paper-text"
                  style={{ letterSpacing: '-0.05em', lineHeight: '1.1' }}
                >
                  The <span className="italic text-paper-accent">Invisible</span> Excellence.
                </motion.h2>

                <div className="space-y-10">
                  {[
                    {
                      icon: Database,
                      title: "Systems that Think",
                      desc: "I design architectures that don't just process data — they anticipate failure, handle concurrency, and self-heal."
                    },
                    {
                      icon: Shield,
                      title: "Security as a Baseline",
                      desc: "Security isn't a layer added at the end. It's woven into every line of code I write."
                    },
                    {
                      icon: Layers,
                      title: "Composable Abstractions",
                      desc: "Every library I publish is built to compose cleanly with the tools your team already uses."
                    },
                  ].map((item, i) => (
                    <motion.div key={item.title} variants={fadeUp} custom={0.2 + i * 0.1} className="flex space-x-6">
                      <div className="mt-1 h-12 w-12 shrink-0 bg-paper-bg border border-paper-border rounded-xl flex items-center justify-center">
                        <item.icon size={22} className="text-paper-accent" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2 text-paper-text">{item.title}</h4>
                        <p className="text-paper-muted leading-relaxed text-[15px]">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right — Quote Card */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="bg-paper-code border border-paper-border p-12 lg:p-16 rounded-[3rem] relative shadow-2xl"
              >
                <div className="text-6xl font-serif text-paper-accent/30 mb-6 leading-none">"</div>
                <p className="text-2xl lg:text-3xl font-serif italic leading-relaxed text-paper-text/90">
                  Engineering isn't about building what's possible; it's about ensuring what's built remains inevitable.
                </p>
                <div className="mt-12 pt-10 border-t border-paper-border flex items-center space-x-5">
                  <div className="h-14 w-14 rounded-2xl bg-paper-accent flex items-center justify-center font-serif text-paper-bg text-2xl italic">
                    S
                  </div>
                  <div>
                    <div className="font-semibold text-paper-text text-base">Mohamed Saba</div>
                    <div className="text-[10px] text-paper-muted uppercase tracking-[0.2em] mt-1 font-bold">Architect's Creed</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Projects Section ─── */}
      <section id="projects" className="bg-paper-bg py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 space-y-8 md:space-y-0">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="max-w-xl"
            >
              <motion.span variants={fadeUp} custom={0} className="text-xs font-bold uppercase tracking-[0.3em] text-paper-accent mb-4 block">
                Open Source
              </motion.span>
              <motion.h2
                variants={fadeUp}
                custom={0.1}
                className="text-5xl lg:text-7xl font-serif mb-6 text-paper-text"
                style={{ letterSpacing: '-0.05em' }}
              >
                The Projects
              </motion.h2>
              <motion.p variants={fadeUp} custom={0.2} className="text-xl text-paper-muted leading-relaxed">
                A collection of specialized libraries designed to solve high-concurrency challenges in production environments.
              </motion.p>
            </motion.div>
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              href="https://github.com/mohamedsaba"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 text-paper-accent font-bold text-sm border-b-2 border-paper-accent/20 pb-2 hover:border-paper-accent transition-all cursor-pointer"
            >
              <span>Full GitHub Portfolio</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {libraries.map((lib: any, index: number) => (
              <motion.div
                key={lib.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <LibraryCard {...lib} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="py-32 px-6 bg-paper-surface">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-paper-warm mb-8 block">
              Let's Build Together
            </span>
            <h2 className="text-5xl lg:text-6xl font-serif mb-8 text-paper-text" style={{ letterSpacing: '-0.05em' }}>
              Have a system that needs <br />
              <span className="text-paper-accent italic">architectural clarity</span>?
            </h2>
            <p className="text-xl text-paper-muted leading-relaxed mb-12 max-w-lg mx-auto">
              I help teams ship resilient distributed systems, optimize API throughput, and harden backend infrastructure. Let's build something that handles the load.
            </p>
            <div className="flex flex-wrap gap-5 justify-center">
              <a
                href="mailto:mohamedsabawork@gmail.com"
                className="group px-8 py-4 bg-paper-accent text-paper-bg rounded-xl font-bold tracking-tight hover:shadow-2xl hover:shadow-paper-accent/30 transition-all duration-300 flex items-center space-x-3"
              >
                <Mail size={18} />
                <span>Get in Touch</span>
              </a>
              <a
                href="https://github.com/mohamedsaba"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-paper-code border border-paper-border text-paper-text rounded-xl font-bold tracking-tight hover:border-paper-accent/40 transition-all duration-300 flex items-center space-x-3"
              >
                <Github size={18} />
                <span>View GitHub</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
