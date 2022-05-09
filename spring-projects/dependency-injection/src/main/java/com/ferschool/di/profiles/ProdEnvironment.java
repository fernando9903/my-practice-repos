package com.ferschool.di.profiles;

import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;

@Service
@Profile("prod")
public class ProdEnvironment implements EnvironmentService {

	@Override
	public String getEnvironment() {
		// TODO Auto-generated method stub
		return "Production environment";
	}

}
