import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sensor-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sensor-card.html',
  styleUrl: './sensor-card.scss',
})
export class SensorCardComponent {
  // Inputs baseados em Signals (Novidade das versões recentes)
  name = input.required<string>();
  value = input<number>(0);
  unit = input<string>('°C');
  typeValue = input.required<'asc' | 'desc'>();

  // Computed: Reage automaticamente quando o 'value' muda
  status = computed(() => {
    console.log('Calculating status for', this.name(), 'with value', this.value(), 'and typeValue', this.typeValue());
    if (this.typeValue() === 'asc') {
      return this.value() > 70 ? 'Crítico' : 'Normal';
    }
    return this.value() < 20 ? 'Crítico' : 'Normal';
  });

  statusColor = computed(() => {
    if (this.typeValue() === 'asc') {
      return this.value() > 70 ? '#ff4d4d' : '#4caf50';
    }
    return this.value() < 20 ? '#ff4d4d' : '#4caf50';
  });
}