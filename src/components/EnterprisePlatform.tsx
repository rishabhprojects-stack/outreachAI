import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, Users, Users2, Shield, Calendar, Clock, ArrowRight, CheckCircle2, 
  Cpu, LayoutGrid, Terminal, Mail, MessageSquare, Briefcase, ChevronRight, BarChart3, HelpCircle, Landmark, TrendingUp
} from 'lucide-react';

export default function EnterprisePlatform({ onJumpToCRM }: { onJumpToCRM: () => void }) {
  // Enterprise request states
  const [entName, setEntName] = useState('');
  const [entCompany, setEntCompany] = useState('');
  const [entTeamSize, setEntTeamSize] = useState('11-50 members');
  const [entEmail, setEntEmail] = useState('');
  const [entPhone, setEntPhone] = useState('');
  const [entVolume, setEntVolume] = useState('16-50 websites/mo');
  const [entMessage, setEntMessage] = useState('');
  
  // Scheduling States
  const [demoDate, setDemoDate] = useState('2026-06-22');
  const [demoTime, setDemoTime] = useState('11:00 AM');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Active dashboard showcase simulator state
  const [activeTab, setActiveTab] = useState<'agents' | 'analytics' | 'crm'>('agents');

  // ROI Interactive Slider simulation parameters
  const [employeeRatio, setEmployeeRatio] = useState(5);

  const calculateBeforeWork = () => employeeRatio * 4; // 4 websites per employee
  const calculateAfterWork = () => employeeRatio * 20; // 20 websites per employee with AI

  const handleEnterpriseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!entName || !entCompany || !entEmail) return;
    setIsSubmitted(true);
  };

  return (
    <div id="enterprise-platform-container" className="space-y-20 text-slate-100">
      
      {/* Target Section introduction */}
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-xs text-brand-indigo">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-indigo" />
          <span className="text-[10px] uppercase font-mono font-bold tracking-widest">OUTREACHAI FOR AGENCIES & TEAMS</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-display font-medium text-white tracking-tight leading-tight font-bold">
          "Scale your agency without<br />
          <span className="bg-gradient-to-r from-brand-indigo to-brand-cyan bg-clip-text text-transparent">
            scaling your costs."
          </span>
        </h2>
        <p className="text-sm md:text-base text-slate-400">
          Supercharge your digital team's actual output. Say goodbye to recruitment bottlenecks, endless training, and traditional personnel scaling curves. Turn your team into a high-converting output machine powered by autonomous agent coordination.
        </p>
      </div>

      {/* CORE BUSINESS COMPARISON: TRADITIONAL VS AI-POWERED */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        
        {/* Traditional Agency */}
        <div className="p-8 rounded-2xl bg-white/[0.01] border border-rose-500/10 hover:border-rose-500/20 transition-all space-y-6">
          <div className="flex items-center gap-2 text-rose-500 font-bold uppercase text-xs tracking-wider">
            <span className="w-2 h-2 rounded-full bg-rose-500 block animate-pulse" />
            <span>The Traditional Bottleneck Agency</span>
          </div>

          <div className="space-y-4 pt-2">
            <div className="flex gap-3 items-start">
              <span className="text-rose-500 font-bold shrink-0">→</span>
              <div>
                <h4 className="text-xs font-bold text-slate-200">More Clients</h4>
                <p className="text-[10px] text-slate-400">Requires recruiting more designers, account handlers, and support reps.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-rose-500 font-bold shrink-0">→</span>
              <div>
                <h4 className="text-xs font-bold text-slate-200">More Employees</h4>
                <p className="text-[10px] text-slate-400">Ramps up payroll, physical office requirements, and recruitment lag.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-rose-500 font-bold shrink-0">→</span>
              <div>
                <h4 className="text-xs font-bold text-slate-200">More Overhead Costs</h4>
                <p className="text-[10px] text-slate-400">Increased software licenses, server overhead, and project management costs.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-rose-500 font-bold shrink-0">→</span>
              <div>
                <h4 className="text-xs font-bold text-slate-200">Lower Profit Margins</h4>
                <p className="text-[10px] text-slate-400 font-light">As complexity grows, delivery speed declines while profit margins get crushed.</p>
              </div>
            </div>
          </div>

          <div className="p-3 bg-rose-950/10 border border-rose-500/20 text-rose-350 text-[11px] rounded-xl text-center font-bold">
            Average margin drops under 18% as operations expand.
          </div>
        </div>

        {/* AI Powered Agency */}
        <div className="p-8 rounded-2xl bg-gradient-to-tr from-brand-indigo/15 to-brand-cyan/10 border border-brand-cyan/20 hover:border-brand-cyan/45 transition-all space-y-6">
          <div className="flex items-center gap-2 text-brand-cyan font-bold uppercase text-xs tracking-wider">
            <span className="w-2 h-2 rounded-full bg-brand-cyan block animate-pulse" />
            <span>The AI-Powered Scale Agency</span>
          </div>

          <div className="space-y-4 pt-2">
            <div className="flex gap-3 items-start">
              <span className="text-brand-cyan font-bold shrink-0">✓</span>
              <div>
                <h4 className="text-xs font-bold text-slate-200">More Clients</h4>
                <p className="text-[10px] text-slate-300">Scale client accounts instantly without onboarding bottlenecks or operational limits.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-brand-cyan font-bold shrink-0">✓</span>
              <div>
                <h4 className="text-xs font-bold text-slate-200">Automated AI Workforce</h4>
                <p className="text-[10px] text-slate-300">Agents handle prospecting, layout building, hosting optimization, and client tickets in autopilot.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-brand-cyan font-bold shrink-0">✓</span>
              <div>
                <h4 className="text-xs font-bold text-slate-200">Hyper High Output</h4>
                <p className="text-[10px] text-slate-300">One teammate coordinates tens of active assets using unified dashboard controls.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <span className="text-brand-cyan font-bold shrink-0">✓</span>
              <div>
                <h4 className="text-xs font-bold text-slate-200">Soaring Profit Margins</h4>
                <p className="text-[10px] text-slate-300 font-light">Delivery overhead remains flat while revenue scales, pushing margins past 80%.</p>
              </div>
            </div>
          </div>

          <div className="p-3 bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan text-[11px] rounded-xl text-center font-extrabold">
            Margins scale and stay flat beyond 84% at absolute peak volume.
          </div>
        </div>

      </div>

      {/* INTERACTIVE ROI VISUALIZATION SECTION */}
      <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-md max-w-5xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-brand-cyan font-bold">Autopilot Return On Investment</span>
          <h3 className="text-xl md:text-2xl font-display font-bold text-white">Compare Your Client Staging Capacity</h3>
          <p className="text-xs text-slate-400">Drag the slider to adjust employee count and witness the active AI output transformation.</p>
        </div>

        {/* Dynamic ROI Slider */}
        <div className="max-w-2xl mx-auto p-4 bg-slate-900/60 rounded-xl border border-white/5 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-xs font-mono font-bold text-slate-300">Agency Team Employees:</span>
            <span className="text-sm font-bold text-brand-cyan font-mono">{employeeRatio} Employees</span>
          </div>
          <input 
            type="range" 
            min="1" 
            max="25" 
            value={employeeRatio}
            onChange={(e) => setEmployeeRatio(Number(e.target.value))}
            className="w-full h-1.5 bg-brand-black rounded-full appearance-none cursor-pointer accent-brand-cyan"
          />
        </div>

        {/* Graphic Comparison Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          
          <div className="p-5 bg-brand-black/40 rounded-xl border border-white/5 space-y-2">
            <div className="flex justify-between items-center text-xs font-mono font-semibold">
              <span className="text-rose-400">Traditional Delivery Capacity:</span>
              <span>{calculateBeforeWork()} sites / month</span>
            </div>
            <div className="h-6 bg-slate-900 rounded overflow-hidden relative flex items-center px-2">
              <motion.div 
                className="h-full bg-rose-500/20 absolute left-0 top-0" 
                style={{ width: `${Math.min(100, (calculateBeforeWork() / 500) * 100)}%` }} 
              />
              <span className="text-[10px] text-slate-400 z-10 font-mono font-bold">5 employees = 20 websites/month average</span>
            </div>
          </div>

          <div className="p-5 bg-brand-black/40 rounded-xl border border-brand-cyan/25 space-y-2">
            <div className="flex justify-between items-center text-xs font-mono font-bold">
              <span className="text-brand-cyan">AI-Powered Delivery Capacity:</span>
              <span className="text-brand-cyan">{calculateAfterWork()} sites / month</span>
            </div>
            <div className="h-6 bg-slate-900 rounded overflow-hidden relative flex items-center px-2 border border-brand-cyan/20">
              <motion.div 
                className="h-full bg-brand-cyan/25 absolute left-0 top-0" 
                style={{ width: `${Math.min(100, (calculateAfterWork() / 500) * 100)}%` }} 
              />
              <span className="text-[10px] text-brand-cyan z-10 font-mono font-bold">5 employees + AI = 100 websites/month scale</span>
            </div>
          </div>

        </div>
      </div>

      {/* CORE AGENT ROSTER */}
      <div className="space-y-6">
        <div>
          <span className="text-xs uppercase font-mono tracking-widest text-brand-cyan font-bold block">Consolidated specialized workforce</span>
          <h3 className="text-2xl font-display font-bold text-white mt-1">Unified Agent Infrastructure Services</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: AI Lead Agent */}
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-brand-indigo/30 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-indigo/15 border border-brand-indigo/20 flex items-center justify-center text-brand-indigo">
                <Cpu size={18} />
              </div>
              <h4 className="text-sm font-bold text-slate-100">AI Sales / Lead Agent</h4>
              <p className="text-[11px] text-slate-400 leading-normal">
                Continuous background crawler probing local business registries to detect responsive design failures automatically.
              </p>
              <ul className="space-y-1 text-[10px] text-slate-400 pt-1 border-t border-white/5">
                <li>• Pinpoints local service directories</li>
                <li>• Highlights missing viewport scalability</li>
                <li>• Rates target conversion leaks instantly</li>
              </ul>
            </div>
            <span className="text-[10px] text-brand-cyan font-mono font-bold tracking-widest uppercase">GrowthScout-v4</span>
          </div>

          {/* Card 2: AI Outreach Agent */}
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-brand-indigo/30 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-indigo/15 border border-brand-indigo/20 flex items-center justify-center text-brand-indigo">
                <Mail size={18} />
              </div>
              <h4 className="text-sm font-bold text-slate-100">AI Outreach Agent</h4>
              <p className="text-[11px] text-slate-400 leading-normal">
                Writes hyper-personalized introductory audits identifying technical bottlenecks to secure demo bookings.
              </p>
              <ul className="space-y-1 text-[10px] text-slate-400 pt-1 border-t border-white/5">
                <li>• Compiles tailored problem reviews</li>
                <li>• Coordinates continuous conversational followups</li>
                <li>• Syncs booked previews with account calendars</li>
              </ul>
            </div>
            <span className="text-[10px] text-brand-cyan font-mono font-bold tracking-widest uppercase">OutboxConnector</span>
          </div>

          {/* Card 3: AI Website Agent */}
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-brand-indigo/30 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-indigo/15 border border-brand-indigo/20 flex items-center justify-center text-brand-indigo">
                <LayoutGrid size={18} />
              </div>
              <h4 className="text-sm font-bold text-slate-100">AI Website Agent</h4>
              <p className="text-[11px] text-slate-400 leading-normal">
                Generates responsive static staging preview websites for prospect audits completely on the fly based on parameters.
              </p>
              <ul className="space-y-1 text-[10px] text-slate-400 pt-1 border-t border-white/5">
                <li>• Renders industry visual palettes</li>
                <li>• Injects direct reservation intake panels</li>
                <li>• Deploys live staging subpages instantly</li>
              </ul>
            </div>
            <span className="text-[10px] text-brand-cyan font-mono font-bold tracking-widest uppercase">VanguardBuilder</span>
          </div>

          {/* Card 4: AI Support Agent */}
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-brand-indigo/30 transition-all flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-brand-indigo/15 border border-brand-indigo/20 flex items-center justify-center text-brand-indigo">
                <MessageSquare size={18} />
              </div>
              <h4 className="text-sm font-bold text-slate-100">AI Client Success Sentry</h4>
              <p className="text-[11px] text-slate-400 leading-normal">
                Autonomous CRM ticket processor resolving copy alterations, pricing updates, and layout requests.
              </p>
              <ul className="space-y-1 text-[10px] text-slate-400 pt-1 border-t border-white/5">
                <li>• Intercepts incoming change requests</li>
                <li>• Tests layout alterations on isolate branches</li>
                <li>• Publishes commits and flushes edge caches</li>
              </ul>
            </div>
            <span className="text-[10px] text-brand-cyan font-mono font-bold tracking-widest uppercase">ClientSentry-Core</span>
          </div>

        </div>
      </div>

      {/* SAAS DASHBOARD DEMO SHOWCASE */}
      <div className="p-6 md:p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md space-y-6">
        <div>
          <span className="text-xs uppercase font-mono tracking-widest text-brand-cyan font-bold block">Dynamic preview</span>
          <h3 className="text-xl md:text-2xl font-display font-bold text-white mt-1">SaaS Dashboard Preview</h3>
          <p className="text-xs text-slate-404 text-slate-400">View real-time performance vectors managed autonomously by your active agent clusters.</p>
        </div>

        {/* Tab triggers */}
        <div className="flex gap-2.5 overflow-x-auto pb-1.5 border-b border-white/5">
          {[
            { id: 'agents', name: 'AI Agents Status' },
            { id: 'analytics', name: 'Operational Capacity' },
            { id: 'crm', name: 'CRM Pipeline Feed' }
          ].map(tab => (
            <button
              key={tab.id}
              type="button"
              id={`tab-dashboard-${tab.id}`}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 text-xs font-semibold tracking-wide rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                activeTab === tab.id 
                  ? 'bg-brand-indigo text-white shadow-lg shadow-brand-indigo/20' 
                  : 'bg-white/[0.02] text-slate-400 border border-white/5 hover:text-white'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Simulated Display Screens */}
        <div className="p-6 rounded-2xl bg-brand-black/95 border border-white/5 min-h-[260px] flex flex-col justify-between">
          
          {activeTab === 'agents' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-white/5">
                <span>ACTIVE AUTONOMOUS SERVICE CLUSTERS</span>
                <span className="text-emerald-400 flex items-center gap-1 font-bold">● SERVICES ONLINE ON AUTOPILOT</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                
                <div className="p-3 bg-white/[0.02] rounded-xl border border-white/5 space-y-1.5">
                  <div className="flex justify-between items-center text-[10px] text-slate-500 font-mono">
                    <span>AG-CRAWL-SCOUT [ONLINE]</span>
                    <span className="text-emerald-400">98% efficiency</span>
                  </div>
                  <h4 className="text-xs font-bold text-white">49 Regional Nodes Swept</h4>
                  <p className="text-[10px] text-slate-400 leading-normal">Scanned local directories and highlighted 12 outdated target profiles.</p>
                </div>

                <div className="p-3 bg-white/[0.02] rounded-xl border border-white/5 space-y-1.5">
                  <div className="flex justify-between items-center text-[10px] text-slate-500 font-mono">
                    <span>AG-OUTBOX [ACTIVE]</span>
                    <span className="text-brand-cyan">Synthesizing audits</span>
                  </div>
                  <h4 className="text-xs font-bold text-white">18 Custom Proposals Dispatched</h4>
                  <p className="text-[10px] text-slate-400 leading-normal">Compiled tailored emails outlining viewport issues to prospect addresses.</p>
                </div>

                <div className="p-3 bg-white/[0.02] rounded-xl border border-white/5 space-y-1.5">
                  <div className="flex justify-between items-center text-[10px] text-slate-500 font-mono">
                    <span>CLIENT-SENTRY [IDLE]</span>
                    <span className="text-slate-400">Monitoring SLAs</span>
                  </div>
                  <h4 className="text-xs font-bold text-white">6 Support Requests Handled</h4>
                  <p className="text-[10px] text-slate-400 leading-normal font-light">Successfully patched copy styling adjustments to target branches automatically.</p>
                </div>

              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-white/5 font-mono">
                <span>KPI OPERATIONAL CAPACITY & AGENT COMPLIANCE RATIOS</span>
                <span className="text-brand-cyan font-bold">ACTIVE ROAS MULTIPLIER</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5 text-center">
                  <span className="text-xs text-slate-400 block font-mono uppercase">Tasks Completed</span>
                  <span className="text-2xl font-bold font-display text-white block mt-1">1,420</span>
                  <span className="text-[9px] text-emerald-400 font-mono font-bold">+240 this week</span>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5 text-center">
                  <span className="text-xs text-slate-400 block font-mono uppercase">Generated Leads</span>
                  <span className="text-2xl font-bold font-display text-white block mt-1">324</span>
                  <span className="text-[9px] text-brand-cyan font-mono font-bold">Average confidence: 91%</span>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5 text-center">
                  <span className="text-xs text-slate-400 block font-mono uppercase">Active Client Sites</span>
                  <span className="text-2xl font-bold font-display text-white block mt-1">42</span>
                  <span className="text-[9px] text-emerald-400 font-mono font-bold">Active SLA Uptime: 99.998%</span>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.01] border border-white/5 text-center">
                  <span className="text-xs text-slate-400 block font-mono uppercase">Campaign ROI Lift</span>
                  <span className="text-2xl font-bold font-display text-white block mt-1">4.2x</span>
                  <span className="text-[9px] text-brand-cyan font-mono font-bold">Conversion optimization rate</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'crm' && (
            <div className="space-y-4 text-xs text-slate-300">
              <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-white/5">
                <span>REAL-TIME CLIENT INTERACTIVE SYSTEM FEED</span>
                <span className="text-xs font-mono text-brand-cyan font-bold">INTERVAL: 1 SEC</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2.5 bg-white/[0.02] rounded-lg border border-white/5">
                  <span className="font-bold text-white">Apex Auto Repair</span>
                  <span className="text-slate-400 font-mono">[scouted] Custom proposal brief compiled</span>
                  <span className="text-brand-cyan font-mono">Lead Score: 92%</span>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-white/[0.02] rounded-lg border border-white/5">
                  <span className="font-bold text-white">Luxe Salon & Spa</span>
                  <span className="text-emerald-400 font-mono font-semibold">[resolved] Pricing adjustment published</span>
                  <span className="text-slate-500 font-mono">SLA duration: 4.8s</span>
                </div>
                <div className="flex items-center justify-between p-2.5 bg-white/[0.02] rounded-lg border border-white/5">
                  <span className="font-bold text-white">Prestige Legal Advisors</span>
                  <span className="text-slate-400 font-mono">[pending] Mobile viewport scan compiled</span>
                  <span className="text-brand-indigo font-mono">Confidence: 78%</span>
                </div>
              </div>
            </div>
          )}

          <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-500 font-mono">
            <span>Platform License status: Active Enterprise Tier</span>
            <span>Uptime monitored programmatically under 2026 SLAs</span>
          </div>

        </div>
      </div>

      {/* SCHEDULE DEMO PANEL */}
      <div id="enterprise-contact-anchor" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <div className="lg:col-span-5 space-y-6">
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-brand-cyan font-bold block">Enterprise Onboarding</span>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white leading-tight">Scale Your Digital Workforce Hub</h3>
          </div>
          <p className="text-sm text-slate-404 text-slate-400 leading-relaxed font-light">
            Assign unified agent configurations to scan, contact, adjust, and automaintain active digital client assets continuously. Connect your master design styles and route platform actions seamlessly via Slack, CRM or custom external webhooks.
          </p>

          <div className="space-y-4">
            <div className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-indigo/15 text-brand-cyan flex items-center justify-center text-xs shrink-0 font-bold">✓</span>
              <p className="text-xs text-slate-300 font-bold">Retain 100% white-label client-facing deployment credit</p>
            </div>
            <div className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-indigo/15 text-brand-cyan flex items-center justify-center text-xs shrink-0 font-bold">✓</span>
              <p className="text-xs text-slate-300 font-bold">Automatic viewport accessibility and testing validators</p>
            </div>
            <div className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-brand-indigo/15 text-brand-cyan flex items-center justify-center text-xs shrink-0 font-bold">✓</span>
              <p className="text-xs text-slate-300 font-bold">Access unrestricted regional lead harvesting sweeps</p>
            </div>
          </div>
        </div>

        {/* Dynamic Multi-Step Enterprise Form */}
        <div className="lg:col-span-12 xl:col-span-7 p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/10 shadow-2xl relative">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form 
                key="ent-form"
                onSubmit={handleEnterpriseSubmit} 
                className="space-y-4 text-slate-200"
              >
                <h4 className="text-lg font-display font-bold text-white">Select Your Agency Scaling Strategy</h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1 font-mono">Your Name</label>
                    <input 
                      type="text" 
                      id="ent-field-name"
                      required
                      value={entName}
                      onChange={e => setEntName(e.target.value)}
                      placeholder="Marcus Vance" 
                      className="w-full text-xs bg-brand-black border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-brand-indigo font-semibold"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1 font-mono">Agency Team Name</label>
                    <input 
                      type="text" 
                      id="ent-field-company"
                      required
                      value={entCompany}
                      onChange={e => setEntCompany(e.target.value)}
                      placeholder="Vance Media Group" 
                      className="w-full text-xs bg-brand-black border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-brand-indigo font-semibold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1 font-mono">Internal Team Size</label>
                    <select
                      id="ent-field-teamsize"
                      value={entTeamSize}
                      onChange={e => setEntTeamSize(e.target.value)}
                      className="w-full text-xs bg-brand-black border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-brand-indigo appearance-none"
                    >
                      <option>1-10 members</option>
                      <option>11-50 members</option>
                      <option>51-200 members</option>
                      <option>200+ members</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1 font-mono">Corporate Email Address</label>
                    <input 
                      type="email" 
                      id="ent-field-email"
                      required
                      value={entEmail}
                      onChange={e => setEntEmail(e.target.value)}
                      placeholder="marcus@vancemedia.co" 
                      className="w-full text-xs bg-brand-black border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-brand-indigo font-semibold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1 font-mono">Callback Phone Details</label>
                    <input 
                      type="tel" 
                      id="ent-field-phone"
                      required
                      value={entPhone}
                      onChange={e => setEntPhone(e.target.value)}
                      placeholder="+1 (415) 555-0812" 
                      className="w-full text-xs bg-brand-black border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-brand-indigo font-semibold"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1 font-mono">Target Monthly Release Volume</label>
                    <select
                      id="ent-field-volume"
                      value={entVolume}
                      onChange={e => setEntVolume(e.target.value)}
                      className="w-full text-xs bg-brand-black border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-brand-indigo appearance-none"
                    >
                      <option>1-5 clients/mo</option>
                      <option>6-15 clients/mo</option>
                      <option>16-50 clients/mo</option>
                      <option>50+ clients/mo</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1 font-mono">Briefly describe your scaling target / workflow parameters</label>
                  <textarea
                    rows={2}
                    id="ent-field-message"
                    value={entMessage}
                    onChange={e => setEntMessage(e.target.value)}
                    placeholder="We want to automate local business prospecting and deploy visual support CRM ticket automations..." 
                    className="w-full text-xs bg-brand-black border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-brand-indigo resize-none font-semibold"
                  />
                </div>

                {/* Built-in Calendar Selection block */}
                <div className="p-4 bg-brand-black rounded-xl border border-white/5 space-y-2.5">
                  <span className="text-[10px] font-mono uppercase text-brand-cyan tracking-wider font-bold block">
                    ⚡ Lock Custom Briefing Date & Time Window (Calendar Component)
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[9px] uppercase text-slate-500 font-mono block mb-1">Pick Date</label>
                      <input
                        type="date"
                        id="ent-field-demo-date"
                        value={demoDate}
                        onChange={e => setDemoDate(e.target.value)}
                        className="w-full bg-slate-900 border border-white/10 rounded px-2.5 py-1.5 text-xs text-slate-200 font-semibold"
                      />
                    </div>
                    <div>
                      <label className="text-[9px] uppercase text-slate-500 font-mono block mb-1">Pick Time Slot</label>
                      <select
                        id="ent-field-demo-time"
                        value={demoTime}
                        onChange={e => setDemoTime(e.target.value)}
                        className="w-full bg-slate-900 border border-white/10 rounded px-2.5 py-1.5 text-xs text-slate-200 font-semibold"
                      >
                        <option>09:30 AM</option>
                        <option>11:00 AM</option>
                        <option>01:30 PM</option>
                        <option>03:00 PM</option>
                        <option>04:30 PM</option>
                      </select>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  id="btn-schedule-enterprise-demo-verified"
                  className="w-full py-3 bg-gradient-to-r from-brand-indigo to-brand-cyan hover:brightness-110 active:scale-[0.99] text-brand-black font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  Schedule Enterprise Demo Slot
                  <ArrowRight size={14} className="animate-pulse" />
                </button>
              </motion.form>
            ) : (
              <motion.div 
                key="ent-success-window"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 space-y-4"
              >
                <div className="w-12 h-12 rounded-full bg-brand-cyan/15 border border-brand-cyan/20 text-brand-cyan flex items-center justify-center mx-auto text-xl font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="text-xl font-display font-extrabold text-white">Platform Briefing Locked</h4>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto mt-2 leading-relaxed">
                    Thank you <b>{entName}</b>! Your custom briefing session for <b>{entCompany}</b> is successfully registered for <b>{demoDate}</b> at <b>{demoTime}</b>.
                  </p>
                </div>
                <div className="p-4 bg-brand-black rounded-lg max-w-sm mx-auto border border-white/5 text-left space-y-1.5 font-mono text-[10px]">
                  <div className="text-slate-500">⚡ Live scaling sync logs:</div>
                  <div className="text-brand-cyan">● Compiled custom enterprise scalability playbook for {entCompany.toLowerCase().replace(/\s+/g, '')}</div>
                  <div className="text-brand-cyan">● Demo slot registered and locked in continuous calendar (SLA: EN-V2)</div>
                  <div className="text-slate-400">● Forwarded direct webhook credentials to {entEmail}</div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs text-slate-400 hover:text-white underline cursor-pointer"
                >
                  Modify scheduling parameters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

    </div>
  );
}
