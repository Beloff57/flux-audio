"use client";

import Image from "next/image";
import { useState, type PointerEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const scenes = [
  {
    id: "form-one",
    number: "01",
    name: "FORM ONE",
    category: "REFERENCE SPATIAL SYSTEM",
    image: "/images/flux-hero.png",
    alt: "FLUX sculptural chrome audio speaker",
  },
  {
    id: "field-system",
    number: "02",
    name: "FIELD SYSTEM",
    category: "CONNECTED AUDIO ARCHITECTURE",
    image: "/images/flux-system.png",
    alt: "FLUX concept tower speaker and satellite audio system",
  },
  {
    id: "node",
    number: "03",
    name: "NODE",
    category: "SCULPTURAL WIRELESS SPEAKER",
    image: "/images/flux-stone.png",
    alt: "FLUX chrome wireless speaker in an architectural setting",
  },
];

export function HeroGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeScene = scenes[activeIndex];

  function handlePointerMove(
    event: PointerEvent<HTMLDivElement>
  ) {
    if (event.pointerType !== "mouse") return;

    const bounds = event.currentTarget.getBoundingClientRect();

    if (!bounds.width || !bounds.height) return;

    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;

    const tiltX = (x - 0.5) * 2;
    const tiltY = (y - 0.5) * 2;

    event.currentTarget.style.setProperty("--cursor-x", `${x * 100}%`);
    event.currentTarget.style.setProperty("--cursor-y", `${y * 100}%`);

    const root = event.currentTarget.parentElement;

    root?.style.setProperty(
      "--hero-shift-x",
      `${tiltX * 7}px`
    );

    root?.style.setProperty(
      "--hero-shift-y",
      `${tiltY * 5}px`
    );
  }

  function resetPointer(event: PointerEvent<HTMLDivElement>) {
    event.currentTarget.style.setProperty("--cursor-x", "50%");
    event.currentTarget.style.setProperty("--cursor-y", "50%");

    const root = event.currentTarget.parentElement;

    root?.style.setProperty("--hero-shift-x", "0px");
    root?.style.setProperty("--hero-shift-y", "0px");
  }

  return (
    <div className="hero-gallery-layer">
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={activeScene.id}
          className="hero-gallery-frame"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.85,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="hero-gallery-image-inner">
            <Image
              src={activeScene.image}
              alt={activeScene.alt}
              fill
              priority={activeIndex === 0}
              quality={95}
              sizes="100vw"
              className="hero-gallery-image"
            />
          </div>
        </motion.div>
      </AnimatePresence>

      <div
        className="hero-gallery-hitarea"
        onPointerMove={handlePointerMove}
        onPointerLeave={resetPointer}
      >
        <div className="hero-gallery-scene-label" aria-live="polite">
          <span className="hero-gallery-scene-number">
            {activeScene.number}
          </span>

          <div className="hero-gallery-scene-copy">
            <span>{activeScene.name}</span>
            <small>{activeScene.category}</small>
          </div>

          <span className="hero-gallery-scene-mark">
            <ArrowUpRight size={17} />
          </span>
        </div>

        <div
          className="hero-gallery-controls"
          role="group"
          aria-label="Explore FLUX products"
        >
          {scenes.map((scene, index) => (
            <button
              key={scene.id}
              type="button"
              className={`hero-gallery-tab ${
                index === activeIndex ? "is-active" : ""
              }`}
              aria-pressed={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            >
              <span>{scene.number}</span>
              <span>{scene.name}</span>
              <span className="hero-gallery-tab-indicator" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}