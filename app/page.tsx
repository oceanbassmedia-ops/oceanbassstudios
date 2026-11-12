import Navbar from '@/components/Navbar'
import OceanScene from '@/components/OceanScene'
import { ArrowDownRight, ArrowRight, Clapperboard, Cuboid, Gamepad2, Play, Sparkles, Video } from 'lucide-react'

const services = [
  { number: '01', title: '3D Motion Graphics', desc: 'Cinematic movement that makes people stop and look.', icon: Clapperboard },
  { number: '02', title: 'Product Visualisation', desc: 'Give every detail its moment in the spotlight.', icon: Cuboid },
  { number: '03', title: 'Logo Animation', desc: 'Turn your identity into a memorable experience.', icon: Play },
  { number: '04', title: '3D Environments', desc: 'Build worlds with atmosphere, depth and character.', icon: Video },
  { number: '05', title: 'Digital Experiences', desc: 'Immersive visuals made to move audiences.', icon: Gamepad2 },
]

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="hero" id="home">
        <div className="hero-grid" />
        <div className="hero-copy">
          <div className="eyebrow"><span /> CREATE <i>•</i> ANIMATE <i>•</i> INSPIRE</div>
          <h1><span>OceanBass</span><strong>Studios</strong></h1>
          <p className="hero-lead">Premium 3D motion graphics, visualisation<br className="desktop-break" /> and digital experiences.</p>
          <p className="hero-sub">From striking 3D animations to immersive digital worlds, we bring ambitious ideas to life.</p>
          <div className="hero-actions">
            <a className="primary-button" href="#portfolio"><Play size={16} fill="currentColor" /> Explore our work <ArrowRight size={17} /></a>
            <a className="text-link" href="#services">Discover the studio <ArrowDownRight size={17} /></a>
          </div>
          <div className="hero-note"><Sparkles size={14} /> Independent creative studio <span>·</span> Made to make an impact</div>
        </div>
        <div className="scene-wrap"><OceanScene /></div>
        <div className="hero-bottom"><span>01 / 05</span><span className="scroll-line" /><span>SCROLL TO EXPLORE</span></div>
      </section>

      <section className="services section-pad" id="services">
        <div className="section-heading"><div><span className="eyebrow">WHAT WE CREATE</span><h2>Ideas, brought <em>to life.</em></h2></div><p>Visual storytelling meets technical craft. We create digital work designed to be seen, remembered and experienced.</p></div>
        <div className="service-grid">
          {services.map(({ number, title, desc, icon: Icon }) => <article className="service-card" key={number}><div className="service-top"><span>{number}</span><ArrowUpRightIcon /></div><Icon className="service-icon" strokeWidth={1.35} /><h3>{title}</h3><p>{desc}</p></article>)}
        </div>
      </section>

      <section className="portfolio section-pad" id="portfolio">
        <div className="portfolio-head"><div><span className="eyebrow">SELECTED DIRECTIONS</span><h2>Made to <em>move you.</em></h2></div><span className="coming-soon">PORTFOLIO — IN DEVELOPMENT</span></div>
        <div className="portfolio-stage"><div className="stage-glow" /><div className="stage-mark">OB<span>®</span></div><div className="stage-caption"><span>THE NEXT FRAME IS YOURS</span><p>Have an idea worth seeing?</p><a href="mailto:hello@oceanbassstudios.com">Let's create something <ArrowRight size={16} /></a></div></div>
      </section>
      <footer id="contact"><a className="footer-brand" href="#home">OceanBass<span>Studios</span></a><p>CREATE. ANIMATE. INSPIRE.</p><a className="footer-contact" href="mailto:hello@oceanbassstudios.com">Start a project <ArrowRight size={16} /></a><small>© {new Date().getFullYear()} OceanBass Studios. All rights reserved.</small></footer>
    </main>
  )
}

function ArrowUpRightIcon() { return <ArrowDownRight className="card-arrow" size={18} /> }
