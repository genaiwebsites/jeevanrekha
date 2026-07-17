import Link from 'next/link';
import { Droplet, Wind, Thermometer, Sparkles, Palette, Beaker, FlaskConical, ShieldCheck, CheckCircle2, Eye, Gauge, Compass, Atom, Filter } from 'lucide-react';
import Image from 'next/image';

import nablLogoImg from '../../../public/nabl_logo.png';

export default function Manufacturing() {
  return (
    <section id="view-manufacturing" className="view-section active">
      <div className="hero vh-auto" style={{ minHeight: '480px', paddingBottom: '60px' }}>
        <div className="hero-bg"></div>
        <div className="hero-mesh"></div>
        <div className="hero-wrap rv text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div className="h-eyebrow"><span className="pulse"></span><span className="eyebrow-t">Bio-Refined Engineering</span></div>
          <h1 className="h1"><em>Physical Purity,</em><br/>Scientifically Refined</h1>
          <p className="h-desc" style={{ maxWidth: '650px', textAlign: 'center' }}>Experience the continuous mechanical, thermal, and <strong>enzymatic</strong> workflow that preserves every critical molecule of nature&apos;s finest oil across our 150 TPD physical refinery.</p>
        </div>
      </div>

      <section id="pipeline-section" style={{ paddingTop: '60px', paddingBottom: '100px' }}>
        <div className="wrap" style={{ position: 'relative', zIndex: 10 }}>
          <h2 className="s-h rv light" style={{ textAlign: 'center', marginBottom: '1.25rem' }}>Purity, <em>Engineered</em></h2>
          <p className="body-t rv" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem', fontSize: '0.9rem', color: 'rgba(255,255,255,.7)' }}>Trace the journey of our physically refined rice bran oil, showcasing the mechanical, thermal, and biological stages of physical refining.</p>
          
          <div className="pipeline-grid rv">
            {/* Node 1: Silo */}
            <div className="process-node n-1">
              <div className="node-header"><div className="node-title">01. Silo Intake<span>Raw Material</span></div></div>
              <div className="node-svg-wrapper">
                <svg className="node-svg" viewBox="0 0 100 120">
                  <path className="svg-detail" d="M25,90 L15,115 M75,90 L85,115" /> 
                  <path className="svg-tank" d="M20,20 L80,20 L80,70 L50,100 L20,70 Z" />
                  <line x1="20" y1="35" x2="80" y2="35" className="svg-detail" strokeDasharray="2 2"/>
                  <line x1="20" y1="55" x2="80" y2="55" className="svg-detail" strokeDasharray="2 2"/>
                  <clipPath id="silo-clip"><path d="M22,22 L78,22 L78,68 L50,96 L22,68 Z" /></clipPath>
                  <g clipPath="url(#silo-clip)">
                    <rect x="0" y="20" width="100" height="100" fill="var(--c-bran)" opacity="0.8">
                      <animate attributeName="y" values="100; 30; 100" dur="4s" repeatCount="indefinite" />
                    </rect>
                  </g>
                  <circle cx="50" cy="10" r="1.5" fill="var(--c-bran)" className="anim-drop" />
                </svg>
              </div>
              <div className="node-desc-inline"><strong>Raw Intake:</strong> 100% traceably sourced. Extracted from the nutrient-rich aleurone and germ layers of rice.</div>
              <div className="pipe-mobile"><svg style={{ width: '10px', height: '100%' }}><line x1="5" y1="0" x2="5" y2="100%" className="anim-flow-line" markerEnd="url(#arrow-oil)"/></svg></div>
            </div>

            {/* Connector 1->2 */}
            <div className="pipe-h p-1-2"><svg><line x1="0" y1="5" x2="100%" y2="5" className="anim-flow-line" markerEnd="url(#arrow-oil)" /></svg></div>

            {/* Node 2: Pelletizer */}
            <div className="process-node n-2">
              <div className="node-header"><div className="node-title">02. Pelletizer<span>Stabilization</span></div></div>
              <div className="node-svg-wrapper">
                <svg className="node-svg" viewBox="0 0 100 120">
                  <rect className="svg-tank" x="20" y="20" width="60" height="40" rx="4" />
                  <rect x="25" y="25" width="50" height="30" fill="var(--c-steam)" opacity="0.3" className="anim-pulse glow-steam" />
                  <path className="svg-tank" d="M40,60 L60,60 L55,90 L45,90 Z" />
                  <rect x="48" y="95" width="4" height="6" fill="var(--c-bran)" rx="2" className="anim-drop" />
                  <rect x="46" y="105" width="4" height="6" fill="var(--c-bran)" rx="2" className="anim-drop" style={{ animationDelay: '0.3s' }}/>
                </svg>
              </div>
              <div className="node-desc-inline"><strong>Conditioning:</strong> Heating chamber with mechanical compression. Steam instantly neutralizes lipase enzyme. Forms porous pellets.</div>
              <div className="pipe-mobile"><svg style={{ width: '10px', height: '100%' }}><line x1="5" y1="0" x2="5" y2="100%" className="anim-flow-line" markerEnd="url(#arrow-oil)"/></svg></div>
            </div>

            {/* Connector 2->3 */}
            <div className="pipe-h p-2-3"><svg><line x1="0" y1="5" x2="100%" y2="5" className="anim-flow-line" markerEnd="url(#arrow-oil)" /></svg></div>

            {/* Node 3: Extractor */}
            <div className="process-node n-3">
              <div className="node-header"><div className="node-title">03. Extractor<span>Hexane Wash</span></div></div>
              <div className="node-svg-wrapper">
                <svg className="node-svg" viewBox="0 0 100 120">
                  <rect className="svg-tank" x="10" y="10" width="80" height="90" rx="5" />
                  <path d="M 20 65 L 80 65 M 20 75 L 80 75" className="svg-detail" strokeDasharray="4 2" />
                  <circle cx="20" cy="70" r="5" className="svg-detail anim-spin" />
                  <circle cx="80" cy="70" r="5" className="svg-detail anim-spin" />
                  <path d="M 25 10 L 25 30 M 50 10 L 50 30 M 75 10 L 75 30" stroke="var(--c-hexane)" strokeWidth="2" className="glow-hexane"/>
                  <line x1="25" y1="30" x2="25" y2="45" stroke="var(--c-hexane)" strokeWidth="2" className="anim-drop glow-hexane" />
                  <line x1="50" y1="30" x2="50" y2="45" stroke="var(--c-hexane)" strokeWidth="2" className="anim-drop glow-hexane" style={{ animationDelay: '0.2s' }} />
                  <line x1="75" y1="30" x2="75" y2="45" stroke="var(--c-hexane)" strokeWidth="2" className="anim-drop glow-hexane" style={{ animationDelay: '0.4s' }} />
                  <path d="M 12 85 L 88 85 L 60 98 L 40 98 Z" fill="var(--c-oil)" opacity="0.8" className="glow-oil" />
                </svg>
              </div>
              <div className="node-desc-inline"><strong>Extraction:</strong> Continuous band extraction. Hexane acts as a liquid magnet, dissolving pure oil into a rich Miscella.</div>
              <div className="pipe-mobile"><svg style={{ width: '10px', height: '100%' }}><line x1="5" y1="0" x2="5" y2="100%" className="anim-flow-line" markerEnd="url(#arrow-oil)"/></svg></div>
            </div>

            {/* Connector 3->4 */}
            <div className="pipe-h p-3-4"><svg><line x1="0" y1="5" x2="100%" y2="5" className="anim-flow-line" markerEnd="url(#arrow-oil)" /></svg></div>

            {/* Node 4: Evaporator */}
            <div className="process-node n-4">
              <div className="node-header"><div className="node-title">04. Evaporator<span>Thermal Loop</span></div></div>
              <div className="node-svg-wrapper">
                <svg className="node-svg" viewBox="0 0 100 120">
                  <defs><clipPath id="dt-clip"><rect x="50" y="15" width="45" height="80" rx="3" /></clipPath></defs>
                  <path d="M 22.5 25 L 22.5 8 L 72.5 8 L 72.5 15" className="anim-flow-line glow-hexane" style={{ stroke: 'var(--c-hexane)', strokeWidth: 1.5, strokeDasharray: '2 2' }} />
                  <rect className="svg-tank" x="10" y="25" width="25" height="60" rx="3" />
                  <path className="svg-detail glow-steam anim-pulse" stroke="var(--c-steam)" d="M 15 25 L 15 85 M 22.5 25 L 22.5 85 M 30 25 L 30 85" strokeDasharray="3 2" strokeWidth="1.5" />
                  <circle cx="15" cy="55" r="1" fill="var(--c-hexane)" className="anim-rise glow-hexane" />
                  <circle cx="22.5" cy="70" r="1" fill="var(--c-hexane)" className="anim-rise glow-hexane" style={{ animationDelay: '0.2s' }} />
                  <circle cx="30" cy="40" r="1" fill="var(--c-hexane)" className="anim-rise glow-hexane" style={{ animationDelay: '0.4s' }} />
                  <path d="M 22.5 85 L 22.5 110" stroke="var(--c-oil)" strokeWidth="2" className="glow-oil" />
                  <circle cx="22.5" cy="95" r="1.5" fill="var(--c-oil)" className="anim-drop glow-oil" />
                  <rect className="svg-tank" x="50" y="15" width="45" height="80" rx="3" />
                  <g clipPath="url(#dt-clip)">
                    <line x1="72.5" y1="15" x2="72.5" y2="95" stroke="var(--c-metal)" strokeWidth="2" />
                    <g className="anim-spin-y" style={{ transformOrigin: '72.5px 55px' }}>
                      <line x1="55" y1="30" x2="90" y2="30" stroke="rgba(255,255,255,.4)" strokeWidth="1.5" />
                      <line x1="55" y1="50" x2="90" y2="50" stroke="rgba(255,255,255,.4)" strokeWidth="1.5" />
                      <line x1="55" y1="70" x2="90" y2="70" stroke="rgba(255,255,255,.4)" strokeWidth="1.5" />
                      <line x1="55" y1="90" x2="90" y2="90" stroke="rgba(255,255,255,.4)" strokeWidth="1.5" />
                    </g>
                    <path d="M 50 35 L 68 35 M 77 35 L 95 35 M 50 55 L 68 55 M 77 55 L 95 55 M 50 75 L 68 75 M 77 75 L 95 75" stroke="var(--c-metal)" strokeWidth="1" />
                    <path d="M 55 90 L 68 90" stroke="var(--c-steam)" strokeWidth="1.5" className="glow-steam" />
                    <circle cx="60" cy="85" r="1.5" fill="var(--c-steam)" className="anim-rise glow-steam" />
                    <circle cx="65" cy="65" r="1.5" fill="var(--c-steam)" className="anim-rise glow-steam" style={{ animationDelay: '0.3s' }} />
                  </g>
                  <rect x="63" y="95" width="4" height="4" fill="var(--c-bran)" className="anim-drop" rx="1" />
                  <rect x="78" y="95" width="4" height="4" fill="var(--c-bran)" className="anim-drop" rx="1" style={{ animationDelay: '0.4s' }} />
                </svg>
              </div>
              <div className="node-desc-inline"><strong>Desolventization:</strong> Zero-waste energy loop. Boiler evaporates hexane from the oil for recycling. Yields De-Oiled Bran (DORB).</div>
              <div className="pipe-mobile"><svg style={{ width: '10px', height: '100%' }}><line x1="5" y1="0" x2="5" y2="100%" className="anim-flow-line" markerEnd="url(#arrow-oil)"/></svg></div>
            </div>

            {/* Connector 4->5 */}
            <div className="pipe-h p-4-5"><svg><line x1="0" y1="5" x2="100%" y2="5" className="anim-flow-line" markerEnd="url(#arrow-oil)" /></svg></div>

            {/* Node 5 */}
            <div className="process-node n-5">
              <div className="node-header"><div className="node-title">05. Bio-Reactor<span>Enzyme Dosing</span></div></div>
              <div className="node-svg-wrapper">
                <svg className="node-svg" viewBox="0 0 100 120">
                  <path className="svg-glass" d="M20,30 L80,30 L80,90 L55,110 L45,110 L20,90 Z" />
                  <rect className="svg-tank" x="40" y="0" width="20" height="15" />
                  <circle cx="50" cy="20" r="2.5" fill="var(--c-enzyme)" className="anim-drop glow-enzyme" />
                  <circle cx="50" cy="20" r="2.5" fill="var(--c-enzyme)" className="anim-drop glow-enzyme" style={{ animationDelay: '0.5s' }} />
                  <clipPath id="enzyme-clip"><path d="M20,30 L80,30 L80,90 L55,110 L45,110 L20,90 Z" /></clipPath>
                  <g clipPath="url(#enzyme-clip)">
                      <rect x="0" y="60" width="100" height="60" fill="var(--c-oil)" opacity="0.6" />
                      <rect x="0" y="60" width="100" height="60" fill="var(--c-enzyme)" opacity="0.3" className="anim-pulse glow-enzyme" />
                  </g>
                  <line x1="50" y1="30" x2="50" y2="85" stroke="var(--c-metal)" strokeWidth="2" />
                  <path d="M 35 80 L 65 80 M 40 85 L 60 85" stroke="var(--y)" strokeWidth="3" className="anim-spin-y" />
                  <rect x="70" y="40" width="25" height="15" fill="var(--bk)" stroke="var(--c-metal)" />
                  <text x="82.5" y="50" className="svg-text-pid anim-pulse" fill="var(--c-enzyme)" style={{ fontSize: '8px' }}>55°C</text>
                </svg>
              </div>
              <div className="node-desc-inline"><strong>Bio-Refining:</strong> Natural biological enzymes dose at exactly 55°C, cleanly releasing impurities without harsh acids.</div>
              <div className="pipe-mobile"><svg style={{ width: '10px', height: '100%' }}><line x1="5" y1="0" x2="5" y2="100%" className="anim-flow-line" markerEnd="url(#arrow-oil)"/></svg></div>
            </div>

            {/* Vertical Drop 5->6 */}
            <div className="pipe-v-bridge"><svg><line x1="5" y1="0" x2="5" y2="100%" className="anim-flow-line" markerEnd="url(#arrow-oil)" /></svg></div>

            {/* Node 6: Bleaching (RTL bottom row starts) */}
            <div className="process-node n-6">
              <div className="node-header"><div className="node-title">06. Bleaching<span>Adsorptive Purification</span></div></div>
              <div className="node-svg-wrapper">
                <svg className="node-svg" viewBox="0 0 100 120">
                  <defs><clipPath id="bleach-clip"><path d="M 25 20 L 75 20 L 75 70 C 75 105, 25 105, 25 70 Z" /></clipPath></defs>
                  <path className="svg-tank" d="M 25 20 L 75 20 L 75 70 C 75 105, 25 105, 25 70 Z" />
                  <g clipPath="url(#bleach-clip)">
                    <rect x="0" y="50" width="100" height="70" fill="var(--c-oil)" opacity="0.75" className="glow-oil" />
                    <line x1="50" y1="20" x2="50" y2="90" stroke="var(--c-metal)" strokeWidth="2" />
                    <g className="anim-spin-y" style={{ transformOrigin: '50px 60px' }}>
                      <line x1="30" y1="50" x2="70" y2="50" stroke="#fff" strokeWidth="2" />
                      <line x1="35" y1="70" x2="65" y2="70" stroke="#fff" strokeWidth="2" />
                      <line x1="42" y1="88" x2="58" y2="88" stroke="#fff" strokeWidth="2.5" />
                    </g>
                    <circle cx="40" cy="30" r="1.5" fill="var(--c-bran)" className="anim-drop" />
                    <circle cx="60" cy="45" r="1.5" fill="var(--c-bran)" className="anim-drop" style={{ animationDelay: '0.4s' }} />
                    <circle cx="50" cy="65" r="1.5" fill="var(--c-bran)" className="anim-drop" style={{ animationDelay: '0.2s' }} />
                    <circle cx="45" cy="80" r="1.5" fill="var(--c-bran)" className="anim-drop" style={{ animationDelay: '0.6s' }} />
                  </g>
                  <rect x="2" y="50" width="16" height="12" fill="var(--bk)" stroke="var(--c-metal)" rx="2" />
                  <text x="10" y="58" className="svg-text-pid anim-pulse" fill="var(--c-steam)" style={{ fontSize: '6px' }}>90°C</text>
                </svg>
              </div>
              <div className="node-desc-inline"><strong>Adsorptive Purification:</strong> Vacuum bleaching with acid-activated earth at 95°C adsorbs pigments, oxidation, and trace metals.</div>
              <div className="pipe-mobile"><svg style={{ width: '10px', height: '100%' }}><line x1="5" y1="0" x2="5" y2="100%" className="anim-flow-line" markerEnd="url(#arrow-oil)"/></svg></div>
            </div>

            {/* Connector 6->7 (RTL) */}
            <div className="pipe-h p-6-7"><svg><line x1="100%" y1="5" x2="0" y2="5" className="anim-flow-line" markerEnd="url(#arrow-oil)" /></svg></div>

            {/* Node 7 */}
            <div className="process-node n-7">
              <div className="node-header"><div className="node-title">07. Dewaxing<span>Centrifuge Spin</span></div></div>
              <div className="node-svg-wrapper">
                <svg className="node-svg" viewBox="0 0 100 120">
                  {/* Base / Motor Mount */}
                  <rect x="40" y="100" width="20" height="15" fill="var(--bk)" stroke="var(--c-metal)" strokeWidth="1.5" />
                  <line x1="35" y1="115" x2="65" y2="115" stroke="var(--c-metal)" strokeWidth="2" />

                  {/* Outer Casing / Bowl */}
                  <defs>
                    <clipPath id="centrifuge-clip">
                      <path d="M 25 25 L 75 25 L 75 65 L 55 100 L 45 100 L 25 65 Z" />
                    </clipPath>
                  </defs>
                  
                  <path className="svg-tank" d="M 25 25 L 75 25 L 75 65 L 55 100 L 45 100 L 25 65 Z" />

                  {/* Oil Fill inside the bowl */}
                  <g clipPath="url(#centrifuge-clip)">
                    <rect x="0" y="40" width="100" height="80" fill="var(--c-oil)" opacity="0.85" className="glow-oil" />
                    
                    {/* Central Shaft & Disk Stack Spinning */}
                    <g className="anim-spin-y" style={{ transformOrigin: '50px 60px' }}>
                      <line x1="50" y1="20" x2="50" y2="95" stroke="#fff" strokeWidth="2" />
                      {/* Disk Stack (Conical Plates) */}
                      <path d="M 35 85 L 50 70 L 65 85 M 30 75 L 50 55 L 70 75 M 30 65 L 50 45 L 70 65 M 30 55 L 50 35 L 70 55" stroke="#fff" strokeWidth="1.5" fill="none" opacity="0.8" />
                    </g>

                    {/* Heavy wax/gum particles moving to outer edge */}
                    <circle cx="30" cy="55" r="1.5" fill="var(--c-bran)" className="anim-drop" />
                    <circle cx="70" cy="65" r="1.5" fill="var(--c-bran)" className="anim-drop" style={{ animationDelay: '0.3s' }} />
                    <circle cx="35" cy="75" r="1.5" fill="var(--c-bran)" className="anim-drop" style={{ animationDelay: '0.6s' }} />
                  </g>

                  {/* Top Inlet Motor/Feed */}
                  <rect x="42" y="10" width="16" height="15" fill="var(--c-metal)" />
                  <path d="M 45 5 L 55 5 L 50 10 Z" fill="var(--c-oil)" className="anim-pulse glow-oil" />

                  {/* Clear Oil Out (Light Phase) */}
                  <path d="M 75 35 L 90 35 L 90 45" stroke="var(--c-oil)" strokeWidth="2" fill="none" />
                  <circle cx="90" cy="50" r="1.5" fill="var(--c-oil)" className="anim-drop glow-oil" />

                  {/* Wax/Gums Out (Heavy Phase) */}
                  <path d="M 65 82 L 80 82 L 80 92" stroke="var(--c-metal)" strokeWidth="2" fill="none" />
                  <circle cx="80" cy="95" r="1.5" fill="var(--c-bran)" className="anim-drop" style={{ animationDelay: '0.2s' }} />
                  
                  {/* Control Panel / Sensor */}
                  <rect x="5" y="45" width="16" height="20" fill="var(--bk)" stroke="var(--c-metal)" rx="2" />
                  <text x="13" y="54" className="svg-text-pid anim-pulse" fill="#00E5FF" style={{ fontSize: '5px' }}>8°C</text>
                  <text x="13" y="61" className="svg-text-pid" fill="var(--w)" style={{ fontSize: '4px' }}>RPM</text>
                </svg>
              </div>
              <div className="node-desc-inline"><strong>Centrifugal Separation:</strong> High-speed centrifuges extract gums. Oil is chilled to 8°C to crystallize and filter natural waxes.</div>
              <div className="pipe-mobile"><svg style={{ width: '10px', height: '100%' }}><line x1="5" y1="0" x2="5" y2="100%" className="anim-flow-line" markerEnd="url(#arrow-oil)"/></svg></div>
            </div>

            {/* Connector 7->8 (RTL) */}
            <div className="pipe-h p-7-8"><svg><line x1="100%" y1="5" x2="0" y2="5" className="anim-flow-line" markerEnd="url(#arrow-oil)" /></svg></div>

            {/* Node 8 */}
            <div className="process-node n-8">
              <div className="node-header"><div className="node-title">08. The Flash<span>Vacuum Deodorizer</span></div></div>
              <div className="node-svg-wrapper">
                <svg className="node-svg" viewBox="0 0 100 120">
                  <defs><clipPath id="flash-clip"><rect x="30" y="15" width="40" height="95" rx="4" /></clipPath></defs>
                  
                  {/* Vacuum Exhaust System */}
                  <polygon points="42,15 58,15 54,7 46,7" fill="var(--bk)" stroke="var(--c-metal)" strokeWidth="1.5" />
                  <path d="M 50 7 L 50 4 L 85 4" stroke="var(--c-metal)" strokeWidth="2" fill="none" />
                  {/* Vapor extraction visualization */}
                  <path d="M 46 15 Q 43 11 48 7" stroke="var(--c-steam)" strokeWidth="1.5" fill="none" className="anim-pulse glow-steam" />
                  <path d="M 54 15 Q 57 11 52 7" stroke="var(--c-steam)" strokeWidth="1.5" fill="none" className="anim-pulse glow-steam" style={{ animationDelay: '0.4s' }} />
                  {/* Vacuum Pump Icon */}
                  <circle cx="85" cy="4" r="3" fill="var(--bk)" stroke="var(--c-metal)" strokeWidth="1.5" />
                  <path d="M 83.5 2.5 L 86.5 5.5 M 83.5 5.5 L 86.5 2.5" stroke="var(--c-metal)" strokeWidth="1.5" className="anim-spin-y" style={{ transformOrigin: '85px 4px' }} />

                  <rect className="svg-tank" x="30" y="15" width="40" height="95" rx="4" />
                  <g clipPath="url(#flash-clip)">
                      <path className="svg-detail" d="M30,30 L70,30 M30,45 L70,45 M30,60 L70,60 M30,75 L70,75 M30,90 L70,90" strokeWidth="1" />
                      <path className="svg-detail" d="M30,30 L35,45 L40,30 L45,45 L50,30 L55,45 L60,30 L65,45 L70,30 M30,45 L35,60 L40,45 L45,60 L50,45 L55,60 L60,45 L65,60 L70,45" strokeWidth="0.5" stroke="var(--c-metal)" opacity="0.6" />
                      <path d="M30,100 L70,100" stroke="var(--c-metal)" strokeWidth="2" />
                      <path d="M40,100 L40,95 M50,100 L50,95 M60,100 L60,95" stroke="var(--c-steam)" strokeWidth="1.5" className="glow-steam" />
                      <circle cx="35" cy="85" r="1.5" fill="var(--c-steam)" className="anim-rise glow-steam" />
                      <circle cx="65" cy="70" r="1.5" fill="var(--c-steam)" className="anim-rise glow-steam" style={{ animationDelay: '0.3s' }} />
                      <circle cx="50" cy="25" r="1.5" fill="var(--c-oil)" className="anim-drop glow-oil" />
                      <circle cx="40" cy="50" r="1.5" fill="var(--c-oil)" className="anim-drop glow-oil" style={{ animationDelay: '0.4s' }} />
                      <rect x="30" y="100" width="40" height="15" fill="var(--c-oil)" opacity="0.8" className="glow-oil" />
                  </g>
                  <rect x="2" y="45" width="26" height="12" fill="var(--bk)" stroke="var(--c-metal)" rx="2" />
                  <text x="15" y="53" className="svg-text-pid anim-pulse" fill="var(--c-steam)" style={{ fontSize: '6px', fontWeight: 'bold' }}>260°C</text>
                </svg>
              </div>
              <div className="node-desc-inline"><strong>Physical Refining:</strong> Vacuum steam distillation at 260°C strips FFAs while preserving heat-sensitive Gamma-Oryzanol.</div>
              <div className="pipe-mobile"><svg style={{ width: '10px', height: '100%' }}><line x1="5" y1="0" x2="5" y2="100%" className="anim-flow-line" markerEnd="url(#arrow-oil)"/></svg></div>
            </div>

            {/* Connector 8->9 (RTL) */}
            <div className="pipe-h p-8-9"><svg><line x1="100%" y1="5" x2="0" y2="5" className="anim-flow-line" markerEnd="url(#arrow-oil)" /></svg></div>

            {/* Node 9: Winterization */}
            <div className="process-node n-9">
              <div className="node-header"><div className="node-title">09. Winterization<span>Fractional Crystallization</span></div></div>
              <div className="node-svg-wrapper">
                <svg className="node-svg" viewBox="0 0 100 120">
                  {/* Base and Mounts */}
                  <rect x="25" y="110" width="10" height="5" fill="var(--bk)" stroke="var(--c-metal)" strokeWidth="1.5" />
                  <rect x="65" y="110" width="10" height="5" fill="var(--bk)" stroke="var(--c-metal)" strokeWidth="1.5" />
                  
                  {/* Main Crystallizer Tank */}
                  <defs>
                    <clipPath id="crystal-clip">
                      <path d="M 20 15 L 60 15 L 60 90 L 40 110 L 20 90 Z" />
                    </clipPath>
                  </defs>
                  
                  <path className="svg-tank" d="M 20 15 L 60 15 L 60 90 L 40 110 L 20 90 Z" />
                  
                  <g clipPath="url(#crystal-clip)">
                    {/* Oil Level */}
                    <rect x="0" y="30" width="80" height="90" fill="var(--c-oil)" opacity="0.85" className="glow-oil" />
                    
                    {/* Cooling Coils (Internal) */}
                    <path d="M 25 25 L 55 35 L 25 45 L 55 55 L 25 65 L 55 75 L 25 85 L 55 95" stroke="#00E5FF" strokeWidth="2" fill="none" opacity="0.5" className="glow-steam anim-pulse" />
                    
                    {/* Slow Paddle Agitator */}
                    <g className="anim-spin-y" style={{ transformOrigin: '40px 60px' }}>
                      <line x1="40" y1="15" x2="40" y2="105" stroke="var(--c-metal)" strokeWidth="2" />
                      <rect x="30" y="40" width="20" height="10" fill="none" stroke="var(--c-metal)" strokeWidth="1.5" />
                      <rect x="30" y="60" width="20" height="10" fill="none" stroke="var(--c-metal)" strokeWidth="1.5" />
                      <rect x="30" y="80" width="20" height="10" fill="none" stroke="var(--c-metal)" strokeWidth="1.5" />
                    </g>
                    
                    {/* Crystallization Nucleation (Diamonds forming and sinking) */}
                    <polygon points="30,45 32,47 30,49 28,47" fill="#fff" className="anim-drop" />
                    <polygon points="50,60 53,63 50,66 47,63" fill="#fff" className="anim-drop" style={{ animationDelay: '1.5s' }} />
                    <polygon points="35,80 39,84 35,88 31,84" fill="#fff" className="anim-drop" style={{ animationDelay: '3s' }} />
                  </g>
                  
                  {/* Top Feed */}
                  <rect x="35" y="5" width="10" height="10" fill="var(--c-metal)" />
                  <path d="M 37 0 L 43 0 L 40 5 Z" fill="var(--c-oil)" className="anim-pulse glow-oil" />
                  
                  {/* Filter Press (Side Unit) */}
                  {/* Pipe from bottom to filter */}
                  <path d="M 40 110 L 40 115 L 75 115 L 75 90" stroke="var(--c-metal)" strokeWidth="2" fill="none" />
                  <circle cx="55" cy="115" r="1.5" fill="var(--c-oil)" className="anim-flow-line glow-oil" />
                  <circle cx="75" cy="105" r="1.5" fill="var(--c-oil)" className="anim-rise glow-oil" />
                  
                  {/* Filter Press Body */}
                  <rect x="65" y="60" width="20" height="30" fill="var(--bk)" stroke="var(--c-metal)" strokeWidth="1.5" rx="2" />
                  {/* Filter Plates */}
                  <line x1="70" y1="60" x2="70" y2="90" stroke="var(--c-metal)" strokeWidth="1" />
                  <line x1="75" y1="60" x2="75" y2="90" stroke="var(--c-metal)" strokeWidth="1" />
                  <line x1="80" y1="60" x2="80" y2="90" stroke="var(--c-metal)" strokeWidth="1" />
                  
                  {/* Wax/Stearin Output */}
                  <path d="M 75 90 L 75 100 L 85 100" stroke="var(--c-metal)" strokeWidth="1.5" fill="none" />
                  <polygon points="85,98 87,100 85,102 83,100" fill="#fff" className="anim-drop" />
                  
                  {/* Pure Winterized Oil Output */}
                  <path d="M 85 75 L 90 75 L 90 85" stroke="var(--c-oil)" strokeWidth="2" fill="none" />
                  <circle cx="90" cy="80" r="1.5" fill="var(--c-oil)" className="anim-drop glow-oil" />
                  
                  {/* Control Panel / Chiller Temp */}
                  <rect x="2" y="35" width="16" height="20" fill="var(--bk)" stroke="var(--c-metal)" rx="2" />
                  <text x="10" y="48" className="svg-text-pid anim-pulse" fill="#00E5FF" style={{ fontSize: '5px' }} textAnchor="middle">5°C</text>
                  <text x="10" y="52" className="svg-text-pid" fill="var(--w)" style={{ fontSize: '3px' }} textAnchor="middle">CHILL</text>
                </svg>
              </div>
              <div className="node-desc-inline"><strong>Fractional Crystallization:</strong> Deep chilling to 5°C nucleates stearins. Hermetic filtration ensures pristine cold-test stability.</div>
              <div className="pipe-mobile"><svg style={{ width: '10px', height: '100%' }}><line x1="5" y1="0" x2="5" y2="100%" className="anim-flow-line" markerEnd="url(#arrow-oil)"/></svg></div>
            </div>

            {/* Connector 9->10 (RTL) */}
            <div className="pipe-h p-9-10"><svg><line x1="100%" y1="5" x2="0" y2="5" className="anim-flow-line" markerEnd="url(#arrow-oil)" /></svg></div>

            {/* Node 10 */}
            <div className="process-node n-10">
              <div className="node-header"><div className="node-title">10. Final Yield<span>Bio-Refined Oil</span></div></div>
              <div className="node-svg-wrapper">
                <svg className="node-svg" viewBox="0 0 100 120">
                  <defs><clipPath id="node-08-clip"><path d="M42,20 L58,20 L58,35 C58,45 75,55 75,100 C75,115 25,115 25,100 C25,55 42,45 42,35 Z" /></clipPath></defs>
                  <path className="svg-glass" d="M42,20 L58,20 L58,35 C58,45 75,55 75,100 C75,115 25,115 25,100 C25,55 42,45 42,35 Z" />
                  <g clipPath="url(#node-08-clip)">
                    <rect x="0" y="120" width="100" height="100" fill="var(--c-oil)" className="glow-oil fill-bottle-rect" />
                  </g>
                  <circle cx="50" cy="10" r="1.5" fill="var(--c-oil)" className="anim-drop glow-oil" />
                  <rect x="40" y="15" width="20" height="8" fill="var(--c-metal)" rx="2" />
                </svg>
              </div>
              <div className="node-desc-inline"><strong>Final Yield:</strong> Luminous, pure gold Rice Bran Oil. Bio-Refined to a pristine 0.07 ppm Phosphorus. Ready for global distribution.</div>
            </div>
          </div>
        </div>
      </section>

      {/* NABL Report Finale */}
      <div className="nabl-wrapper">
        <div className="wrap" style={{ width: '100%' }}>
          <div className="finale-grid">
            {/* Left Column */}
            <div className="rv sl">
              <h2 className="s-h" style={{ marginBottom: '1.5rem', lineHeight: '1.1' }}>
                Grain to<br /><em>Golden Oil</em>
              </h2>
              <p className="body-t" style={{ fontSize: '0.95rem', lineHeight: '1.6', maxWidth: '460px', marginBottom: '1.5rem' }}>
                Every batch of Jeevan Rekha undergoes strict physical refining. Completely free from caustic soda, our process protects the oil&apos;s biological structure and retains essential antioxidants.
              </p>
              
              <div className="guarantee-block-clean" style={{ maxWidth: '460px' }}>
                <div className="g-100-clean">100%</div>
                <div className="g-text-clean">
                  <span className="g-sub-clean">Physically Refined</span>
                  <p className="g-desc-clean">Processed without caustic chemicals to protect delicate antioxidants and preserve natural purity.</p>
                </div>
              </div>
            </div>

            {/* Right Column (Report Card) */}
            <div className="rv sr">
              <div className="nabl-card-clean">
                {/* Card Header */}
                <div className="nabl-card-header">
                  <div className="nabl-card-title-group">
                    <span className="nabl-card-eyebrow">Verified Laboratory Analysis</span>
                    <h3 className="nabl-card-title">NABL Batch Certificate</h3>
                  </div>
                  <Image
                    src={nablLogoImg}
                    alt="NABL Accredited"
                    className="nabl-card-logo"
                  />
                </div>

                {/* Tables Container */}
                <div className="nabl-table-container">
                  {/* Left Table */}
                  <div className="nabl-table">
                    <div className="nabl-table-row">
                      <span className="nabl-param-name"><Eye size={14} /> Appearance</span>
                      <span className="nabl-param-value">Clear Liquid</span>
                    </div>
                    <div className="nabl-table-row">
                      <span className="nabl-param-name"><Wind size={14} className="icon-wind" /> Organoleptic</span>
                      <span className="nabl-param-value">No Rancidity</span>
                    </div>
                    <div className="nabl-table-row">
                      <span className="nabl-param-name"><Thermometer size={14} className="icon-temp" /> Cloud Point</span>
                      <span className="nabl-param-value">3.0 °C</span>
                    </div>
                    <div className="nabl-table-row">
                      <span className="nabl-param-name"><Sparkles size={14} className="icon-sparkle" /> γ-Oryzanol Min</span>
                      <span className="nabl-param-value highlight-purple">&gt;1.3%</span>
                    </div>
                    <div className="nabl-table-row">
                      <span className="nabl-param-name"><Palette size={14} /> Colour (Lovibond)</span>
                      <span className="nabl-param-value">11.6 Units</span>
                    </div>
                    <div className="nabl-table-row">
                      <span className="nabl-param-name"><Gauge size={14} className="icon-gauge" /> Free Fatty Acids</span>
                      <span className="nabl-param-value">0.089%</span>
                    </div>
                  </div>

                  {/* Right Table */}
                  <div className="nabl-table">
                    <div className="nabl-table-row">
                      <span className="nabl-param-name"><Droplet size={14} className="icon-drop" /> Moisture Max</span>
                      <span className="nabl-param-value">0.013%</span>
                    </div>
                    <div className="nabl-table-row">
                      <span className="nabl-param-name"><Beaker size={14} /> Peroxide Value</span>
                      <span className="nabl-param-value">0.56 meq/kg</span>
                    </div>
                    <div className="nabl-table-row">
                      <span className="nabl-param-name"><Compass size={14} className="icon-compass" /> Refractive Index</span>
                      <span className="nabl-param-value">1.4656</span>
                    </div>
                    <div className="nabl-table-row">
                      <span className="nabl-param-name"><FlaskConical size={14} /> Iodine Value</span>
                      <span className="nabl-param-value">98.93</span>
                    </div>
                    <div className="nabl-table-row">
                      <span className="nabl-param-name"><Atom size={14} className="icon-atom" /> Phosphorus Max</span>
                      <span className="nabl-param-value highlight-green">0.07 ppm</span>
                    </div>
                    <div className="nabl-table-row">
                      <span className="nabl-param-name"><Filter size={14} className="icon-filter" /> Hexane Content</span>
                      <span className="nabl-param-value highlight-green">Nil</span>
                    </div>
                  </div>
                </div>

                {/* Footer Banner */}
                <div className="nabl-card-footer">
                  <div className="nabl-footer-title">
                    <ShieldCheck size={16} />
                    <span>Argemone &amp; Mineral Oil Tests</span>
                  </div>
                  <div className="nabl-footer-value">NEGATIVE (100% PASS)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="cta-strip cta-dark">
        <div className="cta-inner">
          <div className="rv sl">
            <h2 className="s-h">Looking for a<br/><em>Reliable Supplier?</em></h2>
            <p className="body-t" style={{ marginTop: '16px' }}>We supply pure, physically refined rice bran oil to snack manufacturers and food processors across India. Consistent quality, batch after batch.</p>
          </div>
          <div className="cta-btn-group rv sr">
            <Link href="/contact" className="btn-y">Trade Enquiry</Link>
            <Link href="/products" className="btn-outline dark">View Capacity</Link>
          </div>
        </div>
      </section>
    </section>
  );
}
