package project.chts.springboot.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import project.chts.springboot.exception.ChildAddressNotFoundException;
import project.chts.springboot.model.ChildAddress;
import project.chts.springboot.repository.ChildAddressRepository;

@Service
public class ChildAddressService {
	
	@Autowired
	private ChildAddressRepository childAddressRepository;

	public List<ChildAddress> findAllChildAddress() {
		
		return childAddressRepository.findAll();
	}

	public ChildAddress saveChildAddress(ChildAddress childAddress) {
		// TODO Auto-generated method stub
		return childAddressRepository.save(childAddress);
	}
	
	public ChildAddress findById(Integer id) {
		ChildAddress childAddress = childAddressRepository.findById(id)
				.orElseThrow(() -> new ChildAddressNotFoundException("Child not exist with id :" + id));
		return childAddress;
	}
	
	public ChildAddress updateChildAddress(Integer id, ChildAddress childAddressDetails) {
		
		ChildAddress childAddress = childAddressRepository.findById(id)
				.orElseThrow(() -> new ChildAddressNotFoundException("Child not exist with id :" + id));
				
		childAddress.setHouseNo(childAddressDetails.getHouseNo());
		childAddress.setStreet(childAddressDetails.getStreet());
		childAddress.setArea(childAddressDetails.getArea());
		childAddress.setPincode(childAddressDetails.getPincode());
	    ChildAddress updatedChildAddress = childAddressRepository.save(childAddress);
				return updatedChildAddress;
	}
	
	public ChildAddress deleteChildAddress(Integer id) {
		ChildAddress childAddress = childAddressRepository.findById(id)
			.orElseThrow(() -> new ChildAddressNotFoundException("Child not exist with id :" + id));
		childAddressRepository.delete(childAddress);
		return childAddress;
	}

}
