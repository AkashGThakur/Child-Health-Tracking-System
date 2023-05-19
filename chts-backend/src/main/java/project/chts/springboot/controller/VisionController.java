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

import project.chts.springboot.exception.VisionNotFoundException;
import project.chts.springboot.model.Family;
import project.chts.springboot.model.Vision;
import project.chts.springboot.repository.VisionRepository;
import project.chts.springboot.service.FamilyService;
import project.chts.springboot.service.VisionService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class VisionController {
	
	@Autowired
	private VisionService visionService;
	
	//get all Family
	@GetMapping("/vision")
	public List<Vision> getAllVision(){
		return visionService.findAllVision();
	}	
	
	// create family rest api
	@PostMapping("/vision")
		public Vision createVisions(@RequestBody Vision vision) {
			return visionService.saveVision(vision);
		}
		
		// get family by id rest api
		@GetMapping("/vision/{id}")
		public ResponseEntity<Vision> getVisionById(@PathVariable Integer id) {
			Vision vision = visionService.findById(id);
			return ResponseEntity.ok(vision);
		}
		
		// update family rest api
		
		@PutMapping("/vision/{id}")
		public ResponseEntity<Vision> updateVision(@PathVariable Integer id,
				@RequestBody Vision visionDetails){
			Vision vision = visionService.updateVision(id,visionDetails);
			return ResponseEntity.ok(vision);
		}
		
		// delete family rest api
		@DeleteMapping("/vision/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteVision(@PathVariable Long id){
			Vision vision = visionService.deleteVision(id.intValue());
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}

	
	

}
