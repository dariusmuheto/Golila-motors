export default function Footer() {
  return (
    <footer className="bg-ink py-4 sm:py-6">
      <p className="text-center text-xs sm:text-xs text-gray-500">
        Gorilla Motors Ltd &middot; Company Profile &middot; {new Date().getFullYear()}
      </p>
    </footer>
  );
}