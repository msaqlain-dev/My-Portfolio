import type { ReactNode } from 'react';

interface DeviceMockupProps {
  type: 'desktop' | 'mobile';
  children: ReactNode;
  /** Render a larger phone (modal view). Desktop scales naturally with container. */
  large?: boolean;
}

function LaptopMockup({ children }: { children: ReactNode }) {
  return (
    <div className="w-full select-none">
      {/* ── Lid / Screen ───────────────────────────────────────── */}
      <div
        className="relative w-full"
        style={{
          background: 'linear-gradient(180deg, #2a2a2e 0%, #1c1c1e 100%)',
          borderRadius: '10px 10px 4px 4px',
          padding: '10px 10px 6px',
          boxShadow:
            '0 0 0 1px rgba(255,255,255,0.07), 0 20px 60px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.08)',
        }}
      >
        {/* Camera dot */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 z-10">
          <div className="w-1.5 h-1.5 rounded-full bg-[#3a3a3c]" />
        </div>

        {/* Screen bezel */}
        <div
          style={{
            background: '#0a0a0f',
            borderRadius: '4px',
            overflow: 'hidden',
            aspectRatio: '16 / 10',
            position: 'relative',
          }}
        >
          {children}
        </div>
      </div>

      {/* ── Base / Keyboard ─────────────────────────────────────── */}
      <div
        style={{
          background: 'linear-gradient(180deg, #2c2c2e 0%, #222224 100%)',
          borderRadius: '0 0 12px 12px',
          height: '14px',
          position: 'relative',
          boxShadow: '0 4px 20px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)',
        }}
      >
        {/* Trackpad hint */}
        <div
          style={{
            position: 'absolute',
            top: '5px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '52px',
            height: '4px',
            borderRadius: '4px',
            background: 'rgba(255,255,255,0.07)',
          }}
        />
      </div>

      {/* Desk reflection */}
      <div
        style={{
          width: '75%',
          margin: '0 auto',
          height: '1px',
          background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)',
        }}
      />
    </div>
  );
}

function PhoneMockup({ children, large }: { children: ReactNode; large?: boolean }) {
  return (
    <div
      className="relative mx-auto select-none"
      style={{ width: large ? '260px' : '200px' }}
    >
      {/* ── Phone body ───────────────────────────────────────────── */}
      <div
        style={{
          background: 'linear-gradient(180deg, #2a2a2e 0%, #1a1a1c 100%)',
          borderRadius: '38px',
          padding: '8px',
          boxShadow:
            '0 0 0 1px rgba(255,255,255,0.08), 0 30px 80px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.1), inset 0 -1px 0 rgba(0,0,0,0.3)',
          position: 'relative',
        }}
      >
        {/* ── Screen ───────────────────────────────────────────── */}
        <div
          style={{
            background: '#000',
            borderRadius: '30px',
            overflow: 'hidden',
            aspectRatio: '9 / 19.5',
            position: 'relative',
          }}
        >
          {/* Dynamic Island */}
          <div
            style={{
              position: 'absolute',
              top: '10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80px',
              height: '22px',
              background: '#000',
              borderRadius: '12px',
              zIndex: 10,
              boxShadow: '0 0 0 2px rgba(255,255,255,0.04)',
            }}
          />
          {/* Screen content */}
          {children}
        </div>
      </div>

      {/* ── Side Buttons ─────────────────────────────────────────── */}
      {/* Power button (right) */}
      <div
        style={{
          position: 'absolute',
          right: '-3px',
          top: '88px',
          width: '3px',
          height: '48px',
          background: 'linear-gradient(180deg, #3a3a3c 0%, #2a2a2c 100%)',
          borderRadius: '0 3px 3px 0',
          boxShadow: '1px 0 2px rgba(0,0,0,0.4)',
        }}
      />

      {/* Volume Up (left) */}
      <div
        style={{
          position: 'absolute',
          left: '-3px',
          top: '78px',
          width: '3px',
          height: '34px',
          background: 'linear-gradient(180deg, #3a3a3c 0%, #2a2a2c 100%)',
          borderRadius: '3px 0 0 3px',
          boxShadow: '-1px 0 2px rgba(0,0,0,0.4)',
        }}
      />

      {/* Volume Down (left) */}
      <div
        style={{
          position: 'absolute',
          left: '-3px',
          top: '124px',
          width: '3px',
          height: '34px',
          background: 'linear-gradient(180deg, #3a3a3c 0%, #2a2a2c 100%)',
          borderRadius: '3px 0 0 3px',
          boxShadow: '-1px 0 2px rgba(0,0,0,0.4)',
        }}
      />

      {/* Mute toggle (left) */}
      <div
        style={{
          position: 'absolute',
          left: '-3px',
          top: '50px',
          width: '3px',
          height: '20px',
          background: 'linear-gradient(180deg, #3a3a3c 0%, #2a2a2c 100%)',
          borderRadius: '3px 0 0 3px',
          boxShadow: '-1px 0 2px rgba(0,0,0,0.4)',
        }}
      />

      {/* USB-C port (bottom) */}
      <div
        style={{
          position: 'absolute',
          bottom: '14px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '36px',
          height: '5px',
          background: '#111',
          borderRadius: '3px',
          boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.8)',
          zIndex: 5,
        }}
      />
    </div>
  );
}

export default function DeviceMockup({ type, children, large }: DeviceMockupProps) {
  if (type === 'mobile') return <PhoneMockup large={large}>{children}</PhoneMockup>;
  return <LaptopMockup>{children}</LaptopMockup>;
}
