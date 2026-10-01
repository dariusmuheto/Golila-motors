import type { Vehicle } from '../types';

import BMW1 from '../assets/images/inventory/interior/InteriorBMW1.webp';
import BMW2 from '../assets/images/inventory/interior/InteriorBMW2.webp';
import BMW3 from '../assets/images/inventory/interior/InteriorBMW3.webp';
import BMW4 from '../assets/images/inventory/interior/interiorBMW4.webp';
import Toyota1 from '../assets/images/inventory/interior/camryInterior1.jpg';
import Toyota2 from '../assets/images/inventory/interior/CamryInterior2.jpg';
import Toyota3 from '../assets/images/inventory/interior/CamryInterior3.jpg';
import Toyota4 from '../assets/images/inventory/interior/CamryInterior4.jpg';
import Honda1 from '../assets/images/inventory/interior/InteriorHonda1.png';
import Honda2 from '../assets/images/inventory/interior/InteriorHonda1.png';
import Honda3 from '../assets/images/inventory/interior/InteriorHonda1.png';
import Honda4 from '../assets/images/inventory/interior/InteriorHonda1.png';
import Mercedes1 from '../assets/images/inventory/interior/InteriorBMW1.webp';
import Mercedes2 from '../assets/images/inventory/interior/InteriorBMW2.webp';
import Mercedes3 from '../assets/images/inventory/interior/InteriorBMW3.webp';
import Mercedes4 from '../assets/images/inventory/interior/interiorBMW4.webp';
import Ford1 from '../assets/images/inventory/interior/InteriorBMW1.webp';
import Ford2 from '../assets/images/inventory/interior/InteriorBMW2.webp';
import Ford3 from '../assets/images/inventory/interior/InteriorBMW3.webp';
import Ford4 from '../assets/images/inventory/interior/interiorBMW4.webp';
import Tesla1 from '../assets/images/inventory/interior/InteriorBMW1.webp';
import Tesla2 from '../assets/images/inventory/interior/InteriorBMW2.webp';
import Tesla3 from '../assets/images/inventory/interior/InteriorBMW3.webp';
import Tesla4 from '../assets/images/inventory/interior/interiorBMW4.webp';

interface VehicleModalProps {
  vehicle: Vehicle | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function VehicleModal({ vehicle, isOpen, onClose }: VehicleModalProps) {
  if (!isOpen || !vehicle) return null;

  // Define specific interior images for each vehicle
  const vehicleInteriorImages: Record<string, string[]> = {
    '1': [Toyota1, Toyota2, Toyota3, Toyota4], 
    '2': [BMW1, BMW2, BMW3, BMW4], 
    '3': [Honda1, Honda2, Honda3, Honda4], 
    '4': [Mercedes1, Mercedes2, Mercedes3, Mercedes4], 
    '5': [Ford1, Ford2, Ford3, Ford4], 
    '6': [Tesla1, Tesla2, Tesla3, Tesla4], 
  };

  const interiorImages = vehicle.interiorImages || vehicleInteriorImages[vehicle.id] || [
    '/placeholder-interior-1.jpg',
    '/placeholder-interior-2.jpg',
    '/placeholder-interior-3.jpg',
    '/placeholder-interior-4.jpg',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="relative max-w-4xl w-full max-h-[90vh] bg-white rounded-lg shadow-xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 rounded-full bg-white bg-opacity-90 p-2 hover:bg-opacity-100 transition-all"
          aria-label="Close"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Vehicle header */}
        <div className="border-b border-line p-6">
          <h2 className="text-2xl font-bold text-ink">
            {vehicle.make} {vehicle.model} {vehicle.year}
          </h2>
          <p className="text-sm text-ash mt-1">
            {vehicle.transmission} · {vehicle.fuelType} · {vehicle.mileageKm?.toLocaleString()} km
          </p>
          <p className="text-xl font-semibold text-crimson mt-2">
            ${vehicle.price.toLocaleString()}
            {vehicle.category === 'RENTAL' && <span className="text-sm text-ash"> / day</span>}
          </p>
        </div>

        {/* Interior images gallery */}
        <div className="p-6">
          <h3 className="text-lg font-semibold text-ink mb-4">Interior Views</h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {interiorImages.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg border border-line">
                <img
                  src={image}
                  alt={`${vehicle.make} ${vehicle.model} interior view ${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to a placeholder if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%239ca3af' font-size='14' font-family='sans-serif'%3EInterior {index + 1}%3C/text%3E%3C/svg%3E`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        {vehicle.description && (
          <div className="border-t border-line p-6">
            <h3 className="text-lg font-semibold text-ink mb-2">Description</h3>
            <p className="text-ash leading-relaxed">{vehicle.description}</p>
          </div>
        )}

        {/* Footer */}
        <div className="border-t border-line p-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-crimson text-white rounded-lg hover:bg-crimson/90 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}