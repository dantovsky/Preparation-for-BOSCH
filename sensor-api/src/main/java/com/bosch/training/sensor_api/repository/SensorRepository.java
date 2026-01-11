package com.bosch.training.sensor_api.repository;

import com.bosch.training.sensor_api.entity.Sensor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SensorRepository extends JpaRepository<Sensor, Long> {
    // Aqui já temos findAll(), save(), deleteById(), etc.
}