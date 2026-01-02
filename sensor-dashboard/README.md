# SensorDashboard

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


# Versão inicial do services/sensor.ts com dados estáticos

```ts
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
```