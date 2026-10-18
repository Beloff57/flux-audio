"use client";

import { useState, type PointerEvent } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import { AudioLines, ArrowUpRight } from "lucide-react";

const modes = [
  {
    id: "immersion",
    number: "01",
    label: "IMMERSION",
    title: "Let the room disappear.",
    description:
      "An expansive, enveloping field that brings depth, movement and space to every listening moment.",
    detail: "WIDE / OPEN / ENVELOPING",
  },
  {
    id: "focus",
    number: "02",
    label: "FOCUS",
    title: "Every detail, in focus.",
    description:
      "A more intimate perspective. Imagine hearing the texture of an instrument, the breath before a note, the space between sounds.",
    detail: "PRECISE / INTIMATE / DIRECT",
  },
  {
    id: "night",
    number: "03",
    label: "NIGHT",
    title: "Present, never intrusive.",
    description:
      "A quieter listening concept designed for slower evenings, softer dynamics and a room that feels at ease.",
    detail: "SOFT / CALM / BALANCED",
  },
] as const;

export function ExperienceSelector() {
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  const activeMode = modes[activeIndex];

  const transitionDuration = prefersReducedMotion ? 0 : 0.35;

  function handleStagePointerMove(
  event: PointerEvent<HTMLDivElement>
) {
  if (event.pointerType !== "mouse") return;

  const bounds = event.currentTarget.getBoundingClientRect();

  if (!bounds.width || !bounds.height) return;

  const x = ((event.clientX - bounds.left) / bounds.width) * 100;
  const y = ((event.clientY - bounds.top) / bounds.height) * 100;

  event.currentTarget.style.setProperty("--stage-x", `${x}%`);
  event.currentTarget.style.setProperty("--stage-y", `${y}%`);
}

function resetStagePointer(
  event: PointerEvent<HTMLDivElement>
) {
  event.currentTarget.style.setProperty("--stage-x", "72%");
  event.currentTarget.style.setProperty("--stage-y", "45%");
}

  return (
    <div className="experience-selector">
      <div className="mode-tabs" role="group" aria-label="Listening modes">
        {modes.map((mode, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={mode.id}
              type="button"
              className={`mode-tab ${isActive ? "is-active" : ""}`}
              aria-pressed={isActive}
              onClick={() => setActiveIndex(index)}
            >
              <span className="mode-tab-number">{mode.number}</span>
              <span className="mode-tab-label">{mode.label}</span>
              <span className="mode-tab-indicator" />
            </button>
          );
        })}
      </div>

      <div
  className={`experience-stage mode-${activeMode.id}`}
  onPointerMove={handleStagePointerMove}
  onPointerLeave={resetStagePointer}
>
        <div className="experience-mode-copy">
          <span className="mode-overline">
            LISTENING PROFILE / {activeMode.number}
          </span>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeMode.id}
              initial={
                prefersReducedMotion
                  ? false
                  : { opacity: 0, y: 10 }
              }
              animate={{ opacity: 1, y: 0 }}
              exit={
                prefersReducedMotion
                  ? undefined
                  : { opacity: 0, y: -8 }
              }
              transition={{
                duration: transitionDuration,
                ease: "easeOut",
              }}
            >
              <h3>{activeMode.title}</h3>
              <p>{activeMode.description}</p>
            </motion.div>
          </AnimatePresence>

          <div className="mode-detail">
            <span className="mode-detail-dot" />
            {activeMode.detail}
          </div>
        </div>

        <div
          className="sound-visual"
          aria-hidden="true"
        >
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />

          <div className="sound-core">
            <AudioLines size={32} strokeWidth={1.1} />
          </div>

          <div className="sound-coordinate sound-coordinate-top">
            FLUX / FIELD
          </div>

          <div className="sound-coordinate sound-coordinate-bottom">
            48° 08′ 12″ N
          </div>

          <ArrowUpRight className="sound-arrow" size={20} />
        </div>

        <div className="stage-bottom-line">
          <span>ADAPTIVE LISTENING CONCEPT</span>
          <span>FLUX® / 2026</span>
        </div>
      </div>
    </div>
  );
}