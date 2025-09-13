'use client'

// This is the dashboard home page component.
// In a real Next.js application, this would typically be a server component
// that fetches its own data.
const DashboardPage = () => {
  return (
    <div>
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Dashboard Overview</h2>
      
      {/* Key Metrics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-indigo-500 text-white rounded-xl p-6 shadow-lg transform transition-transform duration-300 hover:scale-105">
          <h3 className="text-lg font-medium">Total Users</h3>
          <p className="text-4xl font-bold mt-2">1,245</p>
        </div>
        <div className="bg-green-500 text-white rounded-xl p-6 shadow-lg transform transition-transform duration-300 hover:scale-105">
          <h3 className="text-lg font-medium">Sales Revenue</h3>
          <p className="text-4xl font-bold mt-2">$78,900</p>
        </div>
        <div className="bg-yellow-500 text-white rounded-xl p-6 shadow-lg transform transition-transform duration-300 hover:scale-105">
          <h3 className="text-lg font-medium">New Orders</h3>
          <p className="text-4xl font-bold mt-2">321</p>
        </div>
      </div>
      
      {/* Recent Activity Section */}
      <div className="bg-gray-50 rounded-lg p-6 shadow-inner">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Recent Activity</h3>
        <ul className="space-y-4">
          <li className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <span className="bg-indigo-200 text-indigo-700 rounded-full h-8 w-8 flex items-center justify-center text-sm font-bold mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </span>
            <div>
              <p className="font-medium text-gray-900">John Doe signed up for a new account.</p>
              <p className="text-sm text-gray-500">2 hours ago</p>
            </div>
          </li>
          <li className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <span className="bg-green-200 text-green-700 rounded-full h-8 w-8 flex items-center justify-center text-sm font-bold mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9v2m0 0v2m0-2h2m-2 0h-2m-2-4h4a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2z" />
              </svg>
            </span>
            <div>
              <p className="font-medium text-gray-900">New order #8765 placed by Jane Smith.</p>
              <p className="text-sm text-gray-500">5 hours ago</p>
            </div>
          </li>
          <li className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <span className="bg-yellow-200 text-yellow-700 rounded-full h-8 w-8 flex items-center justify-center text-sm font-bold mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2-6a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </span>
            <div>
              <p className="font-medium text-gray-900">Support ticket from Bob Johnson resolved.</p>
              <p className="text-sm text-gray-500">1 day ago</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardPage;
