/**
 * 
 */
package com.ferschool.di.atributo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class CocheAtributo {

	@Value("MOOTR PATITO")
	private String marca;
	@Value("1999")
	private Integer modelo;
	@Autowired
	private MotorAtributo motor;

	public CocheAtributo() {
	}

	public CocheAtributo(String marca, Integer modelo, MotorAtributo motor) {
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

	public MotorAtributo getMotor() {
		return motor;
	}

	public void setMotor(MotorAtributo motor) {
		this.motor = motor;
	}

	@Override
	public String toString() {
		return "Coche [marca=" + marca + ", modelo=" + modelo + ", motor=" + motor + "]";
	}

}
