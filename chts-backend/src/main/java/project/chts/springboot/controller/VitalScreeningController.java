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


import project.chts.springboot.model.VitalScreening;
import project.chts.springboot.service.VitalScreeningService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class VitalScreeningController {

	@Autowired
	private VitalScreeningService vitalScreeningService;
 
	@GetMapping("/VitalScreening")
	public List<VitalScreening> getAllVitalScreenings(){
		return vitalScreeningService.findAllVitalScreening();
	}	
	
	// create BasicScreening rest api
	@PostMapping("/VitalScreening")
		public VitalScreening createVitalScreening(@RequestBody VitalScreening vitalScreening) {
			return vitalScreeningService.saveVitalScreening(vitalScreening);	
			
		}
		
		// get VitalScreening by id rest api
		@GetMapping("/VitalScreening/{id}")
		public ResponseEntity<VitalScreening> getVitalScreeningById(@PathVariable Integer id) {
			VitalScreening vitalScreening = vitalScreeningService.findById(id);
			return ResponseEntity.ok(vitalScreening);
		}
		
		// update VitalScreening rest api
		
		@PutMapping("/VitalScreening/{id}")
		public ResponseEntity<VitalScreening> updateVitalScreening(@PathVariable Integer id, @RequestBody VitalScreening vitalScreeningDetails){
			VitalScreening vitalScreening = vitalScreeningService.updateVitalScreening(id,vitalScreeningDetails);
			return ResponseEntity.ok(vitalScreening);
		}
		
		// delete VitalScreening rest api
		@DeleteMapping("/VitalScreening/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteVitalScreening(@PathVariable Long id){
			VitalScreening vitalScreening = vitalScreeningService.deleteVitalScreening(id.intValue());
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
}
