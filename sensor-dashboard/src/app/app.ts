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

  updateValues() {
    this.sensorService.updateAllSensors();
  }
}