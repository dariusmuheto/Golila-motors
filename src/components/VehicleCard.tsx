import type { Vehicle } from '../types';

const STATUS_STYLES: Record<Vehicle['status'], string> = {
  AVAILABLE: 'bg-green-100 text-green-700',
  RESERVED: 'bg-amber-100 text-amber-700',
  SOLD: 'bg-gray-200 text-gray-600',
};

interface VehicleCardProps {
  vehicle: Vehicle;
  onClick: () => void;
}

export default function VehicleCard({ vehicle, onClick }: VehicleCardProps) {
  return (
    <div 
      className="overflow-hidden rounded-lg border border-line bg-white shadow-sm transition-all hover:shadow-md hover:scale-105 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center justify-center bg-offwhite text-ash">
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
          {vehicle.category === 'RENTAL' && <span className="text-sm text-ash"> / day</span>}
        </p>

        {vehicle.description && (
          <p className="mt-2 sm:mt-3 text-sm leading-relaxed text-ash line-clamp-2">
            {vehicle.description}
          </p>
        )}

        {/* Click hint */}
        <div className="mt-3 flex items-center justify-center text-xs text-crimson">
          <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          Click to view interior
        </div>
      </div>
    </div>
  );
}