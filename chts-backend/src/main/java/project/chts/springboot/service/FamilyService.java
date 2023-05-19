
package project.chts.springboot.service;
	
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import project.chts.springboot.exception.FamilyNotFoundException;
import project.chts.springboot.model.Family;
import project.chts.springboot.repository.FamilyRepository;



@Service
public class FamilyService {
	
	@Autowired
	private FamilyRepository familyRepository;

	public List<Family> findAllFamily() {
		
		return familyRepository.findAll();
	}

	public Family saveFamily(Family family) {
		
		return familyRepository.save(family);
	}
	
	public Family findById(Integer id) {
		Family family = familyRepository.findById(id)
				.orElseThrow(() -> new FamilyNotFoundException("Child not exist with id :" + id));
		return family;
	}
	
	public Family updateFamily(Integer id, Family familyDetails) {
		
		Family family = familyRepository.findById(id)
				.orElseThrow(() -> new FamilyNotFoundException("Child not exist with id :" + id));
				
		family.setFatherName(familyDetails.getFatherName());
		family.setMotherName(familyDetails.getMotherName());
		family.setParentsMobileNo(familyDetails.getParentsMobileNo());
		family.setSiblings(familyDetails.getSiblings());
		family.setFatherOccupation(familyDetails.getFatherOccupation());
		family.setMotherOccupation(familyDetails.getMotherOccupation());
					
		Family updatedFamily = familyRepository.save(family);
				return updatedFamily;
	}
	
	public Family deleteFamily(Integer id) {
		Family family = familyRepository.findById(id)
			.orElseThrow(() -> new FamilyNotFoundException("Child not exist with id :" + id));
		familyRepository.delete(family);
		return family;
	}

}














