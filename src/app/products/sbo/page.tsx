"use client";

export default function Page() {
  return (
    <div style={{ width: '100%', height: '100vh', margin: 0, padding: 0, overflow: 'hidden', background: '#F6FBF7' }}>
      <iframe
        src="/standalone/sbo/index.html"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          margin: 0,
          padding: 0,
          display: 'block'
        }}
        title="Jeevan Rekha Soyabean Oil"
      />
    </div>
  );
}
