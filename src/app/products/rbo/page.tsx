"use client";

export default function Page() {
  return (
    <div style={{ width: '100%', height: '100vh', margin: 0, padding: 0, overflow: 'hidden', background: '#FBF8FF' }}>
      <iframe
        src="/standalone/rbo/index.html"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          margin: 0,
          padding: 0,
          display: 'block'
        }}
        title="Jeevan Rekha Rice Bran Oil"
      />
    </div>
  );
}
