package project.chts.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import project.chts.springboot.exception.ChildAddressNotFoundException;
import project.chts.springboot.exception.ChildNotFoundException;
import project.chts.springboot.exception.FamilyNotFoundException;
import project.chts.springboot.model.*;
import project.chts.springboot.repository.ChildAddressRepository;
import project.chts.springboot.repository.ChildRepository;
import project.chts.springboot.repository.FamilyRepository;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class AddChildController {
	@Autowired
	public ChildController childController;
	@Autowired
	public SchoolController schoolController;
	@Autowired
	public FamilyController familyController;
	@Autowired
	public ChildAddressController childAddressController;
	@Autowired
	public AuditoryScreeningController auditoryScreeningController;
	@Autowired
	public BasicScreeningController basicScreeningController; 
	@Autowired
	public BmiScreeningController bmiScreeningController;
	@Autowired
	public DentalCheckUpController dentalCheckUpController;
	@Autowired
	public PsychologicalController psychologicalController;
	@Autowired
	public UserListController userListController;
	@Autowired
	public VisionController visionController;
	@Autowired
	public VitalScreeningController vitalScreeningController;
	@Autowired
	private ChildRepository childRepository;
	@Autowired
	private FamilyRepository familyRepository;
	@Autowired
	private ChildAddressRepository childAddressRepository;

	
	
	@PostMapping("/add")
	public String saveNewChildInfo(@RequestBody AddChild addChild) {
		try {
			
			School school = new School();
			school = schoolController.getSchoolById(addChild.getRegistrationNo());
			
			UserList userList = new UserList();
			userList = userListController.getUserListById(addChild.getUser_Id()); 
		
			Child newChild= new Child();
			newChild.setUserList(userList);
			newChild.setSchool(school);
			newChild.setAdhar_no(addChild.getAdhar_no());
			newChild.setAge(addChild.getAge());
			newChild.setBirthdate(addChild.getBirthdate());
			newChild.setGender(addChild.getGender());
			newChild.setFirstName(addChild.getFirstName());
			newChild.setLastName(addChild.getLastName());
			newChild.setInsurance_no(addChild.getInsurance_no());
			newChild=childController.createChild(newChild);
		
			Family family= new Family();
			family.setChild_id(newChild.getChild_id());
			family.setFatherName(addChild.getFatherName());
			family.setMotherName(addChild.getMotherName());
			family.setFatherOccupation(addChild.getFatherOccupation());
			family.setMotherOccupation(addChild.getMotherOccupation());
			family.setSiblings(addChild.getSiblings());
			family.setParentsMobileNo(addChild.getParentsMobileNo());
			familyController.createFamilies(family);
		
			ChildAddress childAddress = new ChildAddress();
			childAddress.setChild_id(newChild.getChild_id());
			childAddress.setHouseNo(addChild.getHouseNo());
			childAddress.setStreet(addChild.getStreet());
			childAddress.setArea(addChild.getArea());
			childAddress.setPincode(addChild.getPincode());
			childAddressController.createChildAddress(childAddress);
			
			AuditoryScreening auditoryScreening = new AuditoryScreening();
			auditoryScreening.setChild_id(newChild.getChild_id());
			auditoryScreeningController.createAuditoryScreening(auditoryScreening);
		
			BasicScreening basicScreening = new BasicScreening();
			basicScreening.setChild_id(newChild.getChild_id());
			basicScreeningController.createBasicScreening(basicScreening);
			
			BmiScreening bmiScreening = new BmiScreening();
			bmiScreening.setChild_id(newChild.getChild_id());
			bmiScreening.setBirthdate(newChild.getBirthdate());
			bmiScreening.setAge(newChild.getAge());
			bmiScreeningController.createBmiScreening(bmiScreening);
			
			DentalCheckUp dentalCheckUp = new DentalCheckUp();
			dentalCheckUp.setChild_id(newChild.getChild_id());
			dentalCheckUpController.createDentalCheckUp(dentalCheckUp);
			
			
			Psychological psychological = new Psychological();
			psychological.setChild_id(newChild.getChild_id());
			psychologicalController.createPsychological(psychological);
			
			Vision vision = new Vision();
			vision.setChild_id(newChild.getChild_id());
			visionController.createVisions(vision);
			
			VitalScreening vitalScreening = new VitalScreening();
			vitalScreening.setChild_id(newChild.getChild_id());
			vitalScreeningController.createVitalScreening(vitalScreening);
			
			
		return "successfully saved";
		}catch (Exception e) {
			// TODO: handle exception
			return "error Occured";
		}
		
	}
	
}
