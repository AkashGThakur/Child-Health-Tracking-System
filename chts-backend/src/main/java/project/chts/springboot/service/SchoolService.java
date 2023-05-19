package project.chts.springboot.service;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import project.chts.springboot.exception.SchoolNotFoundException;
import project.chts.springboot.model.School;
import project.chts.springboot.repository.SchoolRepository;

@Service


public class SchoolService {

	@Autowired
	private SchoolRepository schoolRepository;

	public List<School> findAllSchool() {
		
		return schoolRepository.findAll();
	}

	public School saveSchool(School school) {
		
		return schoolRepository.save(school);
	}
	
	public School findById(Integer id) {
		School school = schoolRepository.findById(id)
				.orElseThrow(() -> new SchoolNotFoundException("School not exist with id :" + id));
		return school;
	}
	
	public School updateSchool(Integer id, School schoolDetails) {
		
		School school = schoolRepository.findById(id)
				.orElseThrow(() -> new SchoolNotFoundException("School not exist with id :" + id));
				
		school.setContactNo(schoolDetails.getContactNo());
		school.setSchoolName(schoolDetails.getSchoolName());
		school.setBlock(schoolDetails.getBlock()); 
		school.setSchoolEmail(schoolDetails.getSchoolEmail());
		School updatedSchool = schoolRepository.save(school);
				return updatedSchool;
	}
	
	public School deleteSchool(Integer id) {
		School school = schoolRepository.findById(id)
			.orElseThrow(() -> new SchoolNotFoundException("Family not exist with id :" + id));
		schoolRepository.delete(school);
		return school;
	}

}
