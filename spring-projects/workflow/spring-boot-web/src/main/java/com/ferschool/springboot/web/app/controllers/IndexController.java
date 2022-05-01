package com.ferschool.springboot.web.app.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ferschool.springboot.web.app.model.User;

@Controller
@RequestMapping("/app")
public class IndexController {

	@Value("${text.inexcontroller.index.titulo}")
	private String indexText;
	
	@GetMapping({"/index", "/", "/home"})
	public String index(Model model) {
		model.addAttribute("title", "Hello Thymeleaf");
		model.addAttribute("header", indexText);
		return "index";
	}
	
	@RequestMapping("/profile")
	public String profile(Model model) {
		User user = new User();
		user.setName("Fernando");
		user.setLastName("Parra");
		model.addAttribute("user", user);
		model.addAttribute("email", "some email");
		model.addAttribute("profile", "User profile: ".concat(user.getName()));
		return "profile";
	}
	
	@RequestMapping("/profiles")
	public String profiles(Model model) {
		model.addAttribute("title", "Profiles list");
		return "profiles";
	}
	
	@ModelAttribute("profiles")
	public List<User> profilesList() {
		List<User> profiles = new ArrayList<User>();
		profiles.add(new User("Lorena", "Flores", "lorena@email.com"));
		profiles.add(new User("Fernando", "Parra", "fernando@email.com"));
		return profiles;
	}
	
}
