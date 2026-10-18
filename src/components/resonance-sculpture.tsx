export function ResonanceSculpture() {
  return (
    <div className="resonance-sculpture" aria-hidden="true">
      <div className="resonance-sculpture__topline">
        <span>FLUX / ACOUSTIC STUDY</span>
        <span>FIG. 001 — 003</span>
      </div>

      <div className="resonance-sculpture__stage">
        <div className="resonance-sculpture__aura" />

        <div className="resonance-sculpture__axis resonance-sculpture__axis--horizontal" />
        <div className="resonance-sculpture__axis resonance-sculpture__axis--vertical" />
        <div className="resonance-sculpture__axis resonance-sculpture__axis--diagonal" />

        <div className="resonance-sculpture__ring resonance-sculpture__ring--outer">
          <i className="resonance-sculpture__node" />
        </div>

        <div className="resonance-sculpture__ring resonance-sculpture__ring--middle">
          <i className="resonance-sculpture__node" />
        </div>

        <div className="resonance-sculpture__ring resonance-sculpture__ring--inner">
          <i className="resonance-sculpture__node" />
        </div>

        <div className="resonance-sculpture__core">
          <div className="resonance-sculpture__core-inset">
            <span className="resonance-sculpture__core-dot" />
          </div>
        </div>

        <span className="resonance-sculpture__coordinate resonance-sculpture__coordinate--left">
          FIELD / 01
        </span>

        <span className="resonance-sculpture__coordinate resonance-sculpture__coordinate--right">
          RESONANCE / 03
        </span>
      </div>

      <div className="resonance-sculpture__bottomline">
        <span>SPATIAL SOUND / FORM STUDY</span>

        <span className="resonance-sculpture__status">
          <i />
          SYSTEM IN PHASE
        </span>
      </div>
    </div>
  );
}