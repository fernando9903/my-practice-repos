package com.ferschool.di.qualifiers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
public class Avion implements Volador{
	
	
	private static final Logger log = LoggerFactory.getLogger(Avion.class);


	@Override
	public void volar() {
		// TODO Auto-generated method stub
		log.info("Soy un avion y estoy volando");
	}

}
