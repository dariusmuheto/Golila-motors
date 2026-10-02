import { useEffect, useState } from 'react';
import SignInModal from './SignInModal';
import AdminLoginModal from './AdminLoginModal';

const NAV_ITEMS = [
  { label: 'Home', href: '#top' },
  { label: 'About us', href: '#about-us' },
  { label: 'Services', href: '#what-we-do' },
  { label: 'Contact us', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [signInModalOpen, setSignInModalOpen] = useState(false);
  const [adminLoginModalOpen, setAdminLoginModalOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      
      // Find which section is currently in view
      const scrollPosition = window.scrollY + 100;

      // Check each section to see which is in view
      const sections = [
        { id: 'top', label: 'Home' },
        { id: 'aboutus', label: 'About us' },
        { id: 'what-we-do', label: 'Services' },
        { id: 'inventory', label: 'Inventory' },
        { id: 'contact', label: 'Contact us' }
      ];
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const sectionTop = element.offsetTop;
          const sectionBottom = sectionTop + element.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveNav(section.label);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Set initial active state based on current scroll position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-50
        transition-all duration-300 ease-in-out
        ${
          scrolled
            ? 'bg-ink/90 py-3 shadow-lg backdrop-blur-md'
            : 'bg-transparent py-6'
        }
      `}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-4 sm:px-6">
        
        {/* Logo / Brand */}
        <a
          href="#top"
          className="flex items-center gap-2"
        >
        
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-4 sm:gap-6 md:flex">
          {NAV_ITEMS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => {
                e.preventDefault();
                setActiveNav(label);
                const element = document.querySelector(href);
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className={`
                relative
                text-sm font-medium uppercase tracking-[0.12em]
                transition-colors duration-200
                ${
                  activeNav === label
                    ? 'text-white after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:bg-white after:transition-all after:duration-300'
                    : 'text-crimson hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-crimson after:transition-all after:duration-300 hover:after:w-full'
                }
              `}
            >
              {label}
            </a>
          ))}
          
          {/* Admin Login - Desktop */}
          <button
            onClick={() => setAdminLoginModalOpen(true)}
            className="px-4 py-2 text-sm font-medium text-white bg-crimson rounded-lg hover:bg-crimson/90 transition-colors duration-200"
          >
            Admin Login
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-crimson focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-ink/95 backdrop-blur-md">
          <div className="px-4 py-4 space-y-2">
            {NAV_ITEMS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveNav(label);
                  setMobileMenuOpen(false);
                  const element = document.querySelector(href);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`
                  block
                  py-2
                  text-sm font-medium uppercase tracking-[0.12em]
                  transition-colors duration-200
                  ${
                    activeNav === label
                      ? 'text-white'
                      : 'text-crimson hover:text-white'
                  }
                `}
              >
                {label}
              </a>
            ))}
            {/* Sign In Button & Admin Access - Mobile */}
            <div className="space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setSignInModalOpen(true);
                }}
                className="
                  block
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-crimson
                  border border-crimson
                  rounded-lg
                  text-center
                  hover:bg-crimson
                  hover:text-white
                  transition-colors duration-200
                "
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setAdminLoginModalOpen(true);
                }}
                className="
                  block
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-white
                  bg-crimson
                  rounded-lg
                  text-center
                  hover:bg-crimson/90
                  transition-colors duration-200
                "
              >
                Admin Login
              </button>
            </div>
          </div>
        </nav>
      )}

      {/* Sign In Modal */}
      <SignInModal
        isOpen={signInModalOpen}
        onClose={() => setSignInModalOpen(false)}
      />

      {/* Admin Login Modal */}
      <AdminLoginModal
        isOpen={adminLoginModalOpen}
        onClose={() => setAdminLoginModalOpen(false)}
        onLogin={(isAdminStatus) => console.log('Admin login status:', isAdminStatus)}
      />
    </header>
  );
}