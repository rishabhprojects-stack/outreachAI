import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Globe, Shield, RefreshCw, Zap, ArrowRight, CheckCircle2, 
  Calendar, Phone, Clock, Mail, ChevronRight, AlertCircle, HelpCircle, Laptop, Landmark, ShieldCheck
} from 'lucide-react';

export default function B2CPlatform() {
  // Demo interactive states
  const [demoName, setDemoName] = useState('');
  const [demoCompany, setDemoCompany] = useState('');
  const [demoIndustry, setDemoIndustry] = useState('');
  const [demoWebsite, setDemoWebsite] = useState('');
  const [demoChallenge, setDemoChallenge] = useState('');
  const [demoEmail, setDemoEmail] = useState('');
  const [demoPhone, setDemoPhone] = useState('');
  const [isDemoSubmitted, setIsDemoSubmitted] = useState(false);

  // Callback modal or inline states
  const [showCallbackForm, setShowCallbackForm] = useState(false);
  const [callbackTime, setCallbackTime] = useState('10:00 AM');
  const [callbackDay, setCallbackDay] = useState('Tomorrow');
  const [callbackPhone, setCallbackPhone] = useState('');
  const [isCallbackScheduled, setIsCallbackScheduled] = useState(false);

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!demoName || !demoCompany || !demoEmail || !demoPhone) return;
    setIsDemoSubmitted(true);
  };

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!callbackPhone) return;
    setIsCallbackScheduled(true);
  };

  return (
    <div id="digital-growth-solutions-page" className="space-y-20">
      
      {/* Page Header / Message */}
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-white/10 text-xs text-brand-cyan">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
          <span className="text-[10px] uppercase font-mono font-bold tracking-widest">OUTREACHAI FOR BUSINESS GROWTH</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-display font-medium text-white tracking-tight leading-tight font-bold">
          "I no longer need to worry about<br />
          <span className="bg-gradient-to-r from-brand-indigo to-brand-cyan bg-clip-text text-transparent">
            my digital presence."
          </span>
        </h2>
        <p className="text-sm md:text-base text-slate-400">
          The ultimate automated operating system for local and modern businesses. Never hire slow designers, stress over complex server setup, or pay massive agency margins again. Our autonomous agents launch and optimize your complete visual assets 24/7.
        </p>
      </div>

      {/* THREE CORE AGENT DECK (Website, Outreach, Marketing) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Card 1: Website Agent */}
        <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 relative overflow-hidden backdrop-blur-md hover:border-brand-indigo/40 transition-all flex flex-col justify-between">
          <div className="space-y-6">
            <div className="w-12 h-12 rounded-xl bg-brand-indigo/15 border border-brand-indigo/20 flex items-center justify-center text-brand-indigo">
              <Laptop size={22} />
            </div>
            <div>
              <h3 className="text-lg font-display font-extrabold text-white">AI Website Agent</h3>
              <p className="text-xs text-slate-400 mt-1">Stops developer management bottlenecks. Autonomously deploys pixel-perfect responsive layouts on command.</p>
            </div>
            
            <div className="space-y-3 pt-2">
              {[
                { title: 'Creates Modern Brand Layouts', desc: 'Sleek visual styling built matching your business industry automatically.' },
                { title: 'Mobile & Speed Optimized', desc: 'High conversion loading metrics ensuring customer retention across smartphones.' },
                { title: 'Continuous Live Updates', desc: 'Add paragraphs, menu products, or adjust service prices instantly on demand.' },
                { title: 'Zero Coding Required', desc: 'No servers, setup domains, or databases to configure. We oversee the stack.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-2.5 items-start">
                  <div className="w-4 h-4 rounded-full bg-brand-indigo/25 text-brand-cyan flex items-center justify-center text-[10px] shrink-0 mt-0.5">✓</div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-200">{item.title}</h4>
                    <p className="text-[10px] text-slate-400 font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
            <span className="text-[10px] uppercase font-mono tracking-widest text-brand-cyan font-bold">STATUS: COMPLETED</span>
            <span className="text-[9px] text-slate-500 font-mono">DEPLOYMENT: INSTANT</span>
          </div>
        </div>

        {/* Card 2: Marketing Agent */}
        <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 relative overflow-hidden backdrop-blur-md hover:border-brand-cyan/40 transition-all flex flex-col justify-between">
          <div className="space-y-6">
            <div className="w-12 h-12 rounded-xl bg-brand-cyan/15 border border-brand-cyan/20 flex items-center justify-center text-brand-cyan">
              <Globe size={22} />
            </div>
            <div>
              <h3 className="text-lg font-display font-extrabold text-white">AI Marketing Agent</h3>
              <p className="text-xs text-slate-400 mt-1 font-light">Eliminates agency spend. Manages target search keywords, campaigns, and conversions autonomously.</p>
            </div>

            <div className="space-y-3 pt-2">
              {[
                { title: 'Continuous SEO Optimization', desc: 'Pushes Google Maps parameters, ranks keywords, and captures area leads.' },
                { title: 'Unified Conversion Funnels', desc: 'Gathers visitor interest and organizes direct client requests securely.' },
                { title: 'Omnichannel Campaigns', desc: 'Autogenerates high-performing local promo briefs with zero manual overhead.' },
                { title: 'Uptime Monitoring Included', desc: '24/7 background security audits ensuring continuous uptime rates.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-2.5 items-start">
                  <div className="w-4 h-4 rounded-full bg-brand-cyan/25 text-brand-cyan flex items-center justify-center text-[10px] shrink-0 mt-0.5">✓</div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-200">{item.title}</h4>
                    <p className="text-[10px] text-slate-400 font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
            <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-400 font-bold">SLA: 100% RELIABLE</span>
            <span className="text-[9px] text-slate-500 font-mono">MONITOR: CONTINUOUS</span>
          </div>
        </div>

        {/* Card 3: Client Success Agent */}
        <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 relative overflow-hidden backdrop-blur-md hover:border-brand-indigo/40 transition-all flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400">
                <Sparkles size={22} className="text-pink-400 animate-pulse" />
              </div>
              <span className="text-[9px] uppercase font-mono tracking-wider font-bold bg-pink-500/10 text-pink-400 border border-pink-500/20 px-2 py-0.5 rounded">
                Active System
              </span>
            </div>
            <div>
              <h3 className="text-lg font-display font-extrabold text-white">AI Client Success Agent</h3>
              <p className="text-xs text-slate-400 mt-1 font-light">Resolves pricing sheet edits and feature adjustments inside an integrated workspace console.</p>
            </div>

            <div className="space-y-2 pt-2 text-xs text-slate-300 font-light">
              <p className="font-mono text-[10px] text-pink-300 uppercase tracking-widest font-bold">Agents will automatically:</p>
              <ul className="space-y-1.5 text-[11px] text-slate-400">
                <li className="flex items-center gap-1.5">• Intercept client-facing ticketing queues</li>
                <li className="flex items-center gap-1.5">• Run isolated design sandbox test validations</li>
                <li className="flex items-center gap-1.5">• Modify pricing, copy descriptions, and image assets</li>
                <li className="flex items-center gap-1.5">• Trigger immediate cache flushes on production lines</li>
                <li className="flex items-center gap-1.5">• Send automated notifications to client mailboxes</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-white/5 text-[10px] font-mono text-center text-slate-500 font-bold">
            INTEGRATED WORKSTATION SLA ACTIVE
          </div>
        </div>

      </div>

      {/* FREE AI BUSINESS PREVIEW FORM */}
      <div className="p-8 bg-white/[0.02] border border-white/10 rounded-3xl relative overflow-hidden max-w-4xl mx-auto shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-indigo/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          <div className="md:col-span-12 lg:col-span-12 xl:lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs uppercase font-mono tracking-widest font-bold text-brand-cyan">Free AI Business Preview</span>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mt-1">See what your business could look like before you commit.</h3>
              <p className="text-xs text-slate-350 text-slate-400 leading-relaxed mt-2 font-light">
                Provide your basic business parameters, and our autonomous agent workforce will generate a custom proposed digital layout strategy outlining personalized copy, customer capture structures, and local performance benchmarks.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex gap-2">
                <span className="w-5 h-5 rounded-full bg-brand-indigo/20 text-brand-cyan flex items-center justify-center text-xs shrink-0 font-bold">✓</span>
                <p className="text-xs text-slate-300 font-semibold font-bold">Strategy blueprint ready in seconds</p>
              </div>
              <div className="flex gap-2">
                <span className="w-5 h-5 rounded-full bg-brand-indigo/20 text-brand-cyan flex items-center justify-center text-xs shrink-0 font-bold">✓</span>
                <p className="text-xs text-slate-300 font-semibold font-bold">Complete local competitive benchmark audit</p>
              </div>
            </div>

            <div className="p-4 bg-slate-900/60 border border-white/5 rounded-xl space-y-3">
              <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                <Clock size={14} className="text-brand-indigo animate-spin" style={{ animationDuration: '6s' }} />
                Instant Callback Scheduling
              </h4>
              <p className="text-[11px] text-slate-400 leading-relaxed font-light">
                Prefer discussing custom operational requirements directly with a strategic growth systems manager? Request a direct callback slot.
              </p>
              
              {!showCallbackForm && !isCallbackScheduled && (
                <button
                  type="button"
                  id="btn-trigger-callback-show"
                  onClick={() => setShowCallbackForm(true)}
                  className="text-xs text-brand-cyan font-bold hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  <Calendar size={12} />
                  Book free strategic consult window
                </button>
              )}

              {showCallbackForm && !isCallbackScheduled && (
                <form onSubmit={handleCallbackSubmit} className="space-y-2 mt-2">
                  <div className="grid grid-cols-2 gap-2">
                    <select
                      id="callback-day"
                      value={callbackDay}
                      onChange={e => setCallbackDay(e.target.value)}
                      className="bg-brand-black border border-white/10 rounded px-2 py-1 text-[11px] text-slate-200"
                    >
                      <option>Tomorrow</option>
                      <option>Next Monday</option>
                      <option>Next Wednesday</option>
                    </select>
                    <select
                      id="callback-time"
                      value={callbackTime}
                      onChange={e => setCallbackTime(e.target.value)}
                      className="bg-brand-black border border-white/10 rounded px-2 py-1 text-[11px] text-slate-200"
                    >
                      <option>09:00 AM</option>
                      <option>11:00 AM</option>
                      <option>02:00 PM</option>
                      <option>04:00 PM</option>
                    </select>
                  </div>
                  <div>
                    <input
                      type="tel"
                      id="callback-phone-field"
                      placeholder="Your Phone Number"
                      required
                      value={callbackPhone}
                      onChange={e => setCallbackPhone(e.target.value)}
                      className="w-full bg-brand-black border border-white/10 rounded px-2.5 py-1 text-[11px] text-slate-100"
                    />
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="submit"
                      id="btn-submit-callback-form"
                      className="px-3 py-1 bg-brand-cyan hover:bg-brand-cyan/80 text-brand-black text-[10px] font-bold rounded"
                    >
                      Schedule Call
                    </button>
                    <button
                      type="button"
                      id="btn-cancel-callback-form"
                      onClick={() => setShowCallbackForm(false)}
                      className="px-3 py-1 bg-slate-800 text-slate-300 text-[10px] rounded"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}

              {isCallbackScheduled && (
                <div className="p-2.5 bg-emerald-500/10 text-emerald-400 text-[11px] font-bold flex items-center gap-1.5 rounded border border-emerald-500/20">
                  <CheckCircle2 size={12} />
                  <span>Callback successfully scheduled for {callbackDay} at {callbackTime}.</span>
                </div>
              )}
            </div>
          </div>

          {/* REWORKED FORM MATCHING REQUEST */}
          <div className="md:col-span-12 lg:col-span-12 xl:col-span-7 bg-brand-graphite p-6 md:p-8 rounded-2xl border border-white/5 shadow-inner">
            <AnimatePresence mode="wait">
              {!isDemoSubmitted ? (
                <motion.form 
                  key="b2c-demo-form"
                  onSubmit={handleDemoSubmit} 
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1 font-mono">Your Name</label>
                      <input 
                        type="text" 
                        id="b2c-demo-field-name"
                        required
                        value={demoName}
                        onChange={e => setDemoName(e.target.value)}
                        placeholder="Rachel Taylor" 
                        className="w-full text-xs bg-brand-black border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-brand-indigo font-medium"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1 font-mono">Business Name</label>
                      <input 
                        type="text" 
                        id="b2c-demo-field-company"
                        required
                        value={demoCompany}
                        onChange={e => setDemoCompany(e.target.value)}
                        placeholder="Prime Dental Care" 
                        className="w-full text-xs bg-brand-black border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-brand-indigo font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1 font-mono">Industry</label>
                      <input 
                        type="text" 
                        id="b2c-demo-field-industry"
                        required
                        value={demoIndustry}
                        onChange={e => setDemoIndustry(e.target.value)}
                        placeholder="Healthcare Services" 
                        className="w-full text-xs bg-brand-black border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-brand-indigo font-medium"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1 font-mono">Current Website <span className="text-slate-500 font-normal font-sans">(Optional)</span></label>
                      <input 
                        type="url" 
                        id="b2c-demo-field-website"
                        value={demoWebsite}
                        onChange={e => setDemoWebsite(e.target.value)}
                        placeholder="https://primedental.com" 
                        className="w-full text-xs bg-brand-black border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-brand-indigo font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1 font-mono">Biggest Digital Challenge</label>
                    <textarea 
                      rows={2}
                      id="b2c-demo-field-challenge"
                      required
                      value={demoChallenge}
                      onChange={e => setDemoChallenge(e.target.value)}
                      placeholder="e.g., We are losing too many dental inquiries on mobile viewports and manual follow-ups are slow..." 
                      className="w-full text-xs bg-brand-black border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-brand-indigo resize-none font-medium"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1 font-mono">Email Details</label>
                      <input 
                        type="email" 
                        id="b2c-demo-field-email"
                        required
                        value={demoEmail}
                        onChange={e => setDemoEmail(e.target.value)}
                        placeholder="rachel@primedental.com" 
                        className="w-full text-xs bg-brand-black border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-brand-indigo font-medium"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase font-bold text-slate-400 block mb-1 font-mono">Phone Details</label>
                      <input 
                        type="tel" 
                        id="b2c-demo-field-phone"
                        required
                        value={demoPhone}
                        onChange={e => setDemoPhone(e.target.value)}
                        placeholder="+1 (415) 555-8329" 
                        className="w-full text-xs bg-brand-black border border-white/10 rounded-lg px-3 py-2.5 text-white focus:outline-none focus:border-brand-indigo font-medium"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    id="btn-trigger-b2c-demo-submit-verified"
                    className="w-full py-3.5 bg-gradient-to-r from-brand-indigo to-brand-cyan hover:brightness-110 active:scale-[0.99] text-brand-black font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    Generate My Digital Strategy
                    <ArrowRight size={14} className="animate-pulse" />
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="b2c-demo-success-window"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-6 space-y-4"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500/15 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-xl">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-lg font-display font-bold text-white">Your Growth Strategy is Generating!</h4>
                    <p className="text-xs text-slate-400 max-w-sm mx-auto mt-1 leading-relaxed">
                      Thank you! Our agents are scanning <b>{demoCompany}</b> regarding the challenge: "<i>{demoChallenge}</i>". We will deliver your private strategy and staging workspace index within minutes.
                    </p>
                  </div>
                  <div className="p-4 bg-brand-black rounded-lg max-w-xs mx-auto border border-white/5 text-left space-y-1.5 font-mono text-[10px]">
                    <div className="text-slate-400">⚡ Core-Agent active metrics:</div>
                    <div className="text-emerald-400">● Requirements analyzed (Industry: {demoIndustry})</div>
                    <div className="text-emerald-400">● Setup temporary staging model: {demoCompany.toLowerCase().replace(/\s+/g, '')}-strategy</div>
                    <div className="text-slate-500">● Forwarded direct assessment credentials to {demoEmail}...</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsDemoSubmitted(false)}
                    className="text-xs text-slate-400 hover:text-white underline font-semibold cursor-pointer"
                  >
                    Submit another custom challenge
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>

    </div>
  );
}
