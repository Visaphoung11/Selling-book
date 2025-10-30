export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Book Selling API</h1>
        <p className="text-lg text-gray-600 mb-6">
          Welcome to the Book Selling API. This backend service provides endpoints for managing books, authors,
          categories, and user authentication.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">API Base URL</h2>
          <code className="text-sm text-blue-600 bg-white px-3 py-1 rounded">/api/v1</code>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Available Endpoints</h2>
          <div className="space-y-2 text-gray-700">
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm bg-green-100 text-green-700 px-2 py-1 rounded">POST</span>
              <span>/api/v1/auth/register</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm bg-green-100 text-green-700 px-2 py-1 rounded">POST</span>
              <span>/api/v1/auth/login</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded">GET</span>
              <span>/api/v1/books</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded">GET</span>
              <span>/api/v1/authors</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded">GET</span>
              <span>/api/v1/categories</span>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Authentication required for protected routes. Include JWT token in Authorization header.
          </p>
        </div>
      </div>
    </div>
  )
}
