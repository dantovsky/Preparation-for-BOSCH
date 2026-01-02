import { Injectable, signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Sensor } from '../models/sensor.model';

@Injectable({
  providedIn: 'root'
})
export class SensorService {
  private http = inject(HttpClient); // Sintaxe moderna Angular 21
  
  private _sensors = signal<Sensor[]>([]); // Começa vazio
  sensors = this._sensors.asReadonly();

  constructor() {
    this.fetchInitialData();
  }

  async fetchInitialData() {
    // Simulando chamada HTTP para uma API real (ex: telemetria da Bosch)
    // Usamos firstValueFrom para transformar o Observable em Promise, facilitando o async/await
    try {
      const data = await firstValueFrom(
        this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      );
      
      // Mapeamos o retorno da "API" para o seu formato com typeValue
      const mappedSensors: Sensor[] = data.slice(0, 4).map((u, i) => ({
        id: u.id,
        name: u.company.name,
        value: Math.floor(Math.random() * 100),
        unit: i % 2 === 0 ? '°C' : '%',
        typeValue: i % 2 === 0 ? 'asc' : 'desc'
      }));

      this._sensors.set(mappedSensors);
    } catch (error) {
      console.error('Erro ao buscar dados da Bosch API', error);
    }
  }

  updateAllSensors() {
    this._sensors.update(list => 
      list.map(s => ({ ...s, value: Math.floor(Math.random() * 100) }))
    );
  }
}