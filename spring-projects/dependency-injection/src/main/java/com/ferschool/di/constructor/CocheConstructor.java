package com.ferschool.di.constructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class CocheConstructor {

	private String marca;

	private Integer modelo;

	private MotorConstructor motor;

	@Autowired
	public CocheConstructor(@Value("MOOTR PATITO") String marca, @Value("1999") Integer modelo,
			MotorConstructor motor) {
		this.marca = marca;
		this.modelo = modelo;
		this.motor = motor;
	}

	public String getMarca() {
		return marca;
	}

	public void setMarca(String marca) {
		this.marca = marca;
	}

	public Integer getModelo() {
		return modelo;
	}

	public void setModelo(Integer modelo) {
		this.modelo = modelo;
	}

	public MotorConstructor getMotor() {
		return motor;
	}

	public void setMotor(MotorConstructor motor) {
		this.motor = motor;
	}

	@Override
	public String toString() {
		return "Coche [marca=" + marca + ", modelo=" + modelo + ", motor=" + motor + "]";
	}

}
