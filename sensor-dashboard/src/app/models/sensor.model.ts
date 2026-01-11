export interface Sensor {
  id: number;
  name: string;
  sensorValue: number;
  unit: string;
  typeValue: 'asc' | 'desc'; // Usamos literal types para segurança total
}