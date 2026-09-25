export default function VisionMission() {
  return (
    <section className="border-b border-line bg-offwhite">
      <div className="mx-auto grid max-w-content gap-8 px-4 sm:px-6 py-16 sm:py-24 md:grid-cols-2 md:divide-x md:divide-line">
        <div className="text-center md:pr-12">
          <div className="mx-auto mb-4 sm:mb-6 flex h-14 sm:h-16 w-14 sm:w-16 items-center justify-center rounded-full bg-crimson">
            <span className="text-xl sm:text-2xl text-white" aria-hidden="true">
              👁
            </span>
          </div>
          <h3 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-semibold text-crimson">Vision</h3>
          <p className="text-base sm:text-lg leading-relaxed text-ash px-2">
            To lead the automotive industry in customer satisfaction,
            innovation, and environmental responsibility. We envision a
            future where every interaction with our dealership builds a
            foundation of trust and community.
          </p>
        </div>

        <div className="text-center md:pl-12">
          <div className="mx-auto mb-4 sm:mb-6 flex h-14 sm:h-16 w-14 sm:w-16 items-center justify-center rounded-full bg-crimson">
            <span className="text-xl sm:text-2xl text-white" aria-hidden="true">
              🎯
            </span>
          </div>
          <h3 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-semibold text-crimson">Mission</h3>
          <p className="text-base sm:text-lg leading-relaxed text-ash px-2">
            To deliver unparalleled service and guidance through the
            car-buying journey, empowering customers to find the perfect
            vehicle with ease, comfort, and confidence.
          </p>
        </div>
      </div>
    </section>
  );
}