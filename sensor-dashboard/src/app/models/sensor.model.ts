export interface Sensor {
  id: number;
  name: string;
  value: number;
  unit: string;
  typeValue: 'asc' | 'desc'; // Usamos literal types para segurança total
}