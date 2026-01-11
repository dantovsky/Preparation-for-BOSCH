package com.bosch.training.sensor_api.service;

import com.bosch.training.sensor_api.entity.Sensor;
import com.bosch.training.sensor_api.repository.SensorRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class SensorService {

    private final SensorRepository repository;

    // Injeção via construtor (melhor prática para testabilidade na Bosch)
    public SensorService(SensorRepository repository) {
        this.repository = repository;
    }

    public List<Sensor> listarTodos() {
        return repository.findAll();
    }

    public Sensor salvar(Sensor sensor) {
        return repository.save(sensor);
    }

    public List<Sensor> salvarTodos(List<Sensor> sensores) {
        return repository.saveAll(sensores);
    }
}