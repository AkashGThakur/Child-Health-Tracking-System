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

import project.chts.springboot.model.BmiScreening;
import project.chts.springboot.service.BmiScreeningService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class BmiScreeningController {

	@Autowired
	private BmiScreeningService bmiScreeningService;
	
	//get all BmiScreening
	@GetMapping("/bmiScreening")
	public List<BmiScreening> getAllBmiScreening(){
		return bmiScreeningService.findAllBmiScreening();
	}	
	
	// create bmiScreening rest api
	@PostMapping("/bmiScreening")
		public BmiScreening createBmiScreening(@RequestBody BmiScreening bmiScreening) {
			return bmiScreeningService.saveBmiScreening(bmiScreening);	
			
		}
		
		// get bmiScreening by id rest api
		@GetMapping("/bmiScreening/{id}")
		public ResponseEntity<BmiScreening> getBmiScreeningById(@PathVariable Integer id) {
			BmiScreening bmiScreening = bmiScreeningService.findById(id);
			return ResponseEntity.ok(bmiScreening);
		}
		
		// update bmiScreening rest api
		
		@PutMapping("/bmiScreening/{id}")
		public ResponseEntity<BmiScreening> updateBmiScreening(@PathVariable Integer id, @RequestBody BmiScreening bmiScreeningDetails){
			BmiScreening bmiScreening = bmiScreeningService.updateBmiScreening(id,bmiScreeningDetails);
			return ResponseEntity.ok(bmiScreening);
		}
		
		// delete bmiScreening rest api
		@DeleteMapping("/bmiScreening/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteBmiScreening(@PathVariable Integer id){
			BmiScreening bmiScreening = bmiScreeningService.deleteBmiScreening(id.intValue());
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}

}
