package com.ferschool.di.setter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class CocheSetter {

	private String marca;

	private Integer modelo;

	private MotorSetter motor;

	public CocheSetter() {

	}

	public String getMarca() {
		return marca;
	}

	@Value("MOOTR PATITO")
	public void setMarca(String marca) {
		this.marca = marca;
	}

	public Integer getModelo() {
		return modelo;
	}

	@Value("1999")
	public void setModelo(Integer modelo) {
		this.modelo = modelo;
	}

	public MotorSetter getMotor() {
		return motor;
	}

	@Autowired
	public void setMotor(MotorSetter motor) {
		this.motor = motor;
	}

	@Override
	public String toString() {
		return "Coche [marca=" + marca + ", modelo=" + modelo + ", motor=" + motor + "]";
	}

}
