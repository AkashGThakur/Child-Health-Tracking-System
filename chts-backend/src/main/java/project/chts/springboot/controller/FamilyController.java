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

import project.chts.springboot.exception.FamilyNotFoundException;
import project.chts.springboot.model.Family;
import project.chts.springboot.repository.FamilyRepository;
import project.chts.springboot.service.FamilyService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class FamilyController {
	
	@Autowired
	private FamilyService familyService;
	
	//get all Family
	@GetMapping("/family")
	public List<Family> getAllFamilies(){
		return familyService.findAllFamily();
	}	
	
	// create family rest api
	@PostMapping("/family")
		public Family createFamilies(@RequestBody Family family) {
			return familyService.saveFamily(family);
		}
		
		// get family by id rest api
		@GetMapping("/family/{id}")
		public ResponseEntity<Family> getFamilyById(@PathVariable Integer id) {
			Family family = familyService.findById(id);
			return ResponseEntity.ok(family);
		}
		
		// update family rest api
		
		@PutMapping("/family/{id}")
		public ResponseEntity<Family> updateFamily(@PathVariable Integer id,
				@RequestBody Family familyDetails){
			Family Family = familyService.updateFamily(id,familyDetails);
			return ResponseEntity.ok(Family);
		}
		
		// delete family rest api
		@DeleteMapping("/family/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteFamily(@PathVariable Long id){
			Family family = familyService.deleteFamily(id.intValue());
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}

}
