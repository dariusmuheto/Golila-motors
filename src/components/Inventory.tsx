import { useState } from 'react';
import type { Vehicle, VehicleCategory } from '../types';
import VehicleCard from './VehicleCard';
import VehicleModal from './VehicleModal';

import BMW from '../assets/images/inventory/BMWX5.webp';
import CAMRY from '../assets/images/inventory/camryToyota.webp';
import HONDA from '../assets/images/inventory/HondaCivic.jpg';
import MERCEDES from '../assets/images/inventory/MercedesCclass.avif';
import FORD from '../assets/images/inventory/Fordmustang.webp';
import TESLA from '../assets/images/inventory/TeslaModel3.webp';
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

type Filter = 'ALL' | VehicleCategory;

const TABS: { label: string; value: Filter }[] = [
  { label: 'All vehicles', value: 'ALL' },
  { label: 'For sale', value: 'SALE' },
  { label: 'For rent', value: 'RENTAL' },
];

// Dummy data for development/testing
const dummyVehicles: Vehicle[] = [
  {
    id: '1',
    make: 'Toyota',
    model: 'Camry',
    year: 2023,
    // price: 35000,
    mileageKm: 15000,
    transmission: 'Automatic',
    fuelType: 'Hybrid',
    category: 'SALE',
    status: 'AVAILABLE',
    imageUrl: CAMRY,
    interiorImages: [Toyota1, Toyota2, Toyota3, Toyota4],
    description:
      'Reliable and fuel-efficient sedan perfect for daily commuting.',
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
  },
  {
    id: '2',
    make: 'BMW',
    model: 'X5',
    year: 2022,
    // price: 65000,
    mileageKm: 25000,
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    category: 'SALE',
    status: 'AVAILABLE',
    imageUrl: BMW,
    interiorImages: [BMW1, BMW2, BMW3, BMW4],
    description:
      'Luxury SUV with premium features and excellent performance.',
    createdAt: '2024-01-16T10:00:00Z',
    updatedAt: '2024-01-16T10:00:00Z',
  },
  {
    id: '3',
    make: 'Honda',
    model: 'Civic',
    year: 2023,
    // price: 28000,
    mileageKm: 8000,
    transmission: 'Manual',
    fuelType: 'Gasoline',
    category: 'SALE',
    status: 'AVAILABLE',
    imageUrl: HONDA,
    interiorImages: [Honda1, Honda2, Honda3, Honda4],
    description:
      'Compact and efficient car with great fuel economy.',
    createdAt: '2024-01-17T10:00:00Z',
    updatedAt: '2024-01-17T10:00:00Z',
  },
  {
    id: '4',
    make: 'Mercedes',
    model: 'C-Class',
    year: 2023,
    // price: 45000,
    mileageKm: 12000,
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    category: 'RENTAL',
    status: 'AVAILABLE',
    imageUrl: MERCEDES,
    interiorImages: [Mercedes1, Mercedes2, Mercedes3, Mercedes4],
    description:
      'Luxury sedan with advanced technology and comfort.',
    createdAt: '2024-01-18T10:00:00Z',
    updatedAt: '2024-01-18T10:00:00Z',
  },
  {
    id: '5',
    make: 'Ford',
    model: 'Mustang',
    year: 2023,
    // price: 55000,
    mileageKm: 5000,
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    category: 'SALE',
    status: 'RESERVED',
    imageUrl: FORD,
    interiorImages: [Ford1, Ford2, Ford3, Ford4],
    description:
      'Iconic muscle car with powerful performance and style.',
    createdAt: '2024-01-19T10:00:00Z',
    updatedAt: '2024-01-19T10:00:00Z',
  },
  {
    id: '6',
    make: 'Tesla',
    model: 'Model 3',
    year: 2023,
    // price: 42000,
    mileageKm: 10000,
    transmission: 'Automatic',
    fuelType: 'Electric',
    category: 'RENTAL',
    status: 'AVAILABLE',
    imageUrl: TESLA,
    interiorImages: [Tesla1, Tesla2, Tesla3, Tesla4],
    description:
      'Electric sedan with cutting-edge technology and zero emissions.',
    createdAt: '2024-01-20T10:00:00Z',
    updatedAt: '2024-01-20T10:00:00Z',
  },
];

export default function Inventory() {
  const [filter, setFilter] = useState<Filter>('ALL');
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  // Filter vehicles based on the selected category
  const filteredVehicles =
    filter === 'ALL'
      ? dummyVehicles
      : dummyVehicles.filter(
          (vehicle) => vehicle.category === filter
        );

  const handleVehicleClick = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
  };

  const handleCloseModal = () => {
    setSelectedVehicle(null);
  };

  return (
    <section
      id="inventory"
      className="border-b border-line bg-offwhite"
    >
      <div className="mx-auto max-w-content px-4 py-16 sm:px-6 sm:py-24">
        {/* Header */}
        <div className="mb-8 flex flex-col items-center gap-4 text-center sm:mb-10 sm:gap-6">
          <div>
            <p className="mb-3 text-sm tracking-wide text-crimson">
              Inventory
            </p>

            <h2 className="text-2xl font-semibold text-ink sm:text-3xl md:text-4xl">
              Available Vehicles
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex w-full max-w-md gap-2 rounded-full border border-line bg-white p-1">
            {TABS.map((tab) => (
              <button
                key={tab.value}
                type="button"
                onClick={() => setFilter(tab.value)}
                className={`flex-1 rounded-full px-3 py-2 text-sm font-medium transition-colors sm:px-4 sm:text-base ${
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

        {/* Empty State */}
        {filteredVehicles.length === 0 ? (
          <p className="text-center text-ash">
            No vehicles in this category yet.
          </p>
        ) : (
          /* Vehicle Grid */
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {filteredVehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
                onClick={() => handleVehicleClick(vehicle)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Vehicle Modal */}
      <VehicleModal
        vehicle={selectedVehicle}
        isOpen={!!selectedVehicle}
        onClose={handleCloseModal}
      />
    </section>
  );
}
