import type { Vehicle, VehicleCategory } from '../types';

async function handle<T>(res: Response): Promise<T> {
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error ?? `Request failed with status ${res.status}`);
  }
  return res.json() as Promise<T>;
}

export function fetchVehicles(category?: VehicleCategory): Promise<Vehicle[]> {
  const query = category ? `?category=${category}` : '';
  return fetch(`/api/vehicles${query}`).then((res) => handle<Vehicle[]>(res));
}

export interface EnquiryInput {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export function submitEnquiry(input: EnquiryInput): Promise<{ received: boolean; id: string }> {
  return fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  }).then((res) => handle(res));
}
