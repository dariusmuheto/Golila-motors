import { useEffect, useState } from 'react';
import { fetchVehicles } from '../lib/api';
import type { Vehicle, VehicleCategory } from '../types';
import VehicleCard from './VehicleCard';

type Filter = 'ALL' | VehicleCategory;

const TABS: { label: string; value: Filter }[] = [
  { label: 'All vehicles', value: 'ALL' },
  { label: 'For sale', value: 'SALE' },
  { label: 'For rent', value: 'RENTAL' },
];

export default function Inventory() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [filter, setFilter] = useState<Filter>('ALL');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    fetchVehicles(filter === 'ALL' ? undefined : filter)
      .then((data) => {
        if (!cancelled) setVehicles(data);
      })
      .catch((err: Error) => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [filter]);

  return (
    <section id="inventory" className="border-b border-line bg-offwhite">
      <div className="mx-auto max-w-content px-4 sm:px-6 py-16 sm:py-24">
        <div className="mb-8 sm:mb-10 flex flex-col items-center gap-4 sm:gap-6 text-center">
          <div>
            <p className="mb-3 text-sm tracking-wide text-crimson">Inventory</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-ink">
              Available Vehicles
            </h2>
          </div>

          <div className="flex gap-2 rounded-full border border-line bg-white p-1 w-full max-w-md">
            {TABS.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setFilter(tab.value)}
                className={`flex-1 rounded-full px-3 sm:px-4 py-2 text-sm sm:text-base font-medium transition-colors ${
                  filter === tab.value
                    ? 'bg-crimson text-white'
                    : 'text-ash hover:text-ink'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {loading && <p className="text-center text-ash">Loading inventory…</p>}

        {error && (
          <p className="text-center text-sm text-ash">
            Couldn&apos;t load live inventory {error}. Make sure the API
            server is running on port 4000.
          </p>
        )}

        {!loading && !error && vehicles.length === 0 && (
          <p className="text-center text-ash">No vehicles in this category yet.</p>
        )}

        {!loading && !error && vehicles.length > 0 && (
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {vehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}