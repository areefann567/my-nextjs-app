export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
      <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-4xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            🚀 Azure Deployment Success!
          </h1>
          <p className="text-lg text-gray-600">
            Next.js + GitHub Actions + Azure Static Web Apps
          </p>
        </div>

        {/* Demo Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-green-50 p-6 rounded-xl">
            <h3 className="font-semibold text-green-800 mb-3">✅ What's Working</h3>
            <ul className="text-green-700 space-y-2">
              <li>• Next.js App Router</li>
              <li>• Tailwind CSS Styling</li>
              <li>• GitHub Actions CI/CD</li>
              <li>• Azure Static Deployment</li>
              <li>• Instant Live Updates</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl">
            <h3 className="font-semibold text-blue-800 mb-3">🛠️ Ready For</h3>
            <ul className="text-blue-700 space-y-2">
              <li>• MongoDB Integration</li>
              <li>• API Routes</li>
              <li>• Authentication</li>
              <li>• Real-time Features</li>
              <li>• Full-stack Apps</li>
            </ul>
          </div>
        </div>

        {/* Live Demo Status */}
        <div className="text-center p-6 bg-gray-50 rounded-xl mb-8">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full mb-4">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            <span className="font-medium">LIVE DEPLOYMENT ACTIVE</span>
          </div>
          <p className="text-gray-600">
            This page was deployed automatically via GitHub Actions to Azure Static Web Apps
          </p>
        </div>

        {/* Tech Stack */}
        <div className="text-center">
          <h3 className="font-semibold text-gray-700 mb-4">✨ Tech Stack Demonstrated</h3>
          <div className="flex justify-center gap-4 flex-wrap">
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Next.js 14</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">TypeScript</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">GitHub Actions</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Azure Static Web Apps</span>
          </div>
        </div>

        {/* Timestamp for demo purposes */}
        <div className="text-center mt-8 text-sm text-gray-500">
          Last updated: {new Date().toLocaleString()}
        </div>
      </div>
    </div>
  );
}