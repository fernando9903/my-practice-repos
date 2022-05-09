package com.ferschool.di.qualifiers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component("pajarito")
public class Pajaro extends Animal implements Volador{

	public Pajaro(@Value("1") Integer edad, @Value("Pajaro loco") String nombre) {
		super(edad, nombre);
		// TODO Auto-generated constructor stub
	}

	private static final Logger log = LoggerFactory.getLogger(Pajaro.class);
	
	@Override
	public void volar() {
		// TODO Auto-generated method stub
		log.info("Soy un pajaro y estoy volando");
	}

}
