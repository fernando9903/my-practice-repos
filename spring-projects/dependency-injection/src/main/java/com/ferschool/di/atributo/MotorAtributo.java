package com.ferschool.di.atributo;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class MotorAtributo {

	@Value("MOOTR PATITO")
	private String marca;
	@Value("1909")
	private Integer modelo;

	public MotorAtributo() {
	}

	public String getMarca() {
		return marca;
	}

	public MotorAtributo(String marca, Integer modelo) {
		this.marca = marca;
		this.modelo = modelo;
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

	@Override
	public String toString() {
		return "Motor [marca=" + marca + ", modelo=" + modelo + "]";
	}

}
