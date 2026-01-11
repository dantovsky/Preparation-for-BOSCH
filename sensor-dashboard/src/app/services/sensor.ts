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

  apiUrl = 'http://localhost:8081/api/sensors'

  constructor() {
    this.fetchInitialData();
  }

  async fetchInitialData() {
    try {
      // 1. Faz a chamada para a API
      const data = await firstValueFrom(
        this.http.get<Sensor[]>(this.apiUrl)
      );

      // 2. Simplesmente guarda os dados no Signal. 
      // Não precisa de .map() porque o Java já envia o objeto pronto!
      this._sensors.set(data);

    } catch (error) {
      console.error('Erro ao buscar dados da Bosch API', error);
    }
  }

  async updateAllSensors() {
    // 1. Geramos a nova lista localmente (Simulação)
    const updatedList = this._sensors().map(s => ({
      ...s,
      sensorValue: Math.floor(Math.random() * 100)
    }));

    try {
      // 2. Enviamos a lista completa para o novo endpoint de batch
      const savedData = await firstValueFrom(
        this.http.put<Sensor[]>(`${this.apiUrl}/batch`, updatedList)
      );

      // 3. Atualizamos o Signal com a resposta confirmada do servidor
      this._sensors.set(savedData);
      console.log('Sincronização com a base de dados Bosch concluída!');

    } catch (error) {
      console.error('Falha ao persistir dados no backend', error);
      // Aqui poderias implementar um "rollback" se necessário
    }
  }
}