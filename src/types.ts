export type VehicleCategory = 'SALE' | 'RENTAL';
export type VehicleStatus = 'AVAILABLE' | 'RESERVED' | 'SOLD';

export interface Vehicle {
  id: string;
  make: string;
  model: string;
  year: number;
  mileageKm: number | null;
  transmission: string | null;
  fuelType: string | null;
  category: VehicleCategory;
  status: VehicleStatus;
  imageUrl: string | null;
  description: string | null;
  createdAt: string;
  updatedAt: string;
  interiorImages?: string[];
}
