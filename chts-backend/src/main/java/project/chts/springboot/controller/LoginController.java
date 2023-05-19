//package project.chts.springboot.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//
////import javax.validation.Valid;
//
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.validation.BindingResult;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//import org.springframework.web.servlet.ModelAndView;
//import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
//
//import project.chts.springboot.model.UserList;
//import project.chts.springboot.repository.UserListRepository;
//
//@CrossOrigin(origins = "http://localhost:3000")
//@RestController
//@RequestMapping("/api/v1/")
//public class LoginController extends WebMvcConfigurerAdapter {
////	@Override
////	public void addViewControllers(ViewControllerRegistry registry) {
////		registry.addViewController("/home").setViewName("home");
////	}
//	
//	@Autowired
//	private UserListRepository userlistRepository;
//
//	@GetMapping("/login")
//	public UserList showForm(UserList email_id) {
//		return email_id;
//	}
//
//	@PostMapping("/login")
//	public String validateLoginInfo(Model model, UserList userlist, BindingResult bindingResult) {
//		if (bindingResult.hasErrors()) {
//			return "login";
//		}
//		model.addAttribute("user", userlist.getEmail_Id());
//		return "home";
//	}
//}
