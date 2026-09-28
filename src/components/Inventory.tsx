import { useState } from 'react';
import type { Vehicle, VehicleCategory } from '../types';
import VehicleCard from './VehicleCard';

import BMW from '../assets/images/inventory/BMW-X5.webp';
import CAMRY from '../assets/images/inventory/camryToyota.webp';
import HONDA from '../assets/images/inventory/Honda-Civic.jpg';
import MERCEDES from '../assets/images/inventory/Mercedes-C-class.avif';
import FORD from '../assets/images/inventory/Ford-Mustang.webp';
import TESLA from '../assets/images/inventory/Tesla-Model-3.webp';

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
    price: 35000,
    mileageKm: 15000,
    transmission: 'Automatic',
    fuelType: 'Hybrid',
    category: 'SALE',
    status: 'AVAILABLE',
    imageUrl: CAMRY,
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
    price: 65000,
    mileageKm: 25000,
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    category: 'SALE',
    status: 'AVAILABLE',
    imageUrl: BMW,
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
    price: 28000,
    mileageKm: 8000,
    transmission: 'Manual',
    fuelType: 'Gasoline',
    category: 'SALE',
    status: 'AVAILABLE',
    imageUrl: HONDA,
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
    price: 45000,
    mileageKm: 12000,
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    category: 'RENTAL',
    status: 'AVAILABLE',
    imageUrl: MERCEDES,
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
    price: 55000,
    mileageKm: 5000,
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    category: 'SALE',
    status: 'RESERVED',
    imageUrl: FORD,
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
    price: 42000,
    mileageKm: 10000,
    transmission: 'Automatic',
    fuelType: 'Electric',
    category: 'RENTAL',
    status: 'AVAILABLE',
    imageUrl: TESLA,
    description:
      'Electric sedan with cutting-edge technology and zero emissions.',
    createdAt: '2024-01-20T10:00:00Z',
    updatedAt: '2024-01-20T10:00:00Z',
  },
];

export default function Inventory() {
  const [filter, setFilter] = useState<Filter>('ALL');

  // Filter vehicles based on the selected category
  const filteredVehicles =
    filter === 'ALL'
      ? dummyVehicles
      : dummyVehicles.filter(
          (vehicle) => vehicle.category === filter
        );

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
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
