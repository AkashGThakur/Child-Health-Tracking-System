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

import project.chts.springboot.model.DentalCheckUp;
import project.chts.springboot.service.DentalCheckUpService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class DentalCheckUpController {

	@Autowired
	private DentalCheckUpService dentalCheckUpService;
	
	//get all DentalCheckUp
	@GetMapping("/dentalCheckUp")
	public List<DentalCheckUp> getAllDentalCheckUp(){
		return dentalCheckUpService.findAllDentalCheckUp();
	}	
	
	// create DentalCheckUp rest api
	@PostMapping("/dentalCheckUp")
		public DentalCheckUp createDentalCheckUp(@RequestBody DentalCheckUp dentalCheckUp) {
			return dentalCheckUpService.saveDentalCheckUp(dentalCheckUp);	
			
		}
		
		// get DentalCheckUp by id rest api
		@GetMapping("/dentalCheckUp/{id}")
		public ResponseEntity<DentalCheckUp> getDentalCheckUpById(@PathVariable Integer id) {
			DentalCheckUp dentalCheckUp = dentalCheckUpService.findById(id);
			return ResponseEntity.ok(dentalCheckUp);
		}
		
		// update DentalCheckUp rest api
		
		@PutMapping("/dentalCheckUp/{id}")
		public ResponseEntity<DentalCheckUp> updateDentalCheckUp(@PathVariable Integer id, @RequestBody DentalCheckUp dentalCheckUpDetails){
			DentalCheckUp dentalCheckUp = dentalCheckUpService.updateDentalCheckUp(id,dentalCheckUpDetails);
			return ResponseEntity.ok(dentalCheckUp);
		}
		
		// delete DentalCheckUp rest api
		@DeleteMapping("/dentalCheckUp/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteDentalCheckUp(@PathVariable Integer id){
			DentalCheckUp dentalCheckUp = dentalCheckUpService.deleteDentalCheckUp(id.intValue());
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
}
