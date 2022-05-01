package com.ferschool.springboot.web.app.controllers;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/params")
public class ParamsExampleController {
	
	@GetMapping("/")
	public String index() {
		return "params/index";
	}
	
	@GetMapping("/string")
	public String param(@RequestParam(name = "text", required=false, defaultValue="Some value") String text, Model model) {
		model.addAttribute("result", "The result is: " + text);
		return "params/ver";
	}
	
	@GetMapping("/mix-params")
	public String params(@RequestParam String text, @RequestParam Integer number, Model model) {
		model.addAttribute("result", "The result is: " + text + " number is: " + number);
		return "params/ver";
	}
	
	@GetMapping("/mix-params2")
	public String params(HttpServletRequest request, Model model) {
		String text = request.getParameter("text");
		Integer num = null;
		try {
			num = Integer.parseInt(request.getParameter("number"));
		} catch (NumberFormatException e) {
			num = 0;
		}
		model.addAttribute("result", "The result is: " + text + " number is: " + num);
		return "params/ver";
	}

}
