import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Search, Mail, Cpu, Play, 
  Layers, Users, CheckCircle, Clock, Send, 
  Code, AlertCircle, RefreshCw, BarChart2, ShieldAlert, Laptop, Activity, CheckCircle2, CheckSquare, Settings
} from 'lucide-react';
import { LeadItem, TicketItem } from '../types';

const INITIAL_LEADS: LeadItem[] = [
  { id: 'lead-1', businessName: 'Apex Auto Repair', industry: 'Automotive', opportunityScore: 92, issuesFound: ['No mobile layout', 'No SSL', 'Page load > 5s'], status: 'pending', outreachEmail: '' },
  { id: 'lead-2', businessName: 'Bella Vista Ristorante', industry: 'Hospitality', opportunityScore: 88, issuesFound: ['Missing online booking', 'Outdated design (2018)', 'Poor SEO keyword ranking'], status: 'pending', outreachEmail: '' },
  { id: 'lead-3', businessName: 'Luxe Salon & Spa', industry: 'Wellness', opportunityScore: 95, issuesFound: ['No Google Maps pin', 'Contact form failing', 'Broken subpages'], status: 'pending', outreachEmail: '' },
  { id: 'lead-4', businessName: 'Prestige Legal Advisors', industry: 'Professional Services', opportunityScore: 78, issuesFound: ['Slow TTFB server latency', 'Outdated layout colors', 'Unsecured forms'], status: 'pending', outreachEmail: '' }
];

const INITIAL_TICKETS: TicketItem[] = [
  { 
    id: 't-1', 
    clientName: 'Apex Auto Repair', 
    requestText: 'Add an emergency same-day oil change booking button to our homepage.', 
    status: 'open', 
    timestamp: '10 mins ago',
    agentLogs: []
  },
  { 
    id: 't-2', 
    clientName: 'Luxe Salon & Spa', 
    requestText: 'Update our seasonal pricing. Classic blowout is now $65, and signature facial is $110.', 
    status: 'resolved', 
    timestamp: '2 hours ago',
    agentLogs: [
      'Customer pricing revision request received.',
      'Website Agent matched elements: Blowout Class, Facials.',
      'Identified configuration parameters successfully.',
      'Modified visual values on branch staging.',
      'Pushed live. Staged cache clusters sync finalized.',
      'Confirmation sent to client inbox automatically.'
    ]
  }
];

export default function InteractiveCRM() {
  const [leads, setLeads] = useState<LeadItem[]>(INITIAL_LEADS);
  const [tickets, setTickets] = useState<TicketItem[]>(INITIAL_TICKETS);
  
  // Refined outcome-focused live action logs for non-tech CEO appeal
  const [activityFeed, setActivityFeed] = useState<Array<{ id: string; agent: string; message: string; type: 'success' | 'info' | 'alert'; time: string }>>([
    { id: 'act-1', agent: 'Client Success Agent', message: 'Uptime monitoring sweep completed. All client platforms online.', type: 'success', time: '10:00 AM' },
    { id: 'act-2', agent: 'Marketing Agent', message: 'Optimized campaign performance. Click-through performance boosted by 23%.', type: 'info', time: '10:02 AM' },
    { id: 'act-3', agent: 'Growth Agent', message: 'Generated 52 potential customers within regional medical and auto-repair hubs.', type: 'success', time: '10:05 AM' },
    { id: 'act-4', agent: 'Website Agent', message: 'Homepage redesign completed and verified across 12 mobile viewports.', type: 'info', time: '10:07 AM' }
  ]);

  const [isScanning, setIsScanning] = useState(false);
  const [isWritingOutreach, setIsWritingOutreach] = useState(false);
  const [isResolvingTicket, setIsResolvingTicket] = useState(false);
  const [activeLeadIndex, setActiveLeadIndex] = useState<number | null>(null);
  const [selectedTicketId, setSelectedTicketId] = useState<string>('t-1');
  const [isCustomTicketFormOpen, setIsCustomTicketFormOpen] = useState(false);
  const [customClientName, setCustomClientName] = useState('');
  const [customTicketBody, setCustomTicketBody] = useState('');

  const feedEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (feedEndRef.current) {
      feedEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activityFeed]);

  const pushActivity = (agent: string, message: string, type: 'success' | 'info' | 'alert') => {
    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    setActivityFeed(prev => [...prev, {
      id: `act-${Date.now()}-${Math.random()}`,
      agent,
      message,
      type,
      time: timeStr
    }]);
  };

  const startLeadScan = () => {
    if (isScanning) return;
    setIsScanning(true);
    pushActivity('Growth Agent', 'Initiated regional network sweep. Evaluating regional service registries...', 'info');
    
    let currentStep = 0;
    const steps = [
      { agent: 'Growth Agent', message: 'Scanning local directories & domain header records...', type: 'info' },
      { agent: 'Website Agent', message: 'Analyzing mobile layout ratios and SSL configuration certificates...', type: 'info' },
      { agent: 'Growth Agent', message: 'Discovered high-opportunity targets with critical viewport failures.', type: 'success' }
    ];

    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        pushActivity(steps[currentStep].agent, steps[currentStep].message, steps[currentStep].type as any);
        currentStep++;
      } else {
        clearInterval(interval);
        setIsScanning(false);
        // Refresh opportunity metrics
        setLeads(prev => prev.map(lead => ({
          ...lead,
          opportunityScore: Math.min(100, lead.opportunityScore + Math.floor(Math.random() * 4))
        })));
        pushActivity('Growth Agent', 'Opportunity feed list successfully updated with new prospect matrices.', 'success');
      }
    }, 1100);
  };

  const triggerOutreach = (leadId: string, index: number) => {
    if (isWritingOutreach) return;
    setIsWritingOutreach(true);
    setActiveLeadIndex(index);
    const lead = leads.find(l => l.id === leadId)!;
    pushActivity('Outreach Agent', `Drafting personalized strategic expansion audit for "${lead.businessName}" (${lead.industry})...`, 'info');

    let step = 0;
    const steps = [
      { agent: 'Outreach Agent', message: `Mapping solutions for identified failures: [${lead.issuesFound.join(', ')}]`, type: 'info' },
      { agent: 'Marketing Agent', message: 'Synthesized tailored opportunity proposal copy. Custom staging assets linked.', type: 'success' },
      { agent: 'Outreach Agent', message: 'Autonomous outbound briefing finalized and dispatched.', type: 'success' }
    ];

    const interval = setInterval(() => {
      if (step < steps.length) {
        pushActivity(steps[step].agent, steps[step].message, steps[step].type as any);
        step++;
      } else {
        clearInterval(interval);
        setIsWritingOutreach(false);
        setLeads(prev => prev.map(l => {
          if (l.id === leadId) {
            return {
              ...l,
              status: 'outreached',
              outreachEmail: `Subject: Strategic Growth Upgrade proposal for ${lead.businessName}

Hi Team,

I visited your web anchor today and noticed critical responsive formatting barriers on mobile Viewports, combined with missing secure SSL protocols. These limit your ranking.

We have drafted a serverless, custom booking layout for ${lead.businessName} resolving these errors and improving loading speed by 440%. Let's secure a free sandbox review.

Autonomous Operations Team,
OutReachAI Agent Cluster`
            };
          }
          return l;
        }));
        pushActivity('Outreach Agent', `Personalized audit dispatched successfully to client mailbox for ${lead.businessName}!`, 'success');
      }
    }, 1000);
  };

  const runTicketAutoResolve = (ticketId: string) => {
    if (isResolvingTicket) return;
    setIsResolvingTicket(true);
    const targetTicket = tickets.find(t => t.id === ticketId)!;
    pushActivity('Client Success Agent', `Intercepting client request for "${targetTicket.clientName}"...`, 'info');

    let idx = 0;
    const logsAdded: string[] = [];
    const steps = [
      'Scanning local files for visual adjustments...',
      'DevSentry-Agent compiling modified visual assets...',
      'Validating layout contrast ratios and mobile responsiveness limits...',
      'Deploying secure commit branch & flushing serverless edge caches...'
    ];

    const interval = setInterval(() => {
      if (idx < steps.length) {
        const line = steps[idx];
        pushActivity('Client Success Agent', line, 'info');
        logsAdded.push(line);
        setTickets(prev => prev.map(t => {
          if (t.id === ticketId) {
            return { ...t, status: 'resolving', agentLogs: [...logsAdded] };
          }
          return t;
        }));
        idx++;
      } else {
        clearInterval(interval);
        setIsResolvingTicket(false);
        setTickets(prev => prev.map(t => {
          if (t.id === ticketId) {
            return { 
              ...t, 
              status: 'resolved', 
              agentLogs: [...logsAdded, 'Task finalized. Ticket verified closed under live SLAs. Time to resolve: 4.8s'] 
            };
          }
          return t;
        }));
        pushActivity('Client Success Agent', `Successfully published homepage adjustment ticket for ${targetTicket.clientName}! Changes live in 4.8 seconds.`, 'success');
      }
    }, 1000);
  };

  const handleCreateCustomTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customClientName || !customTicketBody) return;
    const newId = `t-${Date.now()}`;
    const newTicket: TicketItem = {
      id: newId,
      clientName: customClientName,
      requestText: customTicketBody,
      status: 'open',
      timestamp: 'Just now',
      agentLogs: []
    };
    setTickets(prev => [newTicket, ...prev]);
    setSelectedTicketId(newId);
    setCustomClientName('');
    setCustomTicketBody('');
    setIsCustomTicketFormOpen(false);
    pushActivity('Client Success Agent', `Received simulated adjustment ticket from "${customClientName}": "${customTicketBody}"`, 'info');
  };

  const activeTicket = tickets.find(t => t.id === selectedTicketId) || tickets[0];

  return (
    <div id="interactive-crm-panel" className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 text-slate-100">
      
      {/* LEFT: Live AI Command Center Feed & Active CRM Database */}
      <div className="lg:col-span-8 flex flex-col gap-6">
        
        {/* REWORKED "LIVE AI COMMAND CENTER" CARD */}
        <div className="bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-md">
          <div className="bg-brand-graphite px-5 py-4 flex items-center justify-between border-b border-white/5">
            <div className="flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <h3 className="text-sm font-display font-bold text-white uppercase tracking-wider flex items-center gap-1.5 select-none">
                <Activity size={14} className="text-emerald-400" />
                Live AI Command Center
              </h3>
            </div>
            <span className="text-[9px] uppercase tracking-wider font-mono font-bold bg-white/[0.04] text-brand-cyan border border-white/15 px-2.5 py-1 rounded">
              AI Agent Activity Feed
            </span>
          </div>

          {/* Styled outcome-friendly log rows */}
          <div className="p-5 space-y-3 max-h-[300px] overflow-y-auto min-h-[220px]">
            {activityFeed.map((feed) => (
              <motion.div
                key={feed.id}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.03] transition-all"
              >
                <div className={`mt-0.5 w-5 h-5 rounded-lg flex items-center justify-center text-[10px] uppercase font-mono font-bold shrink-0 ${
                  feed.type === 'success' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                  feed.type === 'alert' ? 'bg-rose-500/10 text-rose-450 border border-rose-500/20 text-rose-400' :
                  'bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/20'
                }`}>
                  {feed.agent[0]}
                </div>
                <div className="flex-1 space-y-0.5">
                  <div className="flex justify-between items-center text-[10px] font-mono">
                    <span className="font-bold text-slate-350 text-slate-300">{feed.agent}</span>
                    <span className="text-slate-500">{feed.time}</span>
                  </div>
                  <p className="text-xs text-slate-400 font-light leading-normal">{feed.message}</p>
                </div>
              </motion.div>
            ))}
            
            {isScanning && (
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 animate-pulse flex items-center gap-2 text-xs font-mono text-brand-cyan">
                <RefreshCw size={12} className="animate-spin text-brand-cyan" />
                <span>Growth Agent is mapping local viewport errors and missing secure certificates...</span>
              </div>
            )}
            {isWritingOutreach && (
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 animate-pulse flex items-center gap-2 text-xs font-mono text-brand-indigo">
                <Cpu size={12} className="animate-spin text-brand-indigo" />
                <span>Outreach Agent is compiling personalized problem briefs and custom proposals...</span>
              </div>
            )}
            
            <div ref={feedEndRef} />
          </div>
        </div>

        {/* Dynamic Dual Tab Workspace: Lead Center & Ticket Center */}
        <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-white/5">
            <div>
              <h3 className="text-lg font-display font-extrabold text-white flex items-center gap-2">
                <Layers className="text-brand-cyan" size={18} />
                Prospect & SLA Pipeline
              </h3>
              <p className="text-xs text-slate-400">Scan geography for local businesses matching service adjustments, or resolve client requests in real-time.</p>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                id="btn-scan-leads"
                onClick={startLeadScan}
                disabled={isScanning || isWritingOutreach}
                className="px-4 py-2 bg-brand-cyan/10 hover:bg-brand-cyan/20 active:scale-95 border border-brand-cyan/20 text-brand-cyan rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-50"
              >
                <Search size={14} className={isScanning ? 'animate-spin' : ''} />
                Free AI Business Search Sweep
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            
            {/* Column 1: Lead Opportunity List */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-[10px] uppercase tracking-wider font-bold text-slate-400 font-mono">Target Lead Opportunities</h4>
                <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono font-bold">
                  {leads.length} found
                </span>
              </div>

              <div className="space-y-3 max-h-[360px] overflow-y-auto pr-1">
                {leads.map((lead, index) => (
                  <div 
                    key={lead.id} 
                    className="p-4 bg-brand-graphite rounded-xl hover:border-brand-indigo/30 border border-white/5 transition-all flex flex-col justify-between gap-3"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h5 className="text-sm font-bold text-white">{lead.businessName}</h5>
                          <p className="text-[11px] text-slate-450 text-slate-400">{lead.industry}</p>
                        </div>
                        <div className="text-right">
                          <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                            lead.opportunityScore >= 90 ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                            'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                          }`}>
                            Score {lead.opportunityScore}%
                          </span>
                        </div>
                      </div>

                      <div className="mt-2.5 space-y-1">
                        {lead.issuesFound.map((issue, idx) => (
                          <div key={idx} className="flex items-center gap-1 text-[10px] text-slate-400">
                            <ShieldAlert size={10} className="text-rose-500/80 shrink-0" />
                            <span>{issue}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t border-white/5 pt-2.5">
                      <span className={`text-[10px] font-mono capitalize ${
                        lead.status === 'outreached' ? 'text-brand-cyan' : 'text-slate-400'
                      }`}>
                        Status: {lead.status}
                      </span>
                      {lead.status === 'pending' ? (
                        <button
                          type="button"
                          id={`btn-outreach-${lead.id}`}
                          onClick={() => triggerOutreach(lead.id, index)}
                          disabled={isWritingOutreach}
                          className="px-2.5 py-1 bg-brand-cyan/10 hover:bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/20 rounded text-[10px] font-bold flex items-center gap-1 transition-all cursor-pointer"
                        >
                          <Mail size={10} />
                          Auto outreach
                        </button>
                      ) : (
                        <button
                          type="button"
                          id={`btn-view-mail-${lead.id}`}
                          onClick={() => {
                            pushActivity('Outreach Agent', `Showed drafted strategic proposal brief in memory for ${lead.businessName}`, 'info');
                            alert(lead.outreachEmail);
                          }}
                          className="text-[10px] font-bold text-brand-cyan hover:underline"
                        >
                          View outbound Proposal
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Client Request Tickets */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-[10px] uppercase tracking-wider font-bold text-slate-400 font-mono">Incoming Client Tickets</h4>
                <button
                  type="button"
                  id="btn-trigger-ticket-modal"
                  onClick={() => setIsCustomTicketFormOpen(prev => !prev)}
                  className="text-[10px] text-brand-cyan hover:underline flex items-center gap-1 font-bold"
                >
                  {isCustomTicketFormOpen ? 'Cancel' : '+ Mock Client Ticket'}
                </button>
              </div>

              <AnimatePresence mode="wait">
                {isCustomTicketFormOpen ? (
                  <motion.form 
                    key="custom-ticket"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onSubmit={handleCreateCustomTicket}
                    className="p-4 bg-brand-graphite border border-white/5 rounded-xl space-y-2.5"
                  >
                    <div>
                      <label className="text-[10px] uppercase text-slate-405 font-bold mb-1 font-mono">Simulated Customer</label>
                      <input 
                        type="text" 
                        id="crm-custom-client-name"
                        value={customClientName}
                        onChange={e => setCustomClientName(e.target.value)}
                        placeholder="e.g. Apex Auto Repair" 
                        required
                        className="w-full text-xs bg-brand-black border border-white/10 rounded-lg px-2.5 py-2 text-slate-100 focus:outline-none focus:border-brand-indigo"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase text-slate-405 font-bold mb-1 font-mono">Change Request Text</label>
                      <textarea
                        rows={2}
                        id="crm-custom-ticket-body"
                        value={customTicketBody}
                        onChange={e => setCustomTicketBody(e.target.value)}
                        placeholder="e.g. Add premium pricing charts to visual configuration subfiles..." 
                        required
                        className="w-full text-xs bg-brand-black border border-white/10 rounded-lg px-2.5 py-2 text-slate-100 focus:outline-none focus:border-brand-indigo resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      id="btn-submit-custom-ticket"
                      className="w-full py-2 bg-brand-indigo hover:brightness-110 text-white rounded-lg text-xs font-bold cursor-pointer"
                    >
                      Dispatch Simulated Ticket
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="ticket-viewer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-3"
                  >
                    {/* Ticket Selection List */}
                    <div className="flex gap-2 pb-2 overflow-x-auto">
                      {tickets.map(t => (
                        <button
                          key={t.id}
                          type="button"
                          id={`tab-ticket-${t.id}`}
                          onClick={() => setSelectedTicketId(t.id)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-all whitespace-nowrap border ${
                            selectedTicketId === t.id 
                              ? 'bg-brand-indigo border-brand-indigo/30 text-white' 
                              : 'bg-brand-black border-white/5 hover:bg-brand-graphite text-slate-400'
                          }`}
                        >
                          {t.clientName}
                        </button>
                      ))}
                    </div>

                    {/* Active Ticket Pane */}
                    <div className="p-4 bg-brand-graphite border border-white/5 rounded-xl space-y-4 min-h-[180px] flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[10px] text-slate-500 font-mono">{activeTicket.timestamp}</span>
                          <span className={`text-[9px] uppercase px-1.5 py-0.5 rounded font-mono font-bold ${
                            activeTicket.status === 'open' ? 'bg-amber-500/15 text-amber-400' :
                            activeTicket.status === 'resolving' ? 'bg-brand-cyan/15 text-brand-cyan animate-pulse' :
                            'bg-emerald-500/15 text-emerald-400'
                          }`}>
                            {activeTicket.status}
                          </span>
                        </div>
                        <h4 className="text-xs font-mono font-bold text-slate-400">Customer Name: {activeTicket.clientName}</h4>
                        <p className="text-xs text-slate-200 mt-2 bg-brand-black p-3 rounded-lg border border-white/5 leading-relaxed font-mono italic">
                          "{activeTicket.requestText}"
                        </p>
                      </div>

                      {/* Ticket History and Log */}
                      {activeTicket.agentLogs.length > 0 && (
                        <div className="p-2.5 bg-brand-black rounded-lg border border-white/5 font-mono text-[9px] text-slate-400 space-y-1 max-h-[80px] overflow-y-auto">
                          {activeTicket.agentLogs.map((logLine, lIdx) => (
                            <div key={lIdx} className="flex gap-1.5">
                              <span className="text-brand-cyan">&#62;</span>
                              <span>{logLine}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {activeTicket.status !== 'resolved' ? (
                        <button
                          type="button"
                          id={`btn-resolve-${activeTicket.id}`}
                          onClick={() => runTicketAutoResolve(activeTicket.id)}
                          disabled={isResolvingTicket}
                          className="w-full py-2 bg-emerald-650 bg-emerald-600 hover:brightness-110 text-white rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer disabled:opacity-50"
                        >
                          <Cpu size={12} className={isResolvingTicket ? 'animate-spin' : ''} />
                          Let AI Handle It (Instantly)
                        </button>
                      ) : (
                        <div className="p-2 bg-emerald-500/10 text-emerald-400 rounded-lg border border-emerald-500/20 text-center text-[10px] flex items-center justify-center gap-1 font-bold">
                          <CheckCircle2 size={12} />
                          Ticket resolved autonomously in 4.8 seconds
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT: Consolidated cost advantage view */}
      <div className="lg:col-span-4 flex flex-col gap-6">
        
        {/* Visualizer card: Traditional Agency vs AI Agency */}
        <div className="bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-base font-display font-extrabold text-white flex items-center gap-2 mb-1">
              <BarChart2 className="text-brand-cyan" size={16} />
              The Operations Difference
            </h3>
            <p className="text-xs text-slate-405 text-slate-400 mb-6">Compare traditional payroll with a white-labeled AI workspace.</p>

            <div className="space-y-6">
              
              {/* Traditional */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <Users size={14} className="text-rose-450 text-rose-400" />
                    Traditional Labor (10 Person Team)
                  </span>
                  <span className="text-rose-455 text-rose-400 font-mono font-bold">$120,000+ / mo</span>
                </div>
                <div className="bg-brand-black p-3.5 rounded-xl border border-white/5 space-y-2">
                  <div className="flex justify-between items-center text-[10px] text-slate-400">
                    <span>Lead scouting & outbound cold emails</span>
                    <span className="text-rose-400 font-semibold">3 Employees</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] text-slate-400">
                    <span>Formatting, layout alterations</span>
                    <span className="text-rose-400 font-semibold">3 Employees</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] text-slate-400">
                    <span>24/7 Ticketing handling</span>
                    <span className="text-rose-400 font-semibold">4 Employees</span>
                  </div>
                  <div className="h-1.5 bg-slate-900 rounded-full overflow-hidden mt-2">
                    <div className="h-full bg-rose-500" style={{ width: '100%' }} />
                  </div>
                </div>
              </div>

              {/* AI Powered */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-white">
                  <span className="flex items-center gap-1.5">
                    <Cpu size={14} className="text-brand-cyan" />
                    Our AI Platform (1 login, agents included)
                  </span>
                  <span className="text-brand-cyan font-mono font-bold">$1,200 / mo</span>
                </div>
                <div className="bg-brand-black p-3.5 rounded-xl border border-brand-cyan/25 space-y-2">
                  <div className="flex justify-between items-center text-[10px] text-slate-200">
                    <span>Lead Sourcing sweeps</span>
                    <span className="text-brand-cyan font-mono">Autonomous (24/7)</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] text-slate-200">
                    <span>Staging builders & layout adjustments</span>
                    <span className="text-brand-cyan font-mono">Autonomous (Instant)</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] text-slate-200">
                    <span>SLA Ticket Handler Sentry</span>
                    <span className="text-brand-cyan font-mono">Integrated</span>
                  </div>
                  <div className="h-1.5 bg-slate-900 rounded-full overflow-hidden mt-2">
                    <div className="h-full bg-brand-cyan" style={{ width: '12%' }} />
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="border-t border-white/5 pt-6 mt-6">
            <div className="flex items-start gap-3 bg-brand-cyan/5 p-4 rounded-xl border border-brand-cyan/15">
              <CheckCircle2 size={16} className="text-brand-cyan flex-shrink-0 mt-0.5 animate-pulse" />
              <div>
                <h5 className="text-xs font-bold text-white uppercase">Operational Leverage</h5>
                <p className="text-[10px] text-slate-400 leading-normal mt-1">
                  By assigning automated lead scouting, outreach personalization, preview site generations, and live customer ticketing support to an AI system, you maintain the capacity of an enterprise team.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
