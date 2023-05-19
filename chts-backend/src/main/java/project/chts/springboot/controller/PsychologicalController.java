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

import project.chts.springboot.exception.PsychologicalNotFoundException;
import project.chts.springboot.model.Psychological;
import project.chts.springboot.repository.PsychologicalRepository;
import project.chts.springboot.service.PsychologicalService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class PsychologicalController {
	
	@Autowired
	private PsychologicalService psychologicalService;
	
	//get all Child
	@GetMapping("/psychological")
	public List<Psychological> getAllPsychological(){
		return psychologicalService.findAllPsychological();
	}	
	
	// create child rest api
	@PostMapping("/psychological")
		public Psychological createPsychological(@RequestBody Psychological psychological) {
			return psychologicalService.savePsychological(psychological);
		}
		
		// get child by id rest api
		@GetMapping("/psychological/{id}")
		public ResponseEntity<Psychological> getPsychologicalById(@PathVariable Integer id) {
			Psychological psychological = psychologicalService.findById(id);
			return ResponseEntity.ok(psychological);
		}
		
		// update child rest api
		
		@PutMapping("/psychological/{id}")
		public ResponseEntity<Psychological> updatePsychological(@PathVariable Integer id,
				@RequestBody Psychological psychologicalDetails){
			Psychological psychological = psychologicalService.updatePsychological(id,psychologicalDetails);
			return ResponseEntity.ok(psychological);
		}
		
		// delete child rest api
		@DeleteMapping("/psychological/{id}")
		public ResponseEntity<Map<String, Boolean>> deletePsychological(@PathVariable Long id){
			Psychological psychological = psychologicalService.deletePsychological(id.intValue());
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}


}
