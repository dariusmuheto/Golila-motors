import type { Vehicle } from '../types';

const STATUS_STYLES: Record<Vehicle['status'], string> = {
  AVAILABLE: 'bg-green-100 text-green-700',
  RESERVED: 'bg-amber-100 text-amber-700',
  SOLD: 'bg-gray-200 text-gray-600',
};

function formatPrice(price: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price);
}

export default function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <div className="overflow-hidden rounded-lg border border-line bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="flex h-32 sm:h-40 items-center justify-center bg-offwhite text-ash">
        {vehicle.imageUrl ? (
          <img
            src={vehicle.imageUrl}
            alt={`${vehicle.make} ${vehicle.model}`}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-sm">No photo yet</span>
        )}
      </div>

      <div className="p-4 sm:p-5">
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="font-display text-base sm:text-lg text-ink line-clamp-1">
            {vehicle.make} {vehicle.model}
          </h3>
          <span
            className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${STATUS_STYLES[vehicle.status]}`}
          >
            {vehicle.status}
          </span>
        </div>

        <p className="text-sm text-ash">
          {vehicle.year}
          {vehicle.transmission ? ` · ${vehicle.transmission}` : ''}
          {vehicle.fuelType ? ` · ${vehicle.fuelType}` : ''}
        </p>
        {vehicle.mileageKm !== null && (
          <p className="mt-1 text-sm text-ash">{vehicle.mileageKm.toLocaleString()} km</p>
        )}

        <p className="mt-2 sm:mt-3 text-lg sm:text-xl font-semibold text-crimson">
          {formatPrice(vehicle.price)}
          {vehicle.category === 'RENTAL' && <span className="text-sm text-ash"> / day</span>}
        </p>

        {vehicle.description && (
          <p className="mt-2 sm:mt-3 text-sm leading-relaxed text-ash line-clamp-2">
            {vehicle.description}
          </p>
        )}
      </div>
    </div>
  );
}