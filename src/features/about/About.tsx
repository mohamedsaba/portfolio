import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, History, MapPin, Database, Server, Code } from 'lucide-react';
import SEO from '../../shared/components/ui/SEO';
import avatar from '../../assets/images/avatar.jpg';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  })
};

const About = () => {
  const timeline = [
    { year: 'Apr 2026', event: 'Airlock v1.0', detail: 'High-reliability Transactional Outbox implementation for NestJS microservices.' },
    { year: 'Apr 2026', event: 'Nestjs-AuthKit', detail: 'Standardizing enterprise-grade authentication and authorization patterns.' },
    { year: 'Apr 2026', event: 'RateLimiterSDK', detail: 'Distributed, multi-tenant rate limiting using atomic Redis Lua scripting.' },
    { year: 'Apr 2026', event: 'isIdempotent', detail: 'Distributed consistency middleware for preventing duplicate side-effects.' },
    { year: 'Apr 2026', event: 'Webhook Engine', detail: 'Resilient delivery system with jittered exponential backoffs.' },
    { year: 'Present', event: 'B.Sc. in Computer Science', detail: 'Helwan University, Egypt (In Progress).' },
  ];

  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-6 max-w-6xl mx-auto">
      <SEO 
        title="About Me" 
        description="Learn about Mohamed Saba's journey as a systems architect, from Helwan University to building production-grade distributed infrastructure."
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Left Column: Abstract Identity & Stats */}
        <motion.div 
          initial="hidden"
          animate="visible"
          className="lg:col-span-4 space-y-16"
        >
          {/* Actual Portrait */}
          <motion.div variants={fadeUp} custom={0} className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-paper-border bg-paper-code group shadow-2xl">
            <div className="absolute inset-0 bg-[#0C0F05]">
              <img 
                src={avatar} 
                alt="Mohamed Saba" 
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
              />
            </div>
          </motion.div>

          <motion.div variants={fadeUp} custom={1} className="space-y-8">
            <div className="flex items-center space-x-4 text-paper-muted">
              <div className="p-2 bg-paper-code rounded-lg">
                <MapPin size={18} className="text-paper-accent" />
              </div>
              <span className="text-sm font-bold tracking-tight">Cairo, Egypt / Remote</span>
            </div>
            <div className="flex items-center space-x-4 text-paper-muted">
              <div className="p-2 bg-paper-code rounded-lg">
                <GraduationCap size={18} className="text-paper-accent" />
              </div>
              <span className="text-sm font-bold tracking-tight">Helwan University, B.Sc. CS</span>
            </div>
          </motion.div>

          {/* Tech Stack Baseline */}
          <motion.div variants={fadeUp} custom={2} className="p-10 bg-[#0C0F05] rounded-[2.5rem] border border-paper-border shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Code size={60} />
            </div>
            <h4 className="text-paper-accent text-[10px] font-bold uppercase tracking-[0.3em] mb-8">Infrastructure Stack</h4>
            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              {['Node.js', 'NestJS', 'Redis', 'PostgreSQL', 'Docker', 'BullMQ', 'AWS', 'Kubernetes'].map(tech => (
                <div key={tech} className="text-paper-text/60 text-xs font-mono py-1.5 border-b border-paper-border/30 hover:text-paper-accent transition-colors">
                  {tech}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Story & Timeline */}
        <motion.div 
          initial="hidden"
          animate="visible"
          className="lg:col-span-8"
        >
          <motion.div variants={fadeUp} custom={0.1} className="mb-20">
            <span className="text-paper-accent text-xs font-bold uppercase tracking-[0.3em] mb-6 block">The Architect's Story</span>
            <h1 className="text-5xl lg:text-8xl font-serif mb-10 text-paper-text tracking-tightest leading-[0.9]">
              Designing for <br /> <span className="italic">Durability</span>.
            </h1>
            <div className="prose prose-lg text-paper-muted leading-relaxed space-y-8 max-w-2xl font-serif">
              <p className="text-xl">
                I am <span className="text-paper-text font-semibold">Mohamed Saba</span>, a backend engineer focused on building high-concurrency systems where reliability isn't a feature—it's a requirement.
              </p>
              <p>
                My journey began at <span className="text-paper-text font-medium">Helwan University</span>, where I focused on the intersection of data structures and distributed systems. I realized early on that while elegant code is important, production-grade infrastructure is what keeps a business scaling.
              </p>
              <p>
                I specialize in solving the "edge cases" that break systems at scale: handling double-spend through idempotency, implementing jittered exponential backoffs for reliable delivery, and optimizing Redis-backed rate limiters for low-latency traffic control.
              </p>
              <p>
                When I'm not shipping production code, I'm abstracting these patterns into open-source libraries. My goal is to provide engineering teams with the primitives they need to build resilient backend services without reinventing the wheel.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} custom={0.3}>
            <div className="flex items-center space-x-4 mb-12">
              <div className="p-2 bg-paper-accent text-paper-bg rounded-lg">
                <History size={20} />
              </div>
              <h3 className="text-2xl font-serif text-paper-text">Project Timeline</h3>
            </div>
            
            <div className="space-y-12 relative">
              <div className="absolute left-4 top-2 bottom-2 w-px bg-paper-border/40" />
              {timeline.map((item, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeUp}
                  custom={i + 3}
                  className="relative pl-14"
                >
                  <div className="absolute left-0 top-1.5 w-9 h-9 bg-paper-bg border border-paper-border rounded-xl flex items-center justify-center z-10 group hover:border-paper-accent transition-colors">
                    <div className="w-2 h-2 bg-paper-accent rounded-full group-hover:scale-125 transition-transform" />
                  </div>
                  <div className="text-[10px] font-mono text-paper-warm uppercase tracking-[0.2em] mb-2 font-bold">{item.year}</div>
                  <h4 className="text-xl font-semibold text-paper-text mb-2 tracking-tight">{item.event}</h4>
                  <p className="text-[15px] text-paper-muted leading-relaxed max-w-xl">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
