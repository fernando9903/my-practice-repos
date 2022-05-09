package com.ferschool.di;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

import com.ferschool.di.atributo.CocheAtributo;
import com.ferschool.di.atributo.MotorAtributo;
import com.ferschool.di.constructor.CocheConstructor;
import com.ferschool.di.profiles.EnvironmentService;
import com.ferschool.di.qualifiers.Animal;
import com.ferschool.di.qualifiers.Avion;
import com.ferschool.di.qualifiers.Nido;
import com.ferschool.di.qualifiers.Pajaro;
import com.ferschool.di.qualifiers.Perro;
import com.ferschool.di.setter.CocheSetter;

@SpringBootApplication
public class DependencyInjectionApplication {

	
	private static final Logger log = LoggerFactory.getLogger(DependencyInjectionApplication.class);

	public static void main(String[] args) {
		ConfigurableApplicationContext context = SpringApplication.run(DependencyInjectionApplication.class, args);
		
		
		//Dependency injections
		CocheAtributo cocheAtributo = context.getBean(CocheAtributo.class);
		log.info("Objeto coche {}", cocheAtributo);
		
		CocheConstructor cocheConstructor = context.getBean(CocheConstructor.class);
		log.info("Objeto coche {}", cocheConstructor);
		
		CocheSetter cocheSetter = context.getBean(CocheSetter.class);
		log.info("Objeto coche {}", cocheSetter);
		
		//Qualifiers
		Perro perro = context.getBean(Perro.class);
		log.info("Objeto perro {}", perro.getNombre());
		
		Pajaro pajaro = context.getBean(Pajaro.class);
		log.info("Objeto pajaro {}", pajaro.getNombre());
		
		Avion avion = context.getBean(Avion.class);
		avion.volar();
		
		Animal animal = context.getBean("pajarito", Animal.class);
		log.info("Animal nombre = {} edad = {}", animal.getNombre(), animal.getEdad());
		
		animal = context.getBean("perro", Animal.class);
		log.info("Animal nombre = {} edad = {}", animal.getNombre(), animal.getEdad());
		
		Nido nido = context.getBean(Nido.class);
		nido.imprimir();
		
		EnvironmentService environmentService = context.getBean(EnvironmentService.class);
		log.info("El perfil activo es {}", environmentService.getEnvironment());
		
	}

}
