import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SensorService {
  // Estado privado (encapsulamento)
  private _sensors = signal([
    { id: 1, name: 'Temperatura Motor', value: 85, unit: '°C', typeValue: 'asc' },
    { id: 2, name: 'Pressão Pneus', value: 32, unit: 'PSI', typeValue: 'asc' },
    { id: 3, name: 'Nível Óleo', value: 12, unit: '%', typeValue: 'desc' },
    { id: 4, name: 'Nível Água', value: 57, unit: '%', typeValue: 'desc' },
  ]);

  // Exposição pública apenas para leitura
  sensors = this._sensors.asReadonly();

  updateAllSensors() {
    this._sensors.update(list => 
      list.map(s => ({ ...s, value: Math.floor(Math.random() * 100) }))
    );
  }
}

// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root',
// })
// export class Sensor {
  
// }
