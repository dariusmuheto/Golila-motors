import Header from './Header';
import LOGO from '../../src/assets/images/logo.png';

export default function Hero() {
  return (
    <section
      id="top"
      className="
        hero-section
        relative
        min-h-[100vh]
        overflow-hidden
        bg-black
        text-white
      "
    >
      {/* =========================
          SUBTLE BACKGROUND GLOW
      ========================== */}
      <div
        aria-hidden="true"
        className="
          hero-bg
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(255,0,30,0.08),transparent_45%)]
        "
      />

      {/* =========================
          TOP-LEFT RED ACCENT
      ========================== */}
      <div
        aria-hidden="true"
        className="
          hero-accent-top
          absolute
          -left-[320px]
          top-[20px]
          h-[560px]
          w-[620px]
          bg-gradient-to-b
          from-[#ff1530]
          via-[#ed001d]
          to-transparent
          [clip-path:polygon(70%_0,100%_0,30%_100%,0_100%)]
        "
      />

      {/* TOP-LEFT INNER STRIPE */}
      <div
        aria-hidden="true"
        className="
          hero-accent-top-inner
          absolute
          -left-[195px]
          top-0
          h-[560px]
          w-[620px]
          bg-gradient-to-b
          from-[#ff1530]
          via-[#ed001d]
          to-transparent
          [clip-path:polygon(70%_0,100%_0,30%_100%,0_100%)]
        "
      />

      {/* =========================
          HEADER
      ========================== */}
      <div className="relative z-20">
        <Header />
      </div>

      {/* =========================
          HERO CONTENT
      ========================== */}
      <div
        className="
          relative
          z-10
          flex
          min-h-[calc(100vh-55px)]
          flex-col
          items-center
          justify-center
          px-4
          sm:px-6
          pb-[70px]
          sm:pb-[90px]
          pt-[120px]
          sm:pt-[180px]
          text-center
        "
      >
        {/* ==============================
            GORILLA MOTORS LOGO
        =============================== */}
        <div
          className="
            hero-logo
            mb-[60px]
            sm:mb-[105px]
            flex
            h-[100px]
            sm:h-[145px]
            w-[100px]
            sm:w-[145px]
            items-center
            justify-center
          "
        >
          <img
            src={LOGO}
            alt="Gorilla Motors Logo"
            className="
              h-full
              w-full
              object-contain
            "
          />
        </div>

        {/* ==============================
            TITLE
        =============================== */}
        <h1
          className="
            m-0
            text-center
            font-sans
            font-semibold
            uppercase
            leading-[1.35]
            tracking-[0.42em]
            text-white

            sm:text-[48px]
            md:text-[54px]
            lg:text-[58px]
            xl:text-[62px]
          "
        >
          <span
            className="
              hero-title
              hero-title-one
              block
              text-3xl
              sm:text-4xl
            "
          >
            Gorilla Motors Ltd
          </span>

          <span
            className="
              hero-title
              hero-title-two
              mt-2
              block
              text-3xl
              sm:text-4xl
            "
          >
            Profile
          </span>
        </h1>
      </div>

      {/* =========================
          BOTTOM-RIGHT RED ACCENT
      ========================== */}
      <div
        aria-hidden="true"
        className="
          hero-accent-bottom
          absolute
          bottom-[80px]
          right-[-175px]
          h-[560px]
          w-[620px]
          bg-gradient-to-t
          from-[#ff001f]
          via-[#d90018]
          to-[#320005]
          [clip-path:polygon(10%_100%,40%_100%,100%_0,70%_0)]
        "
      />

      {/* BOTTOM-RIGHT INNER STRIPE */}
      <div
        aria-hidden="true"
        className="
          hero-accent-bottom-inner
          absolute
          bottom-[10px]
          right-[-250px]
          h-[560px]
          w-[620px]
          bg-gradient-to-t
          from-[#ff001f]
          via-[#d90018]
          to-[#320005]
          [clip-path:polygon(10%_100%,40%_100%,100%_0,70%_0)]
        "
      />

      {/* =========================
          BOTTOM RED BAR
      ========================== */}
      <div
        aria-hidden="true"
        className="
          hero-bottom-bar
          absolute
          bottom-0
          left-0
          z-30
          h-[55px]
          w-full
          bg-[#d90000]
        "
      />
    </section>
  );
}