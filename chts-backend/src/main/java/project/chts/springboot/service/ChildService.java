package project.chts.springboot.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import project.chts.springboot.exception.ChildNotFoundException;
import project.chts.springboot.model.Child;
import project.chts.springboot.repository.ChildRepository;

@Service
public class ChildService {
	
	@Autowired
	private ChildRepository childRepository;

	public List<Child> findAllChild() {
		
		return childRepository.findAll();
	}

	public Child saveChild(Child child) {
		// TODO Auto-generated method stub
		return childRepository.save(child);
	}
	
	public Child findById(Integer id) {
		Child child = childRepository.findById(id)
				.orElseThrow(() -> new ChildNotFoundException("Child not exist with id :" + id));
		return child;
	}
	
	public Child updateChild(Integer id, Child childDetails) {
		
		Child child = childRepository.findById(id)
				.orElseThrow(() -> new ChildNotFoundException("Child not exist with id :" + id));
				
		child.setAdhar_no(childDetails.getAdhar_no());
		child.setAge(childDetails.getAge());
		child.setBirthdate(childDetails.getBirthdate());
		child.setFirstName(childDetails.getFirstName());
		child.setGender(childDetails.getGender());
		child.setLastName(childDetails.getLastName());
		child.setInsurance_no(childDetails.getInsurance_no());
	    Child updatedChild = childRepository.save(child);
				return updatedChild;
	}
	
	public Child deleteChild(Integer id) {
		Child child = childRepository.findById(id)
			.orElseThrow(() -> new ChildNotFoundException("Child not exist with id :" + id));
		childRepository.delete(child);
		return child;
	}
}
