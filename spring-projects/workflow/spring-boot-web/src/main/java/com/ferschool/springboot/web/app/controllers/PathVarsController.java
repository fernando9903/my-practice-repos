package com.ferschool.springboot.web.app.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/vars")
public class PathVarsController {
	
	@GetMapping("/")
	public String index(Model model) {
		return "vars/index";
	}
	
	@GetMapping("string/{text}")
	public String string(@PathVariable String text, Model model) {
		model.addAttribute("result", "The result is: " + text);
		return "vars/ver";
	}

	@GetMapping("string/{text}/{number}")
	public String string(@PathVariable String text, @PathVariable Integer number, Model model) {
		model.addAttribute("result", "The result is: " + text + " " + number);
		return "vars/ver";
	}
	
}
