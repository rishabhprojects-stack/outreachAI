import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Laptop, Mail, ArrowRight, Sparkles, Globe, Cpu, Users, BarChart2, ShieldAlert,
  Terminal, ShieldCheck, Activity, Zap, Server, Sliders, Play, Code, CheckCircle, Clock, AlertCircle, TrendingUp
} from 'lucide-react';

// Common Interactive 3D Parallax Hook for Mouse movement over premium mockups
function useMouseParallax() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate rotation angles based on cursor position relative to the center
    const mouseX = e.clientX - rect.left - (width / 2);
    const mouseY = e.clientY - rect.top - (height / 2);
    
    const rX = -(mouseY / height) * 15; // Limit to max 15deg rotation
    const rY = (mouseX / width) * 15;
    
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return { rotateX, rotateY, handleMouseMove, handleMouseLeave, cardRef };
}

// ==========================================
// IMAGE 1: Homepage Hero Image — AI Digital Workforce
// ==========================================
export function HeroWorkforceMockup() {
  const { rotateX, rotateY, handleMouseMove, handleMouseLeave, cardRef } = useMouseParallax();

  return (
    <div className="relative w-full max-w-xl mx-auto py-8 px-4 flex justify-center items-center select-none">
      
      {/* Underlying Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-tr from-brand-indigo/25 to-brand-cyan/25 rounded-full blur-[90px] pointer-events-none" />
      
      {/* Main 3D Floating Frame */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: 'easeInOut',
        }}
        className="relative rounded-[28px] border border-white/10 bg-slate-950/40 p-2 shadow-2xl backdrop-blur-md transition-all duration-300 hover:shadow-brand-cyan/15 hover:border-white/15 cursor-pointer overflow-hidden z-10"
      >
        {/* Safari-style window bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-slate-950/80 border-b border-white/5 rounded-t-[20px]">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
          </div>
          <div className="px-3 py-0.5 bg-white/[0.03] border border-white/5 rounded-md text-[9px] text-slate-400 font-mono tracking-wide w-48 text-center truncate">
            outreach.ai/workforce-dashboard
          </div>
          <div className="w-8" />
        </div>

        {/* Premium Image element */}
        <div className="relative rounded-b-[20px] overflow-hidden bg-brand-black">
          <img 
            src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80" 
            alt="AI Digital Workforce"
            referrerPolicy="no-referrer"
            loading="lazy"
            className="w-full h-auto object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
          {/* Soft inner vignette/shading */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent pointer-events-none" />
        </div>
      </motion.div>

      {/* Floating Status Cards */}
      {/* Status Card 1 */}
      <motion.div
        animate={{
          y: [-5, 5, -5],
          x: [0, 3, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: 'easeInOut',
        }}
        className="absolute top-[10%] -left-[5%] md:-left-[10%] px-3.5 py-2 rounded-2xl bg-slate-900/80 border border-brand-cyan/30 backdrop-blur-md flex items-center gap-2 shadow-lg z-20"
      >
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cyan"></span>
        </span>
        <div className="text-left font-sans">
          <p className="text-[10px] font-extrabold text-white tracking-wide uppercase leading-none">Website Agent</p>
          <p className="text-[8px] text-slate-400 leading-none mt-1">Active & Monitoring</p>
        </div>
      </motion.div>

      {/* Status Card 2 */}
      <motion.div
        animate={{
          y: [5, -5, 5],
          x: [0, -3, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4.5,
          ease: 'easeInOut',
        }}
        className="absolute bottom-[20%] -right-[5%] md:-right-[10%] px-3.5 py-2 rounded-2xl bg-slate-900/80 border border-pink-500/30 backdrop-blur-md flex items-center gap-2 shadow-lg z-20"
      >
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
        </span>
        <div className="text-left font-sans">
          <p className="text-[10px] font-extrabold text-white tracking-wide uppercase leading-none">Growth Systems</p>
          <p className="text-[8px] text-slate-400 leading-none mt-1">Running campaigns</p>
        </div>
      </motion.div>

      {/* Status Card 3 */}
      <motion.div
        animate={{
          y: [-3, 3, -3],
          x: [-2, 2, -2],
        }}
        transition={{
          repeat: Infinity,
          duration: 5.5,
          ease: 'easeInOut',
        }}
        className="absolute bottom-[5%] left-[5%] px-3.5 py-2 rounded-2xl bg-slate-900/80 border border-emerald-500/30 backdrop-blur-md flex items-center gap-2 shadow-lg z-20"
      >
        <div className="w-4 h-4 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-[9px] font-bold">✓</div>
        <div className="text-left font-sans">
          <p className="text-[10px] font-extrabold text-white tracking-wide uppercase leading-none">AI Tasks Completed</p>
          <p className="text-[8px] text-slate-400 leading-none mt-1">1,248 resolved today</p>
        </div>
      </motion.div>

    </div>
  );
}

// ==========================================
// IMAGE 2: Business Customer Section Image — Before & After Digital Transformation
// ==========================================
export function BeforeAfterMockup() {
  const [activeCycle, setActiveCycle] = useState<'complexity' | 'automation'>('complexity');

  useEffect(() => {
    // Automatically alternate cycle every 4.5 seconds for passive story presentation
    const timer = setInterval(() => {
      setActiveCycle(prev => prev === 'complexity' ? 'automation' : 'complexity');
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-8 select-none">
      
      {/* Layout Grid conforming to user request */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-950/20 border border-white/5 p-4 md:p-6 rounded-[32px] backdrop-blur-md">
        
        {/* Left Column: Image Container (Image 2) */}
        <div className="lg:col-span-6 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/10 to-brand-cyan/10 blur-[50px] pointer-events-none" />
          
          <div className="relative rounded-[24px] overflow-hidden border border-white/10 bg-brand-black p-1 shadow-2xl hover:scale-[1.01] transition-transform duration-500">
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80" 
              alt="Digital Transformation Comparison"
              referrerPolicy="no-referrer"
              loading="lazy"
              className="w-full h-auto object-cover rounded-[18px]"
            />
            {/* Interactive Overlay badge */}
            <div className="absolute top-4 left-4 bg-[#0A0E1A]/80 border border-white/10 text-[9px] font-mono tracking-widest text-[#94A3B8] px-3 py-1 rounded-full uppercase">
              Transformation Visualized
            </div>
          </div>
        </div>

        {/* Right Column: Content explainer with scrolling fade effects */}
        <div className="lg:col-span-6 space-y-5 text-left">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-brand-cyan font-bold block uppercase mb-1">AUTOMATION VALUE CURVE</span>
            <h3 className="text-xl md:text-2xl font-display font-bold text-white uppercase leading-tight">
              From Digital Complexity<br />To Complete Automation
            </h3>
          </div>

          {/* Interactive Toggle for scroll/fade demonstration */}
          <div className="inline-flex p-1 rounded-full bg-white/[0.03] border border-white/5 gap-1">
            <button
              onClick={() => setActiveCycle('complexity')}
              className={`px-4 py-1.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase transition-all cursor-pointer ${
                activeCycle === 'complexity' ? 'bg-rose-500/15 border border-rose-500/30 text-rose-400' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              The Old Complexity
            </button>
            <button
              onClick={() => setActiveCycle('automation')}
              className={`px-4 py-1.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase transition-all cursor-pointer ${
                activeCycle === 'automation' ? 'bg-brand-cyan/15 border border-brand-cyan/30 text-brand-cyan' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              The AI Autopilot
            </button>
          </div>

          {/* Framer-Motion AnimatePresence Workspace */}
          <div className="min-h-[175px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {activeCycle === 'complexity' ? (
                <motion.div
                  key="before-complexity-state"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="space-y-3"
                >
                  <p className="text-[11px] font-mono text-rose-400 uppercase tracking-widest font-bold">● BEFORE OUTREACHAI: FRAGILE STACKS</p>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-3 rounded-lg bg-rose-950/10 border border-rose-500/10 text-left space-y-1">
                      <h4 className="font-bold text-slate-200 uppercase text-[10px] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500" /> Multiple Agencies
                      </h4>
                      <p className="text-[10px] text-slate-400 leading-normal">Paying separate developers, SEO writers, and managers.</p>
                    </div>

                    <div className="p-3 rounded-lg bg-rose-950/10 border border-rose-500/10 text-left space-y-1">
                      <h4 className="font-bold text-slate-200 uppercase text-[10px] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500" /> Manual Updates
                      </h4>
                      <p className="text-[10px] text-slate-400 leading-normal">Waiting days for simple copy, layout, or image shifts.</p>
                    </div>

                    <div className="p-3 rounded-lg bg-rose-950/10 border border-rose-500/10 text-left space-y-1">
                      <h4 className="font-bold text-slate-200 uppercase text-[10px] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500" /> Tech Probs
                      </h4>
                      <p className="text-[10px] text-slate-400 leading-normal">SSL certificate warnings, page errors, and domain lag.</p>
                    </div>

                    <div className="p-3 rounded-lg bg-rose-950/10 border border-rose-500/10 text-left space-y-1">
                      <h4 className="font-bold text-slate-200 uppercase text-[10px] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500" /> Ad Confusion
                      </h4>
                      <p className="text-[10px] text-slate-400 leading-normal">Wasting ad budgets on broken funnels without metrics.</p>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="after-automation-state"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="space-y-3"
                >
                  <p className="text-[11px] font-mono text-brand-cyan uppercase tracking-widest font-bold">✓ AFTER OUTREACHAI: COMPLETE AUTOPILOT</p>
                  
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-3 rounded-lg bg-brand-cyan/5 border border-brand-cyan/20 text-left space-y-1">
                      <h4 className="font-bold text-white uppercase text-[10px] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" /> One Host System
                      </h4>
                      <p className="text-[10px] text-slate-400 leading-normal">Everything managed through unified agent consoles.</p>
                    </div>

                    <div className="p-3 rounded-lg bg-brand-cyan/5 border border-brand-cyan/20 text-left space-y-1">
                      <h4 className="font-bold text-white uppercase text-[10px] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" /> Constant Tuning
                      </h4>
                      <p className="text-[10px] text-slate-400 leading-normal">Conversion adjustments deployed instantly on demand.</p>
                    </div>

                    <div className="p-3 rounded-lg bg-brand-cyan/5 border border-brand-cyan/20 text-left space-y-1">
                      <h4 className="font-bold text-white uppercase text-[10px] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" /> Full Management
                      </h4>
                      <p className="text-[10px] text-slate-400 leading-normal">Autonomous domain protection, security shields, and backups.</p>
                    </div>

                    <div className="p-3 rounded-lg bg-brand-cyan/5 border border-brand-cyan/20 text-left space-y-1">
                      <h4 className="font-bold text-white uppercase text-[10px] flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" /> Fluid ROI Sync
                      </h4>
                      <p className="text-[10px] text-slate-400 leading-normal">Continuous outreach bids optimizing automatically.</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>

    </div>
  );
}

// ==========================================
// IMAGE 3: Enterprise Platform Image — AI Powered Agency
// ==========================================
interface EnterpriseAgencyMockupProps {
  employeeRatio: number;
  onEmployeeChange: (val: number) => void;
}

export function EnterpriseAgencyMockup({ employeeRatio, onEmployeeChange }: EnterpriseAgencyMockupProps) {
  return (
    <div className="space-y-12 select-none w-full max-w-5xl mx-auto">
      
      {/* Header and subtitle matching layout constraint */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <span className="text-xs uppercase font-mono tracking-widest text-[#94A3B8] font-bold block">PLATFORM LEVERAGE FOR WhiteLabels</span>
        <h2 className="text-2xl md:text-4xl font-display font-bold text-white uppercase tracking-tight">The Future Agency Runs On AI.</h2>
        <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-light">
          Give every employee an intelligent workforce capable of discovering, creating, managing, and scaling.
        </p>
      </div>

      {/* Main Image in Premium Large Glass Container with Zoom and Floating Activity Cards */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative rounded-[32px] overflow-hidden border border-white/10 bg-slate-950/40 p-3 md:p-4.5 shadow-2xl backdrop-blur-md max-w-4xl mx-auto group"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-indigo/10 via-transparent to-brand-cyan/10 pointer-events-none" />

        {/* Outer Frame with slow scroll zoom animation */}
        <div className="relative rounded-[24px] overflow-hidden bg-brand-black border border-white/5">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80" 
            alt="AI Powered Agency Team Integration"
            referrerPolicy="no-referrer"
            loading="lazy"
            className="w-full h-auto object-cover opacity-90 group-hover:scale-[1.025] transition-transform duration-1000 ease-out"
          />
          {/* Inner ambient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-slate-950/10 pointer-events-none" />
        </div>

        {/* Floating AI Metric Cards */}
        {/* Metric 1 */}
        <motion.div
          animate={{
            y: [-4, 4, -4],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: 'easeInOut',
          }}
          className="absolute top-[15%] left-[6%] md:left-[10%] px-3 py-1.5 rounded-xl bg-slate-900/90 border border-brand-cyan/30 backdrop-blur-md flex items-center gap-2 shadow-lg"
        >
          <Activity size={12} className="text-brand-cyan animate-pulse animate-bounce" />
          <span className="text-[10px] font-mono font-bold text-white uppercase tracking-wide">52 Leads Generated</span>
        </motion.div>

        {/* Metric 2 */}
        <motion.div
          animate={{
            y: [4, -4, 4],
          }}
          transition={{
            repeat: Infinity,
            duration: 4.8,
            ease: 'easeInOut',
          }}
          className="absolute top-[35%] right-[6%] md:right-[10%] px-3 py-1.5 rounded-xl bg-slate-900/90 border border-pink-500/30 backdrop-blur-md flex items-center gap-2 shadow-lg"
        >
          <Laptop size={12} className="text-pink-400" />
          <span className="text-[10px] font-mono font-bold text-white uppercase tracking-wide">Website Draft Completed</span>
        </motion.div>

        {/* Metric 3 */}
        <motion.div
          animate={{
            y: [-3, 3, -3],
          }}
          transition={{
            repeat: Infinity,
            duration: 5.2,
            ease: 'easeInOut',
          }}
          className="absolute bottom-[20%] left-[8%] md:left-[15%] px-3 py-1.5 rounded-xl bg-slate-900/90 border border-emerald-500/30 backdrop-blur-md flex items-center gap-2 shadow-lg"
        >
          <CheckCircle size={10} className="text-emerald-400" />
          <span className="text-[10px] font-mono font-bold text-white uppercase tracking-wide">Client Updated</span>
        </motion.div>

      </motion.div>

      {/* Comparison Cards Below Image */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        
        {/* Traditional Agency Card */}
        <div className="p-6 rounded-2xl bg-white/[0.01] border border-rose-500/10 space-y-4 text-left hover:border-rose-500/25 transition-colors">
          <div className="flex justify-between items-center pb-2 border-b border-white/5">
            <h4 className="text-[11px] font-mono font-semibold tracking-wider text-rose-400 uppercase flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" /> Traditional Agency
            </h4>
            <span className="text-[9px] text-[#64748B] font-mono">STAFF CONSTRAINED</span>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs flex items-center justify-center font-bold">1</div>
              <div>
                <p className="text-xs font-bold text-slate-200">More Clients</p>
                <p className="text-[10px] text-[#94A3B8]">Securing new contracts requires more output volume.</p>
              </div>
            </div>
            <div className="text-rose-450/40 text-rose-400/50 pl-3.5 font-bold">↓</div>
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs flex items-center justify-center font-bold">2</div>
              <div>
                <p className="text-xs font-bold text-slate-200">More Employees</p>
                <p className="text-[10px] text-[#94A3B8]">You must recruit developers, operations leads, and writers.</p>
              </div>
            </div>
            <div className="text-rose-450/40 text-rose-400/50 pl-3.5 font-bold">↓</div>
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs flex items-center justify-center font-bold">3</div>
              <div>
                <p className="text-xs font-bold text-slate-200">Higher Costs</p>
                <p className="text-[10px] text-[#94A3B8]">Wages and physical spaces bleed your project profitability.</p>
              </div>
            </div>
          </div>
        </div>

        {/* AI-Powered Agency Card */}
        <div className="p-6 rounded-2xl bg-gradient-to-tr from-brand-indigo/10 to-brand-cyan/5 border border-brand-cyan/20 space-y-4 text-left relative overflow-hidden group hover:border-brand-cyan/40 transition-colors">
          <div className="flex justify-between items-center pb-2 border-b border-white/5 relative z-10">
            <h4 className="text-[11px] font-mono font-semibold tracking-wider text-brand-cyan uppercase flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" /> AI-Powered Agency
            </h4>
            <span className="text-[9px] text-brand-cyan font-mono font-semibold font-bold">AUTONOMOUS MULTIPLIER</span>
          </div>

          <div className="space-y-4 relative z-10">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs flex items-center justify-center font-bold">1</div>
              <div>
                <p className="text-xs font-bold text-slate-200">More Clients</p>
                <p className="text-[10px] text-slate-400">Onboard multiples profiles in customizable vertical sectors.</p>
              </div>
            </div>
            <div className="text-brand-cyan/30 pl-3.5 font-bold">↓</div>
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs flex items-center justify-center font-bold">2</div>
              <div>
                <p className="text-xs font-bold text-slate-200">More Automation</p>
                <p className="text-[10px] text-slate-400">AI agents manage maintenance, SEO auditing, and ad bids.</p>
              </div>
            </div>
            <div className="text-brand-cyan/30 pl-3.5 font-bold">↓</div>
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-xs flex items-center justify-center font-bold">3</div>
              <div>
                <p className="text-xs font-bold text-slate-200">Higher Output</p>
                <p className="text-[10px] text-slate-400">Operational margins lift to 84%. Growth scales indefinitely.</p>
              </div>
            </div>
          </div>

          {/* Interactive teammate capacity tuner synced with main page props */}
          <div className="p-3 bg-brand-black/80 rounded-xl border border-white/5 space-y-2 mt-2 relative z-10">
            <div className="flex justify-between items-center text-[10px] font-mono leading-none">
              <span className="text-slate-400">Team Size Allocation:</span>
              <span className="text-brand-cyan font-bold">{employeeRatio} Teammates</span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="25" 
              value={employeeRatio}
              onChange={(e) => onEmployeeChange(Number(e.target.value))}
              className="w-full h-1 bg-slate-900 rounded-full appearance-none cursor-pointer accent-brand-cyan"
            />
            <p className="text-[9px] text-[#64748B] tracking-wide leading-none select-none">
              Scaling {employeeRatio} operator{employeeRatio > 1 ? 's' : ''} powers {employeeRatio * 10} concurrent client instances autonomously.
            </p>
          </div>

          {/* Decorative glowing background node */}
          <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-brand-cyan/10 rounded-full blur-[30px] pointer-events-none group-hover:scale-125 transition-transform duration-700" />
        </div>

      </div>

    </div>
  );
}

// ==========================================
// IMAGE 4: AI Dashboard Product Screenshot Mockup
// ==========================================
export function CommandCenterMockup() {
  const { rotateX, rotateY, handleMouseMove, handleMouseLeave, cardRef } = useMouseParallax();

  return (
    <div className="space-y-10 select-none w-full max-w-5xl mx-auto">
      
      {/* Header and subtitle matching user request */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <span className="text-xs uppercase font-mono tracking-widest text-[#94A3B8] font-bold block">Consolidated Analytics Engine</span>
        <h2 className="text-2xl md:text-4xl font-display font-medium text-white font-bold uppercase tracking-tight">Your AI Command Center</h2>
        <p className="text-xs md:text-sm text-slate-404 text-slate-405 text-slate-400 leading-relaxed font-light">
          Monitor AI agents, websites, campaigns, customers, and growth through a single intelligent dashboard.
        </p>
      </div>

      {/* MacBook style floating browser frame with actual Image 4 layout and subtle rotation */}
      <div className="relative w-full max-w-4xl mx-auto py-6 px-4">
        
        {/* Radiant Backdrop Light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-72 bg-gradient-to-tr from-brand-indigo/15 via-transparent to-brand-cyan/15 rounded-full blur-[100px] pointer-events-none" />

        {/* Browser Mockup Shell */}
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `perspective(1200px) rotateX(${rotateX * 0.4}deg) rotateY(${rotateY * 0.4}deg) scale(1.002)`,
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[24px] border border-white/10 bg-[#0B0F19]/90 shadow-2xl overflow-hidden cursor-pointer"
        >
          {/* Windows bar mockup */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#080B13] border-b border-white/5">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            </div>
            
            {/* Address bar */}
            <div className="px-4 py-0.5 bg-white/[0.02] border border-white/5 rounded-md text-[10px] text-slate-400 font-mono tracking-wide w-64 text-center truncate flex items-center justify-center gap-1">
              <Globe size={10} className="text-brand-cyan animate-pulse" />
              <span>outreach.live/dashboard-console</span>
            </div>

            <span className="text-[8px] font-mono uppercase bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20 px-2 py-0.5 rounded flex items-center gap-1 font-bold">
              ● Secure Shield
            </span>
          </div>

          {/* Screenshot Container */}
          <div className="relative overflow-hidden w-full h-auto bg-brand-black">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" 
              alt="AI Dashboard Product Screenshot"
              referrerPolicy="no-referrer"
              loading="lazy"
              className="w-full h-auto object-cover opacity-95 hover:opacity-100 transition-opacity duration-300"
            />
            {/* Ambient vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19]/40 to-transparent pointer-events-none" />
          </div>

        </motion.div>

        {/* Floating status cards around the dashboard browser mockup */}
        {/* Status card 1: Website Agent */}
        <motion.div
          animate={{
            y: [-3, 3, -3],
            x: [0, -2, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 5.5,
            ease: "easeInOut",
          }}
          className="absolute -top-[5%] -left-[2%] md:-left-[6%] px-3 py-1.5 rounded-xl bg-slate-900/90 border border-brand-cyan/30 backdrop-blur-md flex items-center gap-1.5 shadow-lg select-none z-20"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan animate-pulse" />
          <span className="text-[9px] font-mono text-slate-300 font-bold uppercase">Website Agent: </span>
          <span className="text-[10px] text-brand-cyan font-bold font-semibold font-mono">Optimization Complete</span>
        </motion.div>

        {/* Status card 2: Sales Agent */}
        <motion.div
          animate={{
            y: [3, -3, 3],
            x: [0, 2, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4.8,
            ease: "easeInOut",
          }}
          className="absolute top-[20%] -right-[2%] md:-right-[8%] px-3 py-1.5 rounded-xl bg-slate-900/90 border border-pink-500/30 backdrop-blur-md flex items-center gap-1.5 shadow-lg select-none z-20"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-pink-400 animate-pulse" />
          <span className="text-[9px] font-mono text-slate-300 font-bold uppercase">Sales Agent: </span>
          <span className="text-[10px] text-pink-400 font-bold font-semibold font-mono">Opportunities Found</span>
        </motion.div>

        {/* Status card 3: CRM Agent */}
        <motion.div
          animate={{
            y: [-4, 4, -4],
            x: [1, -2, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut",
          }}
          className="absolute -bottom-[5%] -left-[1%] md:-left-[5%] px-3 py-1.5 rounded-xl bg-slate-900/90 border border-emerald-500/30 backdrop-blur-md flex items-center gap-1.5 shadow-lg select-none z-20"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[9px] font-mono text-slate-300 font-bold uppercase">CRM Agent: </span>
          <span className="text-[10px] text-emerald-400 font-bold font-semibold font-mono">Request Solved</span>
        </motion.div>

        {/* Status card 4: Marketing Agent */}
        <motion.div
          animate={{
            y: [2, -2, 2],
            x: [-1, 2, -1],
          }}
          transition={{
            repeat: Infinity,
            duration: 5.2,
            ease: "easeInOut",
          }}
          className="absolute bottom-[10%] -right-[2%] md:-right-[6%] px-3 py-1.5 rounded-xl bg-slate-900/90 border border-indigo-400/30 backdrop-blur-md flex items-center gap-1.5 shadow-lg select-none z-20"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
          <span className="text-[9px] font-mono text-slate-300 font-bold uppercase">Marketing Agent: </span>
          <span className="text-[10px] text-indigo-400 font-bold font-semibold font-mono">Campaign Improved</span>
        </motion.div>

      </div>

    </div>
  );
}
