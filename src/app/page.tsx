import Image from "next/image";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  AudioLines,
  Menu,
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import { ExperienceSelector } from "@/components/experience-selector";
import { ResonanceSculpture } from "@/components/resonance-sculpture";
import { HeroGallery } from "@/components/hero-gallery";
import { ScrollProgress } from "@/components/scroll-progress";

export default function Home() {
  return (
    <main className="site-shell">

    <ScrollProgress />

      {/* HERO */}
      <section className="hero" id="top">
        <HeroGallery />

        <div className="hero-shade" />

        <header className="site-header container">
          <a href="#top" className="brand" aria-label="FLUX homepage">
            <span className="brand-symbol">
              <AudioLines size={20} strokeWidth={1.7} />
            </span>
            <span className="brand-name">
              FLUX<span className="brand-mark">®</span>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#system">The system</a>
            <a href="#technology">Technology</a>
            <a href="#experience">Experience</a>
          </nav>

          <a className="header-cta" href="#objects">
            Explore FLUX
            <ArrowUpRight size={15} />
          </a>

          <details className="mobile-menu">
            <summary aria-label="Open navigation">
              <Menu size={21} />
              <span>MENU</span>
            </summary>

            <div className="mobile-menu-panel">
              <a href="#system">The system</a>
              <a href="#technology">Technology</a>
              <a href="#experience">Experience</a>
              <a href="#objects">Objects</a>
            </div>
          </details>
        </header>

        <div className="hero-inner container">
          <Reveal className="hero-copy" delay={0.08}>
            <p className="eyebrow hero-eyebrow">
              <span className="eyebrow-dot" />
              A NEW CLASS OF SPATIAL AUDIO
            </p>

            <h1>
              Sound, made
              <br />
              <em>physical.</em>
            </h1>

            <p className="hero-description">
              An entirely new relationship between sound, space
              and the objects that connect them.
            </p>

            <div className="hero-actions">
              <a className="button button-lime" href="#system">
                Discover the system
                <ArrowUpRight size={16} />
              </a>

              <a className="text-link hero-secondary" href="#technology">
                Our philosophy
                <ArrowDownRight size={17} />
              </a>
            </div>
          </Reveal>
        </div>

        <div className="hero-bottom container">
          <div className="hero-bottom-left">
            <span className="status-dot" />
            <span>ENGINEERED FOR PRESENCE</span>
          </div>

          <div className="hero-bottom-center">
            FLUX ONE / SPATIAL AUDIO SYSTEM
          </div>

          <a href="#system" className="scroll-cue">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDownRight size={16} />
          </a>
        </div>
      </section>

      {/* BRAND SIGNATURE */}
      <div className="signal-strip" aria-label="FLUX design principles">
        <div className="signal-track" aria-hidden="true">
  {Array.from({ length: 2 }, (_, index) => (
    <div className="signal-group" key={index}>
      <span>LESS NOISE</span>
      <span className="signal-symbol">✳</span>
      <span>MORE PRESENCE</span>
      <span className="signal-symbol">✳</span>
      <span>SPATIAL BY DESIGN</span>
      <span className="signal-symbol">✳</span>
      <span>FEEL EVERY DETAIL</span>
      <span className="signal-symbol">✳</span>
    </div>
  ))}
</div>
      </div>

      {/* DESIGN PHILOSOPHY */}
      <section className="manifesto section-light" id="system">
        <div className="container">
          <div className="manifesto-top">
            <Reveal className="manifesto-heading">
              <p className="eyebrow eyebrow-dark">
                <span>01</span>
                THE DESIGN PHILOSOPHY
              </p>

              <h2>
                A presence
                <br />
                you can <em>feel.</em>
              </h2>
            </Reveal>

            <Reveal className="manifesto-copy" delay={0.15}>
              <p>
                Great sound should not demand attention.
                It should change the way a space feels.
              </p>

              <p>
                FLUX brings precision acoustics and sculptural
                design into one considered object — made to
                become part of your environment, not compete
                with it.
              </p>

              <a className="underlined-link" href="#technology">
                The thinking behind FLUX
                <ArrowRight size={16} />
              </a>
            </Reveal>
          </div>

          <Reveal className="manifesto-visual" delay={0.08}>
            <Image
              src="/images/flux-stone.png"
              alt="FLUX sculptural wireless speaker with a polished metal shell"
              fill
              quality={95}
              sizes="(max-width: 768px) 100vw, 90vw"
            />

            <div className="manifesto-visual-shade" />

            <div className="visual-caption">
              <div>
                <span className="caption-index">OBJECT 001</span>
                <span className="caption-name">FORM ONE</span>
              </div>

              <span className="caption-note">
                Precision without the noise.
              </span>
            </div>

            <span className="visual-corner-mark">F—01</span>
          </Reveal>
        </div>
      </section>

      {/* ENGINEERING */}
      <section className="technology section-dark" id="technology">
        <div className="container">
          <div className="technology-top">
            <Reveal className="technology-heading">
              <p className="eyebrow">
                <span>02</span>
                THE ACOUSTIC ARCHITECTURE
              </p>

              <h2>
                More space.
                <br />
                Less <em>equipment.</em>
              </h2>
            </Reveal>

            <Reveal className="technology-intro" delay={0.15}>
              <p>
                One connected system. A wider soundstage.
                Nothing unnecessary between the music
                and the moment.
              </p>

              <span className="micro-label">
                DESIGNED AROUND THE LISTENER
              </span>
            </Reveal>
          </div>

          <Reveal className="technology-visual" delay={0.08}>
            <Image
              src="/images/flux-system.png"
              alt="The FLUX concept audio system with sculptural tower and satellite speakers"
              fill
              quality={95}
              sizes="(max-width: 768px) 100vw, 90vw"
            />

            <div className="technology-visual-shade" />

            <div className="technology-overlay">
              <span className="micro-label">FLUX / FIELD ARCHITECTURE</span>

              <h3>
                A room,
                <br />
                redefined.
              </h3>

              <p>
                A connected sound field designed to feel
                natural from every angle.
              </p>

              <span className="tech-index">01 — 03</span>
            </div>
          </Reveal>

          <div className="feature-grid">
            <Reveal className="feature-item">
              <span className="feature-number">01 / FIELD</span>
              <h3>Spatial by nature.</h3>
              <p>
                A wider, more coherent listening experience
                designed around your room.
              </p>
            </Reveal>

            <Reveal className="feature-item" delay={0.08}>
              <span className="feature-number">02 / SIGNAL</span>
              <h3>Nothing in the way.</h3>
              <p>
                A concept built around clean signal paths,
                careful tuning and essential controls.
              </p>
            </Reveal>

            <Reveal className="feature-item" delay={0.16}>
              <span className="feature-number">03 / FORM</span>
              <h3>Made to belong.</h3>
              <p>
                Sculptural metal, tactile surfaces and
                restrained details.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* INTERACTIVE LISTENING MODES */}
      <section className="experience section-light" id="experience">
        <div className="container">
          <div className="experience-header">
            <Reveal>
              <p className="eyebrow eyebrow-dark">
                <span>03</span>
                YOUR LISTENING SPACE
              </p>

              <h2>
                One system.
                <br />
                Your kind of <em>space.</em>
              </h2>
            </Reveal>

            <Reveal className="experience-intro" delay={0.12}>
              <p>
                The same hardware. A different relationship
                with the moment.
              </p>

              <p>
                Explore three imagined listening profiles
                built around how you want a space to feel.
              </p>
            </Reveal>
          </div>

          <ExperienceSelector />
        </div>
      </section>

      {/* PRODUCT COLLECTION */}
      <section className="collection section-dark" id="objects">
        <div className="container">
          <div className="collection-header">
            <Reveal>
              <p className="eyebrow">
                <span>04</span>
                THE FLUX COLLECTION
              </p>

              <h2>
                Objects of
                <br />
                <em>sound.</em>
              </h2>
            </Reveal>

            <Reveal className="collection-description" delay={0.12}>
              <p>
                Two forms. One philosophy.
                Each object designed to make technology
                feel a little more human.
              </p>

              <span className="micro-label">
                CONCEPT SERIES / 2026
              </span>
            </Reveal>
          </div>

          <div className="product-grid">
            <Reveal className="product-card product-card-tower">
              <a
                className="product-art"
                href="#contact"
                aria-label="Explore FLUX Form One"
              >
                <Image
                  src="/images/flux-system.png"
                  alt="FLUX Form One concept tower speaker"
                  fill
                  quality={95}
                  sizes="(max-width: 768px) 100vw, 55vw"
                />

                <span className="product-art-index">F / 001</span>

                <span className="product-art-arrow">
                  <ArrowUpRight size={20} />
                </span>
              </a>

              <div className="product-info">
                <div>
                  <span className="product-category">
                    REFERENCE SPATIAL SYSTEM
                  </span>

                  <h3>FORM ONE</h3>
                </div>

                <span className="product-number">01</span>
              </div>

              <p className="product-description">
                The centrepiece. A sculptural sound system
                conceived as an integral part of the room.
              </p>
            </Reveal>

            <Reveal
              className="product-card product-card-node"
              delay={0.13}
            >
              <a
                className="product-art"
                href="#contact"
                aria-label="Explore FLUX Node"
              >
                <Image
                  src="/images/flux-stone.png"
                  alt="FLUX Node concept satellite speaker in a warm architectural setting"
                  fill
                  quality={95}
                  sizes="(max-width: 768px) 100vw, 40vw"
                />

                <span className="product-art-index">F / 002</span>

                <span className="product-art-arrow">
                  <ArrowUpRight size={20} />
                </span>
              </a>

              <div className="product-info">
                <div>
                  <span className="product-category">
                    WIRELESS SATELLITE
                  </span>

                  <h3>NODE</h3>
                </div>

                <span className="product-number">02</span>
              </div>

              <p className="product-description">
                Compact in form. Considered in every detail.
                Designed to extend the listening field.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CLOSING STATEMENT */}
<section className="closing section-lime">
  <div className="container closing-inner">
    <Reveal className="closing-copy-content">
      <p className="eyebrow eyebrow-dark">
        FLUX AUDIO / A STUDY IN SOUND AND SPACE
      </p>

      <h2>
        Hear what
        <br />
        <em>could be.</em>
      </h2>

      <p className="closing-copy">
        A different kind of listening begins with
        a different way of thinking.
      </p>

      <a href="#top" className="button button-dark">
        Back to the beginning
        <ArrowUpRight size={16} />
      </a>
    </Reveal>

    <ResonanceSculpture />
  </div>
</section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            <a href="#top" className="brand footer-brand">
              <span className="brand-symbol">
                <AudioLines size={20} strokeWidth={1.7} />
              </span>

              <span className="brand-name">
                FLUX<span className="brand-mark">®</span>
              </span>
            </a>

            <p>
              A concept in sound,
              <br />
              form and presence.
            </p>

            <a href="#top" className="footer-top-link">
              BACK TO TOP <ArrowUpRight size={15} />
            </a>
          </div>

          <div className="footer-bottom">
            <span>© 2026 FLUX AUDIO</span>
            <span>INDEPENDENT CONCEPT PROJECT</span>
            <span>DESIGNED &amp; DEVELOPED BY BELOFF STUDIO</span>
          </div>
        </div>
      </footer>
    </main>
  );
}