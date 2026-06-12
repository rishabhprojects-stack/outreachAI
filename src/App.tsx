import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Globe, Cpu, Users, BarChart2, Laptop,
  Terminal, ShieldCheck, ArrowRight, Briefcase, 
  TrendingUp, Check, Mail, Phone, Clock, MessageSquare, Code, Activity, Zap, Server, AlertCircle, Shield, Play, Sliders, Layers
} from 'lucide-react';
import B2CPlatform from './components/B2CPlatform';
import EnterprisePlatform from './components/EnterprisePlatform';
import InteractiveCRM from './components/InteractiveCRM';
import { HeroWorkforceMockup, BeforeAfterMockup, EnterpriseAgencyMockup, CommandCenterMockup } from './components/SaaSMockups';

export default function App() {
  // Navigation & View mode: 'home' | 'solutions' | 'enterprise' | 'crm'
  const [viewMode, setViewMode] = useState<'home' | 'solutions' | 'enterprise' | 'crm'>('home');

  // Ref hooks for smooth anchors in Home page
  const orbitSectionRef = useRef<HTMLDivElement>(null);
  const problemSectionRef = useRef<HTMLDivElement>(null);
  const solutionsOverviewRef = useRef<HTMLDivElement>(null);

  // Active highlighted orbiting agent
  const [hoveredAgent, setHoveredAgent] = useState<string | null>(null);

  // Video Section simulated states
  const [activeVideoTab, setActiveVideoTab] = useState<'build' | 'manage' | 'grow'>('build');
  const [isPlayingVideo1, setIsPlayingVideo1] = useState(false);
  const [isPlayingVideo2, setIsPlayingVideo2] = useState(false);

  // Particle background simulation parameters
  const [particles, setParticles] = useState<Array<{ x: number; y: number; size: number; delay: number }>>([]);

  // Mock ticking analytics metrics for business conversion appeal
  const [webCount, setWebCount] = useState(1834);
  const [hoursCount, setHoursCount] = useState(84180);
  const [tasksCount, setTasksCount] = useState(294310);
  const [agentsCount, setAgentsCount] = useState(538);
  const [employeeRatio, setEmployeeRatio] = useState(5);

  useEffect(() => {
    // Generate static visual particles for background visual polish
    const list = Array.from({ length: 18 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 10
    }));
    setParticles(list);

    // Ticking simulator to make the numbers look real-time and alive
    const interval = setInterval(() => {
      setWebCount(prev => prev + Math.floor(Math.random() * 2));
      setHoursCount(prev => prev + Math.floor(Math.random() * 4) + 1);
      setTasksCount(prev => prev + Math.floor(Math.random() * 8) + 2);
      if (Math.random() > 0.85) setAgentsCount(prev => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleNavAnchor = (anchor: 'agents' | 'problem' | 'contact') => {
    if (viewMode !== 'home') {
      setViewMode('home');
      setTimeout(() => {
        executeScroll(anchor);
      }, 150);
    } else {
      executeScroll(anchor);
    }
  };

  const executeScroll = (anchor: 'agents' | 'problem' | 'contact') => {
    if (anchor === 'agents' && orbitSectionRef.current) {
      orbitSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else if (anchor === 'problem' && problemSectionRef.current) {
      problemSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else if (anchor === 'contact') {
      // Direct user index to relevant page forms
      const element = document.getElementById('b2c-demo-field-name') || document.getElementById('strategy-pathway-arena');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  // Industries supporting OutReachAI
  const industries = [
    { label: 'Restaurants', icon: '🍽️', benefit: 'Automanage reservation modules, seasonal menu revisions, and continuous Google Local Profile optimization.' },
    { label: 'Real Estate', icon: '🏡', benefit: 'Dynamic MLS pipeline synchronization, lead generation forms, and automated callback scheduling.' },
    { label: 'Healthcare', icon: '🧑‍⚕️', benefit: 'HIPAA-compliant contact inquiries, immediate patient intake routing, and 24/7 client support triage.' },
    { label: 'Retail & Brands', icon: '🛍️', benefit: 'E-commerce staging generation, promotion syndication, and cart conversion path automated audits.' },
    { label: 'Consultants', icon: '💼', benefit: 'Showcase white-glove portfolio layouts, sync booking calendars, and distribute custom knowledge briefs.' },
    { label: 'Local Services', icon: '🔌', benefit: 'Instantly lock emergency appointment buttons, target regional maps, and gather trusted customer reviews.' },
    { label: 'Digital Agencies', icon: '🚀', benefit: 'Scale active client volume 10x without recruiting, deploy infinite visual sandboxes, and retain white-label credit.' },
    { label: 'Marketing Teams', icon: '📈', benefit: 'Launch multichannel landing pages, compile dynamic asset variations, and run autonomous outbound sweeps.' }
  ];

  // Orbiting Agents configuration targeting business outcomes
  const orbitingAgents = [
    { 
      id: 'web', 
      name: 'Website Agent', 
      role: 'AI Brand Builder', 
      task: 'Deploying high-speed, mobile-responsive layout adjustments. Your website was updated automatically to maximize visual appeal.', 
      color: 'text-brand-cyan' 
    },
    { 
      id: 'sales', 
      name: 'Growth Agent', 
      role: 'Strategic Opportunity Finder', 
      task: 'Scanning local businesses and active markets. 15 new high-value customer opportunities were discovered in your neighborhood.', 
      color: 'text-brand-indigo' 
    },
    { 
      id: 'marketing', 
      name: 'Outreach Agent', 
      role: 'Outbound Personalizer', 
      task: 'Synthesizing customized email introductions. 150 automated outreach proposals sent with personalized responsive audits.', 
      color: 'text-pink-400' 
    },
    { 
      id: 'crm', 
      name: 'Client Success Agent', 
      role: '24/7 SLA Support Sentry', 
      task: 'Monitoring customer requests. 12 incoming support queries resolved and styling alterations auto-published in 4.8 seconds.', 
      color: 'text-emerald-400' 
    },
    { 
      id: 'analytics', 
      name: 'Marketing Agent', 
      role: 'Omnichannel Ad Optimizer', 
      task: 'Optimizing continuous advertising loops. Overall marketing click-through and web acquisition performance improved by 23%.', 
      color: 'text-yellow-400' 
    },
    { 
      id: 'support', 
      name: 'Automation Agent', 
      role: 'System Reconciler', 
      task: 'Maintaining background uptime validations. Cloud servers, secure SSLs, and multi-region database caches 100% active.', 
      color: 'text-indigo-400' 
    }
  ];

  return (
    <div className="min-h-screen bg-brand-black text-slate-100 font-sans selection:bg-brand-cyan/20 selection:text-brand-cyan overflow-x-hidden relative">
      
      {/* Dynamic Ambient Cinematic background flows */}
      <div className="absolute top-0 left-0 right-0 h-[900px] pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-300px] left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-tr from-brand-indigo/15 to-brand-cyan/10 rounded-full blur-[140px] opacity-80" />
        <div className="absolute top-[300px] left-1/4 w-80 h-80 bg-brand-indigo/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-[450px] right-1/4 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[140px] pointer-events-none" />
        
        {/* Particle stars */}
        {particles.map((p, idx) => (
          <div 
            key={idx}
            className="absolute rounded-full bg-white/40 pointer-events-none animate-pulse"
            style={{
              top: `${p.y}%`,
              left: `${p.x}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: `${p.delay}s`,
              animationDuration: '3s'
            }}
          />
        ))}
      </div>

      {/* STICKY LUXURY NAVIGATION HEADER */}
      <header className="sticky top-0 z-40 bg-brand-black/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          
          {/* Logo brand area */}
          <button 
            type="button"
            id="btn-nav-home-logo-direct"
            onClick={() => setViewMode('home')} 
            className="flex items-center gap-2.5 group cursor-pointer text-left focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-indigo to-brand-cyan p-0.5 shadow-lg shadow-brand-indigo/10 transition-transform group-hover:scale-105">
              <div className="w-full h-full bg-brand-black rounded-[10px] flex items-center justify-center">
                <Cpu size={18} className="text-brand-cyan group-hover:rotate-12 transition-transform" />
              </div>
            </div>
            <div>
              <span className="font-display font-extrabold text-lg tracking-tight text-white block">OutReachAI</span>
              <span className="text-[9px] uppercase tracking-wider font-bold text-slate-400 font-mono block -mt-1">The AI Digital Workforce</span>
            </div>
          </button>

          {/* Navigation links targeting user intents */}
          <nav className="hidden lg:flex items-center gap-1.5 p-1 rounded-full bg-white/[0.03] border border-white/5">
            <button
              type="button"
              id="nav-btn-home"
              onClick={() => setViewMode('home')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide cursor-pointer transition-all ${
                viewMode === 'home' ? 'bg-white/10 text-white shadow-inner' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Home
            </button>
            <button
              type="button"
              id="nav-btn-solutions"
              onClick={() => setViewMode('solutions')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide cursor-pointer transition-all ${
                viewMode === 'solutions' ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              For Businesses
            </button>
            <button
              type="button"
              id="nav-btn-enterprise"
              onClick={() => setViewMode('enterprise')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide cursor-pointer transition-all ${
                viewMode === 'enterprise' ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              For Agencies
            </button>
            <button
              type="button"
              id="nav-btn-problem"
              onClick={() => handleNavAnchor('problem')}
              className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide text-slate-400 hover:text-slate-200 cursor-pointer"
            >
              The Solution
            </button>
            <button
              type="button"
              id="nav-btn-agents"
              onClick={() => handleNavAnchor('agents')}
              className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide text-slate-400 hover:text-slate-200 cursor-pointer"
            >
              AI Agents Orbit
            </button>
            <button
              type="button"
              id="nav-btn-contact"
              onClick={() => handleNavAnchor('contact')}
              className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide text-slate-400 hover:text-slate-200 cursor-pointer"
            >
              Free Assessment
            </button>
          </nav>

          {/* Command Center Quick Access */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              id="nav-btn-console-direct"
              onClick={() => setViewMode('crm')}
              className={`hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-[11px] font-bold border transition-all cursor-pointer ${
                viewMode === 'crm' 
                  ? 'bg-brand-cyan/10 border-brand-cyan text-brand-cyan' 
                  : 'bg-white/[0.02] border-white/5 text-slate-400 hover:text-white'
              }`}
            >
              <Activity size={12} className="animate-pulse text-brand-cyan" />
              LIVE COMMAND CENTER
            </button>
            
            <button
              type="button"
              id="header-btn-action-trigger"
              onClick={() => setViewMode('solutions')}
              className="px-4 py-1.5 bg-gradient-to-r from-brand-indigo to-brand-cyan hover:brightness-110 active:scale-95 text-brand-black text-xs font-extrabold rounded-lg tracking-wide transition-all cursor-pointer"
            >
              Start Growing
            </button>
          </div>

        </div>
      </header>

      {/* CORE FRAME CONTAINER */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-12 relative z-10 space-y-28">
        
        <AnimatePresence mode="wait">
          {viewMode === 'home' && (
            <motion.div
              key="gateway-home-screen"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-28"
            >
              
              {/* CINEMATIC HERO SECTION */}
              <div id="cinematic-hero-arena" className="space-y-12 pt-6">
                
                {/* Global Positioning Tagline */}
                <div className="text-center">
                  <motion.div 
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs text-brand-cyan tracking-wider font-bold"
                  >
                    <Sparkles size={12} className="text-brand-cyan shrink-0 animate-pulse" />
                    <span className="uppercase tracking-widest text-[9px] md:text-xs">
                      The AI Digital Workforce For Modern Businesses
                    </span>
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center text-left">
                  
                  {/* Left Column Text & Checklist */}
                  <div className="lg:col-span-6 space-y-6">
                    <h1 className="text-4xl md:text-5.5xl font-display font-medium text-white tracking-tight leading-[1.1] font-bold">
                      Your Entire Digital Team.<br />
                      <span className="bg-gradient-to-r from-brand-indigo to-brand-cyan bg-clip-text text-transparent">
                        Powered By AI.
                      </span>
                    </h1>
                    <p className="text-[14px] md:text-base text-slate-400 leading-relaxed font-light">
                      Our autonomous specialists run your website, capture leads, optimize SEO, and automate operations 24/7. We don't sell tools — we provide an AI workforce that manages your entire digital operation.
                    </p>

                    {/* Bullet Checklist */}
                    <div className="space-y-3 pt-2">
                      {[
                        { title: 'Web Design Agent', desc: 'Deploys & edits modern mobile-responsive landing pages' },
                        { title: 'Outreach Agent', desc: 'Scouts local businesses & dispatch personalized organic audits' },
                        { title: 'Ad Campaign Agent', desc: 'Optimizes Google & social bidding ratios to maximize ROAS' },
                        { title: 'Operations Agent', desc: 'Maintains hourly backups, server hosting, and domain security' }
                      ].map((item, idx) => (
                        <div key={idx} className="flex gap-2.5 items-start">
                          <div className="w-5 h-5 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan flex items-center justify-center text-[10px] shrink-0 mt-0.5 font-bold">✓</div>
                          <div>
                            <h4 className="text-xs font-bold text-slate-200 uppercase">{item.title}</h4>
                            <p className="text-[11px] text-slate-400 font-light leading-normal">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <button
                        type="button"
                        id="btn-hero-start-growing"
                        onClick={() => setViewMode('solutions')}
                        className="px-8 py-3.5 bg-gradient-to-r from-brand-indigo to-brand-cyan text-brand-black font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 group hover:brightness-110 active:scale-98"
                      >
                        Start Growing
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                      <button
                        type="button"
                        id="btn-hero-explore-platform"
                        onClick={() => setViewMode('enterprise')}
                        className="px-8 py-3.5 bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2"
                      >
                        Explore AI Platform
                      </button>
                    </div>
                  </div>

                  {/* Right Column Interactive Mockup */}
                  <div className="lg:col-span-6">
                    <HeroWorkforceMockup />
                  </div>

                </div>

                {/* REAL-TIME ANIMATED METRIC CARDS BANNER */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto py-6">
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md flex flex-col justify-between group hover:border-brand-indigo/35 transition-all text-center">
                    <span className="text-[10px] text-slate-500 font-mono font-bold tracking-widest uppercase block mb-1">Websites Managed</span>
                    <span className="text-2xl md:text-4xl font-display font-extrabold text-brand-cyan tracking-tight block">
                      {webCount.toLocaleString()}+
                    </span>
                    <span className="text-[9px] text-emerald-400 font-mono font-medium block mt-1">● Active Global Hosting</span>
                  </div>
                  
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md flex flex-col justify-between group hover:border-brand-indigo/35 transition-all text-center">
                    <span className="text-[10px] text-slate-500 font-mono font-bold tracking-widest uppercase block mb-1">Hours Automated</span>
                    <span className="text-2xl md:text-4xl font-display font-extrabold text-brand-indigo tracking-tight block">
                      {hoursCount.toLocaleString()}+
                    </span>
                    <span className="text-[9px] text-brand-cyan font-mono font-medium block mt-1">✓ Over Traditional Overhead</span>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md flex flex-col justify-between group hover:border-brand-indigo/35 transition-all text-center">
                    <span className="text-[10px] text-slate-500 font-mono font-bold tracking-widest uppercase block mb-1">Tasks Completed</span>
                    <span className="text-2xl md:text-4xl font-display font-extrabold text-pink-400 tracking-tight block">
                      {tasksCount.toLocaleString()}+
                    </span>
                    <span className="text-[9px] text-emerald-400 font-mono font-medium block mt-1">✦ Real-Time Resolution</span>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md flex flex-col justify-between group hover:border-brand-indigo/35 transition-all text-center">
                    <span className="text-[10px] text-slate-500 font-mono font-bold tracking-widest uppercase block mb-1">AI Agents Running</span>
                    <span className="text-2xl md:text-4xl font-display font-extrabold text-emerald-400 tracking-tight block">
                      {agentsCount}+
                    </span>
                    <span className="text-[9px] text-brand-indigo font-mono font-medium block mt-1">⚙ 100% Autonomous SLA</span>
                  </div>
                </div>

                {/* THE CORE BUSINESS BELIEF BANNER */}
                <div className="max-w-5xl mx-auto bg-gradient-to-tr from-brand-indigo/10 via-brand-cyan/5 to-slate-950 p-6 md:p-8 rounded-2xl border border-white/5 text-center space-y-3">
                  <h4 className="text-xs font-mono font-extrabold text-brand-cyan uppercase tracking-widest">Our Unshakeable Core Philosophy</h4>
                  <p className="text-lg md:text-2xl text-slate-200 font-medium max-w-3xl mx-auto leading-relaxed">
                    "We don't sell websites. We provide AI agents that build, manage, maintain, and grow your entire digital presence."
                  </p>
                </div>

              </div>

              {/* PROBLEM → SOLUTION COMPARATIVE ARENA */}
              <div 
                ref={problemSectionRef}
                id="problem-solution-section" 
                className="space-y-12 py-6 border-t border-b border-white/5"
              >
                <div className="text-center max-w-2xl mx-auto space-y-2">
                  <span className="text-xs uppercase font-mono font-semibold tracking-widest text-rose-500 block">The Operational Bottleneck</span>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-white">The Old Way Is Broken</h2>
                  <p className="text-xs text-slate-400 max-w-md mx-auto">
                    Traditional digital expansion drains your mental bandwidth, your budget, and your growth potential.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
                  
                  {/* The Old Painful Way */}
                  <div className="lg:col-span-5 p-8 bg-white/[0.01] border border-rose-500/20 rounded-2xl flex flex-col justify-between space-y-6">
                    <div>
                      <h3 className="text-lg font-bold text-slate-200 flex items-center gap-2 mb-4">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500 block animate-pulse" />
                        Traditional Business Friction
                      </h3>
                      <div className="space-y-3">
                        {[
                          { title: 'Managing Developers', desc: 'Missed deadlines, language barriers, and endless revision loops.' },
                          { title: 'Hiring Marketing Teams', desc: 'High recruitment friction, expensive retainers, and unpredictable returns.' },
                          { title: 'Handling Website Problems', desc: 'Sudden server crashes, security certificate warnings, and domain bugs.' },
                          { title: 'Running Ads Manually', desc: 'Burning ad budget blindly on complex dashboards without data sync.' },
                          { title: 'Following Up With Customers', desc: 'Delayed replies, lost contact emails, and leakages in lead funnels.' },
                          { title: 'Expensive Agency Retainers', desc: 'Contract locked agencies billing thousands for minutes of manual changes.' }
                        ].map((pain, pIdx) => (
                          <div key={pIdx} className="flex gap-2.5 items-start p-2 rounded bg-white/[0.01]">
                            <span className="text-rose-500 shrink-0 font-bold">✕</span>
                            <div>
                              <h4 className="text-xs font-bold text-slate-300">{pain.title}</h4>
                              <p className="text-[10px] text-slate-500">{pain.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="text-center text-[10px] text-rose-450 font-mono text-rose-400 bg-rose-950/10 py-1.5 rounded border border-rose-500/10">
                      Total Loss: Hidden cost of overhead and constant mental fatigue.
                    </div>
                  </div>

                  {/* Transition Transformation block */}
                  <div className="lg:col-span-2 flex flex-col justify-center items-center gap-2 py-4">
                    <span className="text-xs font-mono text-slate-500 font-bold uppercase">Transformation</span>
                    <div className="h-24 w-0.5 bg-gradient-to-b from-rose-500/50 via-brand-indigo to-brand-cyan/50 hidden lg:block" />
                    <span className="text-brand-cyan text-xl animate-bounce">⚡</span>
                    <p className="text-[10px] font-mono text-slate-400 text-center uppercase tracking-wider leading-relaxed px-2">
                      Replace Complexity With Intelligence
                    </p>
                  </div>

                  {/* The Intelligent New Way */}
                  <div className="lg:col-span-5 p-8 bg-gradient-to-tr from-brand-indigo/15 to-brand-cyan/10 border border-brand-cyan/20 rounded-2xl flex flex-col justify-between space-y-6">
                    <div>
                      <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
                        <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan block animate-pulse" />
                        Our Unified Autonomous Solutions
                      </h3>
                      
                      <div className="space-y-4">
                        <div className="p-3 bg-brand-black/40 border border-brand-cyan/20 rounded-xl space-y-1">
                          <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                            <Laptop size={12} className="text-brand-cyan" />
                            AI Website Agent
                          </h4>
                          <p className="text-[11.px] text-slate-350 text-slate-400 leading-normal">
                            Autonomously generates, edits, hosts, and monitors your layout parameters on demand. Never worry about web servers.
                          </p>
                        </div>

                        <div className="p-3 bg-brand-black/40 border border-brand-cyan/20 rounded-xl space-y-1">
                          <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                            <TrendingUp size={12} className="text-pink-400" />
                            AI Marketing Agent
                          </h4>
                          <p className="text-[11px] text-slate-400 leading-normal">
                            Launches campaign optimization cycles, designs multi-asset ad variants, and maximizes ROAS automatically.
                          </p>
                        </div>

                        <div className="p-3 bg-brand-black/40 border border-brand-cyan/20 rounded-xl space-y-1">
                          <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                            <Users size={12} className="text-brand-indigo" />
                            AI Sales Agent
                          </h4>
                          <p className="text-[11px] text-slate-400 leading-normal">
                            Discovers lead indices globally, reviews local technical flaws, and sends personalized outbound growth proposals.
                          </p>
                        </div>

                        <div className="p-3 bg-brand-black/40 border border-brand-cyan/20 rounded-xl space-y-1">
                          <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                            <Server size={12} className="text-emerald-400" />
                            AI CRM Agent
                          </h4>
                          <p className="text-[11px] text-slate-400 leading-normal">
                            Tracks target follow-ups, intercepts client change tickets, and updates staging databases instantly without human delay.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="text-center text-[10px] text-brand-cyan font-mono uppercase font-bold bg-brand-cyan/10 py-1.5 rounded border border-brand-cyan/10">
                      Result: Flawless digital execution with zero staffing friction.
                    </div>
                  </div>

                </div>
              </div>

              {/* 3. AI AGENT ORBIT ECOSYSTEM SCREEN */}
              <div 
                ref={orbitSectionRef} 
                id="interactive-orbit-ecosystem-arena" 
                className="p-8 md:p-12 bg-white/[0.01] border border-white/5 rounded-3xl relative overflow-hidden backdrop-blur-md text-left"
              >
                <div className="absolute top-0 right-0 w-84 h-84 bg-brand-cyan/5 rounded-full blur-[110px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-84 h-84 bg-brand-indigo/5 rounded-full blur-[110px] pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Column describing coordination */}
                  <div className="lg:col-span-5 space-y-6">
                    <div>
                      <span className="text-xs uppercase font-mono tracking-widest text-brand-cyan font-bold block">Autonomous Coordination</span>
                      <h3 className="text-2xl md:text-3xl font-display font-medium text-white font-bold leading-tight">The Automated Growth Orbit</h3>
                    </div>
                    
                    <p className="text-xs md:text-sm text-slate-404 text-slate-400 leading-relaxed font-light">
                      Instead of disconnected tools, our unified agent workforce orbits continuously around your company assets. They detect leaks, schedule outreach, deploy secure staging DBs, and evaluate active optimization profiles.
                    </p>

                    {/* Interactive Agent parameters based on user hovered item */}
                    <div className="p-5 rounded-xl bg-slate-900/70 border border-white/10 min-h-[130px] flex flex-col justify-between">
                      <AnimatePresence mode="wait">
                        {hoveredAgent ? (
                          <motion.div 
                            key={hoveredAgent}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="space-y-1.5"
                          >
                            <div className="flex justify-between items-center text-left">
                              <span className="text-[10px] uppercase font-mono font-bold text-brand-cyan">Active Orbiting Node</span>
                              <span className="text-[9px] text-emerald-400 font-mono font-bold animate-pulse">● WORKFORCE ACTIVE</span>
                            </div>
                            <h4 className="text-xs font-bold text-white uppercase font-display select-none flex items-center gap-1 font-semibold">
                              <Zap size={10} className="text-brand-cyan animate-pulse" />
                              {orbitingAgents.find(a => a.id === hoveredAgent)?.name} ( {orbitingAgents.find(a => a.id === hoveredAgent)?.role} )
                            </h4>
                            <p className="text-[11px] text-slate-350 text-slate-300 leading-normal font-light">
                              {orbitingAgents.find(a => a.id === hoveredAgent)?.task}
                            </p>
                          </motion.div>
                        ) : (
                          <div className="text-center py-4 text-slate-400 text-xs my-auto font-light">
                            Hover over or click any orbiting agent node on the right to inspect active business tasks, live outcomes, and automated solutions.
                          </div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="flex gap-2">
                      <span className="text-[10px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2.5 py-1 rounded font-mono font-bold">
                        ACTIVE SYNC: 100%
                      </span>
                      <span className="text-[10px] bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan px-2.5 py-1 rounded font-mono font-bold">
                        SWEEPS: CONSTANT
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Beautiful Interactive Circular Node Arena */}
                  <div className="lg:col-span-7 flex items-center justify-center min-h-[380px] relative mt-6 lg:mt-0">
                    
                    {/* Concentric Circle Orbits */}
                    <div className="absolute w-[320px] h-[320px] rounded-full border border-white/[0.04] pointer-events-none" />
                    <div className="absolute w-[220px] h-[220px] rounded-full border border-white/[0.03] pointer-events-none" />
                    
                    {/* CENTER MASS: YOUR BUSINESS */}
                    <div className="w-28 h-28 rounded-full bg-slate-900 border border-brand-cyan/40 p-0.5 shadow-2xl shadow-brand-cyan/10 flex items-center justify-center text-center z-10 animate-pulse">
                      <div className="w-full h-full bg-brand-black rounded-full flex flex-col justify-center items-center p-2">
                        <span className="text-[9px] uppercase font-mono tracking-widest text-[#94A3B8] font-bold">Center</span>
                        <h4 className="text-[11px] font-extrabold text-white tracking-tight uppercase leading-snug">YOUR BUSINESS</h4>
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan mt-1" />
                      </div>
                    </div>

                    {/* Orbit Nodes in Circular positions */}
                    {orbitingAgents.map((agent, idx) => {
                      const angle = (idx * 360) / orbitingAgents.length;
                      const radius = 135; 
                      const radian = (angle * Math.PI) / 180;
                      const x = Math.round(radius * Math.cos(radian));
                      const y = Math.round(radius * Math.sin(radian));

                      return (
                        <motion.button
                          key={agent.id}
                          type="button"
                          onMouseEnter={() => setHoveredAgent(agent.id)}
                          onMouseLeave={() => setHoveredAgent(null)}
                          onClick={() => setHoveredAgent(agent.id)}
                          style={{
                            transform: `translate(${x}px, ${y}px)`,
                          }}
                          animate={{
                            y: [y - 3, y + 3, y - 3]
                          }}
                          transition={{
                            repeat: Infinity,
                            duration: 3 + idx,
                            ease: 'easeInOut'
                          }}
                          className={`absolute w-12 h-12 rounded-xl bg-slate-900 border ${
                            hoveredAgent === agent.id 
                              ? 'border-brand-cyan shadow-lg shadow-brand-cyan/25 scale-110' 
                              : 'border-white/10'
                          } flex items-center justify-center cursor-pointer transition-all z-25 focus:outline-none`}
                        >
                          <span className={`text-xs font-mono font-bold ${agent.color}`}>
                            {agent.name.split(' ')[0][0]}
                          </span>

                          <div className="absolute bottom-[-16px] whitespace-nowrap text-[8px] font-mono tracking-wider text-slate-400 bg-slate-950 px-1.5 py-0.2 rounded">
                            {agent.name.split(' ')[0]}
                          </div>
                        </motion.button>
                      );
                    })}

                  </div>

                </div>
              </div>

              {/* 4. AI COMMAND CENTER SEGMENT (IMAGE 4) */}
              <div id="command-center-visual-arena" className="py-6">
                <CommandCenterMockup />
              </div>

              {/* DUAL PATHWAYS STRATEGY GATEWAY */}
              <div id="strategy-pathway-arena" className="space-y-10">
                <div className="text-center max-w-xl mx-auto space-y-2">
                  <span className="text-xs uppercase font-mono font-bold tracking-widest text-brand-cyan">Operational Solutions</span>
                  <h2 className="text-2xl md:text-4xl font-display font-medium text-white font-bold">Whom We Empower</h2>
                  <p className="text-xs text-slate-405 text-slate-400">Select your designated path for growth.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  
                  {/* Card 1: For Growing Businesses */}
                  <div className="p-8 bg-white/[0.02] border border-white/10 rounded-2xl hover:border-brand-indigo/40 hover:shadow-[0_0_30px_rgba(99,91,255,0.05)] transition-all flex flex-col justify-between group">
                    <div className="space-y-6">
                      <div className="flex justify-between items-start">
                        <div className="w-12 h-12 rounded-xl bg-brand-indigo/10 border border-brand-indigo/20 flex items-center justify-center text-brand-indigo group-hover:scale-105 transition-transform">
                          <Users size={22} />
                        </div>
                        <span className="text-[9px] uppercase tracking-wider font-mono font-bold bg-brand-indigo/10 text-brand-indigo px-2 py-0.5 rounded border border-brand-indigo/20">
                          For Businesses & CEOs
                        </span>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-xl font-display font-bold text-white">"I no longer need to worry about my digital presence."</h3>
                        <p className="text-xs text-slate-404 text-slate-405 text-slate-400 leading-relaxed">
                          Say goodbye to complex server jargon, slow freelancers, and poor lead conversion. Hand over your digital presence to a unified AI workforce that automates domain hosting, design edits, local outreach, and client requests in real-time.
                        </p>
                      </div>

                      <div className="py-2.5 space-y-2.5">
                        <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider block">UNIFY YOUR DIGITAL PERFORMRANCE:</span>
                        <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-300">
                          <div className="flex items-center gap-1.5">• Static Site Setup</div>
                          <div className="flex items-center gap-1.5">• Automated Optimization</div>
                          <div className="flex items-center gap-1.5">• Domain & Hosting</div>
                          <div className="flex items-center gap-1.5">• Local Maps Optimization</div>
                          <div className="flex items-center gap-1.5">• Direct Customer Form</div>
                          <div className="flex items-center gap-1.5">• 24/7 Security Shield</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-white/5">
                      <button
                        type="button"
                        id="pathway-btn-solutions"
                        onClick={() => setViewMode('solutions')}
                        className="w-full py-2.5 bg-brand-indigo hover:brightness-110 active:scale-[0.99] text-white font-extrabold text-xs uppercase tracking-wider rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1.5"
                      >
                        Transform My Business
                        <ArrowRight size={12} />
                      </button>
                    </div>
                  </div>

                  {/* Card 2: For Digital Teams & Agencies */}
                  <div className="p-8 bg-white/[0.02] border border-white/10 rounded-2xl hover:border-brand-cyan/40 hover:shadow-[0_0_30px_rgba(0,212,255,0.05)] transition-all flex flex-col justify-between group">
                    <div className="space-y-6">
                      <div className="flex justify-between items-start">
                        <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan group-hover:scale-105 transition-transform">
                          <Briefcase size={22} />
                        </div>
                        <span className="text-[9px] uppercase tracking-wider font-mono font-bold bg-brand-cyan/10 text-brand-cyan px-2 py-0.5 rounded border border-brand-cyan/20">
                          For Agency Operators
                        </span>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-xl font-display font-bold text-white">"My existing team can produce significantly more using AI."</h3>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          Remove static delivery bottlenecks. License our white-labeled AI agent workforce to handle client prospecting, draft beautiful visual staging demos instantly on command, and coordinate active support tickets in autopilot mode.
                        </p>
                      </div>

                      <div className="py-2.5 space-y-2.5">
                        <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider block">AGENCY MULTIPLIER CORE:</span>
                        <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-300">
                          <div className="flex items-center gap-1.5">• Lead Scouting Map</div>
                          <div className="flex items-center gap-1.5">• Unlimited Sandboxes</div>
                          <div className="flex items-center gap-1.5">• High-Volume Outreach</div>
                          <div className="flex items-center gap-1.5">• White-labeled Credits</div>
                          <div className="flex items-center gap-1.5">• API System Webhooks</div>
                          <div className="flex items-center gap-1.5">• SLA Ticket Center</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-white/5">
                      <button
                        type="button"
                        id="pathway-btn-enterprise"
                        onClick={() => setViewMode('enterprise')}
                        className="w-full py-2.5 bg-brand-cyan hover:brightness-110 active:scale-[0.99] text-brand-black font-extrabold text-xs uppercase tracking-wider rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1.5"
                      >
                        Scale Partner Agency
                        <ArrowRight size={12} />
                      </button>
                    </div>
                  </div>

                </div>
              </div>



              {/* 5. DIGITAL GROWTH SOLUTIONS SECTION WITH BEFORE & AFTER MOCKUP (IMAGE 2) */}
              <div id="digital-growth-solutions-arena" className="py-6">
                <BeforeAfterMockup />
              </div>

              {/* 6. ENTERPRISE AI PLATFORM WITH ENTERPRISE AGENCY MOCKUP (IMAGE 3) */}
              <div id="enterprise-ai-platform-arena" className="py-6">
                <EnterpriseAgencyMockup 
                  employeeRatio={employeeRatio} 
                  onEmployeeChange={(val) => setEmployeeRatio(val)} 
                />
              </div>

              {/* INDUSTRIAL VERTICALS: SHOW WHO THIS WORKS FOR */}
              <div className="space-y-10">
                <div className="text-center max-w-2xl mx-auto space-y-2">
                  <span className="text-xs uppercase font-mono font-bold tracking-widest text-brand-cyan">Versatile Compatibility</span>
                  <h2 className="text-3xl font-display font-medium text-white font-bold">Solutions Tailored To Your Niche</h2>
                  <p className="text-xs text-slate-400">Discover precise operational advantages engineered for your vertical.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {industries.map((ind, idx) => (
                    <div 
                      key={idx} 
                      className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-brand-cyan/30 hover:bg-white/[0.03] transition-all flex flex-col justify-between group"
                    >
                      <div className="space-y-4">
                        <span className="text-2xl block">{ind.icon}</span>
                        <h4 className="text-sm font-bold text-white group-hover:text-brand-cyan transition-colors">{ind.label}</h4>
                        <p className="text-[11px] text-slate-400 leading-relaxed font-light">{ind.benefit}</p>
                      </div>
                      <button 
                        type="button" 
                        onClick={() => {
                          setViewMode('solutions');
                          setTimeout(() => {
                            const field = document.getElementById('b2c-demo-field-industry') as HTMLInputElement;
                            if (field) {
                              field.value = ind.label;
                              field.dispatchEvent(new Event('input', { bubbles: true }));
                            }
                            executeScroll('contact');
                          }, 150);
                        }}
                        className="text-[10px] text-brand-cyan font-mono hover:underline mt-4 text-left flex items-center gap-1 font-bold cursor-pointer"
                      >
                        Request pre-built {ind.label} staging index →
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* SECTION: PLATFORM EXPLAINER VIDEO SECTION 2 (Enterprise & Agencies) */}
              <div className="p-8 md:p-12 bg-white/[0.01] border border-white/5 rounded-3xl relative overflow-hidden backdrop-blur-md">
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-cyan/5 rounded-full blur-[90px] pointer-events-none" />
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Simulated Premium Platform Player */}
                  <div className="lg:col-span-7 order-2 lg:order-1">
                    <div className="bg-brand-black/80 rounded-2xl border border-white/10 p-2 md:p-3 shadow-2xl relative overflow-hidden group">
                      <div className="aspect-video rounded-xl bg-slate-900/90 flex flex-col justify-between p-6 overflow-hidden relative border border-white/5">
                        
                        {!isPlayingVideo2 ? (
                          <div className="absolute inset-0 bg-slate-950/70 flex flex-col justify-center items-center text-center p-6 space-y-4 z-10">
                            <button
                              type="button"
                              onClick={() => setIsPlayingVideo2(true)}
                              className="w-14 h-14 rounded-full bg-gradient-to-r from-brand-indigo to-brand-cyan p-0.5 select-none hover:scale-105 active:scale-95 transition-transform flex items-center justify-center cursor-pointer shadow-lg shadow-brand-indigo/10"
                            >
                              <div className="w-full h-full bg-brand-black rounded-full flex items-center justify-center pl-1">
                                <Play size={20} className="text-brand-cyan fill-brand-cyan" />
                              </div>
                            </button>
                            <div>
                              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block font-bold">AGENCY SCALE PLAYER</span>
                              <h4 className="text-sm font-bold text-white mt-1">Multi-Client Scaling Blueprint (60 Seconds)</h4>
                            </div>
                          </div>
                        ) : (
                          <div className="absolute inset-0 bg-brand-black/95 p-4 font-mono text-[10px] text-emerald-400 space-y-2.5 z-10 flex flex-col justify-between">
                            <div className="flex justify-between items-center text-slate-400 border-b border-white/10 pb-1.5 font-bold">
                              <span>▶ AGENCY PLATFORM REVENUE FLOW [Live Mockup]</span>
                              <button 
                                type="button" 
                                onClick={() => setIsPlayingVideo2(false)}
                                className="text-white hover:text-emerald-400 text-xs"
                              >
                                ✕ Close
                              </button>
                            </div>
                            
                            <div className="space-y-1.5 overflow-hidden flex-1 py-1">
                              <p className="text-white font-bold">&#62; Running Cost / Client analysis check:</p>
                              <p className="text-brand-cyan">Traditional Stack: 10 active clients require 3 design employees ($15k/mo)</p>
                              <p className="text-emerald-400">AI Powered Workforce: 10 clients run on 1 login credentials ($1.2k/mo)</p>
                              <p className="text-pink-400">&#62; Compiling ROI projection model...</p>
                              <p className="text-white font-bold">✓ Net margins lifted to 84% from previous legacy limits.</p>
                            </div>

                            <div className="bg-slate-950 p-2 rounded text-[9px] text-slate-500 border border-slate-800 text-center uppercase tracking-wide">
                              SaaS license allows unlimited private sandbox domains
                            </div>
                          </div>
                        )}

                        <div className="flex justify-between items-start">
                          <span className="text-[9px] font-mono text-slate-500">OPERATIONAL INTENT METRICS</span>
                          <span className="text-[9px] font-mono text-brand-cyan animate-pulse">● ROI VISUALIZER TERMINAL</span>
                        </div>

                        {/* Interactive UI components */}
                        <div className="p-3 bg-brand-black border border-white/5 rounded-xl space-y-1.5 max-w-xs mx-auto text-left shadow-lg">
                          <h4 className="text-[11px] font-bold text-white flex items-center gap-1">
                            <Activity size={10} className="text-emerald-400" />
                            Client Delivery Rate
                          </h4>
                          <div className="h-2 bg-slate-900 rounded-full overflow-hidden">
                            <div className="h-full bg-brand-cyan" style={{ width: '92%' }} />
                          </div>
                          <span className="text-[9px] text-slate-400 block font-mono">Capacity optimized autonomously under 2026 SLAs</span>
                        </div>

                        <div className="flex justify-between items-center text-[10px] text-slate-500 font-mono pt-2 border-t border-white/5">
                          <span>Multi-Region CDN Active</span>
                          <span>Auto Backups: Locked</span>
                        </div>

                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-5 order-1 lg:order-2 space-y-6">
                    <span className="text-xs uppercase font-mono tracking-widest text-brand-indigo font-bold block">Scale Without Limits</span>
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-white leading-tight">
                      Scale Your Agency Without Scaling Costs
                    </h3>
                    <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                      For traditional agencies, adding clients means hiring developers, project managers, and designers — raising expenses and crushing margins.
                    </p>
                    <p className="text-xs text-slate-400">
                      With OutReachAI, one general teammate connects our automated workforce. Watch as our agents conduct automated client site conversions and maintenance checks securely.
                    </p>
                    
                    <button
                      type="button"
                      onClick={() => setViewMode('enterprise')}
                      className="px-6 py-2.5 bg-brand-cyan hover:brightness-110 active:scale-95 text-brand-black text-xs font-extrabold rounded-lg tracking-wide transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      Compare Platform Costs
                      <ArrowRight size={12} />
                    </button>
                  </div>

                </div>
              </div>

              {/* SECTION: PRICING PHILOSOPHY SECTION */}
              <div className="p-8 md:p-12 bg-white/[0.02] border border-white/10 rounded-3xl relative overflow-hidden max-w-5xl mx-auto">
                <div className="absolute top-0 right-0 w-80 h-80 bg-brand-indigo/5 rounded-full blur-[100px] pointer-events-none" />
                
                <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
                  <span className="text-xs uppercase font-mono font-bold tracking-widest text-brand-cyan">Consolidated Expenses</span>
                  <h2 className="text-3xl font-display font-bold text-white">One Subscription. Complete Digital Management.</h2>
                  <p className="text-xs text-slate-400">
                    Why pays thousands to developers, hosts, managers, and designers in isolation? Turn scattered software stacks into an unified autonomous workforce.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                  
                  {/* Traditional Stack */}
                  <div className="p-6 rounded-2xl bg-slate-950/40 border border-slate-900 space-y-4">
                    <h4 className="text-xs font-mono font-bold text-rose-400 uppercase tracking-wider">The Legacy Stack Costly:</h4>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between items-center p-2 rounded bg-white/[0.01]">
                        <span>Primary Website Designer</span>
                        <span className="font-mono text-slate-400">$3,500/yr</span>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded bg-white/[0.01]">
                        <span>Hosting & Server Admin</span>
                        <span className="font-mono text-slate-400">$600/yr</span>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded bg-white/[0.01]">
                        <span>Standard Marketing Software</span>
                        <span className="font-mono text-slate-400">$1,800/yr</span>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded bg-white/[0.01]">
                        <span>CRM & Lead Databases</span>
                        <span className="font-mono text-slate-400">$1,200/yr</span>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded bg-white/[0.01]">
                        <span>Continuous Web Maintenance</span>
                        <span className="font-mono text-slate-400">$2,400/yr</span>
                      </div>
                    </div>
                    <div className="p-3 bg-red-950/10 border border-rose-500/20 text-rose-300 text-xs rounded text-center font-bold">
                      Average Burden: $9,500+ every single year (plus human coordination delay).
                    </div>
                  </div>

                  {/* OutReachAI Platform Stack */}
                  <div className="p-6 rounded-2xl bg-gradient-to-tr from-brand-indigo/10 to-brand-cyan/5 border border-brand-cyan/25 space-y-4">
                    <h4 className="text-xs font-mono font-bold text-brand-cyan uppercase tracking-wider">OutReachAI Consolidated Alternative:</h4>
                    <div className="space-y-3 pt-1">
                      <div className="flex gap-2.5 items-start">
                        <span className="text-brand-cyan font-bold">✓</span>
                        <p className="text-xs text-slate-350 text-slate-300">
                          <b>One AI-Powered Digital Team</b> handling domain binding, custom layout creations, optimization runs, outreach, client inquiries, and backups.
                        </p>
                      </div>
                      <div className="flex gap-2.5 items-start">
                        <span className="text-brand-cyan font-bold">✓</span>
                        <p className="text-xs text-slate-300">
                          <b>Completely Scalable Capacity</b> matching your business or partner agency pace without expensive recruitment wages or communication drift.
                        </p>
                      </div>
                      <div className="flex gap-2.5 items-start">
                        <span className="text-brand-cyan font-bold">✓</span>
                        <p className="text-xs text-slate-300">
                          <b>Continuous 24/7 Security Swings</b> safeguarding uptime certificates without extra costly security software.
                        </p>
                      </div>
                    </div>
                    <div className="p-3 bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs rounded text-center font-extrabold">
                      One Subscription. Complete Digital Supervision & Scale.
                    </div>
                  </div>

                </div>
              </div>

              {/* TRUST LAYER SECTION */}
              <div id="corporate-trust-station" className="p-8 md:p-12 bg-white/[0.01] border border-white/5 rounded-3xl relative overflow-hidden max-w-5xl mx-auto space-y-8">
                <div className="text-center max-w-2xl mx-auto space-y-2">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#94A3B8] font-bold block">Enterprise Readiness & Integrity</span>
                  <h3 className="text-2xl font-display font-bold text-white">Security, Reliability, & Human Approval</h3>
                  <p className="text-xs text-slate-404 text-slate-400">
                    We combine autonomous intelligence with professional controls so you stay in continuous command.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  
                  <div className="p-5 rounded-xl bg-white/[0.01] border border-white/5 space-y-2">
                    <div className="w-10 h-10 rounded-full bg-brand-cyan/10 text-brand-cyan flex items-center justify-center mx-auto mb-2">
                      <ShieldCheck size={18} />
                    </div>
                    <h4 className="text-xs font-bold text-white uppercase">Secured & Encrypted</h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      Bank-grade continuous encryption layers. No public API keys ever exposed, and automated regional backups locked hourly.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-white/[0.01] border border-white/5 space-y-2">
                    <div className="w-10 h-10 rounded-full bg-brand-indigo/10 text-brand-indigo flex items-center justify-center mx-auto mb-2">
                      <Sliders size={18} className="text-brand-indigo" />
                    </div>
                    <h4 className="text-xs font-bold text-white uppercase">Human Approval Guard</h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      AI builds and scripts draft autonomously, but nothing deploys, emails, or updates live without your direct final validation tick.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-white/[0.01] border border-white/5 space-y-2">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto mb-2">
                      <Sparkles size={18} className="text-emerald-400" />
                    </div>
                    <h4 className="text-xs font-bold text-white uppercase">Continuous Optimization</h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      Our system agents never sleep. They constantly crawl, test viewport ratios, detect styling bugs, and boost campaign lift formulas automatically.
                    </p>
                  </div>

                </div>
              </div>

            </motion.div>
          )}

          {viewMode === 'solutions' && (
            <motion.div
              key="gateway-solutions-screen"
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
            >
              <B2CPlatform />
            </motion.div>
          )}

          {viewMode === 'enterprise' && (
            <motion.div
              key="gateway-enterprise-screen"
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
            >
              <EnterprisePlatform onJumpToCRM={() => setViewMode('crm')} />
            </motion.div>
          )}

          {viewMode === 'crm' && (
            <motion.div
              key="gateway-crm-screen"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="space-y-6"
            >
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-brand-cyan font-bold bg-white/[0.02] px-3 py-1 rounded border border-white/5">
                  Live Platform Sandbox Console
                </span>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-white mt-3">Live AI Command Center</h2>
                <p className="text-xs text-slate-404 text-slate-400">Play through the active customer discovery pipeline and intercept support issues inside our simplified AI Command block.</p>
              </div>
              <InteractiveCRM />
            </motion.div>
          )}

        </AnimatePresence>

      </main>

      {/* FOOTER */}
      <footer className="bg-brand-black border-t border-white/5 mt-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center text-brand-cyan">
              <Cpu size={14} />
            </div>
            <span className="text-xs font-bold text-slate-400 font-mono">OutReachAI © 2026</span>
          </div>

          <div className="flex gap-4">
            <button 
              type="button" 
              id="footer-nav-home"
              onClick={() => setViewMode('home')} 
              className="text-slate-500 hover:text-slate-300 text-xs font-medium cursor-pointer"
            >
              Home
            </button>
            <button 
              type="button" 
              id="footer-nav-solutions"
              onClick={() => setViewMode('solutions')} 
              className="text-slate-500 hover:text-slate-300 text-xs font-medium cursor-pointer"
            >
              For Businesses
            </button>
            <button 
              type="button" 
              id="footer-nav-enterprise"
              onClick={() => setViewMode('enterprise')} 
              className="text-slate-500 hover:text-slate-300 text-xs font-medium cursor-pointer"
            >
              For Agencies
            </button>
            <button 
              type="button" 
              id="footer-nav-crm"
              onClick={() => setViewMode('crm')} 
              className="text-slate-500 hover:text-slate-300 text-xs font-medium cursor-pointer"
            >
              Command Center
            </button>
          </div>

          <div className="text-[10px] text-slate-600 font-mono uppercase font-bold">
            TRUSTED AUTONOMOUS FRAMEWORK: SECURE
          </div>
        </div>
      </footer>

    </div>
  );
}
