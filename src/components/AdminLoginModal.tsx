import { useState } from 'react';

interface AdminLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (isAdmin: boolean) => void;
}

export default function AdminLoginModal({ isOpen, onClose, onLogin }: AdminLoginModalProps) {
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simple mock authentication
    setTimeout(() => {
      if (password === 'admin123') {
        onLogin(true);
        // Directly call global function to redirect to dashboard
        (window as any).goToDashboard();
        onClose();
        setIsLoading(false);
      } else {
        setError('Invalid admin password');
        setIsLoading(false);
      }
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="relative max-w-md w-full bg-white rounded-lg shadow-xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white bg-opacity-90 hover:bg-opacity-100 transition-all shadow-lg hover:shadow-xl"
          aria-label="Close"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal content */}
        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-ink mb-3">Admin Access</h2>
            <p className="text-ash text-lg">Enter admin password to access the dashboard</p>
          </div>

          {/* Admin Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Password Input */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-ink mb-2">
                Admin Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border border-line rounded-lg focus:ring-2 focus:ring-crimson focus:border-transparent outline-none transition-all text-base"
                placeholder="Enter admin password"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 bg-crimson text-white rounded-lg hover:bg-crimson/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 text-base font-semibold"
            >
              {isLoading ? 'Accessing...' : 'Access Admin Dashboard'}
            </button>
          </form>

          {/* Demo Info */}
          <div className="mt-6 p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-600">
              <strong>Demo Password:</strong> admin123
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}