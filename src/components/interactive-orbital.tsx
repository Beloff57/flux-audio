
"use client";

import { useRef, useState, type PointerEvent } from "react";

const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

export function InteractiveOrbital() {
  const centerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  function resetInteraction(element: HTMLDivElement) {
    element.style.setProperty("--flux-tilt-x", "0deg");
    element.style.setProperty("--flux-tilt-y", "0deg");
    element.style.setProperty("--flux-pointer-x", "50%");
    element.style.setProperty("--flux-pointer-y", "50%");
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse") return;

    const wrapper = event.currentTarget;
    const center = centerRef.current;

    if (!center) return;

    const bounds = center.getBoundingClientRect();

    if (!bounds.width || !bounds.height) return;

    // Рассчитываем положение курсора относительно самого объекта,
    // а не большого контейнера всей сцены.
    const x = (event.clientX - (bounds.left + bounds.width / 2)) /
      (bounds.width / 2);

    const y = (event.clientY - (bounds.top + bounds.height / 2)) /
      (bounds.height / 2);

    // Отсекаем углы прямоугольника за пределами круглой сцены.
    if (x * x + y * y > 1.08) {
      resetInteraction(wrapper);
      setIsHovered(false);
      return;
    }

    const horizontal = clamp(x, -1, 1);
    const vertical = clamp(y, -1, 1);

    // Небольшой наклон: объект не должен резко заваливаться.
    wrapper.style.setProperty(
      "--flux-tilt-x",
      `${horizontal * 4}deg`
    );

    wrapper.style.setProperty(
      "--flux-tilt-y",
      `${vertical * -4}deg`
    );

    // Координаты блика в системе координат круглого объекта.
    wrapper.style.setProperty(
      "--flux-pointer-x",
      `${(horizontal + 1) * 50}%`
    );

    wrapper.style.setProperty(
      "--flux-pointer-y",
      `${(vertical + 1) * 50}%`
    );

    setIsHovered(true);
  }

  function handlePointerLeave(event: PointerEvent<HTMLDivElement>) {
    resetInteraction(event.currentTarget);
    setIsHovered(false);
  }

  return (
    <div
      className={`flux-orbital-wrap${isHovered ? " is-hovered" : ""}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      aria-hidden="true"
    >
      <div className="flux-orbital-center" ref={centerRef}>
        <div className="flux-orbital-scene">
          <div className="flux-orbit-ring flux-orbit-ring-one">
            <span className="flux-orbit-node" />
          </div>

          <div className="flux-orbit-ring flux-orbit-ring-two">
            <span className="flux-orbit-node" />
          </div>

          <div className="flux-orbit-ring flux-orbit-ring-three">
            <span className="flux-orbit-node" />
          </div>

          <div className="flux-orbit-axis flux-orbit-axis-horizontal" />
          <div className="flux-orbit-axis flux-orbit-axis-vertical" />
          <div className="flux-orbit-axis flux-orbit-axis-diagonal" />

          <div className="flux-orbital-core-position">
            <div className="flux-orbital-core">
              <div className="flux-orbital-core-inner">
                <span className="flux-orbital-core-dot" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flux-orbital-caption">
        <span>FLUX / FIELD STUDY</span>

        <span className="flux-orbital-status">
          <span />
          {isHovered ? "FIELD ACTIVE" : "SYSTEM ACTIVE"}
        </span>
      </div>
    </div>
  );
}
