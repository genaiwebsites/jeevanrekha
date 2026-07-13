"use client";

export default function Page() {
  return (
    <div style={{ width: '100%', height: '100vh', margin: 0, padding: 0, overflow: 'hidden', background: '#FEFAF5' }}>
      <iframe
        src="/standalone/kgmo/index.html"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          margin: 0,
          padding: 0,
          display: 'block'
        }}
        title="Jeevan Rekha Mustard Oil"
      />
    </div>
  );
}
