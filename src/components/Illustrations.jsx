import React from 'react';

/**
 * Hand-built inline SVG illustrations for the public site.
 * Colors come from theme tokens via Tailwind fill-/stroke- utilities so they follow dark themes.
 */

/** Hero: a bug report flows into a grouped issue, then a fix, then a payout. */
export function HeroIllustration() {
  return (
    <svg aria-hidden="true" viewBox="0 0 420 380" className="h-auto w-full">
      <defs>
        <linearGradient id="hero-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6366f1" stopOpacity=".18" />
          <stop offset="1" stopColor="#0ea5e9" stopOpacity=".18" />
        </linearGradient>
      </defs>
      <circle cx="210" cy="190" r="170" fill="url(#hero-bg)" />
      {/* flow path */}
      <path
        d="M110 90 C 200 90, 220 150, 210 185 S 120 250, 130 300 M210 185 C 260 220, 300 250, 310 300"
        fill="none"
        strokeWidth="3"
        className="fx-dash stroke-brand"
        opacity=".6"
      />

      {/* 1. report card */}
      <g className="fx-float">
        <rect x="30" y="40" width="160" height="96" rx="18" className="fill-surface stroke-border" strokeWidth="2" />
        <circle cx="60" cy="72" r="14" className="fill-danger-soft" />
        <path d="M54 72h12M60 66v12" className="stroke-danger" strokeWidth="2.5" strokeLinecap="round" />
        <rect x="84" y="64" width="86" height="8" rx="4" className="fill-ink" opacity=".75" />
        <rect x="84" y="78" width="60" height="7" rx="3.5" className="fill-ink-muted" opacity=".5" />
        <rect x="48" y="104" width="122" height="14" rx="7" className="fill-brand-soft" />
        <rect x="56" y="109" width="48" height="4" rx="2" className="fill-brand" />
      </g>

      {/* 2. grouped issue (stacked cards) */}
      <g className="fx-float" style={{ animationDelay: '.8s' }}>
        <rect x="160" y="150" width="150" height="80" rx="18" className="fill-info-soft" transform="rotate(-6 235 190)" />
        <rect x="160" y="150" width="150" height="80" rx="18" className="fill-brand-soft" transform="rotate(4 235 190)" />
        <rect x="160" y="150" width="150" height="80" rx="18" className="fill-surface stroke-border" strokeWidth="2" />
        <rect x="178" y="170" width="80" height="8" rx="4" className="fill-ink" opacity=".75" />
        <g>
          {[0, 1, 2, 3].map((i) => (
            <circle
              key={i}
              cx={186 + i * 16}
              cy="205"
              r="9"
              className={i % 2 ? 'fill-info stroke-surface' : 'fill-brand stroke-surface'}
              strokeWidth="2.5"
            />
          ))}
          <rect x="248" y="197" width="44" height="16" rx="8" className="fill-warn-soft" />
          <rect x="256" y="203" width="28" height="4" rx="2" className="fill-warn" />
        </g>
      </g>

      {/* 3. fix (check + code) */}
      <g className="fx-float" style={{ animationDelay: '1.6s' }}>
        <rect x="40" y="262" width="150" height="86" rx="18" className="fill-surface stroke-border" strokeWidth="2" />
        <rect x="58" y="282" width="40" height="6" rx="3" className="fill-ok" opacity=".8" />
        <rect x="58" y="296" width="70" height="6" rx="3" className="fill-ink-muted" opacity=".5" />
        <rect x="58" y="310" width="54" height="6" rx="3" className="fill-ok" opacity=".8" />
        <circle cx="158" cy="306" r="18" className="fill-ok-soft" />
        <path d="M149 306l6 6 12-13" fill="none" className="stroke-ok" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* 4. payout (coins) */}
      <g className="fx-float" style={{ animationDelay: '2.4s' }}>
        <rect x="250" y="262" width="140" height="86" rx="18" className="fill-surface stroke-border" strokeWidth="2" />
        <ellipse cx="300" cy="320" rx="26" ry="9" className="fill-warn" opacity=".7" />
        <ellipse cx="300" cy="310" rx="26" ry="9" className="fill-warn" opacity=".85" />
        <ellipse cx="300" cy="300" rx="26" ry="9" className="fill-warn" />
        <text x="300" y="304" textAnchor="middle" fontSize="12" fontWeight="700" className="fill-surface">$</text>
        <rect x="336" y="292" width="38" height="7" rx="3.5" className="fill-ink" opacity=".7" />
        <rect x="336" y="306" width="26" height="6" rx="3" className="fill-ink-muted" opacity=".5" />
      </g>
    </svg>
  );
}

/** Small illustration per step */
export function StepArt({ step }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 120 90" className="h-auto w-full">
      <rect x="4" y="4" width="112" height="82" rx="20" className="fill-brand-soft" />
      {step === 1 && (
        <g>
          <rect x="24" y="20" width="72" height="50" rx="10" className="fill-surface stroke-border" strokeWidth="2" />
          <rect x="34" y="32" width="40" height="5" rx="2.5" className="fill-ink" opacity=".7" />
          <rect x="34" y="42" width="52" height="4" rx="2" className="fill-ink-muted" opacity=".5" />
          <rect x="34" y="52" width="24" height="9" rx="4.5" className="fill-brand fx-pulse" />
        </g>
      )}
      {step === 2 && (
        <g>
          {[[30, 28], [48, 50], [26, 60], [44, 22]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="6" className="fill-info fx-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
          ))}
          <path d="M56 45h14" className="stroke-brand fx-dash" strokeWidth="3" strokeLinecap="round" />
          <rect x="72" y="28" width="32" height="34" rx="8" className="fill-surface stroke-brand" strokeWidth="2.5" />
          <text x="88" y="50" textAnchor="middle" fontSize="13" fontWeight="700" className="fill-brand">4</text>
        </g>
      )}
      {step === 3 && (
        <g>
          {[40, 28, 18].map((w, i) => (
            <g key={i}>
              <rect x="22" y={22 + i * 16} width="12" height="10" rx="3" className="fill-surface stroke-border" />
              <rect x="40" y={23 + i * 16} width={w * 1.4} height="8" rx="4" className={i === 0 ? 'fill-danger' : i === 1 ? 'fill-warn' : 'fill-info'} />
            </g>
          ))}
          <circle cx="94" cy="28" r="10" className="fill-warn" />
          <text x="94" y="32" textAnchor="middle" fontSize="11" fontWeight="700" className="fill-surface">$</text>
        </g>
      )}
      {step === 4 && (
        <g>
          <circle cx="44" cy="45" r="20" className="fill-ok-soft stroke-ok" strokeWidth="2" />
          <path d="M35 45l6 6 12-13" fill="none" className="stroke-ok" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          {[0, 1, 2].map((i) => <circle key={i} cx={82 + (i % 2) * 12} cy={30 + i * 14} r="7" className="fill-warn fx-pulse" style={{ animationDelay: `${i * 0.4}s` }} />)}
        </g>
      )}
    </svg>
  );
}

/** Icon-style illustration for each audience */
export function AudienceArt({ who }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 160 110" className="h-auto w-full">
      <rect x="0" y="0" width="160" height="110" rx="24" className={who === 'users' ? 'fill-brand-soft' : who === 'engineers' ? 'fill-ok-soft' : 'fill-info-soft'} />
      {who === 'users' && (
        <g>
          <rect x="54" y="18" width="52" height="80" rx="10" className="fill-surface stroke-border" strokeWidth="2" />
          <rect x="62" y="30" width="36" height="22" rx="5" className="fill-danger-soft" />
          <path d="M74 41h12M80 35v12" className="stroke-danger" strokeWidth="2.5" strokeLinecap="round" />
          <rect x="62" y="60" width="36" height="5" rx="2.5" className="fill-ink-muted" opacity=".5" />
          <rect x="62" y="72" width="22" height="10" rx="5" className="fill-brand" />
          <path d="M112 30c10 0 18 6 18 14s-8 14-18 14l-6 6v-7" className="fill-surface stroke-brand" strokeWidth="2" />
          <circle cx="114" cy="44" r="2" className="fill-brand" /><circle cx="121" cy="44" r="2" className="fill-brand" />
        </g>
      )}
      {who === 'engineers' && (
        <g>
          <rect x="28" y="22" width="104" height="64" rx="10" className="fill-surface stroke-border" strokeWidth="2" />
          <path d="M50 46l-10 8 10 8M110 46l10 8-10 8" fill="none" className="stroke-ok" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="62" y="44" width="36" height="5" rx="2.5" className="fill-ink" opacity=".6" />
          <rect x="62" y="56" width="26" height="5" rx="2.5" className="fill-ok" />
          <circle cx="128" cy="24" r="14" className="fill-warn fx-pulse" />
          <text x="128" y="29" textAnchor="middle" fontSize="14" fontWeight="700" className="fill-surface">$</text>
        </g>
      )}
      {who === 'companies' && (
        <g>
          <rect x="30" y="34" width="44" height="58" rx="6" className="fill-surface stroke-border" strokeWidth="2" />
          <rect x="80" y="20" width="50" height="72" rx="6" className="fill-surface stroke-border" strokeWidth="2" />
          {[0, 1, 2].map((r) => [0, 1].map((c) => <rect key={`${r}${c}`} x={38 + c * 16} y={44 + r * 14} width="10" height="8" rx="2" className="fill-info" opacity=".5" />))}
          {[0, 1, 2, 3].map((i) => <rect key={i} x="88" y={30 + i * 14} width={34 - i * 6} height="7" rx="3.5" className={i === 0 ? 'fill-danger' : i === 1 ? 'fill-warn' : 'fill-info'} />)}
        </g>
      )}
    </svg>
  );
}

/** Money split donut with dynamic bounty support */
export function MoneyDonut({ size = 240, bounty }) {
  const r = 70;
  const c = 2 * Math.PI * r;
  const parts = [
    { pct: 75, cls: 'stroke-brand' },
    { pct: 10, cls: 'stroke-warn' },
    { pct: 15, cls: 'stroke-info' },
  ];
  let offset = 0;
  return (
    <svg aria-hidden="true" viewBox="0 0 200 200" width={size} height={size} className="h-auto max-w-full">
      <circle cx="100" cy="100" r={r} fill="none" strokeWidth="30" className="stroke-surface-muted" />
      <g transform="rotate(-90 100 100)">
        {parts.map((p) => {
          const len = (p.pct / 100) * c;
          const el = (
            <circle
              key={p.pct}
              cx="100"
              cy="100"
              r={r}
              fill="none"
              strokeWidth="30"
              className={p.cls}
              strokeDasharray={`${len - 2} ${c - len + 2}`}
              strokeDashoffset={-offset}
            />
          );
          offset += len;
          return el;
        })}
      </g>
      <text x="100" y={bounty ? 92 : 96} textAnchor="middle" fontSize={bounty ? 26 : 30} fontWeight="800" className="fill-ink">
        {bounty ? `$${Math.round(bounty * 0.75)}` : '75%'}
      </text>
      <text x="100" y={bounty ? 112 : 118} textAnchor="middle" fontSize="12" className="fill-ink-muted">
        {bounty ? '75% to solver' : 'to the fixer'}
      </text>
      {bounty && (
        <text x="100" y="128" textAnchor="middle" fontSize="10" className="fill-ink-muted">
          ${bounty} total bounty
        </text>
      )}
    </svg>
  );
}

/** Simple bar visual */
export function BarsArt({ values }) {
  const max = Math.max(1, ...values);
  const w = 200;
  const bw = w / Math.max(values.length, 1);
  return (
    <svg aria-hidden="true" viewBox={`0 0 ${w} 80`} preserveAspectRatio="none" className="h-20 w-full">
      {values.map((v, i) => {
        const h = Math.max(3, (v / max) * 74);
        return (
          <rect
            key={i}
            x={i * bw + bw * 0.15}
            y={80 - h}
            width={bw * 0.7}
            height={h}
            rx="4"
            className="fx-grow fill-brand"
            style={{ animationDelay: `${i * 0.08}s` }}
            opacity={0.55 + 0.45 * (v / max)}
          />
        );
      })}
    </svg>
  );
}

/** Before/after: review vs report */
export function ReviewVsReport({ kind }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 200 110" className="h-auto w-full">
      <rect width="200" height="110" rx="20" className={kind === 'review' ? 'fill-danger-soft' : 'fill-ok-soft'} />
      {kind === 'review' ? (
        <g>
          {[0, 1, 2, 3, 4].map((i) => (
            <path key={i} transform={`translate(${36 + i * 20} 22)`} d="M8 0l2.4 5 5.6.8-4 4 1 5.6L8 12.8 3 15.4l1-5.6-4-4 5.6-.8z" className={i === 0 ? 'fill-warn' : 'fill-surface stroke-border'} />
          ))}
          <rect x="36" y="50" width="128" height="7" rx="3.5" className="fill-ink-muted" opacity=".5" />
          <rect x="36" y="64" width="96" height="7" rx="3.5" className="fill-ink-muted" opacity=".5" />
          <text x="164" y="92" textAnchor="end" fontSize="20" className="fill-danger" fontWeight="800">?!</text>
        </g>
      ) : (
        <g>
          <rect x="30" y="18" width="140" height="74" rx="12" className="fill-surface stroke-border" strokeWidth="2" />
          {['Steps', 'Expected', 'Device'].map((t, i) => (
            <g key={t}>
              <circle cx="46" cy={36 + i * 18} r="5" className="fill-ok" />
              <rect x="58" y={33 + i * 18} width={80 - i * 14} height="6" rx="3" className="fill-ink" opacity=".6" />
            </g>
          ))}
          <rect x="132" y="66" width="30" height="16" rx="8" className="fill-brand" />
        </g>
      )}
    </svg>
  );
}

/** Verification / Shield Art */
export function VerifyArt() {
  return (
    <svg aria-hidden="true" viewBox="0 0 200 160" className="h-auto w-full">
      <rect width="200" height="160" rx="28" className="fill-info-soft" />
      <path d="M100 26l46 16v34c0 30-22 50-46 58-24-8-46-28-46-58V42z" className="fill-surface stroke-info" strokeWidth="3" />
      <path d="M80 82l14 14 28-30" fill="none" className="stroke-ok" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
