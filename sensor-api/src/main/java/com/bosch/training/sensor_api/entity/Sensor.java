package com.bosch.training.sensor_api.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "sensors")
@Getter @Setter
@NoArgsConstructor @AllArgsConstructor
public class Sensor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    @JsonProperty("sensorValue")
    private Double sensor_value;
    private String unit;
    private String typeValue; // 'asc' ou 'desc'
}