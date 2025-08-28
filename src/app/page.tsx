
export default function Home() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h1>🚀 Azure Deployment Successful!</h1>
      <p>Next.js + GitHub Actions + Azure Static Web Apps</p>
      
      <div style={{ margin: '2rem 0', padding: '1rem', backgroundColor: '#f0f9ff', borderRadius: '8px' }}>
        <h3>✅ What's Working</h3>
        <ul style={{ textAlign: 'left', display: 'inline-block' }}>
          <li>Next.js App Router</li>
          <li>GitHub Actions CI/CD</li>
          <li>Azure Static Deployment</li>
          <li>Instant Live Updates</li>
        </ul>
      </div>

      <p><strong>Last updated:</strong> {new Date().toLocaleString()}</p>
      
      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#e6f7ff' }}>
        <p>🚀 Full-stack ready for MongoDB & APIs</p>
      </div>
    </div>
  );
}
