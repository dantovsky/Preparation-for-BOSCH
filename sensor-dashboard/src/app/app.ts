import { Component, signal } from '@angular/core';
import { SensorCardComponent } from './components/sensor-card/sensor-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SensorCardComponent], // Importante para o Angular reconhecer sua tag <app-sensor-card>
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  // Criamos um Signal com a lista de sensores (padrão Angular 19+)
  sensors = signal([
    { id: 1, name: 'Temperatura Motor', value: 85, unit: '°C', typeValue: 'asc' },
    { id: 2, name: 'Pressão Pneus', value: 32, unit: 'PSI', typeValue: 'asc' },
    { id: 3, name: 'Nível Óleo', value: 12, unit: '%', typeValue: 'desc' },
    { id: 4, name: 'Nível Água', value: 57, unit: '%', typeValue: 'desc' },
  ]);

  updateValues() {
    this.sensors.update(list => 
      list.map(s => ({ ...s, value: Math.floor(Math.random() * 100) }) )
    );
  }
}