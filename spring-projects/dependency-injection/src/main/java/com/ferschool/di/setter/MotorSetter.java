package com.ferschool.di.setter;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class MotorSetter {

	private String marca;

	private Integer modelo;

	public MotorSetter() {
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

	@Value("1909")
	public void setModelo(Integer modelo) {
		this.modelo = modelo;
	}

	@Override
	public String toString() {
		return "Motor [marca=" + marca + ", modelo=" + modelo + "]";
	}

}
