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

import project.chts.springboot.model.AuditoryScreening;
import project.chts.springboot.model.BmiScreening;
import project.chts.springboot.service.AuditoryScreeningService;
import project.chts.springboot.service.BmiScreeningService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class AuditoryScreeningController {
	
	@Autowired
	private AuditoryScreeningService auditoryScreeningService;
	
	//get all AuditoryScreening
	@GetMapping("/auditoryScreening")
	public List<AuditoryScreening> getAllAuditoryScreening(){
		return auditoryScreeningService.findAllAuditoryScreening();
	}	
	
	// create AuditoryScreening rest api
	@PostMapping("/auditoryScreening")
		public AuditoryScreening createAuditoryScreening(@RequestBody AuditoryScreening auditoryScreening) {
			return auditoryScreeningService.saveAuditoryScreening(auditoryScreening);	
			
		}
		
		// get AuditoryScreening by id rest api
		@GetMapping("/auditoryScreening/{id}")
		public ResponseEntity<AuditoryScreening> getAuditoryScreeningById(@PathVariable Integer id) {
			AuditoryScreening auditoryScreening = auditoryScreeningService.findById(id);
			return ResponseEntity.ok(auditoryScreening);
		}
		
		// update AuditoryScreening rest api
		
		@PutMapping("/auditoryScreening/{id}")
		public ResponseEntity<AuditoryScreening> updateAuditoryScreening(@PathVariable Integer id, @RequestBody AuditoryScreening auditoryScreeningDetails){
			AuditoryScreening auditoryScreening = auditoryScreeningService.updateAuditoryScreening(id,auditoryScreeningDetails);
			return ResponseEntity.ok(auditoryScreening);
		}
		
		// delete AuditoryScreening rest api
		@DeleteMapping("/auditoryScreening/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteAuditoryScreening(@PathVariable Integer id){
			AuditoryScreening auditoryScreening = auditoryScreeningService.deleteAuditoryScreening(id.intValue());
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}


}
