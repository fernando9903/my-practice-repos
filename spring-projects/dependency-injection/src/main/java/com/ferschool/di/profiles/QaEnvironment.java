package com.ferschool.di.profiles;

import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;

@Service
@Profile("qa")
public class QaEnvironment implements EnvironmentService{

	@Override
	public String getEnvironment() {
		// TODO Auto-generated method stub
		return "Qa environment";
	}

}
