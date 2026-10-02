import { useState } from 'react';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SignInModal({ isOpen, onClose }: SignInModalProps) {
  const [signInMethod, setSignInMethod] = useState<'email' | 'google'>('email');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert('Sign in successful! (This is a demo)');
      onClose();
    }, 1500);
  };

  const handleGoogleSignIn = () => {
    setIsLoading(true);
    setError('');

    // Simulate Google OAuth flow
    setTimeout(() => {
      setIsLoading(false);
      // For demo purposes, just show success
      alert('Google sign in successful! (This is a demo)');
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="relative max-w-md w-full bg-white rounded-lg shadow-xl">
      
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-white bg-opacity-90 hover:bg-opacity-100 transition-all shadow-lg hover:shadow-xl hover:bg-crimson"
          aria-label="Close"
        >
         <p className='text-2xl font-bold text-crimson hover:text-white'>×</p>
      
        </button>

        {/* Modal content */}
        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-crimson mb-3">Welcome Back</h2>
            <p className="text-ash text-lg">Choose your sign-in method</p>
          </div>

          {/* Sign-in Method Selection */}
          <div className="mb-8">
            <div className="flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setSignInMethod('email')}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  signInMethod === 'email'
                    ? 'bg-white text-crimson shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Email
              </button>
              <button
                onClick={() => setSignInMethod('google')}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  signInMethod === 'google'
                    ? 'bg-white text-crimson shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Google
              </button>
            </div>
          </div>

          {/* Email Sign-in Form */}
          {signInMethod === 'email' && (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-line rounded-lg focus:ring-2 focus:ring-crimson focus:border-transparent outline-none transition-all text-base"
                  placeholder="Enter your email"
                />
              </div>

              {/* Password Input */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-ink mb-2">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-line rounded-lg focus:ring-2 focus:ring-crimson focus:border-transparent outline-none transition-all text-base"
                  placeholder="Enter your password"
                />
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 text-crimson border-line rounded focus:ring-crimson"
                  />
                  <label htmlFor="remember" className="ml-2 text-sm text-ash">
                    Remember me
                  </label>
                </div>
                <a href="#forgot-password" className="text-sm text-crimson hover:text-crimson/80 transition-colors">
                  Forgot password?
                </a>
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
                className="w-full py-3 px-4 bg-crimson text-white font-medium rounded-lg hover:bg-crimson/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 text-base font-semibold"
              >
                {isLoading ? 'Signing in...' : 'Sign In with Email'}
              </button>
            </form>
          )}

          {/* Google Sign-in */}
          {signInMethod === 'google' && (
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-gray-600 mb-6">
                  You'll be redirected to Google to sign in to your account
                </p>
              </div>

              {/* Google Sign-in Button */}
              <button
                onClick={handleGoogleSignIn}
                disabled={isLoading}
                className="w-full py-3 px-4 border border-line rounded-lg transition-colors duration-200 flex items-center justify-center gap-3 text-base font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-crimson"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="animate-spin h-5 w-5 border-2 border-crimson border-t-transparent rounded-full"></div>
                    <span>Connecting to Google...</span>
                  </div>
                ) : (
                  <>
                    <svg className="w-5 h-5 text-crimson cursor:pointer hover:text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <p className='text-ash hover:text-white'>Continue with Google</p>
                  </>
                )}
              </button>

              {/* Error Message */}
              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-600">{error}</p>
                </div>
              )}

              {/* Back to Email Option */}
              <div className="text-center">
                <button
                  onClick={() => setSignInMethod('email')}
                  className="text-sm text-crimson hover:text-crimson/80 transition-colors"
                >
                  Back to email sign-in
                </button>
              </div>
            </div>
          )}

          

          {/* Sign Up Link */}
          <div className="text-center mt-8">
            <p className="text-ash text-base">
              Don't have an account?{' '}
              <a href="#signup" className="text-crimson hover:text-crimson/80 transition-colors font-semibold">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}