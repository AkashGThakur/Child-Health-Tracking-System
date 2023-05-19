package project.chts.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

import project.chts.springboot.exception.ChildNotFoundException;
import project.chts.springboot.model.AuditoryScreening;
import project.chts.springboot.model.BasicScreening;
import project.chts.springboot.model.BmiScreening;
import project.chts.springboot.model.Child;
import project.chts.springboot.model.ChildAddress;
import project.chts.springboot.model.DentalCheckUp;
import project.chts.springboot.model.Family;
import project.chts.springboot.model.Psychological;
import project.chts.springboot.model.Vision;
import project.chts.springboot.model.VitalScreening;
import project.chts.springboot.repository.ChildRepository;
import project.chts.springboot.service.AuditoryScreeningService;
import project.chts.springboot.service.BasicScreeningService;
import project.chts.springboot.service.BmiScreeningService;
import project.chts.springboot.service.ChildAddressService;
import project.chts.springboot.service.ChildService;
import project.chts.springboot.service.DentalCheckUpService;
import project.chts.springboot.service.FamilyService;
import project.chts.springboot.service.PsychologicalService;
import project.chts.springboot.service.VisionService;
import project.chts.springboot.service.VitalScreeningService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class ChildController {
	
	 	@Autowired
	 	private ChildService childService;
	 	@Autowired
	 	private AuditoryScreeningService auditoryScreeningService;
	 	@Autowired
		private BasicScreeningService basicScreeningService;
	 	@Autowired
		private BmiScreeningService bmiScreeningService;
	 	@Autowired
		private ChildAddressService childAddressService;
	 	@Autowired
		private DentalCheckUpService dentalCheckUpService;
	 	@Autowired
		private FamilyService familyService;
	 	@Autowired
		private PsychologicalService psychologicalService;
	 	@Autowired
		private VisionService visionService;
	 	@Autowired
		private VitalScreeningService vitalScreeningService;
	 	
	
	//get all Child
	@GetMapping("/child")
	public List<Child> getAllChilds(){
		return childService.findAllChild();
	}	
	
	// create child rest api
	@PostMapping("/child")
		public Child createChild(@RequestBody Child child) {
			return childService.saveChild(child);	
			
		}
		
		// get child by id rest api
		@GetMapping("/child/{id}")
		public ResponseEntity<Child> getChildById(@PathVariable Integer id) {
			Child child = childService.findById(id);
			return ResponseEntity.ok(child);
		}
		
		// update child rest api
		
		@PutMapping("/child/{id}")
		public ResponseEntity<Child> updateChild(@PathVariable Integer id, @RequestBody Child childDetails){
			Child child = childService.updateChild(id,childDetails);
			return ResponseEntity.ok(child);
		}
		
		// delete child rest api
		@DeleteMapping("/child/{id}")
		public ResponseEntity<HttpStatus> deleteChild(@PathVariable Long id){
			Child child = childService.deleteChild(id.intValue());
			AuditoryScreening auditoryScreening = auditoryScreeningService.deleteAuditoryScreening(id.intValue());
			BasicScreening basicScreening = basicScreeningService.deleteBasicScreening(id.intValue());
			BmiScreening bmiScreening = bmiScreeningService.deleteBmiScreening(id.intValue());
			ChildAddress childAddress = childAddressService.deleteChildAddress(id.intValue());
			DentalCheckUp dentalCheckUp = dentalCheckUpService.deleteDentalCheckUp(id.intValue());
			Family family = familyService.deleteFamily(id.intValue());
			Psychological psychological = psychologicalService.deletePsychological(id.intValue());
			Vision vision = visionService.deleteVision(id.intValue());
			VitalScreening vitalScreening = vitalScreeningService.deleteVitalScreening(id.intValue());
			return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		}

}
