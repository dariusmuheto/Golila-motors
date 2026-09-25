const SERVICES = ['Car rental', 'Car sales', 'Garage services', 'Commercial transport', 'Private bond'];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="relative overflow-hidden border-b border-line bg-paper">
      <div className="mx-auto max-w-content px-4 sm:px-6 py-16 sm:py-24 text-center">
        <p className="mb-3 text-sm tracking-wide text-crimson">Services</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-ink">What We Do</h2>

        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-ash px-4">
          Established with a passion for automobiles, Gorilla Motors has
          been a trusted presence in Rwanda for over 13 years. As a
          customer-focused dealership, we take pride in helping you find
          the perfect vehicle to match your needs and desires.
        </p>

        <div className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-3 sm:gap-4">
          {SERVICES.map((service) => (
            <span
              key={service}
              className="rounded-full border border-crimson/40 px-4 sm:px-6 py-2 text-sm sm:text-base font-medium text-crimson"
            >
              {service}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}