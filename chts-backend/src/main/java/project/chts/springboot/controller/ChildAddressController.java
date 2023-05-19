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

import project.chts.springboot.exception.ChildAddressNotFoundException;
import project.chts.springboot.model.ChildAddress;
import project.chts.springboot.model.ChildAddress;
import project.chts.springboot.repository.ChildAddressRepository;
import project.chts.springboot.service.ChildAddressService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class ChildAddressController {
	
	@Autowired
	private ChildAddressService childAddressService;
	
	//get all Child
	@GetMapping("/childAddress")
	public List<ChildAddress> getAllChildAddress(){
		return childAddressService.findAllChildAddress();
	}	
	
	// create child rest api
	@PostMapping("/childAddress")
		public ChildAddress createChildAddress(@RequestBody ChildAddress childAddress) {
			return childAddressService.saveChildAddress(childAddress);
		}
		
		// get child by id rest api
		@GetMapping("/childAddress/{id}")
		public ResponseEntity<ChildAddress> getChildAddressById(@PathVariable Integer id) {
			ChildAddress childAddress = childAddressService.findById(id);
			return ResponseEntity.ok(childAddress);
		}
		
		// update child rest api
		
		@PutMapping("/childAddress/{id}")
		public ResponseEntity<ChildAddress> updateChildAddress(@PathVariable Integer id,
				@RequestBody ChildAddress childAddressDetails){
			ChildAddress childAddress = childAddressService.updateChildAddress(id,childAddressDetails);
			return ResponseEntity.ok(childAddress);
		}
		
		// delete child rest api
		@DeleteMapping("/childAddress/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteChildAddress(@PathVariable Long id){
			ChildAddress childAddress = childAddressService.deleteChildAddress(id.intValue());
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}	

}
