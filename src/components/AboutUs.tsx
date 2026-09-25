import ABOUTUSIMAGE from "../../src/assets/images/aboutUsImage.png";
export default function AboutUs() {
  return (
    <section id="about-us" className="border-b border-line bg-paper">
      <div className="mx-auto max-w-content px-4 sm:px-6 py-16 sm:py-24">
        <p className="mb-3 text-sm tracking-wide text-crimson">
          Company profile
        </p>

        <h2 className="mb-8 sm:mb-12 text-2xl sm:text-3xl md:text-4xl font-semibold text-ink">
          About Us
        </h2>

        <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 md:grid-cols-2 md:gap-16">
          {/* Left - Text */}
          <div className="space-y-4 text-base sm:text-lg leading-relaxed text-ash">
            <p>
              The company was established in 2010 with its head office at
              Gikondo, opposite former RWANDEX.
            </p>

            <p>
              The company imports vehicles from different countries depending
              on the preferences of our clients.
            </p>

            <p>
              Gorilla Motors Ltd opened a branch in The Republic of South Sudan
              in November 2014 to deal in electronics and logistics.
            </p>

            <p>
              The company has continued to diversify by venturing into
              construction machinery renting and commercial transportation.
            </p>

            <p>
              In 2018 Gorilla Motors Ltd moved its head office to the newly
              built Show Room in Gahanga.
            </p>
          </div>

          {/* Right - Image */}
          <div className="overflow-hidden rounded-2xl">
            <img
              src={ABOUTUSIMAGE}
              alt="Gorilla Motors showroom"
              className="h-full min-h-[300px] sm:min-h-[400px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}