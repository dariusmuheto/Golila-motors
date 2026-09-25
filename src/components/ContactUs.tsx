import { useState, type FormEvent } from 'react';
import { submitEnquiry } from '../lib/api';

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
      await submitEnquiry({
        name: String(data.get('name') ?? ''),
        email: String(data.get('email') ?? ''),
        phone: String(data.get('phone') ?? ''),
        message: String(data.get('message') ?? ''),
      });
      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong');
    }
  }

  return (
    <section id="contact" className="bg-ink">
      <div className="mx-auto grid max-w-content gap-8 sm:gap-12 px-4 sm:px-6 py-16 sm:py-24 md:grid-cols-2">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">Contact us</h2>
          <p className="mt-4 max-w-sm text-gray-300">
            A home of quick, good and reliable service delivery.
          </p>

          <dl className="mt-8 sm:mt-10 space-y-3 sm:space-y-4 text-sm text-gray-300">
            <div>
              <dt className="text-crimson">Location</dt>
              <dd className="mt-1">Gahanga, next to Merez Gas Station</dd>
            </div>
            <div>
              <dt className="text-crimson">Telephone</dt>
              <dd className="mt-1">+250 788 300 228 / +250 788 319 264</dd>
            </div>
            <div>
              <dt className="text-crimson">E-mail</dt>
              <dd className="mt-1">info@gorillamotorsltd.rw</dd>
            </div>
            <div>
              <dt className="text-crimson">Website</dt>
              <dd className="mt-1">www.gorillamotorsltd.rw</dd>
            </div>
          </dl>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm text-gray-300">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              className="w-full rounded-md border border-white/20 bg-white/5 px-4 py-2.5 text-white placeholder:text-gray-500 focus:border-crimson focus:outline-none"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-sm text-gray-300">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-md border border-white/20 bg-white/5 px-4 py-2.5 text-white placeholder:text-gray-500 focus:border-crimson focus:outline-none"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="mb-1 block text-sm text-gray-300">
              Phone (optional)
            </label>
            <input
              id="phone"
              name="phone"
              className="w-full rounded-md border border-white/20 bg-white/5 px-4 py-2.5 text-white placeholder:text-gray-500 focus:border-crimson focus:outline-none"
              placeholder="+250 7xx xxx xxx"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1 block text-sm text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full rounded-md border border-white/20 bg-white/5 px-4 py-2.5 text-white placeholder:text-gray-500 focus:border-crimson focus:outline-none"
              placeholder="Tell us what you're looking for"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full rounded-md bg-crimson px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-crimsonDark disabled:opacity-60"
          >
            {status === 'submitting' ? 'Sending…' : 'Send message'}
          </button>

          {status === 'success' && (
            <p className="text-sm text-green-400">
              Thanks — we&apos;ll get back to you within two working days.
            </p>
          )}
          {status === 'error' && (
            <p className="text-sm text-red-400">
              Couldn&apos;t send that ({errorMessage}). Make sure the API
              server is running on port 4000.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}