package com.bosch.training.sensor_api.entity;

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
    private Double value;
    private String unit;
    private String typeValue; // 'asc' ou 'desc'
}