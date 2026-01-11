package com.bosch.training.sensor_api.controller;

import com.bosch.training.sensor_api.entity.Sensor;
import com.bosch.training.sensor_api.service.SensorService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/sensors")
public class SensorController {

    private final SensorService service;

    public SensorController(SensorService service) {
        this.service = service;
    }

    @GetMapping
    public List<Sensor> listar() {
        return service.listarTodos();
    }

    @PutMapping("/{id}")
    public Sensor atualizar(@PathVariable Long id, @RequestBody Sensor sensorAtualizado) {
        return service.salvar(sensorAtualizado); // O save() do JPA faz update se o ID existir
    }

    @PutMapping("/batch")
    public List<Sensor> atualizarTodos(@RequestBody List<Sensor> sensores) {
        // O saveAll() do JPA é muito performático para atualizações em lote
        return service.salvarTodos(sensores);
    }
}