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

import project.chts.springboot.model.BasicScreening;
import project.chts.springboot.service.BasicScreeningService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class BasicScreeningController {
	
	 @Autowired
		private BasicScreeningService basicScreeningService;
	 
	 @GetMapping("/BasicScreening")
		public List<BasicScreening> getAllBasicScreenings(){
			return basicScreeningService.findAllBasicScreening();
		}	
		
		// create BasicScreening rest api
		@PostMapping("/BasicScreening")
			public BasicScreening createBasicScreening(@RequestBody BasicScreening basicScreening) {
				return basicScreeningService.saveBasicScreening(basicScreening);	
				
			}
			
			// get child by id rest api
			@GetMapping("/BasicScreening/{id}")
			public ResponseEntity<BasicScreening> getBasicScreeningById(@PathVariable Integer id) {
				BasicScreening basicScreening = basicScreeningService.findById(id);
				return ResponseEntity.ok(basicScreening);
			}
			
			// update child rest api
			
			@PutMapping("/BasicScreening/{id}")
			public ResponseEntity<BasicScreening> updateBasicScreening(@PathVariable Integer id, @RequestBody BasicScreening BasicScreeningDetails){
				BasicScreening basicScreening = basicScreeningService.updateBasicScreening(id,BasicScreeningDetails);
				return ResponseEntity.ok(basicScreening);
			}
			
			// delete BasicScreening rest api
			@DeleteMapping("/BasicScreening/{id}")
			public ResponseEntity<Map<String, Boolean>> deleteBasicScreening(@PathVariable Long id){
				BasicScreening basicScreening = basicScreeningService.deleteBasicScreening(id.intValue());
				Map<String, Boolean> response = new HashMap<>();
				response.put("deleted", Boolean.TRUE);
				return ResponseEntity.ok(response);
			}

	}



