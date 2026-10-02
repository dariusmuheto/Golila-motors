import { useState, type FormEvent } from 'react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactUs() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus('submitting');
    setErrorMessage('');

    try {
      // Temporarily disabled for testing - simulate success
      console.log('Form submitted:', {
        name: String(data.get('name') ?? ''),
        email: String(data.get('email') ?? ''),
        phone: String(data.get('phone') ?? ''),
        message: String(data.get('message') ?? ''),
      });

      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error ? err.message : 'Something went wrong'
      );
    }
  }

  return (
    <section
      id="contact"
      className="relative
       min-h-[780px]
        overflow-hidden
           bg-[#8f0008]"
    >
      {/* =========================================================
          DESKTOP LAYOUT
      ========================================================== */}
      <div className="relative mx-auto min-h-[780px] max-w-[1600px] ">
        {/* LEFT RED SIDE */}
        <div className="relative z-10 flex min-h-[780px] w-full items-center px-8 py-20 sm:px-12 lg:w-[58%] lg:px-20 xl:px-28">
          <div className="w-full max-w-[560px]">
            {/* Title */}
            <h2 className="text-5xl font-normal tracking-tight text-white sm:text-6xl lg:text-[64px]">
              Contact us:
            </h2>

            {/* Contact information */}
            <div className="mt-20 space-y-6 text-white sm:mt-24">
              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#202020]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21s7-6.2 7-12a7 7 0 10-14 0c0 5.8 7 12 7 12z"
                    />
                    <circle cx="12" cy="9" r="2.2" />
                  </svg>
                </div>

                <span className="text-base sm:text-lg">
                  Gahanga Next to Merez Gas Station
                </span>
              </div>

              {/* Telephone */}
              <div className="flex items-center gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#202020]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M22 16.92v3a2 2 0 01-2.18 2
                      19.8 19.8 0 01-8.63-3.07
                      19.5 19.5 0 01-6-6
                      19.8 19.8 0 01-3.07-8.67
                      A2 2 0 014.11 2h3a2 2 0 012 1.72
                      12.8 12.8 0 00.7 2.81
                      2 2 0 01-.45 2.11L8.09 9.91
                      a16 16 0 006 6l1.27-1.27
                      a2 2 0 012.11-.45
                      12.8 12.8 0 002.81.7
                      A2 2 0 0122 16.92z"
                    />
                  </svg>
                </div>

                <span className="text-base sm:text-lg">
                  (+250) 788300228 - 788319264
                </span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#202020]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-5 w-5"
                  >
                    <rect
                      width="20"
                      height="16"
                      x="2"
                      y="4"
                      rx="2"
                    />
                    <path d="M22 7l-10 6L2 7" />
                  </svg>
                </div>

                <span className="text-base sm:text-lg">
                  info@gorillamotorsltd.rw
                </span>
              </div>

              {/* Website */}
              <div className="flex items-center gap-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#202020]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-5 w-5"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M3 12h18" />
                    <path d="M12 3a14 14 0 010 18" />
                    <path d="M12 3a14 14 0 000 18" />
                  </svg>
                </div>

                <a
                  href="https://www.gorillamotorsltd.rw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-blue-300 underline underline-offset-2 transition hover:text-white sm:text-lg"
                >
                  www.gorillamotorsltd.rw
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            RIGHT FORM AREA
        ========================================================== */}
        <div
          className="
            relative
            z-20
            bg-black
            px-8
            py-16
            sm:px-12
            lg:absolute
            lg:right-0
            lg:top-0
            lg:h-full
            lg:w-[55%]
            lg:px-16
            lg:py-20
            xl:px-24
          "
          style={{
            clipPath: 'ellipse(100% 100% at 100% 50%)',
          }}
        >
          <div className="mx-auto flex h-full max-w-[560px] items-center">
            <form
              onSubmit={handleSubmit}
              className="w-full space-y-5"
            >
              {/* Form heading */}
              <div className="mb-8">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#fff]">
                  Get in touch
                </p>

                <h3 className="mt-2 text-3xl font-semibold text-[#fff] sm:text-4xl">
                  Send us a message
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-gray-600">
                  Have a question or looking for a vehicle? Send us a
                  message and our team will get back to you.
                </p>
              </div>

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  required
                  className="
                    w-full
                    rounded-lg
                    border
                    border-gray-600
                    bg-[#000]
                    px-4
                    py-3
                    text-white
                    outline-none
                    transition
                    placeholder:text-gray-400
                    focus:border-[#a91508]
                    focus:ring-2
                    focus:ring-[#a91508]/10
                  "
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="
                    w-full
                    rounded-lg
                    border
                    border-gray-600
                    bg-[#000]
                    px-4
                    py-3
                    text-white
                    outline-none
                    transition
                    placeholder:text-gray-400
                    focus:border-[#a91508]
                    focus:ring-2
                    focus:ring-[#a91508]/10
                  "
                  placeholder="you@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Phone
                  <span className="ml-1 font-normal text-gray-400">
                    (optional)
                  </span>
                </label>

                <input
                  id="phone"
                  name="phone"
                  className="
                    w-full
                    rounded-lg
                    border
                    border-gray-600
                    bg-[#000]
                    px-4
                    py-3
                    text-white
                    outline-none
                    transition
                    placeholder:text-gray-400
                    focus:border-[#a91508]
                    focus:ring-2
                    focus:ring-[#a91508]/10
                  "
                  placeholder="+250 7xx xxx xxx"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="
                    w-full
                    resize-none
                    rounded-lg
                    border
                   border-gray-600
                    bg-[#000]
                    px-4
                    py-3
                    text-gray-900
                    outline-none
                    transition
                    placeholder:text-gray-400
                    focus:border-[#a91508]
                    focus:ring-2
                    focus:ring-[#a91508]/10
                  "
                  placeholder="Tell us what you're looking for"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="
                  w-full
                  rounded-lg
                  bg-[#a91508]
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  shadow-sm
                  transition-all
                  duration-200
                  hover:bg-[#8f1207]
                  hover:shadow-md
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              >
                {status === 'submitting'
                  ? 'Sending…'
                  : 'Send message'}
              </button>

              {/* Success */}
              {status === 'success' && (
                <p className="rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">
                  Thanks — we&apos;ll get back to you within two
                  working days.
                </p>
              )}

              {/* Error */}
              {status === 'error' && (
                <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
                  Couldn&apos;t send that ({errorMessage}). Make sure
                  the API server is running on port 4000.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}