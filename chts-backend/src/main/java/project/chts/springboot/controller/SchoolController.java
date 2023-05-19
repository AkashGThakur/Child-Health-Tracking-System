package project.chts.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import project.chts.springboot.exception.SchoolNotFoundException;
import project.chts.springboot.model.School;
import project.chts.springboot.repository.SchoolRepository;
import project.chts.springboot.service.SchoolService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/v1/")

public class SchoolController {
	

	 @Autowired
	private SchoolService schoolService;
	
	//get all School
	@GetMapping("/school")
	public List<School> getAllSchool(){
		return schoolService.findAllSchool();
	}	
	
	// create school rest api
	@PostMapping("/school")
		public School createSchools(@RequestBody School school) {
			return schoolService.saveSchool(school);
		}
		
		// get school by id rest api
		@GetMapping("/school/{id}")
		public School getSchoolById(@PathVariable Integer id) {
			School school = schoolService.findById(id);
			return school;
		}
		
		// update school rest api
		
		@PutMapping("/school/{id}")
		public ResponseEntity<School> updateSchool(@PathVariable Integer id,
				@RequestBody School schoolDetails){
			School school = schoolService.updateSchool(id,schoolDetails);
			return ResponseEntity.ok(school);
		}
		
		// delete school rest api
		@DeleteMapping("/school/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteSchool(@PathVariable Long id){
			School school = schoolService.deleteSchool(id.intValue());
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}


}
