import { Component, inject, signal } from '@angular/core';
import { SensorCardComponent } from './components/sensor-card/sensor-card';
import { SensorService } from './services/sensor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SensorCardComponent], // Importante para o Angular reconhecer sua tag <app-sensor-card>
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  // O novo jeito de injetar serviços no Angular moderno
  private sensorService = inject(SensorService);

  // Acessamos o sinal do serviço
  sensors = this.sensorService.sensors;

  // Criamos um Signal com a lista de sensores (padrão Angular 19+)
  // sensors = signal([
  //   { id: 1, name: 'Temperatura Motor', value: 85, unit: '°C', typeValue: 'asc' },
  //   { id: 2, name: 'Pressão Pneus', value: 32, unit: 'PSI', typeValue: 'asc' },
  //   { id: 3, name: 'Nível Óleo', value: 12, unit: '%', typeValue: 'desc' },
  //   { id: 4, name: 'Nível Água', value: 57, unit: '%', typeValue: 'desc' },
  // ]);

  updateValues() {
    this.sensorService.updateAllSensors();
  }
}