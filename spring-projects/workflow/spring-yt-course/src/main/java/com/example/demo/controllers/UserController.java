package com.example.demo.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.User;

@RestController
public class UserController {

	@RequestMapping(value = "user/{id}")
	public User getUser(@PathVariable Long id) {
		User user = new User();
		user.setId(id);
		user.setName("Fernando");
		user.setLastName("Parra");
		user.setEmail("fer@email.com");
		user.setPassword("SECRETOSHH");
		return user;
	}
	
	@RequestMapping(value = "users")
	public List<User> getUsers() {
		List<User> users = new ArrayList<User>();
		User user = new User();
		user.setId(123L);
		user.setName("Fernando");
		user.setLastName("Parra");
		user.setEmail("fer@email.com");
		user.setPassword("SECRETOSHH");
		
		User user2 = new User();
		user2.setId(123L);
		user2.setName("Fernando");
		user2.setLastName("Parra");
		user2.setEmail("fer@email.com");
		user2.setPassword("SECRETOSHH");
		
		User user3 = new User();
		user3.setId(123L);
		user3.setName("Fernando");
		user3.setLastName("Parra");
		user3.setEmail("fer@email.com");
		user3.setPassword("SECRETOSHH");
		
		users.add(user);
		users.add(user2);
		users.add(user3);
		return users;
	}
	
	
}
